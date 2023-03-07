const Profile = require('../models/user');
const profileController = {
    // get all profiles
    getAllProfile(req, res) {
        Profile.find({})
            .populate({
                path: 'Messages',
                select: '-__v'
            })
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbProfileData => res.json(dbProfileData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    // get one profile by id
    getSingleProfile({ params }, res) {
        Profile.findOne({ _id: params.id })
            .populate({ path: 'Messages', select: '-__v' })
            .select('-__v')
            .then(dbProfileData => {
                // If no user is found, send 404
                if (!dbProfileData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbProfileData);
            })
    },
    // create Profile
    createProfile({ body }, res) {
        Profile.create(body)
            .then(dbProfileData => res.json(dbProfileData))
            .catch(err => res.status(400).json(err));
    },

    // update Profile by id
    updateProfile({ params, body }, res) {
        Profile.findOneAndUpdate(
            { _id: params.id },
            { $set: body },
            { runValidators: true, new: true }
        )
            .then(dbProfileData => {
                if (!dbProfileData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbProfileData);
            }
            )
    },
    // delete Profile
    deleteProfile({ params }, res) {
        Profile.findOneAndDelete(
            { _id: params.id },
        )
            .then(dbProfileData => {
                if (!dbProfileData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    //return;
                }else{
                res.status(200).json({ message: 'User deleted successfully!' });
                }
            })
    },
    //add friend
    addFriend(req, res) {
        Profile.findOneAndUpdate(
            { _id: req.params.profileId },
            { $addToSet: { friends: req.params.friendId } },
            { runValidators: true, new: true }
        )
            .then(dbProfileData => {
                if (!dbProfileData) {
                    res.status(500).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbProfileData);
            })

    },

    //remove friend
    removeFriend(req, res) {
        Profile.findOneAndUpdate(
            { _id: req.params.profileId },
            { $pull: { friends: req.params.friendId } },
            { runValidators: true, new: true }
        )
            .then(dbProfileData => {
                if (!dbProfileData) {
                    res.status(500).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbProfileData);
            })
            .catch(err => res.json(err));
    },
}




module.exports = profileController;
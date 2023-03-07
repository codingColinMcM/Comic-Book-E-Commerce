const { Profile, Message } = require('../models');


module.exports = {
    // get all Messages
    this.getAllMessages(req, res) {
        Thought.find({})
            .then((dbMessageData) => res.json(dbMessageData))
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            },
            );
    }
};

    // get one Message by id
    getSingleMessage({ params }, res) {
        Message.findOne({ _id: params.id })
            .select('-__v')
            .then((dbMessageData) => {
                // If no thought is found, send 404
                if (!dbMessageData) {
                    res.status(404).json({ message: 'No thought found with this id!' });
                    return;
                }
                res.json(dbMessageData);

            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            })
    };


    // createMessage
    createMessage(req, res) {
        Message.create(req.body)
            .then((Message) => { res.json(Message) })
            .catch((err) => { console.log(err); res.status(500).json(err) })},

            
// delete Message
    deleteMessage(req, res) {
        Message.findOneAndDelete({ _id: req.params.id })
            .then((dbMessageData) => {
                if (!dbMessageData) {
                    res.status(404).json({ message: 'No Message found with this id!' }
                    );
                    return;
                }
                res.json(dbMessageData);
            }
            )
            .catch((err) => res.status(400).json(err));
            //console.log(err);
    };


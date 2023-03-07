const router = require('express').Router();
const {
  createProfile,
  getAllProfile,
  getSingleProfile,
  deleteProfile,
  updateProfile,
  addProfile,
  removeProfile,
} = require('../../controllers/profileController');

 // create a new Profile
router.route('/').get(getAllProfile).post(createProfile);

 // find by id and update or delete
router.route('/:id')
.get(getSingleProfile)
.delete(deleteProfile)
.put(updateProfile)

//add or delete friend
router.route("/:profileId/friends/:friendId")
.post(addFriend)
.delete(removeFriend)

module.exports = router;
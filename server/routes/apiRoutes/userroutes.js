onst router = require('express').Router();
const {
  createUser,
  getAllUser,
  getSingleUser,
  deleteUser,
  updateUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

 // create a new user
router.route('/').get(getAllUser).post(createUser);

 // find by id and update or delete
router.route('/:id')
.get(getSingleUser)
.delete(deleteUser)
.put(updateUser)

//add or delete friend
router.route("/:userId/friends/:friendId")
.post(addFriend)
.delete(removeFriend)

module.exports = router;
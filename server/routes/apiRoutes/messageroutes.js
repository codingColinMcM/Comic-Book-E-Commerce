const router = require('express').Router();
const {
  createMessage,
  getAllMessage,
  getSingleMessage,
  deleteMessage,
  
} = require('../../controllers/messageControllers');

// create a new message
router.route('/').get(getAllMessage).post(createMessage);

// delete message
router.route('/:id').get(getSingleMessage).delete(deleteMessage);




module.exports = router;
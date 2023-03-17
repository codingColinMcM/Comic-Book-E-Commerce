const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  messageId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  messageBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    default: new Date(),
  },
});

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
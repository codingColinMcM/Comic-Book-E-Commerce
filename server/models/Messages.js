const mongoose = require("mongoose");

const Messagess = new mongoose.Schema({
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

const reactionModel = mongoose.model("Messages", Messages);
module.exports = messagesModel;
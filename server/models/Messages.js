const Messages = new mongoose.Schema({
    messageText: {
      type: String,
      unique: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: String,
      default: new Date(),
    },
    name: {
      type: String,
      required: true,
    },
  });
  
  const messageModel = mongoose.model("messages", messages);
  module.exports = messageModel;
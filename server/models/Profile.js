const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const Comic = require('./Comic');
const Message = require('./Messages');
const Offer = require('./Offer');

const profileSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },

  savedComics: {
    type: [Schema.Types.ObjectId],
    ref: Comic,
    required: false,
  },

  messages: {
    type: [Schema.Types.ObjectID],
    ref: Message,
    required: false,
  },

  offer: {
    type: [Schema.Types.ObjectID],
    ref: Offer,
    required: false,
  },



});

// set up pre-save middleware to create password
profileSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
profileSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Profile = model('Profile', profileSchema);

module.exports = Profile;
""
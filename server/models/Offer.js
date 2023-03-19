const { Schema, model } = require('mongoose');
// const { Message, Profile } = require('./index');
const Message = require('./Messages');
const Profile = require('./Profile');

// const ObjectId = Schema.ObjectId;
const bcrypt = require('bcrypt');

const offerSchema = new Schema({
    textbody: {
        type: String,
        required: true,
    },
    userNameID: {
        type: Schema.Types.ObjectID,
        ref: "Profile",
        required: false,
    },
    messages: {
        type: [Schema.Types.ObjectID],
        ref: "Message",
        required: false,
    },

    price: {
        type: Number,
        required: false,
    },
})

 const Offer = model('Offer', offerSchema);

module.exports = Offer;

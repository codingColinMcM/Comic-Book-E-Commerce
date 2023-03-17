const { Schema, model } = require('mongoose');
const { Message, Profile } = require('./index');

const ObjectId = Schema.ObjectId;
const bcrypt = require('bcrypt');

const offerSchema = new Schema({
    textbody: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    // userNameID: {
    //     type: Schema.Types.ObjectId,
    //     ref: Profile,
    //     required: false,
    // },

    messages: {
        type: [Schema.Types.ObjectId],
        ref: Message,
        required: false,
    },

    offer: {
        type: String,
        required: false,
    },
    price: {
        type: Number,
        required: false,
    },
})

const Offer = model('Offer', offerSchema);

module.exports = Offer;

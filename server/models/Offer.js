const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const offerSchema = new Schema({
    textbody: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        },
    userName: {
        type: Schema.Types.ObjectId, 
        ref: 'Profile', 
    },
})

const Offer = model('Offer', offerSchema);

module.exports = Offer;

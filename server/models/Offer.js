const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const offerSchema = new Schema({
    type: String,
    required: true,
    unique: true,
    trim: true,
})

const offer = model('Offer', offerSchema);

module.exports = Offer;
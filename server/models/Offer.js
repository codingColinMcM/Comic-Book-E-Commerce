const { Schema, model } = require('mongoose');
ObjectId = Schema.ObjectId;
const bcrypt = require('bcrypt');

const offerSchema = new Schema({
    textbody: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        },
    userName: {
        type: { Types: ObjectId },
        ref: 'Profile', 
    },
    
    messages: { 
        type: [Schema.Types.ObjectId],
        ref: "Messages",
        required: false,
      },
    
    offer: {
        type: String,
        required: false,
    }
})

const Offer = model('Offer', offerSchema);

module.exports = Offer;

const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../../server/utils/dateFormat');

const comicSchema = new Schema({

    title: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 50
    },
    publisher: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 50
    },

    artist: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 50
    },

    writer: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 50
    },

    image: {
        type: String,
        required: false
    },

    price: {
        type: Number, 
        get: getPrice, 
        set: setPrice,
        required: true 
    },

    description: {
        type: String
    },

    userName: {
        type: Types.ObjectId, 
        ref: 'Profile', 
    },

    createdAt: {
        type: Date,
        default: Date.now(),
        get: (timestamp) => dateFormat(timestamp),
    }

}, 
{
    id: false,
    toJSON: {
        getters: true, 
        virtuals: true
    }
});

function getPrice(num){
    return (num/100).toFixed(2);
}

function setPrice(num){
    return num*100;
}

const Comic = model('Comic', comicSchema);

module.exports = Comic;
const { AuthenticationError } = require('apollo-server-express');
const { Profile, Offer, Comic } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },

     //get all offers
    offer: async () => {
      return Offer.find();
    },
    offer: async (parent, { offerId }) => {
      return Offer.findOne({ _id: offerId });
    },

    //get all messages
    message: async () => {
      return Message.find();
    },
    message: async (parent, { messageId }) => {
      return Message.findOne({ _id: messageId });
    },

  
    },

  Mutation: {
    addProfile: async (parent, { name, email, password }) => {
      const profile = await Profile.create({ name, email, password });
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(profile);
      return { token, profile };
    },

    addMessage: async (parent, { messageBody, username }) => {
      return Offer.findOneAndUpdate(
        { name: username }, 
        { $addToSet: { messages: message } }, 
        { new: true, runValidators: true}
        )
    },

    //delete message
    deleteMessage: async (parent, { userId, message }) => {
      return Offer.findOneAndUpdate(
        { _id: offerId },
        { $pull: { messages: message } },
        { new: true }
      );
    },

    //add comic
    addComic: async (parent, { userId, comic }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: { savedComics: comic },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    
    //add offer
    addOffer: async (parent, { userId, offer }) => {
      return Comic.findOneAndUpdate(
        { _id: comicId },
        {
          $addToSet: { savedOffers: offers },
        },
        {
          new: true,
          runValidators: true,
        }
        )
    },

    deleteComic: async (parent, { userId, comic }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        { $pull: { savedComics: comic } },
        { new: true }
      );
    },
  },
};

   
module.exports = resolvers;

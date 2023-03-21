const { AuthenticationError } = require('apollo-server-express');
const { Profile, Comic, Message, Offer } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    profiles: async () => {
      return await Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return await Profile.findOne({ _id: profileId });
    },

    //get all offers
    offer: async () => {
      return await Offer.find();
    },
    offers: async (parent, { offerId }) => {
      return await Offer.findOne({ _id: offerId });
    },

    //get all messages
    message: async () => {
      return await Message.find();
    },
    messages: async (parent, { messageId }) => {
      return await Message.findOne({ _id: messageId });
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
      return await Offer.findOneAndUpdate(
        { name: username },
        { $addToSet: { messages: message } },
        { new: true, runValidators: true }
      )
    },

    //delete message
    deleteMessage: async (parent, { userId, message }) => {
      return await Offer.findOneAndUpdate(
        { _id: offerId },
        { $pull: { messages: message } },
        { new: true }
      );
    },

    //add comic
    addComic: async (parent, { userId, comic }) => {
      return await User.findOneAndUpdate(
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
    addOffer: async (parent, { textbody, userNameId, messages, price }) => {
      const Offer = await Offer.create(

        { _id: userNameId },
        {
          $addToSet: { savedOffers: offer },
        },
        {
          new: true,
          runValidators: true,
        }
      )
    },

    deleteComic: async (parent, { title }) => {
      const deleted = await Comic.deleteOne(
        { title: title }
      );
      return true
    },
  }
}

module.exports = resolvers;

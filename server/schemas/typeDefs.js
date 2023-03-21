const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    savedComics: [Comic]
    messages: [Message]
    offer: [Offer]
  }

  type Message {
    messageId: ID
    messageBody: String!
    username: String!
    createdAt: String!
  }

 
  type Offer {
    _id: ID
    textbody: String!
    userNameID: Profile
    messages: [Message]
    offer: String
    price: Int
  }
  type Comic {
    _id: ID
    name: String
   title: String
    publisher: String
    writer: String
    artist: String
   image: String
   price: Float
   description: String
   userName: String
   createdAt: Int
  }

  type Auth {
    token: ID!
    profile: Profile
  }

 

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    offer: [Offer]!
    offers(offerId: ID!): Offer
    message: [Message]!
    messages(messageId: ID!): Message
  }

  input ComicBookInput {
    publisher: [String]
    description: String!
    image: String
    title: String!
    price: Int
    artist: String
    writer: String
  }

  input OfferInput {
    textbody: String!
    offer: String!
    price: Int
    userName: String!
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addComic(comic: ComicBookInput): Profile
    addOffer(textbody: String!, userNameID: ID, offer: String, price: Float): Offer!
    deleteComic(title: String!): Boolean 
    addMessage(messageBody: String!, username: String!): Message
    deleteMessage(messageId: ID!): Message
  }
`;

module.exports = typeDefs;

//getOffers(offer: OfferInput): Offer
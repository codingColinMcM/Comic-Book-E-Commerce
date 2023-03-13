const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    savedComics: [Comic]
  }

  type Offer {
    title: String!
    description: String!
    price: Int
    userName: String
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
    title: String!
    description: String!
    price: Int
    userName: String
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addComic(comic: ComicBookInput): Profile
    deleteComic(title: String!): Profile
    getOffers(offer: OfferInput): Offer
  }
`;

module.exports = typeDefs;

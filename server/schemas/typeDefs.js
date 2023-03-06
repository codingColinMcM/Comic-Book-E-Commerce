const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    savedComics: [String]
  }

  type Comic {
    title: String!
    image: String
    price: int
    description: String!
    image: String
    userName: String
    createdAt: Date
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
    authors: [String]
    description: String!
    image: String
    title: String!
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addComic(comic: ComicBookInput): User
    deleteComic(title: String!): User
  }
`;

module.exports = typeDefs;

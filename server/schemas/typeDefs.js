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
    publisher: String
    image: String
    price: int
  }

  type Comic {
    _id: ID
    name: String
   title: String
   image: String
   price: Int
   description: String
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
    publisher: [String]
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

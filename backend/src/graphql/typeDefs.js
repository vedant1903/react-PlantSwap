const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    helloWorld: String
  }

  type User {
    username: String
    email: String
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
  }
`;

module.exports = typeDefs;

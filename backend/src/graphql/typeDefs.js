const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    helloWorld: String
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): String
  }
`;

module.exports = typeDefs;

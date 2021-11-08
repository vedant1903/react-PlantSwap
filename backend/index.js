const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { ApolloServerPluginDrainHttpServer } = require("apollo-server-core");
const http = require("http");
require("dotenv").config();

const typeDefs = require("./src/graphql/typeDefs");
const resolvers = require("./src/graphql/resolvers");
const { buildServerContext } = require("./src/graphql/graphql");

const port = process.env.SERVER_PORT || 8000;
const app = express();

async function startApolloServer(typeDefs, resolvers) {
  const httpServer = http.createServer(app);
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    context: (req) => buildServerContext(req),
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  await new Promise((resolve) => httpServer.listen({ port }, resolve));
  console.log(
    `Server started at http://localhost:${port}${apolloServer.graphqlPath}`
  );
}

startApolloServer(typeDefs, resolvers);

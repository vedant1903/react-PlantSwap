const resolvers = {
  Query: {
    helloWorld: () => "Hello world",
  },
  Mutation: {
    addUser: (root, args, context) => {},
  },
};

module.exports = resolvers;

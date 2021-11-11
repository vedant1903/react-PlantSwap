const User = require("../model/userSchema");

const resolvers = {
  Query: {
    helloWorld: () => "Hello world",
  },
  Mutation: {
    addUser: (root, args, context) => {
      const user = new User({
        username: args.username,
        email: args.email,
        password: args.password,
      });

      return new Promise((resolve, reject) => {
        user.save((err) => {
          if (err) {
            console.log(err);
            reject("Error creating a new user");
          } else resolve(user);
        });
      });
    },
  },
};

module.exports = resolvers;

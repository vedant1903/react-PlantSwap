const mongoose = require("mongoose");

const options = {
  autoCreate: true,
};

mongoose.connect(process.env.DB_URI, options).then(
  () => {
    console.log("MongoDB connection established");
  },
  (err) => {
    console.log(`Error connecting to the database : \n ${err}`);
  }
);

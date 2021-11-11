const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: String,
  author: String,
  body: String,
  meta: {
    likes: Number,
  },
});

userSchema.set("timestamps", true);

module.exports = mongoose.model("Post", postSchema);

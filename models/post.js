const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  username: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
  
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
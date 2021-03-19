const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({

  date: { type: Date, default: Date.now },

  username: { type: String, required: true },
  
  title: { type: String, required: true },

  content: {type: String, required: true},

  category: {type: String, required:true},

  images: {type: String}
});

const Post = mongoose.model("Userpost", postSchema);

module.exports = Post;
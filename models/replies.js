const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({

  date: { type: Date, default: Date.now },

  username: { type: String, required: true},
  
  content: {type: String, required: true,minlength:1},

  images: {type: String},

  refId: {type:Number,required: true}
});

const Post = mongoose.model("Userpost", postSchema);

module.exports = Post;
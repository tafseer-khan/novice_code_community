const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({

  date: { type: Date, default: Date.now },

  username: { type: String, required: true},
  
  content: {type: String, required: true,minlength:1},

  images: {type: String},

  refId: {type:String,required: true}
});

const Reply = mongoose.model("Userreply", postSchema);

module.exports = Reply;
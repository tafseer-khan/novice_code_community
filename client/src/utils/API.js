import axios from "axios";

export default {
  // Gets all books
  // getUserPosts: function() {
  //   return axios.get("/api/posts/post");
  // },
  // // Gets the book with the given id
  getUserPost: function(id) {
    return axios.get("/api/posts/" + id);
  },
  // // Deletes the book with the given id
  deletePost: function(id) {
    return axios.delete("/api/posts/" + id);
  },
  // Saves a book to the database
  savePost: function() {
    return axios.post("/api/posts/");
  },

};
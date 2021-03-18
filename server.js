const express = require("express");
const session = require("express-session")
const compression = require('compression')
const mongoose = require("mongoose");
const routes = require("./routes");
const passport = require("passport");
const app = express();
const PORT = process.env.PORT || 3001;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}
else {app.use(express.static("client/public"))}
// Add routes, both API and view
app.use(routes);
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));



// <------ this might need to be exported in it's file, I'm not sure.
// Connect to the Mongo DB
// 

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ncc",
{useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false}
);


app.use(passport.initialize());
app.use(passport.session());
require("./routes/api/index.js");
require("./routes/api/userposts.js");
require("./routes/api/user.js");
// require("./models/user")

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
const mongoose = require("mongoose");
const db = require("../models")

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userposts" );

const userPostSeed = [

    {
        username: "Dan",
        message: "Hello database",
        date: new Date(Date.now())

    }
];

db.Userpost
  .remove({})
  .then(() => db.Userpost.collection.insertMany(userPostSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
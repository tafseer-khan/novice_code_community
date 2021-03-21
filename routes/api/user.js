const db = require("../../models");
const passport = require("../../config/passport.js");
const router = require("express").Router();
const User = require("../../models/user")

 // Login route, will authenticate through passport and create a current session for the user. 
  router.post("/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user.username);
  });

  // Posts new user 
  router.post('/createUser', (req, res) => {
    const {email,password,username} = req.body;
    User.findOne({email: email}, (err,mail) =>{
      if (err) console.log(err);
      else if (mail) res.json({error:`${email} is already registered on this account, please login.`});
      else if (!mail){
        User.findOne({username: username},(err,user) =>{
          if (err) console.log(err);
          else if (user) res.json({error: `${username} is already in use, please use another username.`});
          else {
            const newUser = new User({
              username: username,
              password: password,
              email: email
            });
            newUser.save((err, savedUser) =>{
              if(err) return res.jsson(err);
              res.json(savedUser)
            })
          }
        })
      }
    })
  })
  // Gets user data if logged in
  router.get('/user_data', function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      console.log('logged in')
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        username: req.user.username
      });
    }
  });
module.exports = router;
// }

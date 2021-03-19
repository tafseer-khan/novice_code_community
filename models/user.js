const mongoose = require("mongoose");
var bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
    // Giving the User model a first name of type STRING
      username: {
        type: String,
        // allowNull: false,
        // validate: {
        //   len: [1]
        // }
      },
      // Giving the User model a last name of type STRING
      // Giving the User model a email of type STRING
      email:   {
        type: String,
        // allowNull: false,
        // validate: {
        //   len: [1]
        // }
      },
      // Giving the User model a password of type STRING
      password: {
        type: String,
        // allowNull: false,
        // validate: {
        //   len: [5, 20]
        // }
        // required: true
      },
    
})
userSchema.methods = {
  validPassword: function(password){
      // console.log(bcrypt.compareSync(password,this.password))
      return bcrypt.compareSync(password,this.password)
  },
  hashPassword: function(password){
      return bcrypt.hashSync(password, 10)
  }
};

userSchema.pre('save', function (next){
  if (!this.password){
      console.log('No password')
  }else{
      console.log('Password Saved')
      this.password = this.hashPassword(this.password);
      next();
  }
})

const User = mongoose.model("User", userSchema);

module.exports = User;
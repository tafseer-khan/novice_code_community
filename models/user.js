const mongoose = require("mongoose");
var bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
    // Giving the User model a first name of type STRING
      username: {type: String,required: true, minlength:1,maxlength:2},

      email:   {type: String,required:true},

      password: {type: String,required:true},
    
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

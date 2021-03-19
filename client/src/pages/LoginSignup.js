import React from "react";
import LoginForm from "../components/loginform.js";
import SignupForm from "../components/signupform.js";




function LoginSignup(){

    return(

        <div>
            
            <h3>Login Here</h3>
            <LoginForm />
            <br />
            <h3>Sign Up Here</h3>
            <SignupForm />

            
            
        </div>
    )

} export default LoginSignup
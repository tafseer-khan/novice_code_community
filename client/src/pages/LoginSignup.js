import React from "react";
import NavbarConstant from "./NavbarConstant";
import Login from "./login.js";
import Signup from "./signup.js";




function LoginSignup(){

    return(

        <div>
            <NavbarConstant />
            <h1>The page is working</h1>
            <Login />
            <br />
            <Signup />

            
            
        </div>
    )

} export default LoginSignup
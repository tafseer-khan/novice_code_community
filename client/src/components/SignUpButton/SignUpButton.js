import React from "react";
import "./style.css";

function SignUpButton() {

    return (

        <div className="button" >
            <Link to="/" className={window.location.pathname === "/" ? "button" : "button"}>Signup/Login</Link>
        </div>


    )



} export default SignUpButton


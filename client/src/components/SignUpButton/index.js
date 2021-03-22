import React from "react";
import { Link } from "react-router-dom"
import "./style.css";

function SignUpButton() {

    return (

        <div className="button" >
            <Link to="/" className={window.location.pathname === "/" ? "button" : "button"}>Sign Up or Login to Chat</Link>
        </div>


    )



} export default SignUpButton


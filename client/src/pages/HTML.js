import React from "react";
import NavbarConstant from "./NavbarConstant";
import Posts from "../pages/Posts"

function HTML(){

    return(

        <div>
            
            <NavbarConstant />
            
            <div style={{float: "left" , width: "50%"}}>

                <h2>HTML Resources</h2>
                <br></br>
                <h5>What is HTML?</h5>
                    <p>HTML — Hypertext Markup Language — is the language used for creating web pages and other web-based documents. It consists mainly of matching pairs of angle-bracketed tags, enclosing sections of human-meaningful text.

                <br></br>
                <br></br>
                <h5>Websites</h5>
                <p> 
                    <a href="https://www.w3schools.com/html/">HTML Tutorial</a>
                </p>
                <p>
                    <a href="https://www.codecademy.com/learn/learn-html">Coding Academy</a>
                </p>
</p>


            </div >

            <div style={{float: "right" , width: "50%" , marginTop: "2%"}}>
            <Posts />

            </div>
            
            
            
        </div>
    )

} export default HTML
import React from "react";
import NavbarConstant from "./NavbarConstant";
import Posts from "./Posts"



function Javascript(){

    return(

        <div>

            <NavbarConstant />

            <div style={{ float: "left", width: "35%" }}>

            <h2>JavaScript Resources</h2>
        <br></br>
        <h5>What is JavaScript?</h5>
            <p>
                JavaScript is a programming language used primarily by Web browsers to create a dynamic and interactive experience for the user. Most of the functions and applications that make the Internet indispensable to modern life are coded in some form of JavaScript.  
            </p>

                <br></br>
        
        <h5>What is JavaScript used for?</h5>
            <p>
                JavaScript is mainly used for web-based applications and web browsers. But JavaScript is also used beyond the Web in software, servers and embedded hardware controls. 
                
                Here are some basic things JavaScript is used for:
            </p>

            <ul>
                <li>Adding interactive behaviour to web pages</li>
                <li>Creating web and mobile apps</li>
                <li>Building web servers and developing server applications</li>
                <li>Create Browser Games</li>
            </ul>

            <h5>Websites</h5>
                <p>
                    <a href="https://hsablonniere.github.io/markleft/prezas/javascript-101.html#1.0">JavaScript 101</a>
                </p>

                <p>
                    <a href="https://skillcrush.com/blog/javascript/">What is JavaScript?</a>
        </p>
        <p></p>
    </div >

            <div style={{ float: "right", width: "50%", marginTop: "2%" }}>
                <Posts />

            </div>



        </div>
    )

} export default Javascript
import React from "react";
import NavbarConstant from "./NavbarConstant";
import Posts from "./Posts"



function CSS() {

    return (

        <div>

            <NavbarConstant />

            <div style={{ float: "left", width: "50%" }}>

                <h1>The page is working</h1>

            </div >

            <div style={{ float: "right", width: "50%", marginTop: "2%" }}>
                <Posts />

            </div>



        </div>
    )

} export default CSS
import React from "react";
import LoginSignup from "./LoginSignup";
import NavbarConstant from "./NavbarConstant";
import Posts from "./Posts"
import ResourcesHolder from "../components/ResourcesHolder"
import { Row } from "../components/Grid";






function Home() {

    return (

        <div>

            <NavbarConstant />



            <Row >
                <div style={{ width: "30%", float: "left" }} >

                    <ResourcesHolder />

                </div>

                <div style={{ margin: "auto", width: "40%" }}>
                    <Posts />

                </div>

                <div style={{ width: "20%", float: "right" }}>



                    <LoginSignup />

                </div>



            </Row>



        </div>
    )

} export default Home
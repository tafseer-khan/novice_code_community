import React from "react";
import LoginSignup from "./LoginSignup";
import NavbarConstant from "./NavbarConstant";
// import Posts from "./Posts";
import ResourcesHolder from "../components/ResourcesHolder";
import { Row } from "../components/Grid";
import { loggedIn } from "../Atoms";
import { useAtom } from "jotai";
import API from '../utils/API';
import ReplyPosting from "./ReplyPosting"

function Home() {
  const [areWeLoggedIn, changeLoggedIn] = useAtom(loggedIn)
  function googleLogin(ev) {
      ev.preventDefault();
      window.open("http://localhost:3000/api/user/auth/google", "_self");
  
  }

  return (
    <div>
      <NavbarConstant />
      

      {areWeLoggedIn === true ? (
        <div>
          <Row>
            <div style={{ width: "45%", float: "left" }}>
              <ResourcesHolder />
            </div>

            <div style={{  width: "40%" }}>
            <h1>Welcome to the Novice Coding Connection!</h1>
            <br></br>
            <h2>Thanks for signing in!</h2>
            <h2>Please enjoy our site and what our community has to offer.</h2>
            <br></br>
            <h2>This is a place full of simple answers for people who are just getting started in the coding world.</h2>
            </div>
          </Row>
        </div>

      ) : (
      <div>
        <Row>
          <div style={{ width: "30%", float: "left" }}>
            <ResourcesHolder />
          </div>

          <div style={{  width: "40%" }}>
            <h1>Welcome to the Novice Coding Connection!</h1>
            <h2>This is a place full of simple answers for people who are just getting started in the coding world.</h2>
          </div>

          <div style={{ width: "20%", float: "right" }}>
            <LoginSignup />
          </div>
        </Row>
      </div>

      )}

    
    </div>
  );
}
export default Home;

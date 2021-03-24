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

            <div style={{ margin: "auto", width: "50%", float: "right"}}>
              {/* <Posts /> */}
            </div>
          </Row>
        </div>

      ) : (
      <div>
        <Row>
          <div style={{ width: "30%", float: "left" }}>
            <ResourcesHolder />
          </div>

          <div style={{ margin: "auto", width: "40%" }}>
            {/* <Posts /> */}
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

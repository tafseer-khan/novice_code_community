import React from "react";
import { Link } from "react-router-dom";
import { loggedIn } from "../Atoms";
import {useAtom} from "jotai";
import LogoutBtn from "../components/logoutbtn";


function NavbarConstant() {
    const [areWeLoggedIn, changeLoggedIn] = useAtom(loggedIn)

    return (

        <div>
            {areWeLoggedIn === false ? (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/"id={window.location.pathname === "/" ? "active" : "inactive"}> Home </Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/HTML" id={window.location.pathname === "/HTML" ? "active" : "inactive"} className={window.location.pathname === "/HTML" ? "nav-link active" : "nav-link"}>HTML</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/CSS" id={window.location.pathname === "/CSS" ? "active" : "inactive"} className={window.location.pathname === "/CSS" ? "nav-link active" : "nav-link"}>CSS</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/Javascript" id={window.location.pathname === "/Javascript" ? "active" : "inactive"} className={window.location.pathname === "/Javascript" ? "nav-link active" : "nav-link"}>Javascript</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            ):(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/"id={window.location.pathname === "/" ? "active" : "inactive"}> Home </Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/HTML" id={window.location.pathname === "/HTML" ? "active" : "inactive"} className={window.location.pathname === "/HTML" ? "nav-link active" : "nav-link"}>HTML</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/CSS" id={window.location.pathname === "/CSS" ? "active" : "inactive"} className={window.location.pathname === "/CSS" ? "nav-link active" : "nav-link"}>CSS</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/Javascript" id={window.location.pathname === "/Javascript" ? "active" : "inactive"} className={window.location.pathname === "/Javascript" ? "nav-link active" : "nav-link"}>Javascript</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <LogoutBtn />
                        </li>
                    </ul>
                </div>
            </nav>
            )}    
        </div>



    )

} export default NavbarConstant;
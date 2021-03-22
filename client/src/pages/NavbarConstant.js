import React from "react";
import { Link } from "react-router-dom"
import LogoutBtn from "../components/LogoutBtn";

function NavbarConstant() {

    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/"> Home </Link>
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/HTML" className={window.location.pathname === "/HTML" ? "nav-link active" : "nav-link"}>HTML</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/CSS" className={window.location.pathname === "/CSS" ? "nav-link active" : "nav-link"}>CSS</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/Javascript" className={window.location.pathname === "/Javascript" ? "nav-link active" : "nav-link"}>Javascript</Link>
                        </li>

                        



                    </ul>



                </div>
                
                

            </nav>


        </div>



    )

} export default NavbarConstant;
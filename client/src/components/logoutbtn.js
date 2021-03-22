import React from "react";
import { useAtom } from "jotai";
import { loggedIn } from "../Atoms";

function LogoutBtn() {

    const [areWeLoggedIn, changeLoggedIn] = useAtom(loggedIn)

    console.log(areWeLoggedIn)

    const newLoggedInStatus = (e) => {
        e.preventDefault()
        changeLoggedIn(false)

    }


    return (
        <div className="button holder" style={{margin: "8px"}}>
            <button style={{float: "right", height: "100%"}} onClick={newLoggedInStatus} >Logout</button>
        </div>
    )
} export default LogoutBtn

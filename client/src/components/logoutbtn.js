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
        <div>
            <button onClick={newLoggedInStatus} >Logout</button>
        </div>
    )
} export default LogoutBtn

import React from "react";
import { loggedIn } from "../Atoms";
import {useAtom} from "jotai";
import LogoutBtn from "./logoutbtn";


// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  headerStyle: {
    background: "cadetblue",
    display: "flex"
  },
  headingStyle: {
    textAlign: "center",
    fontSize: 75
    
  }
};

// We use JSX curly braces to evaluate the style object

function Header() {
  const [areWeLoggedIn, changeLoggedIn] = useAtom(loggedIn)


  return (
    <div //if we are not logged in are we logged in areWeLoggedIn will equal false and display the first option,
    // if we are logged in areWeLoggedIn will equal true- so the second option containing the logout button will be displayed
    >
      {areWeLoggedIn === false ? (
      <header style={styles.headerStyle} className="header">
        <h1 style={styles.headingStyle}>Novice Coding Connection</h1>
      
      </header>
    ):(
      <header style={styles.headerStyle} className="header">
        <h1 style={styles.headingStyle}>Novice Coding Connection</h1>
        <LogoutBtn />
      </header>


    )}

    </div>
    
    
  );
}

export default Header;

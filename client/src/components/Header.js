import React from "react";
import { loggedIn } from "../Atoms";
import {useAtom} from "jotai";



// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  headerStyle: {
    background: "cadetblue"
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
    <div className="theheaderholder">
      {areWeLoggedIn === false ? (
      <header style={styles.headerStyle} className="header">
        <h1 style={styles.headingStyle}>Novice Coding Connection</h1>
      
      </header>
    ):(
      <header style={styles.headerStyle} className="header">
        <h1 style={styles.headingStyle}>Novice Coding Connection</h1>

      </header>


    )}

    </div>
    
    
  );
}

export default Header;

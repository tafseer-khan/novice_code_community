import React from "react";
import { loggedIn } from "../Atoms";
import { useAtom } from "jotai";



// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

// We use JSX curly braces to evaluate the style object

function Header() {
  const [areWeLoggedIn, changeLoggedIn] = useAtom(loggedIn)


  return (
    <div className="theheaderholder">
      {areWeLoggedIn === false ? (
        <header className="header">
          <h1 className="headingStyle">Novice Coding Connection</h1>

        </header>
      ) : (
          <header className="header">
            <h1 className="headingStyle">Novice Coding Connection</h1>

          </header>


        )}

    </div>


  );
}

export default Header;

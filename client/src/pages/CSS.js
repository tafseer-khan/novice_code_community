import React from "react";
import NavbarConstant from "./NavbarConstant";
import Posts from "./Posts";

function CSS() {
  return (
    <div>
      <NavbarConstant />

      <div style={{ float: "left", width: "35%" }}>

          
        <h2>CSS Resources</h2>
        <br></br>
        <h5>What is CSS?</h5>
        <p>
          CSS stands for cascading style sheets. It's a stylesheet language that
          describes the appearance or presentation of a website. Essentially,
          CSS tells web browsers how each element in an HTML document should be
          displayed. Along with JavaScript and HTML, CSS is a crucial component
          to every web page on the Internet.
        </p>
        <br></br>
        <h5>Why use CSS?</h5>
        <p>
          CSS is used to define styles for your web pages, including the design,
          layout and variations in display for different devices and screen
          sizes.
        </p>

        <br></br>

        <h5>Websites</h5>
        <p>
          <a href="https://www.canva.com/learn/100-color-combinations/">
            Canva - Color Combinations
          </a>
        </p>
        <p>
          <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">
            CSS Tricks
          </a>
        </p>
        <p>
          <a href="https://unsplash.com/">Unsplash - Free Images & Pictures</a>
        </p>
        <p>
          <a href="https://undraw.co/">UnDraw - Open Source Illustrations</a>
        </p>
      </div>

      <div style={{ float: "right", width: "50%", marginTop: "2%" }}>
        <Posts />
      </div>
    </div>
  );
}

export default CSS;

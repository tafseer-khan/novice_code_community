import React from "react";
import Login from "./components/login.js";
import Signup from "./components/signup.js";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <div>
            <Login />
            <Signup />
            {/* <Header />
            <Card />
            <Section /> */}
        </div>
    );
}

export default App;
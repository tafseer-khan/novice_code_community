import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home"
import CSS from "./pages/CSS"
import HTML from "./pages/HTML";
import Javascript from "./pages/Javascript"
import Header from "./components/Header";
import "./style.css";
import {useAtom} from "jotai";
import {loggedIn} from "./Atoms";



// import NavbarConstant from './pages/NavbarConstant';


function App() {
    return (
        <div>
            <Router>
                <div>
                    <Header />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/CSS" component={CSS} />
                    <Route exact path="/HTML" component={HTML} />
                    <Route exact path="/Javascript" component={Javascript} />
                </div>

            </Router>
        </div>
    );
}

export default App;
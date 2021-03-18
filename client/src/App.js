import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginSignup from "./pages/LoginSignup"
import CSS from "./pages/CSS";
import HTML from "./pages/HTML";
import Javascript from "./pages/Javascript";
// import NavbarConstant from './pages/NavbarConstant';


function App() {
    return (
        <div>
            <Router>
                <div>
                    <Route exact path="/" component={LoginSignup} />
                    <Route exact path="/CSS" component={CSS} />
                    <Route exact path="/HTML" component={HTML} />
                    <Route exact path="/Javascript" component={Javascript} />
                </div>

            </Router>
            {/* <Header />
            <Card />
            <Section /> */}
        </div>
    );
}

export default App;
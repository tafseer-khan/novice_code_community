import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from "jotai"

ReactDOM.render(
    
    <Provider>

        <App />

        

    </Provider>
    

, document.getElementById("root"));

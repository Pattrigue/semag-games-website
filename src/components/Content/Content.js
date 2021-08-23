import React from "react";
import {Route} from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About.js";
import UnderConstruction from "../UnderConstruction/UnderConstruction.js";

function Content() {
    return (
        <div className="Content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/vibrant-venture" component={UnderConstruction}/>
        </div>
    );
}

export default Content;
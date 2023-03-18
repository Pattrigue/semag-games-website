import React from "react";
import {Route} from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About.js";

function Content() {
    return (
        <div className="Content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
        </div>
    );
}

export default Content;
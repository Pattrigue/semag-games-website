import React from "react";
import {Route} from "react-router-dom";
import Home from "../Home/Home";

function Content() {
    return (
        <div className="Content">
            <Route exact path="/" component={Home}/>
        </div>
    );
}

export default Content;
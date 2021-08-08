import "./Content.scss"
import Header from "../Header/Header.js";
import Welcome from "../Welcome/Welcome.js";
import React from "react";

function Content() {
    return (
        <div className="Content">
            <Header/>
            <Welcome/>
        </div>
    );
}

export default Content;
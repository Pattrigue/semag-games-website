import "./Content.scss"
import Welcome from "../Home/Welcome/Welcome.js";
import VibrantVenture from "../Home/VibrantVenture/VibrantVenture.js";
import React from "react";

function Content() {
    return (
        <div className="Content">
            <Welcome/>
            <VibrantVenture/>
        </div>
    );
}

export default Content;
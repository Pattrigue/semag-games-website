import Welcome from "../Home/Welcome/Welcome.js";
import VibrantVenture from "../Home/VibrantVenture/VibrantVenture.js";
import Community from "../Home/Community/Community.js";
import React from "react";

function Content() {
    return (
        <div className="Content">
            <Welcome/>
            <VibrantVenture/>
            <Community/>
        </div>
    );
}

export default Content;
import Welcome from "../Home/Welcome/Welcome.js";
import VibrantVenture from "../Home/VibrantVenture/VibrantVenture.js";
import Community from "../Home/Community/Community.js";
import PageItem from "../PageItem/PageItem.js";
import React from "react";

function Content() {
    return (
        <div className="Content">
            <Welcome/>
            <PageItem
                className="VibrantVenture"
                align="left"
                height="450px"
                backgroundImage="/vibrant-venture-main.png"
            >
                <VibrantVenture/>
            </PageItem>
            <Community/>
        </div>
    );
}

export default Content;
import Welcome from "../Home/Welcome/Welcome.js";
import VibrantVenture from "../Home/VibrantVenture/VibrantVenture.js";
import Community from "../Home/Community/Community.js";
import PageItem from "../PageItem/PageItem.js";
import React from "react";

function Content() {
    return (
        <div className="Content">
            <Welcome/>
            <VibrantVenture/>
            <Community/>
            <PageItem
                align="right"
                height="500px"
                backgroundImage="/vibrant-venture-main.png"
                backgroundPosition="0%"
            >
                arstarst
            </PageItem>
        </div>
    );
}

export default Content;
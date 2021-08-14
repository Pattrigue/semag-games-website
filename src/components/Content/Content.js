import Welcome from "../Home/Welcome/Welcome.js";
import VibrantVenture from "../Home/VibrantVenture/VibrantVenture.js";
import Community from "../Home/Community/Community.js";
import PageItem from "../PageItem/PageItem.js";
import React from "react";

function Content() {
    return (
        <div className="Content">
            <PageItem
                className="Welcome"
                align="center"
                height="450px"
                backgroundImage="/vibrant-venture-banner.png"
                borderTop="1"
            >
                <Welcome/>
            </PageItem>
            <PageItem
                className="VibrantVenture"
                align="left"
                height="450px"
                backgroundImage="/vibrant-venture-main.png"
                borderTop="1"
                borderBottom="1"
            >
                <VibrantVenture/>
            </PageItem>
            <PageItem
                className="Community"
                align="right"
                height="450px"
                backgroundImage="/vibrant-venture-community.png"
                borderBottom="1"
            >
            <Community/>
            </PageItem>
        </div>
    );
}

export default Content;
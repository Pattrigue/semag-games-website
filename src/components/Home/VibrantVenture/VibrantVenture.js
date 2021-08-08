import React from "react";
import "./VibrantVenture.scss";
import "../Home.scss";

function VibrantVenture() {
    return (
        <div className="VibrantVenture"
             style={{
                 backgroundImage: `url(${process.env.PUBLIC_URL + '/vibrant-venture-logo.png'})`
             }}>
            <div className="bg-overlay"/>
            <div className="text-container">
                <div className="header-text">
                    Vibrant Venture
                </div>
                <div>
                    Vibrant Venture is a singleplayer 2D adventure platformer game <br/>
                    featuring a quirky cast of characters! <br/> <br/>
                    The game features four playable characters with multiple unique abilities <br/>
                    that can be combined for extremely versatile, fluid and fun movement! <br/>
                </div>
            </div>
        </div>
    );
}

export default VibrantVenture;
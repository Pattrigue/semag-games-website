import React from "react";
import {Link} from "react-router-dom";

import Gradient from "../../Gradient/Gradient";

function VibrantVenture() {
    return (
        <div className="VibrantVenture">
            <Gradient className="linear-left"/>
            <div className="relative">
                <div className="header-text vibrant-venture-header">
                    Vibrant Venture
                </div>
                <div>
                    Vibrant Venture is a singleplayer 2D adventure <br/>
                    platformer game featuring a quirky cast of characters! <br/> <br/>
                    The game features four playable characters with <br/>
                    multiple unique abilities that can be combined for <br/>
                    extremely versatile, fluid and fun movement!
                </div>
                <div className="button-group">
                    <Link to="/vibrant-venture">
                        <button className="learn-more-btn">Learn More</button>
                    </Link>
                    <span className="or">or</span>
                    <a
                        href="https://store.steampowered.com/app/1264520/Vibrant_Venture/"
                        target="_blank"
                        className="buy-now-link"
                        rel="noreferrer"
                    >
                            Buy Now
                    </a>
                </div>
            </div>
        </div>
    );
}

export default VibrantVenture;
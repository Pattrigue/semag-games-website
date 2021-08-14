import React from "react";
import {Link} from "react-router-dom";

import RadialGradient from "../../RadialGradient/RadialGradient";

function VibrantVenture() {
    return (
        <div className="VibrantVenture">
            <RadialGradient />
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
                    <button className="learn-more-btn">Learn More</button>
                    <span className="or">or</span>
                    <Link className="buy-now-link">Buy Now</Link>
                </div>
            </div>
        </div>
    );
}

export default VibrantVenture;
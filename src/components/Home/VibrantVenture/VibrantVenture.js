import React from "react";
import {Link} from "react-router-dom";

function VibrantVenture() {
    return (
        <div className="VibrantVenture main-container"
             style={{
                 backgroundImage: `url(${process.env.PUBLIC_URL + '/vibrant-venture-main.png'})`
             }}>
            <div className="bg-overlay"/>
            <div className="text-container vibrant-venture-container">
                <div className="header-text vibrant-venture-header">
                    Vibrant Venture
                </div>
                <div>
                    Vibrant Venture is a singleplayer 2D adventure <br/>
                    platformer game featuring a quirky cast of characters! <br/> <br/>
                    The game features four playable characters with <br/>
                    ultiple unique abilities that can be combined for <br/>
                    extremely versatile, fluid and fun movement!
                </div>
                <button className="learn-more-btn">Learn More</button>
                <span className="or">or</span>
                <Link className="buy-now-link">Buy Now</Link>
            </div>
        </div>
    );
}

export default VibrantVenture;
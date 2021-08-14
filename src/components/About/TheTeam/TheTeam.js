import React from "react";
import Gradient from "../../Gradient/Gradient";

function TheTeam() {
    return (
        <div className="text-container">
            <Gradient/>
            <div className="relative">
                <div className="header-text">
                    The Team
                </div>
                <div>
                    Semag Games is actually just a small group of friends "disguised" as a company! <br/><br/>
                    We all enjoy creating different aspects of video games in our spare time <br/>
                    and thus we decided to combine our abilities and form a wacky game called Vibrant Venture.<br/><br/>
                    We still want to make more games after finishing Vibrant Venture, <br/>
                    however this is not a full-time job for any of us. <br/><br/>
                    We have jobs and studies to attend, so if you want to support us, <br/>
                    please consider picking up our game on Steam, <br/>
                    dropping a review and sharing it with your friends - thanks! <br/>
                </div>
            </div>
        </div>
    );
}

export default TheTeam;
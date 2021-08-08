import React from "react";
import "../Home.scss";
import "./Community.scss";

function Community() {
    return (
        <div className="Community main-container"
             style={{
                 backgroundImage: `url(${process.env.PUBLIC_URL + '/vibrant-venture-banner.png'})`
             }}>
            <div className="bg-overlay"/>
            <div className="text-container community-container">
                <div className="header-text">
                    Community
                </div>
                <div>
                    We care a lot about our players. <br/>
                    Have any feedback, ideas or maybe you just want to talk to us?
                </div>
                <button>Join the Community</button>
                <div>
                    You can find devlogs and content related to Vibrant Venture and our projects on YouTube. <br/>
                    We also post important news on Twitter.
                </div>
                <button>Twitter</button>
                <button>YouTube</button>
            </div>
        </div>
    );
}

export default Community;
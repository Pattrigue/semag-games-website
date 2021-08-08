import React from "react";
import "./Welcome.scss";
import "../Home.scss";

function Welcome() {
    return (
        <div className="Welcome"
             style={{
                 backgroundImage: `url(${process.env.PUBLIC_URL + '/vibrant-venture-banner.png'})`
             }}>
            <div className="bg-overlay"/>
            <div className="container text-container">
                <div className="header-text welcome-text">
                    Welcome
                </div>
                <div>
                    Semag Games is a small indie game studio owned by Pattrigue. <br/>
                    We are currently working on the 2D platformer Vibrant Venture. <br/>
                    <div className="about-text">
                        See the about page for more info.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;
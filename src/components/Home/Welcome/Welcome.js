import React from "react";

import Gradient from "../../Gradient/Gradient";

function Welcome() {
    return (
        <div className="text-container">
            <Gradient />
            <div className="relative">
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
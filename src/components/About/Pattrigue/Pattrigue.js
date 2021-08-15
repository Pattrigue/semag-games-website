import React from "react";
import Gradient from "../../Gradient/Gradient";

function Pattrigue() {
    return (
        <div className="text-container">
            <Gradient className="linear-left"/>
                <div className="relative">
                <div className="staff-container">
                    <div className="staff-text">
                        Pattrigue is the owner of Semag Games and lead developer of our game Vibrant Venture. <br/> <br/>
                        His responsibilities are programming, designing, creating sound effects, planning... <br/>
                        basically everything that isn't drawing. <br/><br/>
                        He studies software engineering at university
                        and has been programming in his spare time since 2015. <br/>
                    </div>
                    <div className="staff-icon-container">
                        <img className="staff-icon" src={`${process.env.PUBLIC_URL}semag-logo.png`}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pattrigue;
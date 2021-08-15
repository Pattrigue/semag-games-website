import React from "react";
import PageItem from "../PageItem/PageItem.js";
import TheTeam from "./TheTeam/TheTeam.js";
import StaffMember from "./StaffMember/StaffMember.js";

function About() {
    return (
        <div className="About">
            <PageItem
                className="About"
                align="center"
                height="550px"
                backgroundImage="/town.png"
                borderTop="1"
            >
                <TheTeam/>
            </PageItem>
            <PageItem
                className="Pattrigue"
                align="center"
                height="550px"
                backgroundImage="/town.png"
                borderTop="1"
                borderBottom="1"
            >
                <StaffMember icon="semag-logo.png" align="left">
                    Pattrigue is the owner of Semag Games and lead developer of our game Vibrant Venture. <br/> <br/>
                    His responsibilities are programming, designing, creating sound effects, planning... <br/>
                    basically everything that isn't drawing. <br/><br/>
                    He studies software engineering at university
                    and has been programming in his spare time since 2015. <br/>
                </StaffMember>
            </PageItem>
            <PageItem
                className="Jurl"
                align="center"
                height="250px"
                backgroundImage="/town.png"
                borderTop="1"
                borderBottom="1"
            >
                <StaffMember icon="semag-logo.png" align="right">
                    Jurl is the artist at Semag Games.<br/><br/>
                    He does all the really cool pixel graphics for Vibrant Venture!<br/>
                    But not only that, he also creates sick HD promotional art!<br/><br/>
                    Jurl began working on digital art back in 2013
                    and is constantly improving in both pixel art, free-form art, 3D modelling
                    and all sorts of other visually pleasing things!
                </StaffMember>
            </PageItem>
        </div>
    );
}

export default About;
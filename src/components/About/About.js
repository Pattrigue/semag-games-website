import React from "react";
import PageItem from "../PageItem/PageItem.js";
import TheTeam from "./TheTeam/TheTeam.js";
import StaffMember from "./StaffMember/StaffMember.js";
import StaffMemberSmallList from "./StaffMemberSmallList/StaffMemberSmallList";

function About() {
    return (
        <div className="About">
            <PageItem
                className="About"
                align="center"
                height="550px"
                backgroundImage="2-Boss.png"
            >
                <TheTeam/>
            </PageItem>
            <PageItem
                className="Pattrigue"
                align="center"
                height="550px"
                backgroundImage="vv-island.png"
                borderTop="1"
                borderBottom="1"
            >
                <StaffMember icon="portrait-patrick.png" align="left">
                    <span className="staff-member-name-text">Pattrigue</span> is the owner of Semag Games and lead developer of our game Vibrant Venture. <br/> <br/>
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
                backgroundImage="2-2.png"
                borderTop="1"
                borderBottom="1"
            >
                <StaffMember icon="portrait-jurl.png" align="right">
                    <span className="staff-member-name-text">Jurl</span> is the artist at Semag Games.<br/><br/>
                    He does all the really cool pixel graphics for Vibrant Venture!<br/>
                    But not only that, he also creates sick HD promotional art!<br/><br/>
                    Jurl began working on digital art back in 2013
                    and is constantly improving in both pixel art, free-form art, 3D modelling
                    and all sorts of other visually pleasing things!
                </StaffMember>
            </PageItem>
            <PageItem
                className="Pattrigue"
                align="center"
                height="550px"
                backgroundImage="2-4.png"
                borderTop="1"
                borderBottom="1"
            >
                <StaffMember icon="portrait-christoph.png" align="left">
                    The music in Vibrant Venture is composed by <span className="staff-member-name-text"> Christoph Jakob</span>, <br/>
                    a freelance composer. <br/><br/>
                    Taking inspiration from several video game franchises like Mario and Kirby, <br/>
                    he is carefully crafting the quirky soundtrack.
                </StaffMember>
                <div className="testers-text relative">
                    Besides the previously listed members,
                    we have a group of friends who <br/> voluntarily test the game in order to minimize
                    the amount of bugs and issues present within. <br/><br/>
                    If not for their commitment to testing and finding bugs,
                    Vibrant Venture would be really, really buggy!
                </div>
            </PageItem>
        </div>
    );
}

export default About;
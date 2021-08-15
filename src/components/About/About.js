import React from "react";
import PageItem from "../PageItem/PageItem.js";
import TheTeam from "./TheTeam/TheTeam.js";
import Pattrigue from "./Pattrigue/Pattrigue.js";

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
                align="left"
                height="250px"
                backgroundImage="/town.png"
                borderTop="1"
                borderBottom="1"
            >
                <Pattrigue/>
            </PageItem>
        </div>
    );
}

export default About;
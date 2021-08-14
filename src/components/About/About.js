import React from "react";
import PageItem from "../PageItem/PageItem";
import TheTeam from "./TheTeam/TheTeam";

function About() {
    return (
        <div className="About">
            <PageItem
                className="About"
                align="center"
                height="550px"
                backgroundImage="/town.png"
                borderTop="1"
                borderBottom="1"
            >
                <TheTeam/>
            </PageItem>
        </div>
    );
}

export default About;
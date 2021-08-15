import React from "react";
import StaffMemberSmall from "../StaffMemberSmall/StaffMemberSmall.js";
import Gradient from "../../Gradient/Gradient";

function StaffMemberSmallList() {
    return (
        <div>
            <Gradient/>
            <div className="staff-small-list">
                <StaffMemberSmall icon="semag-logo.png">
                    <span className="staff-member-name-text">Erion</span> is the level designer for Vibrant Venture. <br/>
                    He outlines, sketches and designs large parts of the game <br/>
                    like level mechanics, new enemies, etc.
                </StaffMemberSmall>
                <StaffMemberSmall icon="semag-logo.png">
                    The music in Vibrant Venture is composed by <span className="staff-member-name-text"> Christoph Jakob</span>, <br/>
                    a freelance composer. <br/>
                    Taking inspiration from several video game franchises like Mario and Kirby, <br/>
                    he is carefully crafting the quirky soundtrack.
                </StaffMemberSmall>
            </div>
            <div className="testers-text relative">
                Besides the previously listed members,
                we have a group of friends who <br/> voluntarily test the game in order to minimize
                the amount of bugs and issues present within. <br/><br/>
                If not for their commitment to testing and finding bugs,
                Vibrant Venture would be really, really buggy!
            </div>
        </div>
    );
}

export default StaffMemberSmallList;
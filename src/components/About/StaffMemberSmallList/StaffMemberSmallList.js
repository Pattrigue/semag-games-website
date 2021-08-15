import React from "react";
import StaffMemberSmall from "../StaffMemberSmall/StaffMemberSmall.js";

function StaffMemberSmallList() {
    return (
        <div className="staff-small-list">
            <StaffMemberSmall>
                Jur Loogman!
            </StaffMemberSmall>
            <StaffMemberSmall>
                Jur Loogman!
            </StaffMemberSmall>
        </div>
    );
}

export default StaffMemberSmallList;
import React from "react";

function StaffMemberSmall({ children, icon }) {
    return (
        <div className="staff-member-small relative">
            <div className="content">
                <img className="staff-icon" src={`${process.env.PUBLIC_URL}semag-logo.png`}/>
            </div>
            <div className="content">
                {children}
            </div>
        </div>
    );
}

export default StaffMemberSmall;
import React from "react";

function StaffMemberSmall({ children, icon }) {
    return (
        <div>
            <div className="staff-member-small relative">
                <div>
                    <img className="staff-icon" src={`${process.env.PUBLIC_URL}${icon}`}/>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default StaffMemberSmall;
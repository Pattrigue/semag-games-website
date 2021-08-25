import React from "react";

function StaffMemberSmall({ children, icon }) {
    return (
        <div>
            <div className="staff-member-small relative">
                <div>
                    <img
                        src={`${process.env.PUBLIC_URL}${icon}`}
                        className="staff-icon"
                        alt=""
                    />
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default StaffMemberSmall;
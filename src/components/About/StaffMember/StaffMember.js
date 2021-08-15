import React from "react";
import Gradient from "../../Gradient/Gradient.js";

function StaffMember({ children, icon, align }) {
    return (
        <div className="text-container">
            <Gradient className={`linear-${align}`}/>
                <div className="relative">
                <div className="staff-container">
                    <div className={`staff-text ${align}`}>
                        {children}
                    </div>
                    <div className={`staff-icon-container ${align}`}>
                        <img className="staff-icon" src={`${process.env.PUBLIC_URL}${icon}`}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StaffMember;
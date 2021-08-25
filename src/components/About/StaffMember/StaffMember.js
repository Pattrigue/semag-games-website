import React from "react";
import Gradient from "../../Gradient/Gradient.js";

function StaffMember({ children, icon, align }) {
    return (
        <div>
            <Gradient className={`linear-${align}`}/>
            <div className="text-container">
                    <div className="relative">
                    <div className="staff-container">
                        <div className={`staff-text ${align}`}>
                            {children}
                        </div>
                        <div className={`staff-icon-container ${align}`}>
                            <img
                                src={`${process.env.PUBLIC_URL}${icon}`}
                                className="staff-icon"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StaffMember;
import React from "react";

function PageItem({ children, className, align, height, backgroundImage }) {
    return (
        <div className={`${className} main-container ${align}`}
             style={{
                 backgroundImage: `url(${process.env.PUBLIC_URL + backgroundImage})`,
                 minHeight: height
             }}>
            <div className="text-container">
                {children}
            </div>
        </div>
    );
}

export default PageItem;
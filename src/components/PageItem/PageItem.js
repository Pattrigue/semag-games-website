import React from "react";

function PageItem(
    {
        children, className, align, height, backgroundImage,
        borderTop = "0", borderBottom = "0"
    }) {
    return (
        <div className={`${className} main-container ${align}`}
             style={{
                 backgroundImage: `url(${process.env.PUBLIC_URL + backgroundImage})`,
                 minHeight: height,
                 borderTop: `${borderTop}px solid white`,
                 borderBottom: `${borderBottom}px solid white`
             }}>
            <div className="text-container">
                {children}
            </div>
        </div>
    );
}

export default PageItem;
import React from "react";
import BackgroundOverlay from "../BackgroundOverlay/BackgroundOverlay.js";

function PageItem(
    {
        children, className, align, height, backgroundImage,
        borderTop = "0", borderBottom = "0"
    }) {
    return (
        <div className={`${className} main-container relative`}
             style={{
                 backgroundImage: `url(${process.env.PUBLIC_URL + backgroundImage})`,
                 minHeight: height,
                 borderTop: `${borderTop}px solid white`,
                 borderBottom: `${borderBottom}px solid white`
             }}>
            <BackgroundOverlay/>
            <div className={`main-container-inner ${align}`}>
                <div className="text-container">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default PageItem;
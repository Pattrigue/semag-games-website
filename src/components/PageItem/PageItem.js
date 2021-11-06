import React from "react";
import BackgroundOverlay from "../BackgroundOverlay/BackgroundOverlay.js";
import { BackgroundImage } from "react-image-and-background-image-fade";

function PageItem(
    {
        children, className, align, height, backgroundImage,
        borderTop = "0", borderBottom = "0"
    }) {

    return (
        <div style={{
            minHeight: height,
            borderTop: `${borderTop}px solid white`,
            borderBottom: `${borderBottom}px solid white`
        }}>
            <BackgroundImage className={`${className} main-container relative`}
                src={process.env.PUBLIC_URL + backgroundImage}
                width="100%"
                transitionTime="1s"
                style={{
                    minHeight: height
                }}
            >
            <BackgroundOverlay/>
                <div className={`main-container-inner ${align}`}>
                    <div className="text-container">
                    {children}
                    </div>
                </div>
            </BackgroundImage>
        </div>
    );
}

export default PageItem;
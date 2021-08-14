import React from "react";

function PageItem({ children, align, height, backgroundImage, backgroundPosition }) {
    return (
        <div className={`main-container ${align}`}
             style={{
                 backgroundImage: `url(${process.env.PUBLIC_URL + backgroundImage})`,
                 backgroundPosition: backgroundPosition,
                 minHeight: height
             }}>
            <div className="text-container">
                {children}
            </div>
        </div>
    );
}

export default PageItem;
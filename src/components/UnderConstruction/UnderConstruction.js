import React from "react"
import PageItem from "../PageItem/PageItem";

function UnderConstruction() {
    return (
        <PageItem
            className="VibrantVenture"
            align="center"
            height="450px"
            backgroundImage="/azura-lofi.png"
            borderTop="1"
            borderBottom="1"
        >
            <div className="under-construction text-container">
                <div className="header-text">
                    This page is under construction.
                </div>
                <div>
                    Please check back later!
                </div>
                <img src={`${process.env.PUBLIC_URL}azura-flushed.png`} className="azura"/>
            </div>
        </PageItem>
    );
}

export default UnderConstruction;
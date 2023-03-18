import React from "react"

function Footer() {
    return (
        <div className="Footer">
            <div className="left">
                <div className="contact-text">Contact:
                <a href="mailto:pattrigue@semag-games.com"className="text-link" target="_blank" rel="noopener noreferrer">pattrigue@semag-games.com</a>
                </div>
            </div>
            <div className="center">
                <div className="developers-text">
                    Created by Pattrigue &amp; <a href="https://www.ricosoftworks.com/" className="text-link" target="_blank" rel="noopener noreferrer">Rico</a></div>
                </div>
            <div className="right">
                <div className="copyright-text">
                    © Semag Games 2021
                </div>
                <img
                    src={`${process.env.PUBLIC_URL}leafly-present.png`}
                    width="80"
                    height="80"
                    alt="a"
                />
            </div>
        </div>
    );
}

export default Footer;

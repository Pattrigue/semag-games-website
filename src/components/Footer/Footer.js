import React from "react"

function Footer() {
    return (
        <div className="Footer">
            <div>
                <img
                    src={`${process.env.PUBLIC_URL}leafly-present.png`}
                    width="80"
                    height="80"
                    alt="a"
                />
                <div className="copyright-text">© Semag Games 2021</div>
            </div>

            <div className="developers-text">
                Created by Pattrigue {`&`} Rico
            </div>
        </div>
    );
}

export default Footer
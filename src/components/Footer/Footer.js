import React from "react"

function Footer() {
    return (
        <div className="Footer">
            <div className="copyright-text">© Semag Games 2021</div>
            <img
                src={`${process.env.PUBLIC_URL}leafly-present.png`}
                width="80"
                height="80"
                alt="a"
            />
        </div>
    );
}

export default Footer
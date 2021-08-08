import React from "react"
import { NavLink } from "react-router-dom"
import './Header.scss'

function Header() {
    console.log(`/${process.env.PUBLIC}semag-logo.png`);
    return (
        <div className="Header">
            <div className="company-logo-container">
                <img src={`/${process.env.PUBLIC_URL}semag-logo.png`}
                     width="80"
                     height="80"
                     alt=""/>
                <div className="company-name">
                    SEMAG GAMES
                </div>
            </div>
            <div className="nav-bar">
                <NavLink
                    className="nav-link"
                    activeClassName="nav-link-active"
                    exact to="/">Home</NavLink>
                <NavLink
                    className="nav-link"
                    activeClassName="nav-link-active"
                    to="/about">About</NavLink>
                <NavLink
                    className="nav-link"
                    activeClassName="nav-link-active"
                    to="/about">Vibrant Venture</NavLink>
            </div>
        </div>
    )
}

export default Header
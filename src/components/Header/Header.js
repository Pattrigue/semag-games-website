import React from "react";
import { NavLink } from "react-router-dom"

function Header() {
    return (
		<div className="Header">
				<div className="company-logo-container">
						<img src={`/${process.env.PUBLIC_URL}semag-logo.png`}
								alt=""/>
						<div className="company-name">
								SEMAG GAMES
						</div>
				</div>
				<div className="nav-bar">
					<NavLink
						className="nav-link"
						activeClassName="nav-link-active"
						exact to="/">
						<div className="nav-link-container">
							Home
						</div>
					</NavLink>
					<NavLink
						className="nav-link"
						activeClassName="nav-link-active"
						to="/about">
						<div className="nav-link-container">
							About
						</div>
					</NavLink>
					<NavLink
						className="nav-link"
						activeClassName="nav-link-active"
						to="/vibrant-venture">
						<div className="nav-link-container">
							Vibrant Venture
						</div>
					</NavLink>
				</div>
		</div>
    )
}

export default Header
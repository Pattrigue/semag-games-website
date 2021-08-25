import React, {
	useState
} from "react";
import { NavLink } from "react-router-dom"

import NavToggle from "../MenuToggle/MenuToggle";

function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	function onNavLinkClicked() {
		setMenuOpen(false);
	}

	return (
		<div className="Header">
			{/** Nav Toggle. */}
			<NavToggle menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

			{/** Logo Container. */}
			<div className="company-logo-container">
				<img src={`/${process.env.PUBLIC_URL}semag-logo.png`}
					alt=""/>
				<div className="company-name">
					SEMAG GAMES
				</div>
			</div>

			{/** Nav Bar. */}
			<div className={`nav-bar ${menuOpen ? 'open' : ''}`}>
				<NavLink
					className="nav-link"
					activeClassName="nav-link-active"
					onClick={onNavLinkClicked}
					exact to="/">
					Home
				</NavLink>
				<NavLink
					className="nav-link"
					activeClassName="nav-link-active"
					onClick={onNavLinkClicked}
					to="/about">
					About
				</NavLink>
				<NavLink
					className="nav-link"
					activeClassName="nav-link-active"
					onClick={onNavLinkClicked}
					to="/vibrant-venture">
					Vibrant Venture
				</NavLink>
			</div>
		</div>
	)
}

export default Header
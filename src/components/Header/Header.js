import React, {
	useState,
	useEffect,
	useRef,
} from "react";
import { NavLink } from "react-router-dom"

import MenuToggle from "../MenuToggle/MenuToggle";

function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const navBar = useRef(null);

	function onNavLinkClicked() {
		setMenuOpen(false);
	}

	useEffect(() => {
		if (menuOpen) {
			navBar.current.classList.remove('open'); // Due to the states it's safe to first remove any duplicates.
			navBar.current.classList.add('open');
		} else {
			navBar.current.classList.remove('open');
		}
	}, [menuOpen])

	return (
		<div className="Header">
			{/** Background. */}
			<div className={`header-bg`} />

			{/** Nav Toggle. */}
			<MenuToggle menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

			{/** Logo Container. */}
			<div className="company-logo-container">
				<img src={`/${process.env.PUBLIC_URL}semag-logo.png`}
					alt=""/>
				<div className="company-name">
					SEMAG GAMES
				</div>
			</div>

			{/** Nav Bar. */}
			<div ref={navBar} className={`nav-bar`}>
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
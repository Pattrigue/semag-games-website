import React, {
	useState,
	useEffect,
	useRef, useLayoutEffect,
} from "react";
import { NavLink } from "react-router-dom"
import ExternalNavLink from "../ExternalNavLink";

import MenuToggle from "../MenuToggle/MenuToggle";

function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const navBar = useRef(null);
	const hamburger = useRef(null);
	const headerBg = useRef(null);

	function onNavLinkClicked() {
		// reset the scroll position to the top of the page.
		window.scrollTo(0, 0);
		console.log("onNavLinkClicked");
		setMenuOpen(false);
	}

	function onDocumentClicked(e) {
		if (e.target === navBar.current || e.target === headerBg.current) return;
		if (hamburger.current.contains(e.target)) return;

		setMenuOpen(false);
	}

	useEffect(() => {
		if (!navBar || !hamburger) return;

		if (menuOpen) {
			navBar.current.classList.remove('open'); // Due to the states it's safe to first remove any duplicates.
			navBar.current.classList.add('open');
		} else {
			navBar.current.classList.remove('open');
		}
	}, [menuOpen, navBar, hamburger]);

	useLayoutEffect(() => {
		document.addEventListener("mousedown", onDocumentClicked);
	});

	return (
		<div className="Header">
			{/** Background. */}
			<div className={`header-bg`} ref={headerBg} />

			{/** Nav Toggle. */}
			<MenuToggle
				menuOpen={menuOpen}
				setMenuOpen={setMenuOpen}
				hamburgerRef={hamburger}
			/>

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
				<ExternalNavLink
					className="nav-link"
					activeClassName="nav-link-active"
					to="https://store.steampowered.com/app/1264520/Vibrant_Venture/">
					Vibrant Venture
				</ExternalNavLink>
			</div>
		</div>
	)
}

export default Header
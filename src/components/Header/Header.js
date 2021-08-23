import React, {
	useState
} from "react";
import { NavLink } from "react-router-dom"

function Header() {
		const [menuOpen, setMenuOpen] = useState(false);

		function onMenuToggleClicked() { setMenuOpen(!menuOpen) }

    return (
		<div className="Header">
				{/** Nav Toggle. */}
				<div
						onClick={onMenuToggleClicked}
						className={`menu-toggle ${menuOpen ? 'open' : ''}`}
				>
						<div className={`bars-outer`}>
								<div className={`bars-inner`}>
										<div className="bar one" ></div>
										<div className="bar two" ></div>
										<div className="bar three" ></div>
								</div>
						</div>
				</div>
				
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
						exact to="/">
						Home
					</NavLink>
					<NavLink
						className="nav-link"
						activeClassName="nav-link-active"
						to="/about">
						About
					</NavLink>
					<NavLink
						className="nav-link"
						activeClassName="nav-link-active"
						to="/vibrant-venture">
						Vibrant Venture
					</NavLink>
				</div>
		</div>
    )
}

export default Header
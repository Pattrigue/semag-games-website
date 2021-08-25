import React from "react";

function NavToggle({ menuOpen, setMenuOpen }) {
	function onMenuToggleClicked() {
		setMenuOpen(!menuOpen)
	}

	return (
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
	)
}

export default NavToggle;
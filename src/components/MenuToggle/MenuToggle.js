import React, {
	useRef,
	useEffect,
} from "react";

function MenuToggle({ menuOpen, setMenuOpen }) {
	const hamburger = useRef(null);

	function onMenuToggleClicked() {
		setMenuOpen(!menuOpen)
	}

	useEffect(() => {
		if (menuOpen) {
			hamburger.current.classList.remove('open'); // Due to the states it's safe to first remove any duplicates.
			hamburger.current.classList.add('open');
		} else {
			hamburger.current.classList.remove('open');
		}
	}, [menuOpen])

	return (
		<div
			ref={hamburger}
			onClick={onMenuToggleClicked}
			className={`menu-toggle`}
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

export default MenuToggle;
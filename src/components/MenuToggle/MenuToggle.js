import React, {
	useEffect,
	forwardRef,
} from "react";

function MenuToggle({ menuOpen, setMenuOpen, hamburgerRef }) {
	function onMenuToggleClicked() {
		setMenuOpen(!menuOpen)
	}

	useEffect(() => {
		if (!hamburgerRef)
			return;

		if (menuOpen) {
			hamburgerRef.current.classList.remove('open'); // Due to the states it's safe to first remove any duplicates.
			hamburgerRef.current.classList.add('open');
		} else {
			hamburgerRef.current.classList.remove('open');
		}
	}, [menuOpen, hamburgerRef])

	return (
		<div
			ref={hamburgerRef}
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
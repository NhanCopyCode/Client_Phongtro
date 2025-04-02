import PropTypes from "prop-types";

function Overlay({ onClick }) {
	return (
		<div
			className="fixed inset-0 w-full h-full  bg-[rgba(0,0,0,0.5)] z-20 cursor-pointer"
			onClick={onClick}
		></div>
	);
}

Overlay.propTypes = {
	onClick: PropTypes.func,
};

export default Overlay;

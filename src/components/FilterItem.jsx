import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function FilterItem({ value, iconLeft, hoverEffect, children }) {
	const className = `flex items-center text-text ${hoverEffect}`;
	return (
		<NavLink to={value} className={className}>
			{iconLeft}
			<span className="text-[12px] ">{children}</span>
		</NavLink>
	);
}

FilterItem.propTypes = {
	children: PropTypes.string.isRequired,
	iconLeft: PropTypes.element,
	value: PropTypes.string,
	hoverEffect: PropTypes.string,
};

export default FilterItem;

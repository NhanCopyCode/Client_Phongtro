import PropTypes from "prop-types";

function SearchItem({ iconStart, iconEnd, textBold, children }) {
	const className = `${
		textBold ? "font-bold" : ""
	} text-sm  text-ellipsis w-full overflow-hidden whitespace-nowrap`;
	return (
		<div className="w-full cursor-pointer bg-white rounded-lg px-2 flex items-center justify-between text-black text-sm py-2">
			<div className="flex items-center space-x-2 w-full">
				{iconStart}
				<span className={className}>{children}</span>
			</div>
			{iconEnd}
		</div>
	);
}

SearchItem.propTypes = {
	children: PropTypes.string.isRequired,
	iconStart: PropTypes.element,
	iconEnd: PropTypes.element,
	textBold: PropTypes.bool,
};

export default SearchItem;

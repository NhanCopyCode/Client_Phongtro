import PropTypes from "prop-types";
import { MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";
import toLowerCaseNonAccentVietnamese from "../utils/convertStringToPath";

function FilterItem({
	code,
	iconLeft = <MdChevronRight />,
	hoverEffect = "hover:text-redColor",
	children,
}) {
	const className = `flex items-center text-text ${hoverEffect}`;
	return (
		<Link
			to={'/' + toLowerCaseNonAccentVietnamese(children)}
			className={className}
		>
			{iconLeft}
			<span className="text-[12px] ">{children}</span>
		</Link>
	);
}

FilterItem.propTypes = {
	children: PropTypes.string.isRequired,
	iconLeft: PropTypes.element,
	code: PropTypes.string,
	hoverEffect: PropTypes.string,
};

export default FilterItem;

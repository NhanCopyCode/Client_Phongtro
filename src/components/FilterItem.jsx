import PropTypes from "prop-types";
import { MdChevronRight } from "react-icons/md";
import toLowerCaseNonAccentVietnamese from "../utils/convertStringToPath";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function FilterItem({
	iconLeft = <MdChevronRight />,
	hoverEffect = "hover:text-redColor",
	code,
	type,
	children,
	onFilterPost,
}) {
	const [searchParams] = useSearchParams();
	const [active, setActive] = useState(false);
	useEffect(() => {
		const urlCode = searchParams.get(type);
		setActive(urlCode === code);
	}, [searchParams, type, code, active]);
	const className = `flex items-center text-text ${hoverEffect} cursor-pointer ${
		active && "!text-redColor"
	}`;
	return (
		<div
			to={"/" + toLowerCaseNonAccentVietnamese(children)}
			className={className}
			onClick={onFilterPost}
		>
			{iconLeft}
			<span className="text-[12px] ">{children}</span>
		</div>
	);
}

FilterItem.propTypes = {
	children: PropTypes.string.isRequired,
	iconLeft: PropTypes.element,
	code: PropTypes.string,
	type: PropTypes.string,
	hoverEffect: PropTypes.string,
	onFilterPost: PropTypes.func,
};

export default FilterItem;

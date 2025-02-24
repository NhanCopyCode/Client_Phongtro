import PropTypes from "prop-types";
import { memo } from "react";

function Button({
	children,
	textColor = "text-white",
	bgColor = "bg-gray-200",
	rounded = "rounded-xl",
	border = "border-none",
	fontSize = "text-[13px]",
	widthAndHeightIcon,
	sizeButton = "md",
	iconLeft,
	iconRight,
	hoverEffect = "darken",
	onClick,
}) {
	console.log("Render button");
	// const validHoverEffect = {
	// 	none: "",
	// 	darken: "hover:bg-gray-200",
	// 	lighten: "hover:[filter:brightness(110%)]",
	// };
	const validHoverEffect = {
		none: "hover:[filter:brightness(100%)]",
		darken: "hover:bg-gray-200",
		lighten: "hover:[filter:brightness(140%)]",
	};

	const validSizeButton = {
		sm: "py-1 px-2",
		md: "py-2 px-4",
		xl: "py-3 px-6",
	};

	const appliedSizeButton =
		validSizeButton[sizeButton] || validSizeButton["md"];

	const appliedHoverEffect =
		validHoverEffect[hoverEffect] || validHoverEffect["darken"];
	const className = `${appliedSizeButton} flex items-center justify-center
        transition-all duration-200 ease-linear cursor-pointer
        outline-none ${textColor} ${bgColor}  ${fontSize} ${rounded} ${border}
        ${appliedHoverEffect} 
    `;

	return (
		<button className={className} onClick={onClick}>
			{iconLeft && (
				<span
					className={`mr-1 ${widthAndHeightIcon} flex items-center justify-center`}
				>
					{iconLeft}
				</span>
			)}
			<span>{children}</span>
			{iconRight && (
				<span
					className={`ml-1 ${widthAndHeightIcon} flex items-center justify-center`}
				>
					{iconRight}
				</span>
			)}
		</button>
	);
}

Button.propTypes = {
	children: PropTypes.string.isRequired,
	textColor: PropTypes.string,
	bgColor: PropTypes.string,
	rounded: PropTypes.string,
	border: PropTypes.string,
	fontSize: PropTypes.string,
	iconLeft: PropTypes.element,
	iconRight: PropTypes.element,
	widthAndHeightIcon: PropTypes.string,
	sizeButton: PropTypes.string,
	hoverEffect: PropTypes.string,
	onClick: PropTypes.func,
};
export default Button;

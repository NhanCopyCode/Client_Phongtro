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
	onMouseEnter,
	onMouseLeave,
}) {
	const validHoverEffect = {
		none: "hover:[filter:brightness(100%)]",
		darken: "hover:bg-gray-200",
		lighten: "hover:[filter:brightness(140%)]",
	};

	const validSizeButton = {
		sm: "py-1 px-2",
		md: "py-2 px-4",
		lg: "py-3 px-6",
	};

	const appliedSizeButton =
		validSizeButton[sizeButton] || validSizeButton["md"];

	const appliedHoverEffect =
		validHoverEffect[hoverEffect] || validHoverEffect["none"];
	const className = `${appliedSizeButton} flex items-center justify-center
        transition-all duration-200 ease-linear cursor-pointer
        outline-none ${textColor} ${bgColor}  ${fontSize} ${rounded} ${border}
        ${appliedHoverEffect} 
    `;

	return (
		<button
			className={className}
			onClick={onClick}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			{iconLeft && (
				<span
					className={`${
						children ? "mr-1" : ""
					} ${widthAndHeightIcon} flex items-center justify-center`}
				>
					{iconLeft}
				</span>
			)}
			{children ? <span>{children}</span> : null}
			{iconRight && (
				<span
					className={`${
						children ? "ml-1" : ""
					} ${widthAndHeightIcon} flex items-center justify-center`}
				>
					{iconRight}
				</span>
			)}
		</button>
	);
}

Button.propTypes = {
	children: PropTypes.string,
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
	onMouseEnter: PropTypes.func,
	onMouseLeave: PropTypes.func,
};
export default memo(Button);

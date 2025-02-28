import PropTypes from "prop-types";

function Input({
	children,
	type = "text",
	inputSize,
	border,
	rounded,
	width,
	value,
	setValue,
}) {
	const validInputSize = {
		sm: "px-2 py-1",
		md: "px-4 py-2",
		lg: "px-6 py-3",
	};

	const appliedInputSize = validInputSize[inputSize] || validInputSize["md"];
	const className = `${appliedInputSize} outline-none ${border} ${rounded} ${width} text-black`;
	return (
		<input
			type={type}
			className={className}
			placeholder={children}
			value={value}
			onChange={(e) => setValue(e.target.value)}
		/>
	);
}

Input.propTypes = {
	children: PropTypes.string.isRequired,
	inputSize: PropTypes.string,
	type: PropTypes.string,
	border: PropTypes.string,
	rounded: PropTypes.string,
	width: PropTypes.string,
	value: PropTypes.string,
	setValue: PropTypes.func,
};

export default Input;

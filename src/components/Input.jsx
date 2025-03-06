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
	name,
	invalidField,
	setInvalidFields,
}) {
	const validInputSize = {
		sm: "px-2 py-1",
		md: "px-4 py-2",
		lg: "px-6 py-3",
	};

	const appliedInputSize = validInputSize[inputSize] || validInputSize["md"];
	const className = `${appliedInputSize} outline-none ${border} ${rounded} ${width} text-black`;

	const handleResetError = () => {
		if(invalidField && invalidField.length > 0) {
			setInvalidFields(invalidField.filter(field => field.name !== name))
		}
	};

	return (
		<>
			<input
				type={type}
				className={className}
				placeholder={children}
				value={value}
				name={name}
				onChange={(e) => setValue(e.target.value)}
				onFocus={handleResetError}
			/>
			{invalidField && invalidField.length > 0 && (
				<small className="text-[red] text-sm italic">
					{invalidField.find((field) => field.name === name)?.message}
				</small>
			)}
		</>
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
	name: PropTypes.string,
	invalidField: PropTypes.array,
	setValue: PropTypes.func,
	setInvalidFields: PropTypes.func,
};

export default Input;

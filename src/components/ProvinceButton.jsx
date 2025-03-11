import PropTypes from "prop-types";

function ProvinceButton({ name, image }) {
	return (
		<div className="overflow-hidden rounded-md bg-white cursor-pointer text-primary hover:text-orange-600 shadow-md">
			<img
				src={image}
				alt={name}
				className=" object-cover w-[190px] h-[110px] "
			/>
			<div className="font-medium p-2 text-center text-sm">
				{name}
			</div>
		</div>
	);
}

ProvinceButton.propTypes = {
	name: PropTypes.string.isRequired,
	image: PropTypes.string,
};
export default ProvinceButton;

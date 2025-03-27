import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import toLowerCaseNonAccentVietnamese from "../utils/convertStringToPath";
import formatTimeFromNow from "../utils/formatTimeFromNow";
function NewPostItem({ image, to, title, price, createdAt }) {
	return (
		<NavLink
			to={"/chi-tiet/" + toLowerCaseNonAccentVietnamese(title) + "/" + to}
			className={"flex items-center gap-2"}
		>
			<div className="w-[90px] h-[80px]">
				<img
					className="w-[90px] h-[80px] max-w-[90px] max-h-[80px] object-cover rounded-sm"
					src={image}
					alt="Image"
				/>
			</div>
			<div className="flex flex-col">
				<h3 className="text-[13px] uppercase line-clamp-2 text-primary">
					{title}
				</h3>
				<div className="flex items-center justify-between mt-2">
					<span className="text-success text-[12px] font-medium">
						{price}
					</span>
					<span className="text-subtitle text-[10px] ">
						{formatTimeFromNow(createdAt)}
					</span>
				</div>
			</div>
		</NavLink>
	);
}

NewPostItem.propTypes = {
	to: PropTypes.string.isRequired,
	image: PropTypes.string,
	title: PropTypes.string,
	price: PropTypes.string,
	createdAt: PropTypes.string,
};

export default NewPostItem;

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function VerticalNavigationItem({ to, icon, children }) {
	return (
		<Link
			to={to}
			className="flex items-center justify-between py-3 border-b border-b-[#f1f1f1]"
		>
			<div className="flex items-center gap-2 text-[16px]">
				<div className="text-xl inline-block">{icon}</div>
				<span>{children}</span>
			</div>
			<MdOutlineKeyboardArrowRight className="text-2xl text-redColor" />
		</Link>
	);
}

VerticalNavigationItem.propTypes = {
	to: PropTypes.string,
	icon: PropTypes.element,
	children: PropTypes.string,
};
export default VerticalNavigationItem;

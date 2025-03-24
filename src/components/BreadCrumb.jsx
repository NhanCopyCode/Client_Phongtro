import PropTypes from "prop-types";
import { TbMinusVertical } from "react-icons/tb";
import { Link } from "react-router-dom";

function BreadCrumb({ links }) {
	return (
		<div className="my-4 flex items-center">
			<Link to={"/hochiminh"} className="flex items-center">
				<span className="text-primary">Hồ Chí Minh</span>
				<TbMinusVertical className="text-xl font-light rotate-2" />
			</Link>
			<Link to={"/hochiminh"} className="flex items-center">
				<span className="text-primary">Hồ Chí Minh</span>
				<TbMinusVertical className="text-xl font-light rotate-2" />
			</Link>
			<Link to={"/hochiminh"} className="flex items-center">
				<span className="text-primary">Hồ Chí Minh</span>
				<TbMinusVertical className="text-xl font-light rotate-2" />
			</Link>
			{/* {
            links.map((link, index) => {
                retunr
            })
        } */}
		</div>
	);
}

BreadCrumb.propTypes = {
	links: PropTypes.array,
};

export default BreadCrumb;

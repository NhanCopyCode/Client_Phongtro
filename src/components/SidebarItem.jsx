import PropTypes from "prop-types";

import FilterItem from "./FilterItem";
import { useLocation, useNavigate } from "react-router-dom";

function SidebarItem({ title, arrData, type }) {
	const navigate = useNavigate();
	const location = useLocation();

	const handleFilterPost = (code) => {
		const searchParams = new URLSearchParams(location.search);

		searchParams.set(type, code);

		searchParams.delete("page");

		// dispatch(getPostLimit(objSearch));

		navigate({
			pathname: "/",
			search: searchParams.toString(),
		});
	};

	return (
		<div className="w-[100%]">
			<h3 className="font-medium text-sm text-text">{title}</h3>
			<div className="grid grid-cols-2 gap-2 mt-3">
				{arrData.length > 0 &&
					arrData.map((item, index) => (
						<FilterItem
							key={index}
							iconLeft={item.icon}
							type={type}
							code={item.code}
							onFilterPost={() => handleFilterPost(item.code)}
						>
							{item.value}
						</FilterItem>
					))}
			</div>
		</div>
	);
}

SidebarItem.propTypes = {
	type: PropTypes.string,
	title: PropTypes.string,
	arrData: PropTypes.array,
};
export default SidebarItem;

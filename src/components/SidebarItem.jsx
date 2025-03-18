import PropTypes from "prop-types";

import FilterItem from "./FilterItem";

function SidebarItem({ title, arrData }) {
	return (
		<div className="w-[100%]">
			<h3 className="font-medium text-sm text-text">{title}</h3>
			<div className="grid grid-cols-2 gap-2 mt-3">
				{arrData.length > 0 &&
					arrData.map((item, index) => (
						<FilterItem
							key={index}
							iconLeft={item.icon}
							code={item.code}
						>
							{item.value}
						</FilterItem>
					))}
			</div>
		</div>
	);
}

SidebarItem.propTypes = {
	title: PropTypes.string,
	arrData: PropTypes.array,
};
export default SidebarItem;

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import toLowerCaseNonAccentVietnamese from "../utils/convertStringToPath";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../store/actions/app";
function Navigation() {
	const [listCategory, setListCategory] = useState([]);
	const { categories } = useSelector((state) => state.app);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllCategories());
	}, [dispatch]);

	useEffect(() => {
		setListCategory(categories);
	}, [categories]);
	return (
		<div className="w-full shadow-md z-10 bg-white fixed top-[61px] right-0 left-0">
			<div className="w-5xl flex items-center my-0 mx-auto px-2 max-w-[100%]">
				<ul className="flex h-full items-center space-x-4 text-[13px] cursor-pointer flex-wrap">
					{listCategory.map((item) => (
						<li key={item.code} className="h-[40px]">
							<NavLink
								to={
									"/" +
									toLowerCaseNonAccentVietnamese(item.value)
								}
								className={({ isActive }) =>
									`flex items-center h-full px-2 border-b-2 ${
										isActive
											? "border-[red] text-[red]"
											: "border-transparent text-black"
									}`
								}
							>
								{item.value}
							</NavLink>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Navigation;

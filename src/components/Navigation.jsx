import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import toLowerCaseNonAccentVietnamese from "../utils/convertStringToPath";
import { apiGetCategories } from "../services/categoryService";

function Navigation() {
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		// call api service
		const fetchCategories = async () => {
			try {
				const res = await apiGetCategories();

				setCategories(res.data);
			} catch (error) {
				console.log("error: ", error);
			}
		};

		fetchCategories();
	}, []);
	return (
		<div className="w-full shadow-md relative z-10 bg-white">
			<div className="w-lg-container flex items-center my-0 mx-auto px-2 max-w-[100%]">
				<ul className="flex h-full items-center space-x-4 text-[13px] cursor-pointer flex-wrap">
					{categories.map((item) => (
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

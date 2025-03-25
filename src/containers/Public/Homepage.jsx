import { text } from "../../utils/constants";
import Provinces from "../../components/Provinces";
import ListRental from "../../components/ListRental";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import formatViToString from "../../utils/formatViToString";

function Homepage() {
	const location = useLocation();
	const { categories } = useSelector((state) => state.app);
	const [categoryCode, setCategoryCode] = useState({});
	useEffect(() => {
		const category = categories?.find((category) => {
			return `/${formatViToString(category.value)}` === location.pathname;
		});

		console.log("category: ", category);
		if(category) {
			setCategoryCode(category);
		}
	}, [categories, location]);

	return (
		<>
			<div className="w-full bg-transparent flex items-center justify-center flex-col mt-4">
				<div className="max-w-[100%] w-5xl mt-4">
					{/* <div className="text-xl font-medium">
						{title?.HOME_TITLE}
					</div>
					<div className="text-[12px]">{title?.HOME_SUB_TITLE}</div> */}
					<Provinces />
				</div>
			</div>
			<ListRental categoryCode={categoryCode.code}/>
		</>
	);
}

export default Homepage;

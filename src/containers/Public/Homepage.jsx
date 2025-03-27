import { text } from "../../utils/constants";
import Provinces from "../../components/Provinces";
import ListRental from "../../components/ListRental";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import formatViToString from "../../utils/formatViToString";

function Homepage() {
	const location = useLocation();
	const [header, setHeader] = useState({});

	const { categories } = useSelector((state) => state.app);
	const [categoryCode, setCategoryCode] = useState({});
	useEffect(() => {
		const category = categories?.find((category) => {
			return `/${formatViToString(category.value)}` === location.pathname;
		});

		if (category) {
			setCategoryCode(category);
		}
	}, [categories, location]);

	useEffect(() => {
		const headerObj = categories.find(
			(category) => category.code === categoryCode.code
		);
		setHeader(headerObj);
	}, [categories, categoryCode.code]);
	return (
		<>
			<div className="w-full bg-transparent flex items-center justify-center flex-col mt-4">
				<div className="max-w-[100%] w-5xl mt-4">
					<div className="text-xl font-medium">
						{header?.header}
					</div>
					<div className="text-[12px]">{header?.subheader}</div>
					<Provinces />
				</div>
			</div>
			<ListRental categoryCode={categoryCode.code} />
		</>
	);
}

export default Homepage;

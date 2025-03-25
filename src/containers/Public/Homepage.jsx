import { text } from "../../utils/constants";
import Provinces from "../../components/Provinces";
import ListRental from "../../components/ListRental";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Homepage() {
	const location = useLocation();
	const [title, setTitle] = useState({});
	useEffect(() => {
		console.log("location pathname: ", location.pathname);
		setTitle(
			text.find((item) => {
				console.log("item: ", item);
				return item.PAGE_URL.replace("/", "") === location.pathname.replace("/", "");
			})
		);
	}, [location]);

	console.log("title: ", title);
	return (
		<>
			<div className="w-full bg-transparent flex items-center justify-center flex-col mt-4">
				<div className="max-w-[100%] w-5xl mt-4">
					<div className="text-xl font-medium">
						{title?.HOME_TITLE}
					</div>
					<div className="text-[12px]">{title?.HOME_SUB_TITLE}</div>
					<Provinces />
				</div>
			</div>
			<ListRental />
		</>
	);
}

export default Homepage;

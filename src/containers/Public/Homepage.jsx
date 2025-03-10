import SearchBottom from "./SearchBottom";

import { text } from "../../utils/constants";

function Homepage() {
	return (
		<div className="w-full bg-transparent flex items-center justify-center flex-col mt-4">
			<SearchBottom />

			<div className="max-w-[100%] w-lg-container mt-4">
				<div className="text-xl font-medium">{text.HOME_TITLE}</div>
				<div className="text-[12px]">{text.HOME_SUB_TITLE}</div>
			</div>
		</div>
	);
}

export default Homepage;

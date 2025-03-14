import { text } from "../../utils/constants";
import Provinces from "../../components/Provinces";
import ListRental from "../../components/ListRental";
import { useSearchParams } from "react-router-dom";

function Homepage() {
	const [searchParams] = useSearchParams();
	return (
		<>
			<div className="w-full bg-transparent flex items-center justify-center flex-col mt-4">
				<div className="max-w-[100%] w-5xl mt-4">
					<div className="text-xl font-medium">{text.HOME_TITLE}</div>
					<div className="text-[12px]">{text.HOME_SUB_TITLE}</div>
					<Provinces />
				</div>
			</div>
			<ListRental page={searchParams.get('page')}/>
		</>
	);
}

export default Homepage;

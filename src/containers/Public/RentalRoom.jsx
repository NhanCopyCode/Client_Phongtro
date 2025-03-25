import ListRental from "../../components/ListRental";
import Provinces from "../../components/Provinces";

function RentalRoom() {

	return (
		<>
			<div className="w-full bg-transparent flex items-center justify-center flex-col mt-4">
				<div className="max-w-[100%] w-5xl mt-4">
					{/* <div className="text-xl font-medium">{text.HOME_TITLE}</div>
					<div className="text-[12px]">{text.HOME_SUB_TITLE}</div> */}
					<Provinces />
				</div>
			</div>
			<ListRental  />
		</>
	);
}

export default RentalRoom;

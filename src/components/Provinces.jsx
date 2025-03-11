import { locations } from "../utils/constants";
import ProvinceButton from "./ProvinceButton";

function Provinces() {
    return (
		<div className="flex items-center justify-center space-x-0 sm:space-x-4 mt-4 flex-wrap space-y-4 sm:space-y-0">
			{locations.map((item) => (
				<div className="" key={item.id}>
					<ProvinceButton name={item.name} image={item.image} />
				</div>
			))}
		</div>
	);
}

export default Provinces;
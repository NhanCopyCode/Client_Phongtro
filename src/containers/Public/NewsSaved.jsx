import { useEffect } from "react";
import ItemRental from "../../components/ItemRental";
import useWhitelist from "../../hooks/useWhitelist";

function NewSaved() {
	const { whitelist, addToWhitelist } = useWhitelist();
    console.log("whitelist: ", whitelist);
	return (
		<div className="w-5xl mx-auto max-w-[100%] my-4">
			<h2 className="text-[20px] font-medium">Tin đã lưu</h2>
			<div>{whitelist.length > 0 ? '<ItemRental />' : "Không có item nào"}</div>
		</div>
	);
}

export default NewSaved;

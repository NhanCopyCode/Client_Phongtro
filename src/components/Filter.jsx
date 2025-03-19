import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import SidebarItem from "./SidebarItem";

import * as _ from "../utils/constants";
import { getAllAcreages, getAllPrices } from "../store/actions/app";

function Filter() {
	const dispatch = useDispatch();
	const { prices, acreages, categories } = useSelector((state) => state.app);

	useEffect(() => {
		dispatch(getAllPrices());
		dispatch(getAllAcreages());
	}, [dispatch]);

	return (
		<div className="bg-white shadow-sm rounded-sm px-3 py-4 flex items-start flex-col gap-4">
			<SidebarItem title={_.viewByRegionTitle} arrData={categories}  />
			<SidebarItem title={"Xem theo khoảng giá"} arrData={prices} type={"priceCode"} />

			<SidebarItem title={"Xem theo diện tích"} arrData={acreages} type={"areaCode"}/>
		</div>
	);
}

export default Filter;

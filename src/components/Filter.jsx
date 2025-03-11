import FilterItem from "./FilterItem";
import { MdChevronRight } from "react-icons/md";

function Filter() {
	return (
		<div className="bg-white shadow-sm rounded-sm px-3 py-4">
			<h3 className="font-medium text-sm text-text">
				Xem theo khoảng giá
			</h3>
			<div className="grid grid-cols-2 gap-2 mt-3">
				<FilterItem
					iconLeft={<MdChevronRight />}
					value={"/?gia_den=1000000"}
					hoverEffect={"hover:text-redColor"}
				>
					Dưới 1 triệu
				</FilterItem>
				<FilterItem
					iconLeft={<MdChevronRight />}
					value={"/?gia_tu=1000000&gia_den=2000000"}
					hoverEffect={"hover:text-redColor"}
				>
					Từ 1 - 2 triệu
				</FilterItem>
				<FilterItem
					iconLeft={<MdChevronRight />}
					value={"/?gia_tu=2000000&gia_den=3000000"}
					hoverEffect={"hover:text-redColor"}
				>
					Từ 2 - 3 triệu
				</FilterItem>
				<FilterItem
					iconLeft={<MdChevronRight />}
					value={"/?gia_tu=3000000&gia_den=5000000"}
					hoverEffect={"hover:text-redColor"}
				>
					Từ 3 - 5 triệu
				</FilterItem>
				<FilterItem
					iconLeft={<MdChevronRight />}
					value={"/?gia_tu=5000000&gia_den=7000000"}
					hoverEffect={"hover:text-redColor"}
				>
					Từ 5 - 7 triệu
				</FilterItem>
				<FilterItem
					iconLeft={<MdChevronRight />}
					value={"/?gia_tu=7000000&gia_den=10000000"}
					hoverEffect={"hover:text-redColor"}
				>
					Từ 7 - 10 triệu
				</FilterItem>
				<FilterItem
					iconLeft={<MdChevronRight />}
					value={"/?gia_tu=10000000&gia_den=15000000"}
					hoverEffect={"hover:text-redColor"}
				>
					Từ 10 - 15 triệu
				</FilterItem>
				<FilterItem
					iconLeft={<MdChevronRight />}
					value={"/?gia_tu=15000000"}
					hoverEffect={"hover:text-redColor"}
				>
					Trên 15 triệu
				</FilterItem>
			</div>

			<h3 className="font-medium text-sm text-text mt-5">
				Xem theo diện tích
			</h3>
			<div className="grid grid-cols-2 gap-2 mt-3">
				<FilterItem
					iconLeft={<MdChevronRight />}
					value={"/?dien_tich_den=20"}
					hoverEffect={"hover:text-redColor"}
				>
					Dưới 20m2
				</FilterItem>
				<FilterItem
					iconLeft={<MdChevronRight />}
					value={"/?dien_tich_tu=20&dien_tich_den=30"}
					hoverEffect={"hover:text-redColor"}
				>
					Từ 20 - 30m2
				</FilterItem>
				<FilterItem
					iconLeft={<MdChevronRight />}
					value={"/?dien_tich_tu=30&dien_tich_den=50"}
					hoverEffect={"hover:text-redColor"}
				>
					Từ 30 - 50m2
				</FilterItem>
				<FilterItem
					iconLeft={<MdChevronRight />}
					value={"/?dien_tich_tu=50&dien_tich_den=70"}
					hoverEffect={"hover:text-redColor"}
				>
					Từ 50 - 70m2
				</FilterItem>
				<FilterItem
					iconLeft={<MdChevronRight />}
					value={"/?dien_tich_tu=70&dien_tich_den=90"}
					hoverEffect={"hover:text-redColor"}
				>
					Từ 70 -90m2
				</FilterItem>
				<FilterItem
					iconLeft={<MdChevronRight />}
					value={"/?dien_tich_tu=90"}
					hoverEffect={"hover:text-redColor"}
				>
					Trên 90m2
				</FilterItem>
			</div>
		</div>
	);
}

export default Filter;

import { NavLink, useLocation } from "react-router-dom";
import ItemRental from "./ItemRental";
import { FaCaretDown } from "react-icons/fa";
import Sidebar from "./Sidebar";

const links = [
	{
		to: "/?orderby=mac-dinh",
		label: "Đề xuất",
	},
	{
		to: "/?orderby=moi-nhat",
		label: "Mới đăng",
	},
	{
		to: "/?orderby=video",
		label: "Có video",
	},
];

function ListRental() {
	const location = useLocation();

	return (
		<div className="w-5xl max-w-[100%] mx-auto mt-8">
			<div className="grid grid-cols-10 gap-4 ">
				<div className="col-span-7 bg-transparent p-4">
					<div className="flex items-center gap-1">
						<NavLink className="text-redColor text-sm bg-white rounded-sm shadow-lg font-medium py-2 px-4">
							Toàn quốc
						</NavLink>
						<NavLink className="text-text text-sm py-2 px-4 hover:text-redColor">
							Hồ Chí Minh
						</NavLink>
						<NavLink className="text-text text-sm py-2 px-4 hover:text-redColor">
							Hà Nội
						</NavLink>
						<NavLink className="text-text text-sm py-2 px-4 hover:text-redColor">
							Đà Nẵng
						</NavLink>
						<span className="underline underline-offset-4 cursor-pointer flex items-center text-sm gap-1 py-2 px-4">
							Khác
							<FaCaretDown />
						</span>
					</div>

					<div className="flex items-center gap-2 mt-4">
						{links.map((link) => {
							const isActive =
								location.search === link.to.replace("/", "") ||
								(link.to === "/?orderby=mac-dinh" &&
									location.search === "");
							return (
								<NavLink
									key={link.to}
									to={link.to}
									className={`text-sm py-1 px-2 ${
										isActive
											? "font-medium underline underline-offset-8"
											: ""
									}`}
								>
									{link.label}
								</NavLink>
							);
						})}
					</div>

					<div className="grid grid-cols-1 gap-4 mt-4">
						<ItemRental />
						<ItemRental />
						<ItemRental />
						<ItemRental />
					</div>
				</div>
				<div className="col-span-3">
					<Sidebar />
				</div>
			</div>
		</div>
	);
}

export default ListRental;

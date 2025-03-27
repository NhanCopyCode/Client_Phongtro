import Modal from "react-modal";
import { CiFilter } from "react-icons/ci";
import Button from "../../components/Button";
import { useState } from "react";

import { LiaTimesSolid } from "react-icons/lia";
import { customStylesModal } from "../../utils/constants";
import { useSelector } from "react-redux";
Modal.setAppElement("#root");

// const rentalCategories = [
// 	{
// 		name: "Phòng trọ",
// 		icon: <MdOutlineHomeWork className="w-full h-full" />,
// 	},
// 	{
// 		name: "Nhà riêng",
// 		icon: <MdOutlineHomeWork className="w-full h-full" />,
// 	},
// 	{
// 		name: "Ở ghép",
// 		icon: <MdOutlinePeopleOutline className="w-full h-full" />,
// 	},
// 	{
// 		name: "Cho thuê mặt bằng",
// 		icon: <PiBuildingApartmentFill className="w-full h-full" />,
// 	},
// ];

function Search() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [activeButton, setActiveButton] = useState("");
	const { categories, prices, acreages } = useSelector((state) => state.app);

	const handleOpenModalSearch = () => {
		setModalIsOpen(true);
	};

	function closeModal() {
		setModalIsOpen(false);
	}

	const handleActiveButton = (code) => {
		setActiveButton(code);
	};


	return (
		<div className="">
			<Button
				iconLeft={<CiFilter className="w-full h-full" />}
				border="border border-[#ddd]"
				bgColor="bg-white"
				textColor="text-black"
				rounded="rounded-2xl"
				onClick={handleOpenModalSearch}
			>
				Bộ lọc
			</Button>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStylesModal}
				contentLabel="Example Modal"
			>
				<div className="relative h-[100%]">
					<div className="flex items-center justify-between py-3 px-5 shadow-md">
						<h2 className="text-xl text-">Bộ lọc</h2>
						<Button
							bgColor="bg-none"
							textColor="text-black"
							fontSize="text-2xl"
							onClick={closeModal}
						>
							<LiaTimesSolid />
						</Button>
					</div>
					<div className="py-5 px-5">
						<h3 className="text-lg mb-3">Danh mục cho thuê</h3>

						<div className="flex items-center space-x-2 flex-wrap">
							{categories.length > 0 &&
								categories.map((item) => (
									<div
										key={item.name}
										className="relative overflow-hidden mb-2"
									>
										<Button
											iconLeft={item.icon}
											border={
												activeButton === item.code
													? "border border-redColor text-redColor"
													: "border border-[#ddd]"
											}
											bgColor="bg-white"
											textColor="text-black"
											rounded="rounded-2xl"
											subClass={""}
											onClick={() =>
												handleActiveButton(item.code)
											}
										>
											{item.value}
										</Button>
									</div>
								))}
						</div>

						<h3 className="text-lg mb- my-4">Khoảng giá</h3>
						<div className="flex items-center space-x-2 flex-wrap">
							{prices.length > 0 &&
								prices.map((item) => (
									<div
										key={item.name}
										className="relative overflow-hidden mb-2"
									>
										<Button
											iconLeft={item.icon}
											border={
												activeButton === item.code
													? "border border-redColor text-redColor"
													: "border border-[#ddd]"
											}
											bgColor="bg-white"
											textColor="text-black"
											rounded="rounded-2xl"
											subClass={""}
											onClick={() =>
												handleActiveButton(item.code)
											}
										>
											{item.value}
										</Button>
									</div>
								))}
						</div>
						<h3 className="text-lg mb- my-4">Diện tích</h3>
						<div className="flex items-center space-x-2 flex-wrap">
							{acreages.length > 0 &&
								acreages.map((item) => (
									<div
										key={item.name}
										className="relative overflow-hidden mb-2"
									>
										<Button
											iconLeft={item.icon}
											border={
												activeButton === item.code
													? "border border-redColor text-redColor"
													: "border border-[#ddd]"
											}
											bgColor="bg-white"
											textColor="text-black"
											rounded="rounded-2xl"
											subClass={""}
											onClick={() =>
												handleActiveButton(item.code)
											}
										>
											{item.value}
										</Button>
									</div>
								))}
						</div>
					</div>

					<div className="absolute bottom-0 right-0 left-0 shadow-lg px-5 py-3 border-t-2 border-t-[#ccc]">
						<Button
							bgColor="bg-redColor w-[100%]"
							fontSize="text-[18px]"
							hoverEffect="none"
						>
							Áp dụng
						</Button>
					</div>
				</div>
			</Modal>
		</div>
	);
}

export default Search;

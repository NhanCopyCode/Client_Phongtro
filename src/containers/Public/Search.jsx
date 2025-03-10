import Modal from "react-modal";
import { CiFilter } from "react-icons/ci";
import Button from "../../components/Button";
import { useState } from "react";

import { LiaTimesSolid } from "react-icons/lia";
import { MdOutlineHomeWork, MdOutlinePeopleOutline } from "react-icons/md";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { IoIosCheckmark } from "react-icons/io";

Modal.setAppElement("#root");
const customStyles = {
	content: {
		background: "white",
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		width: "600px",
		height: "600px",
		overFlowY: "auto",
		borderRadius: "12px",
		color: "#212529",
		padding: 0,
	},
	overlay: {
		position: "fixed",
		zIndex: 1020,
		top: 0,
		left: 0,
		width: "100vw",
		height: "100vh",
		background: "rgba(0,0,0,0.5)",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
};

const rentalCategories = [
	{
		name: "Phòng trọ",
		icon: <MdOutlineHomeWork className="w-full h-full" />,
	},
	{
		name: "Nhà riêng",
		icon: <MdOutlineHomeWork className="w-full h-full" />,
	},
	{
		name: "Ở ghép",
		icon: <MdOutlinePeopleOutline className="w-full h-full" />,
	},
	{
		name: "Cho thuê mặt bằng",
		icon: <PiBuildingApartmentFill className="w-full h-full" />,
	},
];

function Search() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [activeButton, setActiveButton] = useState("");

	const handleOpenModalSearch = () => {
		setModalIsOpen(true);
	};

	function closeModal() {
		setModalIsOpen(false);
	}

	const handleActiveButton = (name) => {
		setActiveButton(name);
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
				style={customStyles}
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
							{rentalCategories.length > 0 &&
								rentalCategories.map((item) => (
									<div
										key={item.name}
										className="relative overflow-hidden mb-2"
									>
										<Button
											iconLeft={item.icon}
											border={
												activeButton === item.name
													? "border border-redColor text-redColor"
													: "border border-[#ddd]"
											}
											bgColor="bg-white"
											textColor="text-black"
											rounded="rounded-2xl"
											subClass={""}
											onClick={() =>
												handleActiveButton(item.name)
											}
										>
											{item.name}
										</Button>
									</div>
								))}
						</div>

						<h3 className="text-lg mb- mt-4">Khoảng giá</h3>
						<div className="flex items-center space-x-2 flex-wrap"></div>
					</div>

					<div className="absolute bottom-0 right-0 left-0 shadow-lg px-5 py-3 border-t-2 border-t-[#ccc]">
						<Button bgColor="bg-redColor ">Áp dụng</Button>
					</div>
				</div>
			</Modal>
		</div>
	);
}

export default Search;

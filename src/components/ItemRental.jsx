import { CiHeart } from "react-icons/ci";
import Button from "../components/Button";

import { FaStar } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

const images = [
	"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/6310726d-d075-4e35-b1cb-cf5616bf5212_1658240491.jpg",
	"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/9c60836e-26b2-4737-a6c8-60cb5187fa4c_1658240485.jpg",
	"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/716c753e-8e03-4cc8-9d09-e52ec19ce01b_1658240485.jpg",
	"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/400e7ebd-5d88-48af-8599-0d074a1ee014_1658240494.jpg",
	"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/1379ebdf-eda5-4ef8-bb22-7da1d19551f2_1658240490.jpg",
	"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/6310726d-d075-4e35-b1cb-cf5616bf5212_1658240491.jpg",
	"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/9c60836e-26b2-4737-a6c8-60cb5187fa4c_1658240485.jpg",
];

function ItemRental() {
	const [isHover, setHover] = useState(false);
	const handleMouseEnter = () => {
		setHover(true);
	}
	const handleMouseLeave = () => {
		setHover(false);
	}
	return (
		<div className="bg-white shadow-sm rounded-sm p-3">
			<div className="flex items-center gap-1 h-[260px]">
				<div className="w-3/5 h-full">
					<img
						className="w-full h-full object-cover"
						src={images[0]}
						alt=""
					/>
				</div>
				<div className="w-2/5 h-full flex items-center flex-col gap-1 overflow-hidden">
					<img
						className="w-full h-full object-cover max-h-1/2"
						src={images[0]}
						alt=""
					/>
					<div className="w-full h-1/2 flex items-center gap-1">
						<img
							className="w-full h-full object-cover"
							src={images[0]}
							alt=""
						/>
						<img
							className="w-full h-full object-cover"
							src={images[0]}
							alt=""
						/>
					</div>
				</div>
			</div>

			{/* Content */}
			<div className="">
				<h3 className="text-redColor text-sm uppercase font-medium my-2">
					<div className="inline-flex items-center text-yellow me-2 gap-1">
						<FaStar />
						<FaStar />
						<FaStar />
						<FaStar />
						<FaStar />
					</div>
					PHÒNG ĐẸP ĐIỆN BIÊN PHỦ, NGAY HUTECH, HÀNG XANH, BÌNH THẠNH,
					GẦN GA METRO VĂN THÁNH
				</h3>
				<div className="flex items-center space-x-4">
					<span className="font-medium text-price">
						3.7 triệu/tháng
					</span>
					<span className="text-sm text-text ">22 m2</span>
					<Link
						to={"/tinh-thanh/binh-thanh"}
						className="text-sm text-text"
					>
						Bình Thạnh, Hồ Chí Minh
					</Link>
				</div>

				<div className="text-[12px] text-subtitle my-2">
					Phòng đẹp cho thuê đường Điện Biên Phủ, Bình Thạnh, đối diện
					đường Nguyễn Gia Trí, gần ngã tư Hàng Xanh, ĐH Hutech, ĐH
					GTVT, ĐH Ngoại thương, chỉ 5…
				</div>

				<div className="flex items-center justify-between  mt-4">
					<div className="flex items-center gap-2">
						<div className="p-1 border border-subtitle rounded-[50%] w-10 h-10">
							<img
								className="w-full h-full object-cover"
								src="https://phongtro123.com/images/default-user.svg"
								alt=""
							/>
						</div>
						<div className="flex flex-col justify-items-start">
							<h4 className="text-sm text-text">Chị Nga</h4>
							<p className="text-[12px] text-subtitle">Hôm nay</p>
						</div>
					</div>
					<div className="flex items-center space-x-2">
						<Button
							bgColor="bg-success"
							iconLeft={
								<MdOutlinePhone className="text-lg font-medium" />
							}
							textColor="text-white text-sm"
							hoverEffect="none"
							sizeButton="sm"
							rounded="rounded-lg"
						>
							099123911
						</Button>
						<Button
							iconLeft={ isHover ? <CiHeart className="text-lg" color="red"/> : <CiHeart className="text-lg" />}
							textColor="text-text text-xl font-bold"
							bgColor="bg-none"
							sizeButton="md"
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ItemRental;

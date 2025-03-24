import PropTypes from "prop-types";
import { useState } from "react";

import { CiHeart } from "react-icons/ci";
import { FaCamera, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlinePhone } from "react-icons/md";

import Button from "../components/Button";
import toLowerCaseNonAccentVietnamese from "../utils/convertStringToPath";

function ItemRental({
	address,
	attributes,
	description,
	images,
	star,
	title,
	user,
	id,
}) {
	const [isHover, setHover] = useState(false);
	const handleMouseEnter = () => {
		setHover(true);
	};
	const handleMouseLeave = () => {
		setHover(false);
	};
	return (
		<div className="bg-white shadow-sm rounded-sm p-3">
			{/* 4 images */}
			<div className="flex items-center gap-1 h-[260px] relative">
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
						src={images[1]}
						alt=""
					/>
					<div className="w-full h-1/2 flex items-center gap-1">
						<img
							className="w-1/2 h-full object-cover"
							src={images[2]}
							alt=""
						/>
						<img
							className="w-1/2 h-full object-cover"
							src={images[3]}
							alt=""
						/>
					</div>
				</div>

				<div className="absolute bottom-1 left-1 py-1 px-2 bg-overlay text-[10px] text-white flex items-center gap-1 rounded-sm">
					<FaCamera color="white" />
					<span>{images.length}</span>
				</div>
			</div>

			{/* Content */}
			<div className="mt-1">
				<Link
					to={`chi-tiet/${toLowerCaseNonAccentVietnamese(
						title
					).replace("/", "")}/${id}`}
					className="text-redColor text-sm uppercase font-medium my-3"
				>
					{[...Array(star)].length > 0 && (
						<div className="inline-flex items-center text-yellow me-2 gap-1">
							{[...Array(star)].map((_, index) => (
								<FaStar key={index} />
							))}
						</div>
					)}

					{title}
				</Link>
				<div className="flex items-center space-x-4">
					<span className="font-medium text-price text-[12px]">
						{attributes.price}
					</span>
					<span className="text-[12px] text-text ">
						{attributes.acreage}
					</span>
					<Link
						to={"/tinh-thanh/binh-thanh"}
						className="text-[12px] text-text line-clamp-1"
					>
						{address.split(": ")[1]}
					</Link>
				</div>

				<div className="text-[12px] text-subtitle my-2 line-clamp-2">
					{description}
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
							<h4 className="text-sm text-text">{user?.name}</h4>
							<p className="text-[12px] text-subtitle">
								{attributes?.published}
							</p>
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
							{user?.phone}
						</Button>
						<Button
							iconLeft={
								isHover ? (
									<CiHeart className="text-lg" color="red" />
								) : (
									<CiHeart className="text-lg" />
								)
							}
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

ItemRental.propTypes = {
	address: PropTypes.string,
	attributes: PropTypes.string,
	description: PropTypes.string,
	images: PropTypes.string,
	star: PropTypes.number,
	title: PropTypes.string,
	user: PropTypes.object,
	id: PropTypes.string,
};

export default ItemRental;

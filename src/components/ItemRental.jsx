import PropTypes from "prop-types";

import { FaCamera, FaHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlinePhone } from "react-icons/md";

import Button from "../components/Button";
import toLowerCaseNonAccentVietnamese from "../utils/convertStringToPath";
import { WHITELIST_KEY } from "../utils/constants";
import { useEffect, useState } from "react";
function ItemRental({ post, isInWhitelist }) {
	const [activeHeart, setActiveHeart] = useState(isInWhitelist || false);
	const handleAddItemToWhiteList = (post) => {
		setActiveHeart(true);
		let whitelist_posts =
			JSON.parse(localStorage.getItem(WHITELIST_KEY)) || [];
		if (whitelist_posts.find((item) => item.id === post.id)) {
			whitelist_posts = whitelist_posts.filter(
				(item) => item.id !== post.id
			);
			setActiveHeart(false);
		} else {
			whitelist_posts.push(post);
		}

		localStorage.setItem(
			"whitelist_posts",
			JSON.stringify(whitelist_posts)
		);
	};

	useEffect(() => {
		const whitelist_posts = JSON.parse(localStorage.getItem(WHITELIST_KEY)) || [];
		if(whitelist_posts.find(item => item.id === post.id)) {
			setActiveHeart(true);
		}
	}, [])

	return (
		<div className="bg-white shadow-sm rounded-sm p-3">
			{/* 4 images */}
			<div className="flex items-center gap-1 h-[260px] relative">
				<div className="w-3/5 h-full">
					<img
						className="w-full h-full object-cover"
						src={JSON.parse(post?.images.image)[0]}
						alt=""
					/>
				</div>
				<div className="w-2/5 h-full flex items-center flex-col gap-1 overflow-hidden">
					<img
						className="w-full h-full object-cover max-h-1/2"
						src={JSON.parse(post?.images.image)[1]}
						alt=""
					/>
					<div className="w-full h-1/2 flex items-center gap-1">
						<img
							className="w-1/2 h-full object-cover"
							src={JSON.parse(post?.images.image)[2]}
							alt=""
						/>
						<img
							className="w-1/2 h-full object-cover"
							src={JSON.parse(post?.images.image)[3]}
							alt=""
						/>
					</div>
				</div>

				<div className="absolute bottom-1 left-1 py-1 px-2 bg-overlay text-[10px] text-white flex items-center gap-1 rounded-sm">
					<FaCamera color="white" />
					<span>{JSON.parse(post?.images.image).length}</span>
				</div>
			</div>

			{/* Content */}
			<div className="mt-1">
				<Link
					to={`/chi-tiet/${toLowerCaseNonAccentVietnamese(
						post.title
					).replace("/", "")}/${post.id}`}
					className="text-redColor text-sm uppercase font-medium my-3"
				>
					{[...Array(post.star)].length > 0 && (
						<div className="inline-flex items-center text-yellow me-2 gap-1">
							{[...Array(post.star)].map((_, index) => (
								<FaStar key={index} />
							))}
						</div>
					)}

					{post.title}
				</Link>
				<div className="flex items-center space-x-4">
					<span className="font-medium text-price text-[12px]">
						{post.attributes.price}
					</span>
					<span className="text-[12px] text-text ">
						{post.attributes.acreage}
					</span>
					<Link
						to={"/tinh-thanh/binh-thanh"}
						className="text-[12px] text-text line-clamp-1"
					>
						{post.address.split(": ")[1]}
					</Link>
				</div>

				<div className="text-[12px] text-subtitle my-2 line-clamp-2">
					{JSON.parse(post.description).join(" ")}
				</div>

				<div className="flex items-center justify-between mt-4">
					<div className="flex items-center gap-2">
						<div className="p-1 border border-subtitle rounded-[50%] w-10 h-10">
							<img
								className="w-full h-full object-cover"
								src="https://phongtro123.com/images/default-user.svg"
								alt=""
							/>
						</div>
						<div className="flex flex-col justify-items-start">
							<h4 className="text-sm text-text">
								{post.user?.name}
							</h4>
							<p className="text-[12px] text-subtitle">
								{post.attributes?.published}
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
							{post.user?.phone}
						</Button>
						<Button
							iconLeft={
								// isHover ? (
								// 	<CiHeart className="text-lg" color="red"/>
								// ) : (
								// 	<CiHeart className="text-lg" />
								// )
								<FaHeart
									className={`text-lg hover:text-redColor ${
										activeHeart && "text-redColor"
									}`}
								/>
							}
							textColor="text-text text-xl font-bold"
							bgColor="bg-none"
							sizeButton="md"
							onClick={() => handleAddItemToWhiteList(post)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

ItemRental.propTypes = {
	post: PropTypes.object,
};

export default ItemRental;

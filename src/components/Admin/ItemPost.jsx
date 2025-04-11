import PropTypes from "prop-types";
import Button from "../Button";
import { Link } from "react-router-dom";

function ItemPost({ post }) {
	return (
		<div className="p-[14px] shadow-sm rounded-md flex items-stretch justify-between bg-white h-[200px]">
			<Link className="flex items-center gap-2 w-[664px]">
				<div className="w-[180px] h-[170px] shrink-0">
					<img
						src={JSON.parse(post.images?.image)[0]}
						className="w-[100%] h-[100%] object-cover"
					/>
				</div>
				<div className="flex flex-col items-start gap-1">
					<div>
						<Button
							fontSize="text-[9px]"
							sizeButton="sm"
							textColor="text-text"
							subClass={"uppercase"}
						>
							{post.category.value}
						</Button>
					</div>
					<h3 className="text-[13px] line-clamp-1">{post.title}</h3>
					<div className="flex items-center flex-wrap text-[13px] gap-2">
						<span className="text-green-700 font-medium">
							{post.attributes.price}
						</span>
						<span className="text-center">
							{post.attributes.acreage}
						</span>
						<span className="line-clamp-3">
							{JSON.parse(post.description).join(" ")}
						</span>
					</div>
					<div className="flex items-center justify-between text-[11px] text-subtitle gap-8">
						<div className="flex flex-col">
							<span>Mã tin</span>
							<span>12312321</span>
						</div>
						<div className="flex flex-col">
							<span>Mã tin</span>
							<span>12312321</span>
						</div>
						<div className="flex flex-col">
							<span>Mã tin</span>
							<span>12312321</span>
						</div>
					</div>
				</div>
			</Link>

			{/* Can not set height 100% in this div below */}
			<div className="p-5 bg-gray rounded-sm ml-3 h-[100%]">
				<h3 className="uppercase text-center text-[16px] text-success">
					Tin đang đăng
				</h3>
				<div className="grid grid-cols-12 gap-2 mt-4">
					<Button
						fontSize="text-[9px]"
						sizeButton="sm"
						textColor="text-text"
						subClass={"uppercase col-span-6"}
					>
						Sửa tin
					</Button>

					<Button
						fontSize="text-[9px]"
						sizeButton="sm"
						textColor="text-text"
						subClass={"uppercase col-span-6"}
					>
						Ẩn tin
					</Button>
					<Button
						fontSize="text-[9px]"
						sizeButton="sm"
						textColor="text-text"
						subClass={"uppercase col-span-6"}
					>
						Nâng cấp vip
					</Button>
				</div>
			</div>
		</div>
	);
}

ItemPost.propTypes = {
	post: PropTypes.object,
};

export default ItemPost;

import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

function NewPostItem({value, title, price, createdAt}) {
	return (
		<NavLink to={value} className={"flex items-center gap-2"}>
			<img
				className="w-[90px] h-[80px] object-cover rounded-sm"
				src="https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2025/03/11/z6378533001766-34b48b46f2f649f25777d55d6f4ab0dc_1741657255.jpg"
				alt=""
			/>
			<div className="flex flex-col">
				<h3 className="text-[13px] uppercase line-clamp-2 text-primary">
					DỰ ÁN MỚI !!! SIÊU PHẨM 1PN / STUDIO FULL NỘI THẤT GẦN SÂN
					BAY TSN - TÂN BÌNH DỰ ÁN MỚI !!! SIÊU PHẨM 1PN / STUDIO FULL
					NỘI THẤT GẦN SÂN BAY TSN - TÂN BÌNH
				</h3>
				<div className="flex items-center justify-between mt-2">
					<span className="text-success text-[12px] font-medium">
						6.5 triệu/tháng
					</span>
					<span className="text-subtitle text-[10px] ">11 phút trước</span>
				</div>
			</div>
		</NavLink>
	);
}

NewPostItem.propTypes = {
    value: PropTypes.string.isRequired,
    title: PropTypes.string,
    price: PropTypes.string,
    createdAt: PropTypes.string,
}

export default NewPostItem;

import PropTypes from "prop-types";

function NavContent({ title, listNav }) {
	return (
		<div className="mt-3 px-10 h-[90px] shadow-md w-[100%] relative z-10">
			<h1 className="text-[22px] font-medium">Đăng tin cho thuê</h1>
			<ul className="flex items-center gap-4 text-[14px] text-secondaryText">
				<li className="py-[18px] border-b border-transparent hover:border-redColor hover:text-redColor hover:cursor-pointer">
					<a href="">Khu vực</a>
				</li>
				<li className="py-[18px] border-b border-transparent hover:border-redColor hover:text-redColor hover:cursor-pointer">
					<a href="">Thông tin mô tả</a>
				</li>
				<li className="py-[18px] border-b border-transparent hover:border-redColor hover:text-redColor hover:cursor-pointer">
					<a href="">Hình ảnh</a>
				</li>
				<li className="py-[18px] border-b border-transparent hover:border-redColor hover:text-redColor hover:cursor-pointer">
					<a href="">Âm thanh</a>
				</li>
				<li className="py-[18px] border-b border-transparent hover:border-redColor hover:text-redColor hover:cursor-pointer">
					<a href="">Video</a>
				</li>
			</ul>
		</div>
	);
}

NavContent.propTypes = {
	title: PropTypes.string,
	listNav: PropTypes.array,
};

export default NavContent;

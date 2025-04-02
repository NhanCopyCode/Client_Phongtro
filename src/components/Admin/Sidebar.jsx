import { NavLink } from "react-router-dom";

import defaultUserImage from "../../assets/default-user.svg";
import { path } from "../../utils/constants";
import { IoCreateOutline, IoListCircleOutline } from "react-icons/io5";
import { FaRegListAlt, FaRegMoneyBillAlt } from "react-icons/fa";

function Sidebar() {
	return (
		<div className="absolute top-0 left-0 bg-white shadow-sm h-full z-10 w-[210px]">
			<div className="p-5 flex items-center gap-3 h-[90px]">
				<div className="p-1 border-1 border-[#ccc] rounded-[50%] w-[50px] h-[50px]">
					<img
						src={defaultUserImage}
						alt="Default user image"
						className="w-[100%] "
					/>
				</div>
				<div className="flex flex-col items-start text-[13px]">
					<h3 className="font-medium">Thanh Nhangg</h3>
					<p>0919094701</p>
					<p className="text-[10px] line-clamp-1 ">Mã tài khoản: 1290123</p>
				</div>
			</div>
			<div className="flex items-start flex-col p-4 gap-1">
				<NavLink
					to={`${path.QUAN_LY}/${path.DANG_TIN_MOI}`}
					className={({ isActive }) =>
						`text-[13px] flex items-center gap-2 w-[100%] p-2 hover:bg-subBg rounded-md ${
							isActive ? "font-medium" : ""
						}`
					}
				>
					<IoCreateOutline className="w-[18px] h-[18px]" />
					<span>Đăng tin mới</span>
				</NavLink>
				<NavLink
					to={`${path.QUAN_LY}/${path.DANH_SACH_TIN_MOI}`}
					className={({ isActive }) =>
						`text-[13px] flex items-center gap-2 w-[100%] p-2 hover:bg-subBg rounded-md ${
							isActive ? "font-medium" : ""
						}`
					}
				>
					<FaRegListAlt className="w-[18px] h-[18px]" />
					<span>Danh sách tin mới</span>
				</NavLink>
				<NavLink
					to={`${path.QUAN_LY}/${path.NAP_TIEN_VAO_TAI_KHOAN}`}
					className={({ isActive }) =>
						`text-[13px] flex items-center gap-2 w-[100%] p-2 hover:bg-subBg rounded-md ${
							isActive ? "font-medium" : ""
						}`
					}
				>
					<FaRegMoneyBillAlt className="w-[18px] h-[18px]" />
					<span>Nạp tiền vào tài khoản</span>
				</NavLink>
				<NavLink
					to={`${path.QUAN_LY}/${path.LICH_SU_NAP_TIEN}`}
					className={({ isActive }) =>
						`text-[13px] flex items-center gap-2 w-[100%] p-2 hover:bg-subBg rounded-md ${
							isActive ? "font-medium" : ""
						}`
					}
				>
					<IoListCircleOutline className="w-[18px] h-[18px]" />
					<span>Lịch sử nạp tiền</span>
				</NavLink>
			</div>
		</div>
	);
}

export default Sidebar;

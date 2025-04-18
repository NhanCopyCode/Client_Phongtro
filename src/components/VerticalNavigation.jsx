import PropTypes from "prop-types";
import { LiaTimesSolid } from "react-icons/lia";
import Logo from "../assets/logo-phongtro.svg";
import defaultUserAva from "../assets/default-user.svg";
import Button from "./Button";
import { FiUserPlus } from "react-icons/fi";
import { CiHeart, CiLogin } from "react-icons/ci";
import { IoCreateOutline, IoHomeOutline } from "react-icons/io5";
import VerticalNavigationItem from "./VerticalNavigationItem";
import { MdApartment, MdOutlineMapsHomeWork } from "react-icons/md";
import { RiHomeOfficeLine } from "react-icons/ri";
import { path } from "../utils/constants";
import { useSelector } from "react-redux";

function VerticalNavigation({ isOpen, onClick }) {
	// const className = `fixed top-0 right-[100%] w-[400px] max-w-[100%] bg-white h-screen z-15  duration-300 ease-linear ${
	// 	isOpen && "!right-[0]"
	// }`;
	const { isLoggedIn, user } = useSelector((state) => state.auth);

	const className = `fixed top-0 right-0 w-[400px] max-w-[100%] bg-white h-screen z-25
    transition-transform duration-300 ease-out transform
    ${isOpen ? "translate-x-0" : "translate-x-full"}`;

	return (
		<div className={className}>
			<div className="py-2 px-5 shadow-md relative z-1">
				<div className="flex items-center justify-between">
					{isLoggedIn ? (
						<>
							<div className="flex items-center gap-3">
								<div className="w-[60px] h-[60px] p-1 border-[#ccc] border rounded-[50%]">
									<img
										src={defaultUserAva}
										alt="User avatar"
										className="w-[100%] h-[100%] object-cover"
									/>
								</div>
								<div className="flex items-start flex-col ">
									<h4 className="text-[18px] font-medium">
										{user.name}
									</h4>
									<p className="text-[14px] ">{user.phone}</p>
								</div>
							</div>
						</>
					) : (
						<div className="w-[170px] max-w-[170px]">
							<img
								src={Logo}
								alt=""
								className="w-[100%] object-cover"
							/>
						</div>
					)}

					<Button
						iconLeft={<LiaTimesSolid className="w-full h-full" />}
						bgColor="bg-none"
						textColor="text-text"
						fontSize="text-xl"
						onClick={onClick}
					/>
				</div>
			</div>

			<div className="p-5 bg-[#f5f6f6]  h-[100%]">
				<div className="flex items-center gap-2 mb-2 ">
					{isLoggedIn ? (
						<Button
							path={`${path.QUAN_LY}/${path.DANH_SACH_TIN_MOI}`}
							iconLeft={<CiLogin />}
							border="border border-[text]"
							bgColor="bg-none"
							textColor="text-text"
							hoverEffect="none"
							fontSize="text-[14px]"
							width="w-[100%]"
							rounded="rounded-3xl"
						>
							Trang quản lý
						</Button>
					) : (
						<>
							<Button
								path={`${path.LOGIN}`}
								iconLeft={<CiLogin />}
								border="border border-[text]"
								bgColor="bg-none"
								textColor="text-text"
								hoverEffect="none"
								fontSize="text-[14px]"
								width="w-[50%]"
								rounded="rounded-3xl"
							>
								Đăng nhập
							</Button>
							<Button
								path={`${path.LOGIN}`}
								iconLeft={<FiUserPlus />}
								border="border border-[text]"
								bgColor="bg-none"
								textColor="text-text"
								hoverEffect="none"
								fontSize="text-[14px]"
								width="w-[50%]"
								rounded="rounded-3xl"
							>
								Đăng ký
							</Button>
						</>
					)}
				</div>
				<Button
					path={`${path.QUAN_LY}/${path.DANG_TIN_MOI}`}
					iconLeft={<IoCreateOutline />}
					textColor="text-white"
					bgColor="bg-redColor"
					rounded="rounded-3xl"
					width="w-[100%]"
					fontSize="text-[14px]"
					hoverEffect="darken"
				>
					Đăng tin mới
				</Button>

				<div className="mt-4 bg-white px-5 pt-4 pb-8 rounded-md">
					<VerticalNavigationItem icon={<CiHeart />}>
						Tin đã lưu
					</VerticalNavigationItem>
					<VerticalNavigationItem icon={<IoHomeOutline />}>
						Cho thuê phòng trọ
					</VerticalNavigationItem>
					<VerticalNavigationItem icon={<MdOutlineMapsHomeWork />}>
						Cho thuê căn hộ
					</VerticalNavigationItem>
					<VerticalNavigationItem icon={<MdApartment />}>
						Cho thuê mặt bằng
					</VerticalNavigationItem>
					<VerticalNavigationItem icon={<RiHomeOfficeLine />}>
						Nhà cho thuê
					</VerticalNavigationItem>
				</div>
			</div>
		</div>
	);
}

VerticalNavigation.propTypes = {
	isOpen: PropTypes.bool,
	onClick: PropTypes.func,
};

export default VerticalNavigation;

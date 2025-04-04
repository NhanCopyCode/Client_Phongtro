import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import LogoWhite from "../../assets/logo-phongtro-white.svg";
import { getAllCategories } from "../../store/actions/app";
import toLowerCaseNonAccentVietnamese from "../../utils/convertStringToPath";
import Button from "../Button";
import { CiFolderOn, CiWarning } from "react-icons/ci";
import { IoIosCheckmarkCircleOutline, IoIosLogOut } from "react-icons/io";
import { FaCaretDown, FaRegEyeSlash } from "react-icons/fa";
import { IoCreateOutline, IoPricetagsOutline } from "react-icons/io5";
import { LuFolderCog } from "react-icons/lu";
import * as actions from "../../store/actions";
import defaultUserImg from "../../assets/default-user.svg";
import { path } from "../../utils/constants";
import { MdOutlineMenu } from "react-icons/md";
import VerticalNavigation from "../VerticalNavigation";
import Overlay from "../Overlay";

function Header() {
	const navigate = useNavigate();
	const [visible, setVisible] = useState(false);
	const [visibleNav, setVisibleNav] = useState(false);
	const { categories } = useSelector((state) => state.app);
	const { user, isLoggedIn } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllCategories());
	}, [dispatch]);

	const handleLogout = () => {
		dispatch(actions.logout());
	};

	const handleOpenNav = () => {
		setVisibleNav(true);
	};

	const handleCloseVerticalNavigation = () => {
		setVisibleNav(false);
	};

	useEffect(() => {
		if (!isLoggedIn) navigate("/");
	}, [isLoggedIn]);
	return (
		<>
			<div className="w-full py-0 px-5 bg-blue h-[45px] flex items-center justify-between fixed top-0 z-10">
				<div className="flex items-center h-[100%] gap-4">
					<Link to={"/"}>
						<img
							src={LogoWhite}
							alt="Logo"
							className="w-[160px] object-cover"
						/>
					</Link>
					<div className="lg:flex items-center hidden">
						{categories &&
							categories.length > 0 &&
							categories.map((category) => {
								return (
									<Link
										to={`/${toLowerCaseNonAccentVietnamese(
											category.value
										)}`}
										key={category.code}
										className="text-white text-[13px] p-2"
									>
										{category.value}
									</Link>
								);
							})}
					</div>
				</div>
				<div className="flex items-center">
					<Button
						iconLeft={<CiFolderOn className="w-[20px] h-[20px]" />}
						textColor="text-white"
						fontSize="text-[13px]"
						bgColor="bg-blue"
						hoverEffect="none"
					>
						Quản lý
					</Button>
					<div className="relative">
						<Button
							bgColor="bg-blue"
							textColor="text-white"
							sizeButton="sm"
							hoverEffect="none"
							iconRight={<FaCaretDown />}
							onClick={() => setVisible(!visible)}
						>
							<div className="flex items-center gap-2">
								<div className="p-1 border-1 border-[#ccc] rounded-[50%]">
									<img
										src={defaultUserImg}
										alt="Default user image"
										className="w-6 h-6 object-cover"
									/>
								</div>
								<span>{user?.name}</span>
							</div>
						</Button>

						{/* Tooltip code below */}
						{visible && (
							<div
								className="absolute top-full right-0 bg-white rounded-sm shadow-md border-1 border-[#ccc] p-5 z-30 text-text
                                                        w-[350px]"
							>
								<div className="flex items-center">
									<div className="w-[60px] h-[60px] p-1 border-1 border-[#ccc] rounded-[50%] ">
										<img
											src={defaultUserImg}
											alt="Default user image"
											className="w-[100%] h-[100%] object-cover"
										/>
									</div>
									<div className="ml-3">
										<h3 className="font-medium text-[16px]">
											{user?.name}
										</h3>
										<p className="text-[12px]">
											{user?.phone}
										</p>
									</div>
								</div>
								<div className="mt-4">
									<h3 className="text-subtitle text-[11px] uppercase">
										Quản lý tin đăng
									</h3>
									<div className="grid grid-cols-12 gap-2 bg-subBg py-2 rounded-md mt-2 text-[11px]">
										<div className="col-span-3 flex flex-col items-center">
											<CiFolderOn className="text-[22px] font-medium" />
											<span>Tất cả</span>
										</div>
										<div className="col-span-3 flex flex-col items-center">
											<IoIosCheckmarkCircleOutline className="text-[22px] font-medium" />
											<span>Đang hiển thị</span>
										</div>
										<div className="col-span-3 flex flex-col items-center">
											<CiWarning className="text-[22px] font-medium" />
											<span>Hết hạn</span>
										</div>
										<div className="col-span-3 flex flex-col items-center">
											<FaRegEyeSlash className="text-[22px] font-medium" />
											<span>Tin ẩn</span>
										</div>
									</div>
									<div className="flex flex-col items-start mt-4 text-[13px] ">
										<div className="flex items-center gap-2 hover:bg-subBg w-full rounded-md hover:cursor-pointer py-1">
											<div className="bg-subBg rounded-[50%] flex items-center justify-center p-2">
												<IoPricetagsOutline className="text-[18px]" />
											</div>
											<span>Bảng giá dịch vụ</span>
										</div>
										<div className="flex items-center gap-2 hover:bg-subBg w-full rounded-md hover:cursor-pointer py-1">
											<div className="bg-subBg rounded-[50%] flex items-center justify-center p-2">
												<LuFolderCog className="text-[18px]" />
											</div>
											<span>Quản lý giao dịch</span>
										</div>
										<div className="flex items-center gap-2 hover:bg-subBg w-full rounded-md hover:cursor-pointer py-1">
											<div className="bg-subBg rounded-[50%] flex items-center justify-center p-2">
												<IoPricetagsOutline className="text-[18px]" />
											</div>
											<span>Quản lý tài khoản</span>
										</div>
										<div
											className="flex items-center gap-2 hover:bg-subBg w-full rounded-md hover:cursor-pointer py-1"
											onClick={handleLogout}
										>
											<div className="bg-subBg rounded-[50%] flex items-center justify-center p-2">
												<IoIosLogOut className="text-[18px]" />
											</div>
											<span>
												Đăng xuất
												<template></template>
											</span>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
					<Button
						path={`${path.QUAN_LY}/${path.DANG_TIN_MOI}`}
						iconLeft={<IoCreateOutline className="w-full h-full" />}
						bgColor="bg-redColor"
						hoverEffect="none"
						subClass="hidden lg:flex"
					>
						Đăng tin
					</Button>
					<div className="lg:hidden">
						<Button
							iconLeft={
								<MdOutlineMenu className="text-white w-full h-full text-lg" />
							}
							textColor="text-white"
							fontSize="text-[13px]"
							bgColor="bg-none"
							hoverEffect="none"
							onClick={handleOpenNav}
						>
							Danh mục
						</Button>
					</div>
				</div>
			</div>
			{visibleNav && (
				<>
					<VerticalNavigation
						isOpen={visibleNav}
						onClick={handleCloseVerticalNavigation}
					/>
					<Overlay onClick={handleCloseVerticalNavigation} />
				</>
			)}
		</>
	);
}

export default Header;

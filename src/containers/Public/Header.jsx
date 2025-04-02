import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Logo from "../../assets/logo-phongtro.svg";
import { CiFolderOn, CiHeart, CiLogin, CiWarning } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { Button } from "../../components";
import { useCallback, useEffect, useState } from "react";
import * as actions from "../../store/actions";
import Search from "./Search";
import { MdOutlineMenu } from "react-icons/md";
import { getPostLimit } from "../../store/actions/post";
import { path } from "../../utils/constants";
import { IoCreateOutline, IoPricetagsOutline } from "react-icons/io5";
import { FaCaretDown, FaRegEyeSlash } from "react-icons/fa";
import defaultUserImg from "../../assets/default-user.svg";
import { IoIosCheckmarkCircleOutline, IoIosLogOut } from "react-icons/io";
import { LuFolderCog } from "react-icons/lu";

function Header({ onOpenVerticalNav }) {
	const [visible, setVisible] = useState(false);
	const { isLoggedIn, user } = useSelector((state) => state.auth);
	const [urlWhenLogin, setUrlWhenLogin] = useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleRenderPost = () => {
		dispatch(getPostLimit());
	};

	const handleNavigateLogin = useCallback(
		(flag) => {
			navigate("/login", {
				replace: true,
				state: {
					type: flag,
				},
			});
		},
		[navigate]
	);

	useEffect(() => {
		const urlLogin = `/${path.LOGIN}`;
		const urlNewPost = `${path.QUAN_LY}/${path.DANG_TIN_MOI}`;
		
		isLoggedIn ? setUrlWhenLogin(urlNewPost) : setUrlWhenLogin(urlLogin);
		
	}, [isLoggedIn, user]);

	const handleLogout = () => {
		dispatch(actions.logout());
	};

	return (
		<div className="bg-white fixed top-0 right-0 left-0 z-10">
			<div className="w-5xl flex justify-between items-center my-0 mx-auto border-b-[1px] border-borderColor px-2 max-w-[100%]">
				<div className="flex items-center space-x-2">
					<Link to={"/"} onClick={handleRenderPost}>
						<img
							src={Logo}
							alt="Logo"
							className="w-[190px] h-[60px] object-contain mr-2"
						/>
					</Link>

					<Button
						textColor="text-black"
						iconLeft={<CiLocationOn className="w-full h-full" />}
						widthAndHeightIcon={"w-[13px] h-[13px]"}
						hoverEffect="darken"
					>
						Tìm kiếm theo khu vực
					</Button>
					<Search />
				</div>

				<div className="flex items-center space-x-1">
					<div className="hidden lg:flex items-center space-x-1">
						<Link
							to={`/${path.THE_NEWS_SAVED}`}
							className="flex items-center text-[13px] hover:bg-gray-200 py-2 px-4 transition-all duration-150 ease-linear rounded-xl"
						>
							<CiHeart className="w-[20px] h-[20px]" />
							Tin đã lưu
						</Link>

						{!isLoggedIn ? (
							<>
								<Button
									iconLeft={
										<CiLogin className="w-full h-full" />
									}
									textColor="text-white"
									bgColor="bg-primary"
									widthAndHeightIcon={"w-[18px] h-[18px]"}
									hoverEffect="darken"
									sizeButton="md"
									onClick={() => handleNavigateLogin(false)}
								>
									Đăng nhập
								</Button>
								<Button
									iconLeft={
										<CiLogin className="w-full h-full" />
									}
									textColor="text-white"
									bgColor="bg-primary"
									widthAndHeightIcon={"w-[18px] h-[18px]"}
									hoverEffect="darken"
									sizeButton="md"
									onClick={() => handleNavigateLogin(true)}
								>
									Đăng ký
								</Button>
							</>
						) : (
							<>
								<div className="relative">
									<Button
										bgColor="bg-white"
										textColor="text-textColor"
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
											<span>{user.name}</span>
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
														{user.name}
													</h3>
													<p className="text-[12px]">
														{user.phone}
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
														<span>
															Đang hiển thị
														</span>
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
														<span>
															Bảng giá dịch vụ
														</span>
													</div>
													<div className="flex items-center gap-2 hover:bg-subBg w-full rounded-md hover:cursor-pointer py-1">
														<div className="bg-subBg rounded-[50%] flex items-center justify-center p-2">
															<LuFolderCog className="text-[18px]" />
														</div>
														<span>
															Quản lý giao dịch
														</span>
													</div>
													<div className="flex items-center gap-2 hover:bg-subBg w-full rounded-md hover:cursor-pointer py-1">
														<div className="bg-subBg rounded-[50%] flex items-center justify-center p-2">
															<IoPricetagsOutline className="text-[18px]" />
														</div>
														<span>
															Quản lý tài khoản
														</span>
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

								{/* <Button
									iconLeft={
										<CiLogout className="w-full h-full" />
									}
									textColor="text-white"
									bgColor="bg-[red]"
									widthAndHeightIcon={"w-[18px] h-[18px]"}
									hoverEffect="lighten"
									sizeButton="md"
									onClick={handleLogout}
								>
									Đăng xuất
								</Button> */}
								<Button
									path={urlWhenLogin}
									iconLeft={
										<IoCreateOutline className="w-full h-full" />
									}
									bgColor="bg-redColor"
									hoverEffect="none"
								>
									Đăng tin
								</Button>
							</>
						)}
					</div>
					<div className="lg:hidden">
						<Button
							iconLeft={
								<MdOutlineMenu className="text-black w-full h-full text-lg" />
							}
							textColor="text-black"
							bgColor="bg-none"
							onClick={onOpenVerticalNav}
						>
							Danh mục
						</Button>
					</div>
					{/* <p>Xin chào ThanhNhangg</p> */}
				</div>
			</div>
		</div>
	);
}

Header.propTypes = {
	onOpenVerticalNav: PropTypes.func,
};

export default Header;

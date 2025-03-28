import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../../assets/logo-phongtro.svg";
import { CiFolderOn, CiHeart, CiLogin, CiLogout } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { Button } from "../../components";
import { useCallback } from "react";
import * as actions from "../../store/actions";
import Search from "./Search";
import { MdOutlineMenu } from "react-icons/md";
import { getPostLimit } from "../../store/actions/post";
import { path } from "../../utils/constants";

function Header({ onOpenVerticalNav }) {
	const { isLoggedIn } = useSelector((state) => state.auth);
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
						<Link to={`/${path.THE_NEWS_SAVED}`} className="flex items-center text-[13px] hover:bg-gray-200 py-2 px-4 transition-all duration-150 ease-linear rounded-xl">
							<CiHeart className="w-[20px] h-[20px]" />
							Tin đã lưu
						</Link>
						<Button
							iconLeft={<CiFolderOn className="w-full h-full" />}
							textColor="text-black"
							bgColor="bg-none"
							widthAndHeightIcon={"w-[18px] h-[18px]"}
						>
							Quản lý
						</Button>
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
							<Button
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
							</Button>
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

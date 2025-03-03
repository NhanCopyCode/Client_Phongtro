import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo-phongtro.svg";
import { CiFolderOn, CiHeart, CiLogin } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { Button } from "../../components";
import { useCallback } from "react";
import { path } from "../../utils/constants";

function Header() {
	const navigate = useNavigate();

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

	return (
		<div className="w-lg-container flex justify-between items-center my-0 mx-auto border-b-[1px] border-borderColor px-2 bg-white">
			<div className="flex items-center">
				<Link to={"/"}>
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
			</div>

			<div className="flex items-center space-x-1">
				<Button
					iconLeft={<CiHeart className="w-full h-full" />}
					textColor="text-black"
					bgColor="bg-none"
					widthAndHeightIcon={"w-[18px] h-[18px]"}
				>
					Tin đã lưu
				</Button>
				<Button
					iconLeft={<CiFolderOn className="w-full h-full" />}
					textColor="text-black"
					bgColor="bg-none"
					widthAndHeightIcon={"w-[18px] h-[18px]"}
				>
					Quản lý
				</Button>
				<Button
					iconLeft={<CiLogin className="w-full h-full" />}
					textColor="text-white"
					bgColor="bg-primary"
					widthAndHeightIcon={"w-[18px] h-[18px]"}
					hoverEffect="lighten"
					sizeButton="md"
					onClick={(e) => handleNavigateLogin(false)}
				>
					Đăng nhập
				</Button>
				<Button
					iconLeft={<CiLogin className="w-full h-full" />}
					textColor="text-white"
					bgColor="bg-primary"
					widthAndHeightIcon={"w-[18px] h-[18px]"}
					hoverEffect="lighten"
					sizeButton="md"
					onClick={(e) => handleNavigateLogin(true)}
				>
					Đăng ký
				</Button>
				{/* <p>Xin chào ThanhNhangg</p> */}
			</div>
		</div>
	);
}

export default Header;

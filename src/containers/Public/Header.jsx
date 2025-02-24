import { useNavigate } from "react-router-dom";

import Logo from "../../assets/logo-phongtro.svg";
import { CiFolderOn, CiHeart, CiLogin } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { Button } from "../../components";
const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};
function Header() {
	const navigate = useNavigate();

	const handleNavigateLogin = () => {
		navigate("/login");
	};
	return (
		<section className="w-lg-container flex justify-between items-center my-0 mx-auto border px-2">
			<div className="flex items-center">
				<img
					src={Logo}
					alt="Logo"
					className="w-[190px] h-[60px] object-contain mr-2"
				/>
				{/* <div
					className="relative px-4 py-2 outline-0 border-0 rounded-2xl bg-background-input
						text-black text-[14px] h-[35px] flex items-center "
				>
					<CiLocationOn />
					<p>Tìm kiếm theo khu vực</p>
				</div> */}
				<Button
					textColor="text-black"
					iconLeft={<CiLocationOn className="w-full h-full" />}
					widthAndHeightIcon={"w-[13px] h-[13px]"}
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
					onClick={handleNavigateLogin}
				>
					Đăng nhập
				</Button>
				<p>Xin chào ThanhNhangg</p>
			</div>
		</section>
	);
}

export default Header;

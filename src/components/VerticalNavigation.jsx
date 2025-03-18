import { LiaTimesSolid } from "react-icons/lia";
import Logo from "../assets/logo-phongtro.svg";
import Button from "./Button";
import { FiUserPlus } from "react-icons/fi";
import { CiLogin } from "react-icons/ci";
import { IoCreateOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function VerticalNavigation() {
	return (
		<div className="fixed top-0 right-0 w-[400px] max-w-[100%] bg-white h-screen z-15">
			<div className="py-2 px-5 shadow-sm">
				<div className="flex items-center justify-between">
					<div className="w-[170px] max-w-[170px]">
						<img
							src={Logo}
							alt=""
							className="w-[100%] object-cover"
						/>
					</div>
					<Button
						iconLeft={<LiaTimesSolid className="w-full h-full" />}
						bgColor="bg-none"
						textColor="text-text"
						fontSize="text-xl"
					/>
				</div>
			</div>

			<div className="p-5 bg-[#f5f6f6]">
				<div className="flex items-center gap-2 mb-2">
					<Button
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
				</div>
				<Button
					iconLeft={<IoCreateOutline />}
					textColor="text-white"
					bgColor="bg-redColor"
					rounded="rounded-3xl"
					width="w-[100%]"
                    fontSize="text-[14px]"
				>
					Đăng tin mới
				</Button>

                <div className="mt-4 bg-white p-5 rounded-sm">
                    
                </div>
			</div>
		</div>
	);
}

export default VerticalNavigation;

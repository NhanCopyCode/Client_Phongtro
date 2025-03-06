import { NavLink } from "react-router-dom";

function Navigation() {
	return (
		<div className="w-full shadow-md relative z-10 bg-white">
			<div className="w-lg-container flex items-center my-0 mx-auto  px-2 ">
				<div className="flex h-[40px] w-full items-center text-black">
					<ul className="flex h-full items-center space-x-4 text-[13px] cursor-pointer space-x-4">
						<li className="hover:text-[red] flex items-center h-[100%] hover:border-b-2 hover:border-[red] border-b-2 border-[transparent]">
							<NavLink>Phòng trọ</NavLink>
						</li>
						<li className="hover:text-[red] flex items-center h-[100%] hover:border-b-2 hover:border-[red] border-b-2 border-[transparent]">
							<NavLink>Nhà nguyên căn</NavLink>
						</li>
						<li className="hover:text-[red] flex items-center h-[100%] hover:border-b-2 hover:border-[red] border-b-2 border-[transparent]">
							<NavLink>Căn hộ chung cư</NavLink>
						</li>
						<li className="hover:text-[red] flex items-center h-[100%] hover:border-b-2 hover:border-[red] border-b-2 border-[transparent]">
							<NavLink>Căn hộ chung cư</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Navigation;

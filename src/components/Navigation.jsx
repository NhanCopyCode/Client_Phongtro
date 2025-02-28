import { Link } from "react-router-dom";

function Navigation() {
	return (
		<div className="w-full shadow-md">
			<div className="w-lg-container flex items-center my-0 mx-auto  px-2 ">
				<div className="flex h-[40px] w-full items-center text-black">
					<ul className="flex h-full items-center space-x-4 text-[13px] cursor-pointer space-x-4">
						<li className="hover:text-[red] hover:underline underline-offset-8">
							<Link>Phòng trọ</Link>
						</li>
						<li className="hover:text-[red] hover:underline underline-offset-8">
							<Link>Nhà nguyên căn</Link>
						</li>
						<li className="hover:text-[red] hover:underline underline-offset-8">
							<Link>Căn hộ chung cư</Link>
						</li>
						<li className="hover:text-[red] hover:underline underline-offset-8">
							<Link>Căn hộ chung cư</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Navigation;

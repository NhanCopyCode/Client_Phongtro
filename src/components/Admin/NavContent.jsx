import PropTypes from "prop-types";
import { useState } from "react";

function NavContent({ title, navItems }) {
	const [activeId, setActiveId] = useState(null);
	const handleNavClick = (id) => {
		setActiveId(id);
		const section = document.getElementById(id);
		if (section) {
			const headerOffset = 150; // Offset in pixels
			const elementPosition = section.getBoundingClientRect().top;
			const offsetPosition =
				elementPosition + window.pageYOffset - headerOffset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		}
	};

	return (
		<div className="mt-3 px-10 h-[90px] shadow-md w-[100%] fixed top-[33px] pt-2 bg-white z-10">
			<h1 className="text-[22px] font-medium">{title}</h1>
			<ul className="flex items-center gap-4 text-[14px] text-secondaryText">
				{navItems &&
					navItems.length > 0 &&
					navItems.map((nav) => {
						const active = activeId === nav.id;
						return (
							<li
								key={nav.id}
								className={`py-[14px] border-b border-transparent hover:border-redColor hover:text-redColor hover:cursor-pointer ${
									active
										? "!border-redColor text-redColor"
										: ""
								}`}
								onClick={() => handleNavClick(nav.id)}
							>
								<span>{nav.label}</span>
							</li>
						);
					})}

				{/* <li className="py-[18px] border-b border-transparent hover:border-redColor hover:text-redColor hover:cursor-pointer">
					<a href="">Thông tin mô tả</a>
				</li>
				<li className="py-[18px] border-b border-transparent hover:border-redColor hover:text-redColor hover:cursor-pointer">
					<a href="">Hình ảnh</a>
				</li>
				<li className="py-[18px] border-b border-transparent hover:border-redColor hover:text-redColor hover:cursor-pointer">
					<a href="">Âm thanh</a>
				</li>
				<li className="py-[18px] border-b border-transparent hover:border-redColor hover:text-redColor hover:cursor-pointer">
					<a href="">Video</a>
				</li> */}
			</ul>
		</div>
	);
}

NavContent.propTypes = {
	title: PropTypes.string,
	navItems: PropTypes.array,
};

export default NavContent;

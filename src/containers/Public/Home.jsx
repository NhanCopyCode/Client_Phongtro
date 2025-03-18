import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Navigation } from "../../components";
import SearchBottom from "./SearchBottom";
import VerticalNavigation from "../../components/VerticalNavigation";
import { useState } from "react";
import Overlay from "../../components/Overlay";

function Home() {
	const [isOpen, setIsOpen] = useState(false);
	const handleOpenVerticalNavigation = () => {
		setIsOpen(!isOpen);
	};

	const handleCloseVerticalNavigation = () => {
		setIsOpen(false);
	};
	return (
		<div className="w-full bg-background">
			<Header onOpenVerticalNav={handleOpenVerticalNavigation} />
			<Navigation />
			{isOpen && (
				<>
					<VerticalNavigation
						isOpen={isOpen}
						onClick={handleCloseVerticalNavigation}
					/>
					<Overlay onClick={handleCloseVerticalNavigation} />
				</>
			)}

			<SearchBottom />
			<Outlet />
		</div>
	);
}

export default Home;

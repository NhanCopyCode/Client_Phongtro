import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Navigation } from "../../components";
import SearchBottom from "./SearchBottom";
import VerticalNavigation from "../../components/VerticalNavigation";

function Home() {
	return (
		<div className="w-full bg-background">
			<Header />
			<Navigation />
			<VerticalNavigation />
			<SearchBottom />
			<Outlet />
		</div>
	);
}

export default Home;

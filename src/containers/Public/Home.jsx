import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Navigation } from "../../components";
import SearchBottom from "./SearchBottom";

function Home() {
	return (
		<div className="w-full bg-background">
			<Header />
			<Navigation />
			<SearchBottom />
			<Outlet />
		</div>
	);
}

export default Home;

import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Navigation } from "../../components";

function Home() {
	return (
		<div className="w-full bg-background">
			<Header />
			<Navigation />
			<Outlet />
			<Footer />
		</div>
	);
}

export default Home;

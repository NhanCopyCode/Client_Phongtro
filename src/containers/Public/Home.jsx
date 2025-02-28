import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Navigation } from "../../components";

function Home() {
	return (
		<>
			<Header />
			<Navigation />
			<div className="w-lg-container my-0 mx-auto px-2">
				<Outlet />
			</div>
			<Footer />
		</>
	);
}

export default Home;

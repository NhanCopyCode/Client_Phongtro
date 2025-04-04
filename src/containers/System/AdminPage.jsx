import { Outlet } from "react-router-dom";
import Header from "../../components/Admin/Header";
import Sidebar from "../../components/Admin/Sidebar";
import NavContent from "../../components/Admin/NavContent";
import { useEffect } from "react";

function AdminPage() {
	useEffect(() => {
		window.scroll({ top: 0, left: 0, behavior: "smooth" });
	}, []);
	return (
		<>
			<Header />
			<div className="flex relative">
				<Sidebar />
				<div className="ml-[210px] w-[100%]">
					<Outlet />
				</div>
			</div>
		</>
	);
}

export default AdminPage;

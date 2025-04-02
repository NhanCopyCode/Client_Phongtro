import { Outlet } from "react-router-dom";
import Header from "../../components/Admin/Header";
import Sidebar from "../../components/Admin/Sidebar";
import NavContent from "../../components/Admin/NavContent";

function AdminPage() {
	return (
		<>
			<Header />
			<div className="flex relative">
				<Sidebar />
				<div className="ml-[210px] w-[100%]">
                    <NavContent />
					<Outlet />
				</div>
			</div>
		</>
	);
}

export default AdminPage;

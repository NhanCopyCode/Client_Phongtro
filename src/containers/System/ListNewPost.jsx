import { CiSearch } from "react-icons/ci";
import NavContent from "../../components/Admin/NavContent";
import { navItemListPost } from "../../utils/constants";
import ListItem from "../../components/Admin/ListItem";

function ListNewPost() {
	return (
		<>
			<NavContent
				title={"Danh sách tin đăng"}
				navItems={navItemListPost}
			/>
			<div className="px-10 py-12 bg-gray">
				<div className="mb-5 w-[250px] relative">
					<input
						type="email"
						id="email"
						className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Tìm theo mã tin hoặc tiêu đề"
						required
					/>
					<CiSearch className="w-5 h-5 absolute top-[25%] right-1" />
				</div>
                <ListItem />
			</div>
		</>
	);
}

export default ListNewPost;

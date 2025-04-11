import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import NavContent from "../../components/Admin/NavContent";
import { navItemListPost, path } from "../../utils/constants";
import ListItem from "../../components/Admin/ItemPost";
import notFound from "../../assets/not-found.svg";
import { Link } from "react-router-dom";
import * as postService from "../../services/postService";
import { useSelector } from "react-redux";

function ListPost() {
	const { user } = useSelector((state) => state.auth);
	const [searchInput, setSearchInput] = useState("");
	const [listPost, setListPost] = useState([]);

	useEffect(() => {
		const fetchUser = async () => {
			const response = await postService.getPostServiceByUserId(user?.id);
			setListPost(response.data);
		};

		fetchUser();
	}, [user?.id]);

	const handleSearchInput = (e) => {
		setSearchInput(e.target.value);
	};

	useEffect(() => {
		const delayDebounce = setTimeout(async () => {
			if (searchInput.trim()) {
				const response = await postService.findPostByTitleAndUserId(
					searchInput,
					user?.id
				);
				setListPost(response.data?.data);
				console.log("response:", response);
			}else {
				const response = await postService.getPostServiceByUserId(user?.id);

				setListPost(response.data);
			}
		}, 1000);

		return () => clearTimeout(delayDebounce);
	}, [searchInput, user?.id]);
	return (
		<>
			<NavContent
				title={"Danh sách tin đăng"}
				navItems={navItemListPost}
			/>
			<div className="px-10 py-12 bg-gray">
				<div className="mb-5 w-[250px] relative">
					<input
						type="text"
						id="input"
						className="w-full bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Tìm theo mã tin hoặc tiêu đề"
						required
						value={searchInput}
						onChange={handleSearchInput}
					/>
					<CiSearch className="w-5 h-5 absolute top-[25%] right-1" />
				</div>
				{listPost.length > 0 ? (
					<div className="flex flex-col items-start gap-3">
						{listPost.map((post) => {
							return <ListItem key={post.id} post={post} />;
						})}
					</div>
				) : (
					<div className="bg-gray p-12 flex items-center justify-center flex-col min-h-[100%]">
						<img src={notFound} className="w-[150px] h-[150px]" />
						<div className="flex items-center flex-col justify-center text-[13px]">
							<span>Tìm thấy 0 tin đăng</span>
							<span>
								Bấm{" "}
								<Link
									to={path.QUAN_LY + "/" + path.DANG_TIN_MOI}
									className="text-primary underline underline-offset-2"
								>
									vào đây
								</Link>{" "}
								để bắt đầu đăng tin
							</span>
						</div>
					</div>
				)}
			</div>
		</>
	);
}

export default ListPost;

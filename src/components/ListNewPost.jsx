import NewPostItem from "./NewPostItem";

function ListNewPost() {
	return (
		<div className="bg-white shadow-sm rounded-sm px-3 py-4 mt-4">
			<h3 className="font-medium text-sm text-text">Tin mới đăng</h3>
			<div className="mt-3 flex flex-col gap-2">
				<NewPostItem />
				<NewPostItem />
				<NewPostItem />
				<NewPostItem />
			</div>
		</div>
	);
}

export default ListNewPost;

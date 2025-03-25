import { memo, useEffect } from "react";
import NewPostItem from "./NewPostItem";
import { useDispatch, useSelector } from "react-redux";
import { getNewPost } from "../store/actions/post";

function ListNewPost() {
	const dispatch = useDispatch();
	const { newPosts } = useSelector((state) => state.post);
	useEffect(() => {
		dispatch(getNewPost());
	}, [dispatch]);


	return (
		<div className="bg-white shadow-sm rounded-sm px-3 py-4 mt-4">
			<h3 className="font-medium text-sm text-text">Tin mới đăng</h3>
			<div className="mt-3 flex flex-col gap-2">
				{newPosts.map((post, index) => {
					return (
						<NewPostItem
							key={index}
							title={post.title}
							to={post.id}
							image={JSON.parse(post.images.image)[0]}
							price={post.attributes.price}
							createdAt={post.createdAt}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default memo(ListNewPost);

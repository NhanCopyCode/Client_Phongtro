import { text } from "../../utils/constants";
import Provinces from "../../components/Provinces";
import ListRental from "../../components/ListRental";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../store/actions/post";

function Homepage() {
	const dispatch = useDispatch();
	// const { posts } = useSelector(state => state.posts);
	const [searchParams] = useSearchParams();
	const { slug } = useParams();

	// useEffect(() => {
	// 	dispatch(setPost(slug));
	// }, [slug, dispatch]);
	return (
		<>
			<div className="w-full bg-transparent flex items-center justify-center flex-col mt-4">
				<div className="max-w-[100%] w-5xl mt-4">
					<div className="text-xl font-medium">{text.HOME_TITLE}</div>
					<div className="text-[12px]">{text.HOME_SUB_TITLE}</div>
					<Provinces />
				</div>
			</div>
			<ListRental page={searchParams.get("page")} />
		</>
	);
}

export default Homepage;

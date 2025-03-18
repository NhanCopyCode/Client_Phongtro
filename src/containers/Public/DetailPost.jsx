import { useParams } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";

function DetailPost() {
	const { title, postId } = useParams();

	return (
		<div className="w-5xl m-auto mt-4">
			<BreadCrumb />
			This is detail post
		</div>
	);
}

export default DetailPost;

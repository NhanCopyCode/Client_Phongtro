import axios from "../axios.config";

const getAllPosts = async () => {
	try {
		const response = await axios.get("/api/v1/posts");

		return response;
	} catch (error) {
		console.log("Error at post service file: ", error);
	}
};

const apiGetPostLimit = async (page) => {
	try {
		const response = await axios.get(`/api/v1/posts/limit?page=${page}`);

		return response;
	} catch (error) {
		console.log("Error at post service file: ", error);
	}
};

const filterPostService = async (slug) => {
	try {
		const response = await axios.get(`/api/v1/posts/filter/${slug}`);
		return response;
	} catch (error) {
		console.log("Error at post service file: ", error);
	}
};
export { getAllPosts, apiGetPostLimit, filterPostService };

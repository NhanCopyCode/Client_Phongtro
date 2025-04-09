import axios from "../axios.config";

const getAllPosts = async () => {
	try {
		const response = await axios.get("/api/v1/posts");

		return response;
	} catch (error) {
		console.log("Error at post service file: ", error);
	}
};

const apiGetPostLimit = async (query) => {
	try {
		const response = await axios({
			method: "get",
			url: `/api/v1/posts/limit`,
			params: query,
		});

		return response;
	} catch (error) {
		console.log("Error at post service file: ", error);
	}
};

const getPostByIdService = async (id) => {
	try {
		const response = await axios.get(`/api/v1/posts/filter/${id}`);

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

const getNewPostService = async () => {
	try {
		const response = await axios.get("/api/v1/posts/newPost");

		return response;
	} catch (error) {
		console.log("Error at post service file: ", error);
	}
};

const createPostService = async (data) => {
	try {
		// console.log("data create post service: ", data);
		const response = await axios.post("/api/v1/posts/create", data, {
			headers: {
				"Content-Type": "multipart/form-data",
			},	
		});

		return response;
	} catch (error) {
		console.log("Error at post service file: ", error);
	}
};
export {
	getAllPosts,
	apiGetPostLimit,
	filterPostService,
	getPostByIdService,
	getNewPostService,
	createPostService,
};

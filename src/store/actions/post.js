import actionTypes from "./actionTypes";
import { apiGetPostLimit, getAllPosts } from "../../services/postService";

export const getPosts = () => async (dispatch) => {
	try {
		const response = await getAllPosts();

		console.log(response);
		if (response.data.data) {
			dispatch({
				type: actionTypes.GET_POSTS,
				payload: {
					posts: response.data?.data,
					message: response.data?.message,
				},
			});
		}
	} catch (error) {
		console.log("Error at post action file: ", error);
		dispatch({
			type: actionTypes.GET_POSTS,
			payload: {
				posts: null,
				message: null,
			},
		});
	}
};

export const getPostLimit = (page) => async (dispatch) => {
	try {
		const response = await apiGetPostLimit(page);
		// console.log(response);

		if (response.data.data) {
			dispatch({
				type: actionTypes.GET_POSTS_LIMIT,
				payload: {
					posts: response.data?.data?.rows,
					count: response.data?.data?.count,
					message: response.data?.message,
				},
			});
		}
	} catch (error) {
		console.log("Error at post action file: ", error);
		dispatch({
			type: actionTypes.GET_POSTS_LIMIT,
			payload: {
				posts: null,
				message: null,
			},
		});
	}
};

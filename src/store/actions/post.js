import actionTypes from "./actionTypes";
import * as postService from "../../services/postService";

export const getPosts = () => async (dispatch) => {
	try {
		const response = await postService.getAllPosts();

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

export const getPostLimit = (query) => async (dispatch) => {
	try {
		const response = await postService.apiGetPostLimit(query);
		// console.log(response);
		if (response.data?.data) {
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

export const setPost = (slug) => async (dispatch) => {
	try {
		const response = await postService.filterPostService(slug);
		// dispatch({
		// 	type: actionTypes.SET_POST,
		// 	payload: {
			
		// 	},
		// });
		console.log("response post filter: ", response);
	} catch (error) {
		console.log("Error at post action file: ", error);
	}
};

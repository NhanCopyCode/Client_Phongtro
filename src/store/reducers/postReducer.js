import actionTypes from "../actions/actionTypes";

const initState = {
	posts: [],
	newPosts: [],
	message: "",
	count: 0,
};

const postReducer = (state = initState, action) => {
	switch (action.type) {
		case actionTypes.GET_POSTS:
		case actionTypes.GET_POSTS_LIMIT:
		case actionTypes.SET_POST:
			return {
				...state,
				posts: action.payload?.posts || [],
				count: action.payload?.count || 0,
				message: action.payload?.message || "",
			};
		case actionTypes.GET_NEW_POST:

			return {
				...state,
				newPosts: action.payload?.newPosts || [],
				message: action.payload?.message || "",
			};
		default:
			return state;
	}
};

export default postReducer;

import actionTypes from "../actions/actionTypes";

const initState = {
	posts: [],
	message: "",
	count: 0
};

const postReducer = (state = initState, action) => {
	switch (action.type) {
		case actionTypes.GET_POSTS:
		case actionTypes.GET_POSTS_LIMIT:
			return {
				...state,
				posts: action.payload?.posts || [],
				count: action.payload?.count || 0,
				message: action.payload?.message || "",
			}
		default:
			return state;
	}
};


export default postReducer;
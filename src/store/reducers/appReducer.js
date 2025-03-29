import actionTypes from "../actions/actionTypes";

const initState = {
	categories: [],
	prices: [],
	acreages: [],
	provinces: [],
	message: "",
};

const appReducer = (state = initState, action) => {
	switch (action.type) {
		case actionTypes.GET_CATEGORIES:
			return {
				...state,
				categories: action.payload?.categories || [],
				message: action.payload?.message || "",
			};
		case actionTypes.GET_PRICES:
			return {
				...state,
				prices: action.payload?.prices || [],
				message: action.payload?.message || "",
			};
		case actionTypes.GET_ACREAGES:
			return {
				...state,
				acreages: action.payload?.acreages || [],
				message: action.payload?.message || "",
			};
		case actionTypes.GET_PROVINCES:
			return {
				...state,
				provinces: action.payload?.provinces || [],
				message: action.payload?.message || "",
			};
		default:
			return state;
	}
};

export default appReducer;

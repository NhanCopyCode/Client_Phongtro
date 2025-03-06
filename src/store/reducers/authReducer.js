import actionTypes from "../actions/actionTypes";

const initState = {
	isLoggedIn: false,
	token: null,
	msg: "",
	update: false,
};

const authReducer = (state = initState, action) => {
	switch (action.type) {
		case actionTypes.REGISTER_SUCCESS: {
			const newState = {
				...state,
				isLoggedIn: true,
				token: action.data,
			};

			return newState;
		}
		case actionTypes.REGISTER_FAIL:
			return {
				...state,
				isLoggedIn: false,
				msg: action.data,
				token: null,
			};
		case actionTypes.LOGIN_SUCCESS:
			return {
				...state,
				isLoggedIn: true,
				token: action.data,
			};
		case actionTypes.LOGIN_FAIL:
			return {
				...state,
				isLoggedIn: false,
				token: null,
				msg: action.data,
				update: !state.update,
			};
		case actionTypes.LOGOUT:
			return {
				...state,
				isLoggedIn: false,
				token: null,
				msg: null,
			};
		default:
			return state;
	}
};

export default authReducer;

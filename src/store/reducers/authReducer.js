import actionTypes from "../actions/actionTypes";

const initState = {
	isLoggedIn: false,
	user: null,
	token: null,
	msg: null,
	update: false,
};

const authReducer = (state = initState, action) => {
	switch (action.type) {
		case actionTypes.REGISTER_SUCCESS: {
			const newState = {
				...state,
				isLoggedIn: true,
				token: action.data?.token,
				user: action.data?.user,
				msg: null,
			};

			return newState;
		}
		case actionTypes.REGISTER_FAIL:
			return {
				...state,
				isLoggedIn: false,
				msg: action.data,
				token: null,
				user:null,
			};
		case actionTypes.LOGIN_SUCCESS:
			return {
				...state,
				isLoggedIn: true,
				token: action.data?.token,
				user: action.data?.user,
				msg: null,
			};
		case actionTypes.LOGIN_FAIL:
			return {
				...state,
				isLoggedIn: false,
				token: null,
				msg: action.data,
				update: !state.update,
				user: null,
			};
		case actionTypes.LOGOUT:
			return {
				...state,
				isLoggedIn: false,
				token: null,
				msg: null,
				user: null,
			};
		default:
			return state;
	}
};

export default authReducer;

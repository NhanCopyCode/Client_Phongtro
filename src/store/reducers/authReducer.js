import actionTypes from "../actions/actionTypes";

const initState = {
	isLoggedIn: false,
	token: null,
	msg: "",
};

const authReducer = (state = initState, action) => {
	switch (action.type) {
		case actionTypes.REGISTER_SUCCESS: {

			const newState = {
				...state,
				isLoggedIn: true,
				token: action.data,
				msg: ''
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
				msg: ''
			}
		case actionTypes.LOGIN_FAIL: 
			return {
				...state,
				isLoggedIn: false,
				token: null,
				msg: action.data 
			}
		case actionTypes.LOGOUT: 
			return {
				...state,
				isLoggedIn: false,
				token: null,
				msg: ''
			}
		default:
			return state;
	}
};

export default authReducer;

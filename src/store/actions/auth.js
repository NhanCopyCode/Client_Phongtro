import actionTypes from "./actionTypes";
import { apiLogin, apiRegister } from "../../services/authService";

export const register = (payload) => async (dispatch) => {
	try {
		const response = await apiRegister(payload);

		if (response?.data.errorCode === 0) {
			dispatch({
				type: actionTypes.REGISTER_SUCCESS,
				data: {
					token: response.data?.token,
					user: response.data?.user,
				},
			});
		} else {
			dispatch({
				type: actionTypes.REGISTER_FAIL,
				data: response.data?.message,
			});
		}
	} catch (error) {
		dispatch({
			type: actionTypes.REGISTER,
			data: null,
		});
	}
};

export const login = (payload) => async (dispatch) => {
	try {
		const response = await apiLogin(payload);
		console.log("response: ", response);
		if (response?.data.errorCode === 0) {
			dispatch({
				type: actionTypes.LOGIN_SUCCESS,
				data: {
					token: response.data?.token,
					user: response.data?.user,
				},
			});
		} else {
			dispatch({
				type: actionTypes.LOGIN_FAIL,
				data: response.data?.message,
			});
		}
	} catch (error) {
		dispatch({
			type: actionTypes.LOGIN,
			data: null,
		});
	}
};

export const logout = () => {
	return {
		type: actionTypes.LOGOUT,
	};
};

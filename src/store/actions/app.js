import actionTypes from "./actionTypes";
import {
	apiGetAcreages,
	apiGetCategories,
	apiGetPrices,
} from "../../services/categoryService";

const getAllCategories = () => async (dispatch) => {
	try {
		const response = await apiGetCategories();
		if (response) {
			dispatch({
				type: actionTypes.GET_CATEGORIES,
				payload: {
					categories: response.data,
					message: "Get all list category successfully!",
				},
			});
		}
	} catch (error) {
		dispatch({
			type: actionTypes.GET_CATEGORIES,
			payload: {
				categories: null,
				message: "Can not find any category!",
			},
		});
	}
};

const getAllPrices = () => async (dispatch) => {
	try {
		const response = await apiGetPrices();
		if (response) {
			dispatch({
				type: actionTypes.GET_PRICES,
				payload: {
					prices: response.data,
					message: "Get all list category successfully!",
				},
			});
		}
	} catch (error) {
		dispatch({
			type: actionTypes.GET_PRICES,
			payload: {
				prices: null,
				message: "Can not find any category!",
			},
		});
	}
};

const getAllAcreages = () => async (dispatch) => {
	try {
		const response = await apiGetAcreages();
		if (response) {
			dispatch({
				type: actionTypes.GET_ACREAGES,
				payload: {
					acreages: response.data,
					message: "Get all list category successfully!",
				},
			});
		}
	} catch (error) {
		dispatch({
			type: actionTypes.GET_ACREAGES,
			payload: {
				acreages: null,
				message: "Can not find any category!",
			},
		});
	}
};

export { getAllCategories, getAllPrices, getAllAcreages };

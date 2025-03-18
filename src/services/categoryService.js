import axios from "../axios.config";

const apiGetCategories = async () => {
	try {
		const response = await axios.get("/api/v1/categories");
		return response;
	} catch (error) {
		return {
			message: "Error at navigate service file: " + error,
		};
	}
};

const apiGetPrices = async () => {
	try {
		const response = await axios.get("/api/v1/price");
		return response;
	} catch (error) {
		return {
			message: "Error at navigate service file: " + error,
		};
	}
};

const apiGetAcreages = async () => {
	try {
		const response = await axios.get("/api/v1/acreage");
		return response;
	} catch (error) {
		return {
			message: "Error at navigate service file: " + error,
		};
	}
};

export { apiGetCategories, apiGetPrices, apiGetAcreages };

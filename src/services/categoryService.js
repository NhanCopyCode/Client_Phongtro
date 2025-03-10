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

export { apiGetCategories };

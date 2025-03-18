import axios from "../axios.config";

const getAllPrices = async () => {
	try {
		const response = await axios.get("/api/v1/price");


        return response.data;
	} catch (error) {
		console.log("error at price service file: " + error);
	}
};

export { getAllPrices };

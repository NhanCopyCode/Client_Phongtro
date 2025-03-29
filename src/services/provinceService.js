import axios from '../axios.config';

const getAllProvinceService = async () => {
    try {
		const response = await axios.get("/api/v1/provinces");

		return response;
	} catch (error) {
		console.log("error at price service file: " + error);
	}
}

export {
    getAllProvinceService
}
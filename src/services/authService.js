import axios from "../axios.config";


const apiRegister = async (payload) => {
	try {
		const response = await axios.post("/api/v1/auth/register", payload);
		return response;
	} catch (error) {
		console.log("Error at authService", error);
	}
};

const apiLogin = async (payload) => {
	try {
		const response = await axios.post("/api/v1/auth/login", payload);

		return response;
	} catch (error) {
		console.log("Error at authService", error);
	}
};

export { apiRegister, apiLogin };

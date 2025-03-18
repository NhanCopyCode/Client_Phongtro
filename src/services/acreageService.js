import axios from '../axios.config';

const getAllAcreagesService = async () => {
	try {
        const response = await axios.get('/api/v1/acreage');
        return response.data;
	} catch (error) {
        console.log("Error at acreage service file: ", + error);
    }
};

export { getAllAcreagesService };

import axios from "axios";

const getNavigate = async() => {
    try {
        
        const response = await axios.get('/api/v1/navigate');
        console.log(response);
        return response;
    } catch (error) {
        return {
            message: "Error at navigate service file: " + error,
        }
    }
}


export {
    getNavigate
}
import axios from '../axios.config';

const apiRegister = async (payload) => {
    try {
        const response = await axios.post({
            method: 'POST',
            url: '/api/v1/auth/register',
            data: payload
        })

        return response;
    } catch (error) {
        console.log('Error at authService', error);
    }
}

export {
    apiRegister
}
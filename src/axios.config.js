import axios from "axios";


const instance = axios.create({
	baseURL: import.meta.env.VITE_SERVER_URL,
});

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = localStorage.getItem("persist:auth");
    console.log(token);
    return config;
  }, function (error) {
    // Do something with request error
    console.log(error);
    return Promise.reject(error);
  });


export default instance;
import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  params: {
    key: process.env.REACT_APP_API_KEY,
  },
});

export default AxiosInstance;

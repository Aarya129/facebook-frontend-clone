import axios from "axios";
import userStore from "@/store/userStore";

const ApiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;


const axiosInstance = ({ headers }) => {
    const { user, clearUser } = userStore();
    
    const defaultHeaders = {
        "authorization": `Bearer ${user?.accesstoken}`,
        "Content-Type": "application/json"
    };

    const axiosInstance = axios.create({
        baseURL: ApiUrl,
        withCredentials:true,
        headers: {
            ...defaultHeaders,
            ...headers
        }
    });
    
    return axiosInstance;
}


export default axiosInstance;
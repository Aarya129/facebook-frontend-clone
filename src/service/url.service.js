import axios from "axios";
import userStore from "@/store/userStore";

const ApiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;


const axiosInstance = () => {
    const accesstoken = localStorage.getItem("access_token") ?? undefined;
    
    const defaultHeaders = {
        "authorization": accesstoken ? `Bearer ${accesstoken}` : undefined,
        "Content-Type": "application/json"
    };

    const instance = axios.create({
        baseURL: ApiUrl,
        withCredentials:true,
        headers: {
            ...defaultHeaders
        }
    });
    
    return instance;
}


export default axiosInstance;
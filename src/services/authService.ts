import axios from "axios";
import { baseUrl } from "../config";
import UserType from "../types/userType";

const authBaseUrl = baseUrl + '/api/login';

const authUser = async (username: string, password: string) => {
    const requestData = { username, password }
    
    const response = await axios.post(authBaseUrl, requestData);
    return response.data;

}

export default {
    authUser
}

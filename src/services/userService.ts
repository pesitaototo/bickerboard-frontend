import axios from "axios";
import { baseUrl } from "../config";
import UserType from "../types/userType";

const userBaseUrl = baseUrl + '/api/users'

const getAll = async (): Promise<UserType[]> => {
  const response = await axios.get(userBaseUrl);

  return response.data;
}

export default {
  getAll,
}
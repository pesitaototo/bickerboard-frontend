import axios, { AxiosError } from "axios";
import { baseUrl } from "../config";
import UserType, { NewUserType } from "../types/userType";
import { useAppDispatch } from "../hooks";

const userBaseUrl = baseUrl + '/api/users'

const getAll = async (): Promise<UserType[]> => {
  const response = await axios.get(userBaseUrl);

  return response.data;
}

const signUp = async (userData: NewUserType) => {
  const response = await axios.post(userBaseUrl, userData);
  return response.data;
}

export default {
  getAll, signUp
}
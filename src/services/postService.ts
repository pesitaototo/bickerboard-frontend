import axios from "axios";
import { baseUrl } from "../config";
import PostType from "../types/postType";

const postBaseUrl = baseUrl + '/api/posts'

const getAll = async (): Promise<PostType[]> => {
  const response = await axios.get(postBaseUrl);

  return response.data;
}

export default {
  getAll,
}
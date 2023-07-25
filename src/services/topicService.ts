import axios from "axios";
import { baseUrl } from "../config";
import TopicType from "../types/topicType";

const topicBaseUrl = baseUrl + '/api/bickers'

const getAll = async (): Promise<TopicType[]> => {
  const response = await axios.get(topicBaseUrl);

  return response.data;
}

export default {
  getAll,
}
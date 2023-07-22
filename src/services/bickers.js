import axios from 'axios'
import authService from '../services/auth'

const baseUrl = 'http://localhost:3001/api/bickers'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  // return request.then(response => response.data)
  return response.data
}

const post = async (newBickerObj) => {
  console.log("new bicker=> ", newBickerObj)
  const response = await axios.post(baseUrl, newBickerObj, authService.config())
  console.log("response => ", response.data)
  return response.data
}

export default {
  getAll,
  post
}
import axios from 'axios'

const baseUrl = '/api/users'

const signUp = async (userInfo) => {
  const response = await axios.post(baseUrl, userInfo)
  return response.data
}

export default {
  signUp
}
import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/login'

// const getAll = async () => {
//   const response = await axios.get(baseUrl)
//   // return request.then(response => response.data)
//   return response.data
// }

const login = async (loginCredentials) => {
  const response = await axios.post(baseUrl, loginCredentials)
  return response.data
}

export default {
  login
}
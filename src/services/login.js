import axios from 'axios'

const baseUrl = '/api/login'

// const getAll = async () => {
//   const response = await axios.get(baseUrl)
//   // return request.then(response => response.data)
//   return response.data
// }

const login = async (loginCredentials) => {
  const response = await axios.post(baseUrl, loginCredentials)
  console.log("response=> ", response.data)
  return response.data
}

export default {
  login
}
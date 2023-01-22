import axios from 'axios'

const baseUrl = '/api/bickers'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  // return request.then(response => response.data)
  return response.data
}

export default {
  getAll
}
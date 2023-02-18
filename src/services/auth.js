
let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getToken = () => {
  return token
}

const config = () => {
  console.log("token=", token)
  return {
    headers: { Authorization: token }
  }
}

export default {
  setToken,
  getToken,
  config
}
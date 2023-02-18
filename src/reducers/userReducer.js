import { createSlice } from "@reduxjs/toolkit";

import loginService from '../services/login'
import authService from '../services/auth'

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser(state, action) {
      return {
        token: action.payload.token, 
        username: action.payload.username
      }
    },
    removeUser(_) {
      return null
    }
  }
})

export const { setUser, removeUser } = userSlice.actions

export const loginUser = (username, password) => {
  const loginCredentials = {
    username,
    password
  }
  return async dispatch => {
    const user = await loginService.login(loginCredentials)
    authService.setToken(user.token)
    dispatch(setUser(user))
  }
}

export const logoutUser = () => {
  return async dispatch => {
    authService.setToken('')
    dispatch(removeUser())
  }
}

export default userSlice.reducer
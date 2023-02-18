import { createSlice } from "@reduxjs/toolkit";

import loginService from '../services/login'

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
    const userToken = await loginService.login(loginCredentials)
    dispatch(setUser(userToken))
  }
}

export const logoutUser = () => {
  return async dispatch => {
    dispatch(removeUser())
  }
}

export default userSlice.reducer
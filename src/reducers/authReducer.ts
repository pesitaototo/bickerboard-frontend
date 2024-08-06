import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import UserType from "../types/userType";
import authService from "../services/authService";
import { AppDispatch } from "../store";
import { AxiosError } from "axios";
import { newNotification } from "./notificationReducer";
import { NavigateFunction } from "react-router-dom";
import { CLIENT_RENEG_LIMIT } from "tls";


interface AuthState {
  isAuthenticated: boolean;
  user: UserType | null;
  token: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: ''
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state: AuthState, action: PayloadAction<UserType>) {
      // const user: UserType = action.payload;
      state.user = action.payload;
      return state;
    },
    setToken(state: AuthState, action: PayloadAction<string>) {
      state.token = action.payload;
      return state;
    },
    loginSuccess(state: any, action: PayloadAction<string>) {
      state.isAuthenticated = true;
      return state;
    },
    loginFailure(state: any, action: PayloadAction<string>) {
      state.isAuthenticated = false;
      return state;
    }
  }
})

export const { setToken, setUser, loginSuccess, loginFailure } = authSlice.actions;

export const authSignIn = (username: string, password: string, navigate: NavigateFunction) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await authService.signIn(username, password);
      dispatch(newNotification({ type: 'message', content: `${username} logged in successfully!`}));

      dispatch(loginSuccess);
      dispatch(setToken(response.token));
      console.log(response.token);
      
      window.localStorage.removeItem('loggedBickerUser');

      window.localStorage.setItem(
        'loggedBickerUser', JSON.stringify(response.token)
      )

      navigate('/');
      // dispatch();
    } catch (err) {
      if (err instanceof AxiosError && err.response) {
        dispatch(loginFailure);
        dispatch(newNotification({ type: 'error', content: err.response.data.error }));
      }
    }
  }
}

export default authSlice.reducer;
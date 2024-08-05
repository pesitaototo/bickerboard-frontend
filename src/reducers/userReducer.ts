import { Dispatch, PayloadAction, createSlice } from "@reduxjs/toolkit"
import UserType, { NewUserType } from "../types/userType";
import userService from "../services/userService";
import { AxiosError } from "axios";
import { newNotification } from "./notificationReducer";
import { AppDispatch } from "../store";
import { NavigateFunction, Navigation } from "react-router-dom";

const userSlice = createSlice({
  name: 'users',
  initialState: [] as UserType[],
  reducers: {
    setUsers(state, action: PayloadAction<UserType[]>) {
      return action.payload;
    },
    addUser(state, action) {
      state.push(action.payload);
    }
  }
})

export const { setUsers, addUser } = userSlice.actions;

export const initializeUser = () => {
  return async (dispatch: Dispatch) => {
    try {
      const users = await userService.getAll();
      dispatch(setUsers(users));
    } catch (e) {
      //
    }
  }
}

// asynchronous thunk action creator
export const createUser = (newUser: NewUserType, navigate: NavigateFunction) => {
  return async (dispatch: AppDispatch) => {
    try {
      const createdUser: UserType = await userService.signUp(newUser);
      dispatch(addUser(createdUser));
      dispatch(newNotification({ type: 'message', content: `${createdUser.username} was successfully created!`}))
      navigate('/');
    } catch (e) {
      if (e instanceof AxiosError && e.response) {
        dispatch(newNotification({ type: 'error', content: e.response.data.error }))
        // console.log(e.response.data);
      }
    }
  }
}

export default userSlice.reducer;
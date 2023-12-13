import { Dispatch, PayloadAction, createSlice } from "@reduxjs/toolkit"
import UserType, { NewUserType } from "../types/userType";
import userService from "../services/userService";
import { AxiosError } from "axios";
import { newNotification } from "./notificationReducer";
import { AppDispatch } from "../store";

const userSlice = createSlice({
  name: 'users',
  initialState: [] as UserType[],
  reducers: {
    setUser(state, action: PayloadAction<UserType[]>) {
      return action.payload;
    },
    addUser(state, action) {
      state.push(action.payload);
    }
  }
})

export const { setUser, addUser } = userSlice.actions;

export const initializeUser = () => {
  return async (dispatch: Dispatch) => {
    try {
      const topics = await userService.getAll();
      dispatch(setUser(topics));
    } catch (e) {
      //
    }
  }
}

export const createUser = (newUser: NewUserType) => {
  return async (dispatch: AppDispatch) => {
    try {
      const createdUser: UserType = await userService.signUp(newUser);
      dispatch(addUser(createdUser));
    } catch (e) {
      if (e instanceof AxiosError && e.response) {
        dispatch(newNotification({ type: 'error', content: e.response.data.error }))
        // console.log(e.response.data);
      }
    }
  }
}

export default userSlice.reducer;
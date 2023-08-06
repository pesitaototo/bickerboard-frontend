import { Dispatch, PayloadAction, createSlice } from "@reduxjs/toolkit"
import UserType, { NewUserType } from "../types/userType";
import userService from "../services/userService";

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
    const topics = await userService.getAll();
    dispatch(setUser(topics));
  }
}

export const createUser = (newUser: NewUserType) => {
  return async (dispatch: Dispatch) => {
    const createdUser: UserType = await userService.signUp(newUser);
    dispatch(addUser(createdUser));
  }
}

export default userSlice.reducer;
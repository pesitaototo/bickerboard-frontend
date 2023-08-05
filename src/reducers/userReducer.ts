import { Dispatch, PayloadAction, createSlice } from "@reduxjs/toolkit"
import UserType from "../types/userType";
import userService from "../services/userService";

const userSlice = createSlice({
  name: 'users',
  initialState: [] as UserType[],
  reducers: {
    setUser(state, action: PayloadAction<UserType[]>) {
      return action.payload;
    },
  }
})

export const { setUser } = userSlice.actions;

export const initializeUser = () => {
  return async (dispatch: Dispatch) => {
    const topics = await userService.getAll()
    dispatch(setUser(topics))
  }
}

export default userSlice.reducer;
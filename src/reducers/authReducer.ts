import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import UserType from "../types/userType";


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
    setUsername(state: any, action: PayloadAction<string>) {
      state.username = action.payload;
    }
  }
})
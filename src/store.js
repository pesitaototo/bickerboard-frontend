import { configureStore } from "@reduxjs/toolkit";
import bickeringReducer from "./reducers/bickeringReducer";
import bickersReducer from "./reducers/bickersReducer";
import userReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    bickers: bickersReducer,
    bickerings: bickeringReducer,
  }
})

export default store
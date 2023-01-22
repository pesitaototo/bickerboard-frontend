import { configureStore } from "@reduxjs/toolkit";
import bickeringReducer from "./reducers/bickeringReducer";
import bickersReducer from "./reducers/bickersReducer";

const store = configureStore({
  reducer: {
    bickers: bickersReducer,
    bickerings: bickeringReducer,
  }
})

export default store
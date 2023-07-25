import { Reducer, configureStore } from '@reduxjs/toolkit';
import topicReducer from './reducers/topicReducer';

// We export RootState and AppDispatch for correct type hints when referencing store.
// https://redux-toolkit.js.org/tutorials/typescript#define-root-state-and-dispatch-types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const store = configureStore({
  reducer: {
    topics: topicReducer,
  }
});

export default store;
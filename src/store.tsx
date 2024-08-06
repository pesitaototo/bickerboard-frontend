import { configureStore } from '@reduxjs/toolkit';
import topicReducer from './reducers/topicReducer';
import postReducer from './reducers/postReducer';
import userReducer from './reducers/userReducer';
import notificationReducer from './reducers/notificationReducer';
import authReducer from './reducers/authReducer';

// We export RootState and AppDispatch for correct type hints when referencing store.
// https://redux-toolkit.js.org/tutorials/typescript#define-root-state-and-dispatch-types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const store = configureStore({
  reducer: {
    topics: topicReducer,
    posts: postReducer,
    users: userReducer,
    notification: notificationReducer,
    auth: authReducer,
  }
});

export default store;
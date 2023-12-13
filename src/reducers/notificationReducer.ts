import { Dispatch, PayloadAction, createSlice } from "@reduxjs/toolkit";
import NotificationType from "../types/notificationType";
import { AppDispatch } from "../store";

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: {} as NotificationType,
  reducers: {
    setNotification(state, action: PayloadAction<NotificationType>) {
      return action.payload;
    },
  }
})

export const {setNotification} = notificationSlice.actions;

export const newNotification = (notification: NotificationType) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setNotification(notification))
    setTimeout(() => {
      dispatch(setNotification({ type: 'error', content: '' }))
    }, 15000)
  }
}

export default notificationSlice.reducer;
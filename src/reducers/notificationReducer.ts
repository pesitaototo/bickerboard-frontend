import { Dispatch, PayloadAction, createSlice } from "@reduxjs/toolkit";
import NotificationType from "../types/notificationType";

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
  return async (dispatch: Dispatch) => {
    dispatch(setNotification(notification))
  }
}

export default notificationSlice.reducer;
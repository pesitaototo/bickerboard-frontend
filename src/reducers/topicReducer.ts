import { Action, Dispatch, PayloadAction, createSlice } from "@reduxjs/toolkit"
import TopicType from "../types/topicType"
import topicService from "../services/topicService"
import { AxiosError } from "axios"
import { newNotification } from "./notificationReducer"
import { AppDispatch } from "../store"

const topicSlice = createSlice({
  name: 'topics',
  initialState: [] as TopicType[],
  reducers: {
    setTopic(state, action: PayloadAction<TopicType[]>) {
      return action.payload
    },
    addTopic(state, action: PayloadAction<TopicType>) {
      state.push(action.payload);
    }
  }
})

export const { setTopic, addTopic } = topicSlice.actions

export const initializeTopic = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const topics = await topicService.getAll()
      dispatch(setTopic(topics))
    } catch (e) {
      if (e instanceof AxiosError && e.message) {
        dispatch(newNotification({ type: 'error', content: e.message }))
      }
    }
  }
}

export default topicSlice.reducer
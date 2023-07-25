import { Action, Dispatch, PayloadAction, createSlice } from "@reduxjs/toolkit"
import TopicType from "../types/topicType"
import topicService from "../services/topicService"

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
  return async (dispatch: Dispatch) => {
    const topics = await topicService.getAll()
    dispatch(setTopic(topics))
  }
}

export default topicSlice.reducer
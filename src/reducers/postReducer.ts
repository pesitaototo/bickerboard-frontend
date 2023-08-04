import { Dispatch, PayloadAction, createSlice } from "@reduxjs/toolkit"
import TopicType from "../types/topicType"
import PostType from "../types/postType";
import postService from "../services/postService";

const postSlice = createSlice({
  name: 'posts',
  initialState: [] as PostType[],
  reducers: {
    setPost(state, action: PayloadAction<PostType[]>) {
      return action.payload;
    },
  }
})

export const { setPost } = postSlice.actions;

export const initializePost = () => {
  return async (dispatch: Dispatch) => {
    const topics = await postService.getAll()
    dispatch(setPost(topics))
  }
}

export default postSlice.reducer;
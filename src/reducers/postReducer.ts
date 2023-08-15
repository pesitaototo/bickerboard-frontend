import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import PostType from "../types/postType";
import postService from "../services/postService";
import { newNotification } from "./notificationReducer";
import { AppDispatch } from "../store";

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
  return async (dispatch: AppDispatch) => {
    try {
      const topics = await postService.getAll()
      dispatch(setPost(topics))
    } catch (e) {
      // console.log(e);
      // dispatch(newNotification({type: 'error', content: e}))
    }
  }
}

export default postSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

import bickerService from '../services/bickers'

const bickerSlice = createSlice({
  name: 'bickers',
  initialState: [],
  reducers: {
    setBicker(state, action) {
      return action.payload
    },
    addBicker(state, action) {
      console.log("state=> ", state);
      state.push(action.payload)
    }
  }
})

export const { setBicker, addBicker } = bickerSlice.actions

export const initializeBicker = () => {
  return async dispatch => {
    const bickers = await bickerService.getAll()
    dispatch(setBicker(bickers))
  }
}

export const createBicker = (title, content) => {
  const bickerObj = {
    title,
    content
  }
  return async dispatch => {
    const bicker = await bickerService.post(bickerObj)
    if (bicker) {
      console.log(bicker)
      dispatch(addBicker(bicker))
    }
  }
}

export default bickerSlice.reducer
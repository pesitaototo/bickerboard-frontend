import { createSlice } from '@reduxjs/toolkit';

import bickerService from '../services/bickers'

const bickerSlice = createSlice({
  name: 'bickers',
  initialState: [],
  reducers: {
    setBicker(state, action) {
      return action.payload
    }
  }
})

export const { setBicker } = bickerSlice.actions

export const initializeBicker = () => {
  return async dispatch => {
    const bickers = await bickerService.getAll()
    dispatch(setBicker(bickers))
  }
}

export default bickerSlice.reducer
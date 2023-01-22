import { createSlice } from '@reduxjs/toolkit'

import bickeringService from '../services/bickerings'

const bickeringSlice = createSlice({
  name: 'bickering',
  initialState: [],
  reducers: {
    setBickering(state, action) {
      return action.payload
    }
  }
})

export const { setBickering } = bickeringSlice.actions()

export const initializeBickering = () => {
  return async dispatch => {
    const bickerings = await bickeringService.getAll()
    dispatch(setBickering(bickerings))
  }
}

export default bickeringSlice.reducer
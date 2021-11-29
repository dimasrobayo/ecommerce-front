import { createSlice } from '@reduxjs/toolkit'

export const shoppingSlice = createSlice({
  name: 'shoppingCart',
  initialState: {
    shopping: {},
  },
  reducers: {
    shoppingAdd: (state, action) => {
      state.shopping = {...state.shopping, ...action.payload}
    },
    shoppingRemove: (state) => {
      state.shopping = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { shoppingAdd, shoppingRemove } = shoppingSlice.actions

export default shoppingSlice.reducer
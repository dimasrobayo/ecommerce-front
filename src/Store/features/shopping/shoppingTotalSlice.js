import { createSlice } from '@reduxjs/toolkit'

export const shoppingTotalSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    shoppingAmount: (state, action) => {
      state.value += action.payload
    },
    shoppingClearAmount: (state) => {
        state.value = 0
      }
  }
})

// Action creators are generated for each case reducer function
export const { shoppingAmount, shoppingClearAmount } = shoppingTotalSlice.actions

export default shoppingTotalSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

export const shoppingSlice = createSlice({
  name: 'shoppingCart',
  initialState: {
    shopping: [],
  },
  reducers: {
    shoppingAdd: (state, action) => {
      state.shopping.push(action.payload)
      localStorage.setItem('product', JSON.stringify(state));
    },
    shoppingRemove: (state) => {
      state.shopping = [];
      localStorage.removeItem('product');
    },
  },
})

// Action creators are generated for each case reducer function
export const { shoppingAdd, shoppingRemove } = shoppingSlice.actions

export default shoppingSlice.reducer
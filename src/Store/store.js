import { configureStore } from '@reduxjs/toolkit'
import shoppingReducer from './features/shopping/shoppingSlice'

export default configureStore({
  reducer: {
    shopping: shoppingReducer
  }
})
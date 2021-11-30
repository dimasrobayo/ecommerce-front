import { configureStore } from '@reduxjs/toolkit';
import shoppingReducer from './features/shopping/shoppingSlice';
import shoppingAmountReducer from './features/shopping/shoppingTotalSlice';

export default configureStore({
  reducer: {
    shopping: shoppingReducer,
    shoppingAmount: shoppingAmountReducer,
  }
})
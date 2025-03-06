import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slicers/authSlice';

import userReducer from "./slicers/useSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,

    userSlice : userReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

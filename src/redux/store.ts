import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/userSlice';
import snackbarReducer from './slice/snackbarSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    snackbar: snackbarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

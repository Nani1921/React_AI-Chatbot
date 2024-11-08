import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './slices/chatSlice';
import userReducer from './slices/userSlice';

// Configure the Redux store
export const store = configureStore({
  reducer: {
    chat: chatReducer,
    user: userReducer,
  },
});

// No TypeScript types, as JavaScript doesn't use them

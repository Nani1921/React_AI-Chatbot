import { createSlice } from '@reduxjs/toolkit';

// Initial state for the chat slice
const initialState = {
  chats: [],
  activeChat: null,
  loading: false,
  error: null,
};

// Create the chat slice
const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setActiveChat: (state, action) => {
      state.activeChat = action.payload;
    },
    addChat: (state, action) => {
      state.chats.push(action.payload);
      state.activeChat = action.payload.id;
    },
    addMessage: (state, action) => {
      const chat = state.chats.find(c => c.id === action.payload.chatId);
      if (chat) {
        chat.messages.push(action.payload.message);
      }
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Export actions and reducer
export const { setActiveChat, addChat, addMessage, setLoading, setError } = chatSlice.actions;
export default chatSlice.reducer;

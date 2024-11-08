import { createSlice } from '@reduxjs/toolkit';

// Initial state for the user slice
const initialState = {
  user: null,
};

// Create the user slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Export actions and reducer
export const { setUser } = userSlice.actions;
export default userSlice.reducer;

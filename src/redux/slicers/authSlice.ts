import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthSlice {
  name: string
}

const initialState: AuthSlice = {
  name: "",
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setName: (state , action:PayloadAction<string> ) => {
      state.name = action.payload;
    },

  },
});

export const { setName } = authSlice.actions;

export default authSlice.reducer;

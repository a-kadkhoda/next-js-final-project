import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserSlice {
  cart: Array<number>
}

const initialState: UserSlice = {
  cart: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToCart: (state , action : PayloadAction<number>) => {
       if(state.cart.includes(action.payload)){
        state.cart = state.cart.filter((item)=> item != action.payload)
      } else {
        state.cart = [...state.cart , action.payload]     
    }
    },
  },
});

export const { setToCart } = userSlice.actions;

export default userSlice.reducer;

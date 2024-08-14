import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, actions) => {
      state.push(actions.payload);
    }
  }
});

export const { addCart } = CartSlice.actions;
export default CartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

// Helper functions to interact with local storage
const loadState = () => {
  const store = localStorage.getItem("cart");
  return store ? JSON.parse(store) : [];
};

const saveState = (state) => {
  const store = JSON.stringify(state);
  localStorage.setItem("cart", store);
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadState(), // Load the initial state from local storage
  reducers: {
    addCart: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      saveState(state); // Save the state to local storage after adding an item
    },
    removeCart: (state, action) => {
      const newState = state.filter((item) => item.id !== action.payload);
      saveState(newState); // Save the state to local storage after removing an item
      return newState;
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
        if (item.quantity <= 0) {
          const newState = state.filter((item) => item.id !== id);
          saveState(newState); // Save the state to local storage if the item is removed
          return newState;
        }
      }
      saveState(state); // Save the state to local storage after updating quantity
    }
  }
});

export const { addCart, removeCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;

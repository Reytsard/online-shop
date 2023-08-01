import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const storeSlice = createSlice({
  name: "stores",
  initialState: {
    user: "",
    isLoggedIn: false,
    cart: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.item.id === action.payload.id
      );
      if (index !== -1) {
        state.cart[index].quantity++;
      } else {
        const item = {
          item: action.payload,
          quantity: 1,
        };
        state.cart.push(item);
      }
    },
  },
});

export const { addItemToCart } = storeSlice.actions;
export default storeSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const storeSlice = createSlice({
  name: "store",
  initialState: {
    user: "",
    isLoggedIn: false,
    cart: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
  // extraReducers: (builder) => {},
});

export const { addItemToCart } = storeSlice.actions;
export default storeSlice.reducer;

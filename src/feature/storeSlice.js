"use client";
import { createSlice } from "@reduxjs/toolkit";

const StoreSlice = createSlice({
  name: "store",
  initialState: {
    user: "",
    isLoggedIn: false,
    cart: [],
    count: 0,
  },
  reducers: {
    addProductToCart: (state, action) => {
      state.cart.push(action.payload);
    },
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
    addNumber: (state) => {
      state.count++;
    },
    minusQuantity: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.item.id === action.payload
      );
      if (state.cart[index].quantity <= 1) {
        state.cart[index].quantity = 1;
      } else {
        state.cart[index].quantity--;
      }
    },
    addQuantity: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.item.id === action.payload
      );
      state.cart[index].quantity++;
    },
    removeItem: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.item.id === action.payload
      );
      state.cart.splice(index, 1);
    },
  },
});

export const {
  addItemToCart,
  addNumber,
  minusQuantity,
  addQuantity,
  removeItem,
  addProductToCart,
} = StoreSlice.actions;
export default StoreSlice.reducer;

"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const StoreSlice = createSlice({
  name: "store",
  initialState: {
    user: "",
    isLoggedIn: false,
    cart: [],
    currency: {
      name: "USD",
      rate: 1.0,
    },
    rates: {},
    orders: [],
  },
  reducers: {
    clearCart: (state) => {
      state.cart = [];
    },
    addToOrders: (state, action) => {
      state.orders.push(action.payload);
    },
    changeCurrency: (state, action) => {
      state.currency.name = action.payload;
    },
    addProductToCart: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.item.id === action.payload.item.id
      );
      index !== -1
        ? (state.cart[index].quantity += action.payload.quantity)
        : state.cart.push(action.payload);
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
  extraReducers: (builder) => {
    builder.addCase(GetRates.fulfilled, (state, action) => {
      state.rates = action.payload.rates;
    });
  },
});

export const {
  addItemToCart,
  addNumber,
  minusQuantity,
  addQuantity,
  removeItem,
  addProductToCart,
  changeCurrency,
  addToOrders,
  clearCart,
} = StoreSlice.actions;
export default StoreSlice.reducer;

export const GetRates = createAsyncThunk("Fetch/DataRates", async () => {
  const options = {
    method: "GET",
    url: "https://exchange-rate-api1.p.rapidapi.com/latest",
    params: { base: "USD" },
    headers: {
      "X-RapidAPI-Key": "b0094d87f1mshd0a0cbb356d38adp15b6e3jsn6c11f6cf6a0d",
      "X-RapidAPI-Host": "exchange-rate-api1.p.rapidapi.com",
    },
  };

  const response = await axios.request(options);
  const data = await response.data;
  return data;
});

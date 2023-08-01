"use client";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { createWrapper } from "next-redux-wrapper";

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export const wrapper = createWrapper(makeStore);

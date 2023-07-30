const { createSlice } = require("@reduxjs/toolkit");

const storeSlice = createSlice({
  name: "store",
  initialState: {
    user: "",
    isLoggedIn: false,
    cart: [],
  },
  reducers: {},
  extraReducers: (builder) => {},
});

export default storeSlice.actions;

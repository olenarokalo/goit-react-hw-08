import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.loading = true;
      state.isLoggedIn = false;
      state.error = null;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      const { token, user } = action.payload;
      state.loading = false;
      state.isLoggedIn = true;
      state.user.name = user.name;
      state.user.email = user.email;
      state.token = token;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.loading = false;
      state.isLoggedIn = false;
      state.error = action.payload;
    });
    builder.addCase(logIn.pending, (state) => {
      state.loading = true;
      state.isLoggedIn = false;
      state.error = null;
    });
    builder.addCase(logIn.fulfilled, (state, action) => {
      const { token, user } = action.payload;
      state.loading = false;
      state.isLoggedIn = true;
      state.user.name = user.name;
      state.user.email = user.email;
      state.token = token;
    });
    builder.addCase(logIn.rejected, (state, action) => {
      state.loading = false;
      state.isLoggedIn = false;
      state.error = action.payload;
    });
    builder.addCase(logOut.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(logOut.fulfilled, (state) => {
      state.loading = false;
      state.isLoggedIn = false;
      state.user.name = null;
      state.user.email = null;
      state.token = null;
    });
    builder.addCase(logOut.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(refreshUser.pending, (state) => {
      state.loading = true;
      state.isLoggedIn = false;
      state.error = null;
      state.isRefreshing = true;
    });
    builder.addCase(refreshUser.fulfilled, (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
    });
    builder.addCase(refreshUser.rejected, (state, action) => {
      state.loading = false;
      state.isLoggedIn = false;
      state.isRefreshing = false;
      state.error = action.payload;
    });
  },
});

export const authReducer = authSlice.reducer;

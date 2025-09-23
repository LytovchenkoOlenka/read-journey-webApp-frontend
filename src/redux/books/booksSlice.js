import { createSlice } from "@reduxjs/toolkit";
import { fetchRecommendedBooks } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  items: [],
  totalPages: 1,
  isLoading: false,
  error: null,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecommendedBooks.pending, handlePending)
      .addCase(fetchRecommendedBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // state.isLoggedIn = true;
        state.items = action.payload.results;

        state.totalPages = action.payload.totalPages;

        // state.token = action.payload.token;
        // state.refreshToken = action.payload.refreshToken;
      })
      .addCase(fetchRecommendedBooks.rejected, handleRejected);
  },
});

export const booksReducer = booksSlice.reducer;

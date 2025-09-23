import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://readjourney.b.goit.study/api";

export const fetchRecommendedBooks = createAsyncThunk(
  "books/fetchRecommended",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/books/recommend");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

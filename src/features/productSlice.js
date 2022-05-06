import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  items: [],
  isLoading: null,
  error: null,
};
export const productsFetch = createAsyncThunk(
  "product/productsFetch",
  async (id = null, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      return response?.data;
    } catch (error) {
      return rejectWithValue("an error is occured");
    }
  }
);
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.isLoading = true;
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    [productsFetch.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer;

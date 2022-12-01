import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  houses: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const houseSlice = createSlice({
  name: "house",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: () => {},
});

export const { reset } = houseSlice.actions;
export default houseSlice.reducer;

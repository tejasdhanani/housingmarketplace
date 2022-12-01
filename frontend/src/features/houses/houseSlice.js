import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import houseService from "./houseService";

const initialState = {
  houses: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new house
export const createHouse = createAsyncThunk(
  "houses/create",
  async (houseData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await houseService.createHouse(houseData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get user house
export const getHouses = createAsyncThunk(
  "houses/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await houseService.getHouses(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const houseSlice = createSlice({
  name: "house",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createHouse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createHouse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.houses.push(action.payload);
      })
      .addCase(createHouse.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(getHouses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getHouses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.goals = action.payload;
      })
      .addCase(getHouses.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = houseSlice.actions;
export default houseSlice.reducer;

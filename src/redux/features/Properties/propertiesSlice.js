import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import propertiesService from "./propertiesService";

const initialState = {
  properties: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

// get all properties
export const getAllProperties = createAsyncThunk(
  "properties/getAllProperties",
  async (_, thunkAPI) => {
    try {
      return await propertiesService.getAllProperties();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProperties.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProperties.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.properties = action.payload;
      })
      .addCase(getAllProperties.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
      })
  },
});

export default propertiesSlice.reducer;

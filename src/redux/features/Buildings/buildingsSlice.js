import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import buildingsService from "./buildingsService";

const initialState = {
  buildings: [],
  // currentPage : null,
  // totalCount: null,
  // totalPages : null,
  // filteredProperties : null ,
  // propertyDetail : null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

// get all buildings
export const getAllBuildings = createAsyncThunk(
  "buildings/getAllBuildings",
  async (_, thunkAPI) => {
    try {
      return await buildingsService.getAllBuildings();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// filter
// export const getAllFilteredProperties = createAsyncThunk(
//   "properties/getAllFilteredProperties",
//   async (filters, thunkAPI) => {
//     try {
//       return await propertiesService.getAllFilteredProperties(filters);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

// // get single property
// export const getSingleProperty = createAsyncThunk(
//   "properties/getSingleProperty",
//   async (post_id, thunkAPI) => {
//     try {
//       return await propertiesService.getSingleProperty(post_id);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );


const buildingsSlice = createSlice({
  name: "buildings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBuildings.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBuildings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.buildings = action.payload;
        // state.properties = [...state.properties, ...action.payload.properties];
        // state.currentPage = action.payload.currentPage;
        // state.totalCount = action.payload.totalCount;
        // state.totalPages = action.payload.totalPages;
      })
      .addCase(getAllBuildings.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
      })
      // .addCase(getAllFilteredProperties.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(getAllFilteredProperties.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.isSuccess = true;
      //   state.filteredProperties = action.payload;
      // })
      // .addCase(getAllFilteredProperties.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.isError = true;
      //   state.message = action.payload.message;
      // })
      // .addCase(getSingleProperty.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(getSingleProperty.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.isSuccess = true;
      //   state.propertyDetail = action.payload;
      // })
      // .addCase(getSingleProperty.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.isError = true;
      //   state.message = action.payload.message;
      // })
  },
});

export default buildingsSlice.reducer;

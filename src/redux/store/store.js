import { configureStore } from "@reduxjs/toolkit";
import propertiesReducer from "../features/Properties/propertiesSlice";

export const store = configureStore({
    reducer:{
        properties : propertiesReducer
    }
})
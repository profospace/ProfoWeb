import { configureStore } from "@reduxjs/toolkit";
import propertiesReducer from "../features/Properties/propertiesSlice";
import buildingsReducer from "../features/Buildings/buildingsSlice";

export const store = configureStore({
    reducer:{
        properties : propertiesReducer,
        buildings : buildingsReducer
    }
})
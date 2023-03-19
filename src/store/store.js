import { configureStore } from "@reduxjs/toolkit";
import calculationReducer from "../features/numberSlice"

 export const store = configureStore({
    reducer:{
        calculation: calculationReducer,
    }
 }) 
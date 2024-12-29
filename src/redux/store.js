import { configureStore } from "@reduxjs/toolkit";
import  cartSlice  from "./slices/cartSlices";


export const store = configureStore({
    reducer:{
        cartSlice,
    },
});

import { configureStore } from "@reduxjs/toolkit";
import  cartSlice  from "./slices/cartSlices";
import  Breadcrumbe  from "./slices/Breadcrumbe";

export const store = configureStore({
    reducer:{
        cartSlice,
        Breadcrumbe,
    },
});

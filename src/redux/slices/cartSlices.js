import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartProducts:[],

}

export const cartSlice = createSlice ({
    name : "cart",
    initialState,
    reducers:{
        addCart: (state,action) => {
            const isFound = state.cartProducts.findIndex(
                (item) => item.id == action.payload.id
            );
            console.log(isFound)
            if(isFound != -1){
                state.cartProducts[isFound].qtn++
            }
            else{
                state.cartProducts.push(action.payload)
            }
        },
    },
});

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;
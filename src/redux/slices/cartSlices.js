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
        removecart: (state,action)=>{
            state.cartProducts = state.cartProducts.filter(item => item.id !== action.payload.id)
        },
        qtnIncrease: (state, action) => {
            const product = state.cartProducts.find(item => item.id === action.payload.id);
            if (product) {
                product.qtn++;
            }
        },
        qtnDecrease: (state, action) => {
            const product = state.cartProducts.find(item => item.id === action.payload.id);
            if (product) {
                if (product.qtn > 1) {
                    product.qtn--;
                } else {
                    state.cartProducts = state.cartProducts.filter(item => item.id !== action.payload.id);
                }
            }
        }
    },
});

export const { addCart ,removecart,qtnIncrease,qtnDecrease} = cartSlice.actions;
export default cartSlice.reducer;
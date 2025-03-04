import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"CART",
    initialState:{
        cart:[]
    },
    reducers:{
        ADD_CART(state,action){
            state.cart.push(action.payload);
        }
    }
});
export const{ADD_CART} = cartSlice.actions;
export default cartSlice.reducer;
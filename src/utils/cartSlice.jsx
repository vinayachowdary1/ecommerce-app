import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "CART",
    initialState: {
        cart: [],
        error: null, 
    },
    reducers: {
        ADD_CART(state, action) {
            let indexData = state.cart.findIndex((item) => action.payload.id === item?.id);
            if (indexData !== -1) {
                state.cart[indexData].quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        CLEAR_CART(state) {
            state.cart = [];
            state.error = null; 
        },
        INCREASE_QUANTITY(state, action) {
            let indexData = state.cart.findIndex((item) => action.payload.id === item?.id);
            if (indexData !== -1) {
                if (state.cart[indexData].stock > state.cart[indexData].quantity) {
                    state.cart[indexData].quantity += 1;
                    state.error = null; 
                } else {
                    state.error = "Stock limit reached!"; 
                }
            }
        },
        DECREASE_QUANTITY(state, action) {
            let indexData = state.cart.findIndex((item) => action.payload.id === item?.id);
            if (indexData !== -1) {
                if (state.cart[indexData].quantity > 1) {
                    state.cart[indexData].quantity -= 1;
                    state.error = null; 
                } else {
                    state.cart.splice(indexData, 1);
                }
            }
        }
    }
});

export const { ADD_CART, CLEAR_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } = cartSlice.actions;
export default cartSlice.reducer;

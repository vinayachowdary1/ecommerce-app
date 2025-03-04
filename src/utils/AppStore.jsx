import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
const AppStore = configureStore({
    reducer:{
      CART: cartReducer
    }
})
export default AppStore;
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import productReducer from "./productSlice"
import wishlistReducer from "./wishlistSlice"
const AppStore = configureStore({
    reducer:{
      CART: cartReducer,
      PRODUCTS: productReducer,
      WISHLIST:wishlistReducer
    }
})
export default AppStore;
import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:"WISHLIST",
    initialState:{
        wishlist:[]
    },
    reducers:{
      setWishList(state,action){
        const indexData = state.wishlist.findIndex((item)=>item?.id === action.payload.id)
        if(indexData === -1){
            state.wishlist.push(action.payload);
        }
      },
      removeFromWhishList(state,action){
        const indexData = state.wishlist.findIndex((item)=>item.id === action.payload.id)
        if(indexData !== -1){
            state.wishlist.splice(indexData,1);
        }
      }
    }
})
export const{setWishList,removeFromWhishList} = wishlistSlice.actions;
export default wishlistSlice.reducer
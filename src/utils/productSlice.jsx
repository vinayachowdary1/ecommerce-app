import { createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
  name: "PRODUCTS",
  initialState: {
    allProducts: [],
    filteredProducts: [],
    filters: {
      category: [],
      rating: [],
      price: "",
      search: "", 
    },
  },
  reducers: {
    setProducts: (state, action) => {
      state.allProducts = action.payload;
      state.filteredProducts = action.payload;
    },
    applyFilters: (state, action) => {
      state.filters = action.payload;
      const { category, rating, price, search } = state.filters;

      let filtered = [...state.allProducts];

      if (category.length > 0) {
        filtered = filtered.filter((product) =>
          category.includes(product.category)
        );
      }

      if (rating.length > 0) {
        filtered = filtered.filter((product) =>
          rating.some((star) => product.rating >= Number(star))
        );
      }

      if (price === "Low to High") {
        filtered.sort((a, b) => a.price - b.price);
      } else if (price === "High to Low") {
        filtered.sort((a, b) => b.price - a.price);
      }

    
      if (search) {
        filtered = filtered.filter((product) =>
          product.title.toLowerCase().includes(search.toLowerCase())
        );
      }

      state.filteredProducts = filtered;
    },
  },
});

export const { setProducts, applyFilters } = productSlice.actions;
export default productSlice.reducer;



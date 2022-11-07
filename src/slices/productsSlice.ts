import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProducts } from "../services/products";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await fetchProducts();
    return response;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: {
    value: "none",
    products: [] as any[],
  },
  reducers: {
    addProductName: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(
      getProducts.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.products = action.payload;
      }
    );
  },
});

export const selectAllProducts = (state: { products: { products: any } }) =>
  state.products.products;
export const { addProductName } = productSlice.actions;
export default productSlice.reducer;

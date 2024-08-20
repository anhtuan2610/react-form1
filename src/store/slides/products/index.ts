import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../../pages/ProductList";
import { fetchProduct } from "../../thunks/product.thunk";

type ProductState = {
  data: Product[];
  isLoading: boolean;
  error: string;
  search: string;
  filter: string;
  page: Number;
};

const initialState: ProductState = {
  data: [],
  isLoading: false,
  error: "",
  search: "",
  filter: "",
  page: 10,
};

const slice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },
    removeProduct: (state, action) => {
      state.data = state.data.filter(
        (product) => product.id !== action.payload
      );
    },
    addProduct: (state, action) => {
      const newList = state.data.push(action.payload);
      console.log(newList);
    },
    updateProduct: (state, action) => {
      const updatedProduct = action.payload;
      state.data = state.data.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      );
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, () => {
      console.log("pending");
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(fetchProduct.rejected, () => {
      console.log("rejected");
    });
    // builder.addCase(updateProductThunk.fulfilled, (state, action) => {
    //   const updatedProduct = action.payload; 
    //   state.data = state.data.map((product) =>
    //     product.id === updatedProduct.id ? updatedProduct : product
    //   );
    // });
  },
});

const { reducer, actions } = slice;
const { setProducts, removeProduct, addProduct, updateProduct } = actions;

export { setProducts, removeProduct, addProduct, updateProduct };

export default reducer;

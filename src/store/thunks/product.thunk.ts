import { createAsyncThunk } from "@reduxjs/toolkit"
import { editProduct, getProducts, TProductNoId } from "../../services/product-api"
import { Product } from "../../pages/ProductList";

export const fetchProduct = createAsyncThunk( // tạo ra 1 reducer / action creator
  'products/fetch',
  async (_, thunkAPI) => { // tham số 1 : payload , 2 : thunkAPI
    try {
      const response: Product[] = await getProducts();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue('failed to fetch products');
    }
  },
)

// export const updateProductThunk = createAsyncThunk(
//   'products/update',
//   async ({ id, data }: { id: number; data: TProductNoId }, thunkAPI) => {
//     try {
//       const response: Product = await editProduct(id, data);
//       return { id, data: response };
//     } catch (error) {
//       return thunkAPI.rejectWithValue('Failed to update product');
//     }
//   }
// );


//products/fetch/fulfilled
//products/fetch/pending
//products/fetch/rejected
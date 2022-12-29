import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category, Products } from "../utils/typs";

interface UIContext {
  categories: Category[];
  products: Products[];
}

const initialState: UIContext = {
  categories: [],
  products: [],
};

export const DataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Category[]>) => {
      return {
        ...state,
        categories: action?.payload,
      };
    },
    setProducts: (state, action: PayloadAction<Products[]>) => {
      return {
        ...state,
        products: action?.payload,
      };
    },
  },
});

export const { setCategories, setProducts } = DataSlice.actions;

export default DataSlice.reducer;

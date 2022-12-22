import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category } from "../utils/typs";

interface UIContext {
  categories: Category[];
}

const initialState: UIContext = {
  categories: [],
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
  },
});

export const { setCategories } = DataSlice.actions;

export default DataSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getToken } from "../utils/get-token";

interface UIContext {
  isAuthorized: boolean;
  displaySidebar: boolean;
}

const initialState: UIContext = {
  isAuthorized: getToken() ? true : false,
  displaySidebar: false,
};

export const UISlice = createSlice({
  name: "UISlice",
  initialState,
  reducers: {
    authorize: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isAuthorized: action.payload,
      };
    },
  },
});

export const { authorize } = UISlice.actions;

export default UISlice.reducer;

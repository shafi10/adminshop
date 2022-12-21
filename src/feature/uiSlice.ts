import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getToken } from "../utils/get-token";
import { AdminInfo } from "../utils/typs";

interface UIContext {
  isAuthorized: boolean;
  adminInfo: AdminInfo;
  displaySidebar: boolean;
}

const initialState: UIContext = {
  isAuthorized: getToken() ? true : false,
  adminInfo: {
    _id: "",
    name: "",
    email: "",
    roles: [""],
  },
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
    unauthorize: (state) => {
      return {
        ...state,
        isAuthorized: false,
      };
    },
    setAdminInfo: (state, action: PayloadAction<AdminInfo>) => {
      return {
        ...state,
        adminInfo: action.payload,
      };
    },
  },
});

export const { authorize, setAdminInfo, unauthorize } = UISlice.actions;

export default UISlice.reducer;

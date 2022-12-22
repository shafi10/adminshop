import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getToken } from "../utils/get-token";
import { AdminInfo } from "../utils/typs";

interface UIContext {
  isAuthorized: boolean;
  adminInfo: AdminInfo;
  displaySidebar: boolean;
  sideBarLable: string;
  sideBarSubLable: string;
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
  sideBarLable: "",
  sideBarSubLable: "",
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
    setsideBarLable: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        sideBarLable: action.payload,
      };
    },
    setsideBarSubLable: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        sideBarSubLable: action.payload,
      };
    },
  },
});

export const {
  authorize,
  setAdminInfo,
  unauthorize,
  setsideBarLable,
  setsideBarSubLable,
} = UISlice.actions;

export default UISlice.reducer;

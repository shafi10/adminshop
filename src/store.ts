import { configureStore } from "@reduxjs/toolkit";
import UISlice from "./feature/uiSlice";
import ModalSlice from "./feature/modalSlice";

export const store = configureStore({
  reducer: {
    uislice: UISlice,
    modalSlice: ModalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

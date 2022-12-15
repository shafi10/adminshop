import { configureStore } from "@reduxjs/toolkit";
import UISlice from "./feature/uiSlice";

export const store = configureStore({
  reducer: {
    uislice: UISlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

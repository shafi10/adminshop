import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UISlice from "./feature/uiSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ModalSlice from "./feature/modalSlice";
import DataSlice from "./feature/dataSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["uislice"],
};

const rootReducer = combineReducers({
  uislice: UISlice,
  modalSlice: ModalSlice,
  dataSlice: DataSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type MODAL_VIEWS = "LOGOUT_VIEW";

interface UIContext {
  view?: MODAL_VIEWS;
  data?: any;
  isOpen: boolean;
}

type Action = { view: MODAL_VIEWS; payload?: any };

const initialState: UIContext = {
  view: undefined,
  isOpen: false,
  data: null,
};

export const ModalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<Action>) => {
      return {
        ...state,
        isOpen: true,
        view: action.payload.view,
        data: action.payload.payload,
      };
    },
    closeModal: (state) => {
      return {
        ...state,
        view: undefined,
        isOpen: false,
        data: null,
      };
    },
  },
});

export const { openModal, closeModal } = ModalSlice.actions;

export default ModalSlice.reducer;

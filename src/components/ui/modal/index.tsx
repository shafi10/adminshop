import React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import "./modal.css";

type ModalProps = {
  open: boolean;
  children?: React.ReactNode;
  onClose: () => void;
  variant?: "center" | "bottom";
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Modal: React.FC<ModalProps> = ({ children, open, onClose }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <div className="modal">{children}</div>
    </Dialog>
  );
};

export default Modal;

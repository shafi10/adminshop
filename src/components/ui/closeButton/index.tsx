import React from "react";
import { IoClose } from "react-icons/io5";
import cn from "classnames";
import "./close_button.css";

type ButtonEvent = (
  e: React.MouseEvent<HTMLButtonElement | MouseEvent>
) => void;

interface CloseButtonProps {
  className?: string;
  onClick?: ButtonEvent;
}

const CloseButton: React.FC<CloseButtonProps> = ({ className, onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label="Close Button"
      className={cn("closeButton", className)}
    >
      <IoClose className="close_button_icon" />
    </button>
  );
};

export default CloseButton;

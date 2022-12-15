import * as React from "react";
import styles from "./button.module.css";
// import { ImSpinner2 } from "react-icons/im";

export interface Props {
  className?: string;
  label: string;
  labelClassName?: string;
  type?: "submit" | "button" | "reset";
  isLoading: boolean;
}

const Button: React.FC<Props> = ({
  className,
  type = "submit",
  labelClassName,
  label = "Submit",
  isLoading = false,
}) => {
  return (
    <div className={labelClassName ? labelClassName : ""}>
      <button type={type} className={className ? className : styles?.button}>
        {label}
        {/* {isLoading && <ImSpinner2 className={styles?.spinner} />} */}
      </button>
    </div>
  );
};

export default Button;

import * as React from "react";
import styles from "./checkbox.module.css";

export interface Props {
  className?: string;
  label: string;
  name: string;
  labelClassName?: string;
  error: string | undefined;
  onChange: any;
  value: any;
}

const Checkbox: React.FC<Props> = ({
  className,
  label,
  name,
  labelClassName,
  error,
  onChange,
  value,
}) => {
  return (
    <div className={className ? className : styles?.inputCheckBox}>
      {label && (
        <label
          htmlFor={name}
          className={labelClassName ? labelClassName : styles?.label}
        >
          {label}
        </label>
      )}
      <input
        onChange={onChange}
        name={name}
        type="checkbox"
        className={styles?.checkbox}
        value={value}
        checked={value}
      />
      {error && <p className={styles?.error}>{error}</p>}
    </div>
  );
};

export default Checkbox;

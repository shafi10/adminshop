import * as React from "react";
import styles from "./input.module.css";

export interface Props {
  className?: string;
  label: string;
  name: string;
  labelClassName?: string;
  type: string;
  placeholder: string;
  error: string | undefined;
  rest?: any;
  onChange: any;
  value: any;
  touched?: boolean | undefined;
}

const Input: React.FC<Props> = ({
  className,
  label,
  name,
  labelClassName,
  type,
  placeholder,
  rest,
  error,
  onChange,
  value,
  touched,
}) => {
  return (
    <div className={className ? className : styles?.inputBox}>
      {label && (
        <label
          htmlFor={name}
          className={labelClassName ? labelClassName : styles?.label}
        >
          {label}
        </label>
      )}
      <div className={styles?.inputArea}>
        <input
          id={name}
          onChange={onChange}
          name={name}
          type={type}
          placeholder={placeholder}
          className={styles?.input}
          value={value}
          autoComplete="off"
          spellCheck="false"
          aria-invalid={error ? "true" : "false"}
          {...rest}
        />
        {touched && error && <p className={styles?.error}>{error}</p>}
      </div>
    </div>
  );
};

export default Input;

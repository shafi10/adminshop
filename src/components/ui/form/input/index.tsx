import * as React from "react";
import { Field } from "formik";
import styles from "./input.module.css";

export interface Props {
  className?: string;
  label: string;
  name: string;
  labelClassName?: string;
  type: string;
  placeholder: string;
  error: string | undefined;
  touched: boolean | undefined;
  rest?: any;
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
  touched,
}) => {
  return (
    <div className={className ? className : styles?.inputBox}>
      {label && (
        <label htmlFor={name} className={styles?.label}>
          {label}
        </label>
      )}
      <div className={styles?.inputArea}>
        <Field
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className={styles?.input}
          autoComplete="off"
          spellCheck="false"
          aria-invalid={error ? "true" : "false"}
          {...rest}
        />
        {error && <p className={styles?.error}>{error}</p>}
      </div>
    </div>
  );
};

export default Input;

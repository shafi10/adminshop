import * as React from "react";
import Select from "react-select";
import styles from "./select.module.css";

export interface Props {
  className?: string;
  label: string;
  name: string;
  labelClassName?: string;
  placeholder: string;
  error: string | undefined;
  selectedOption?: { value: any; label: string } | string;
  handleChange: any;
  options: any[];
  isMulti?: boolean;
}

const CustomSelect: React.FC<Props> = ({
  className,
  label,
  name,
  labelClassName,
  selectedOption,
  error,
  handleChange,
  options,
  placeholder,
  isMulti = false,
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
        <Select
          value={selectedOption}
          onChange={handleChange}
          options={options}
          placeholder={placeholder}
          isMulti={isMulti}
        />
        {error && <p className={styles?.error}>{error}</p>}
      </div>
    </div>
  );
};

export default CustomSelect;

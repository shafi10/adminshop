import React, { Fragment } from "react";
import "./table.css";
import { TableHead } from "../../../utils/typs";

interface Props {
  children: React.ReactNode;
  tableHead: TableHead[];
}

const Table: React.FC<Props> = ({ children, tableHead }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {tableHead?.map((data) => (
            <th key={data?.label}>{data?.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;

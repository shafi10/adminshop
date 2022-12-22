import * as React from "react";
import "./title.css";

export interface Props {
  title?: string;
}

const SectionTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className="section_title">
      <h2>{title}</h2>
    </div>
  );
};

export default SectionTitle;

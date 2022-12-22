import * as React from "react";
import CategoryForm from "../../components/categories/categoryForm";

export interface Props {
  title?: string;
}

const AddCategories: React.FC<Props> = () => {
  return (
    <div>
      <CategoryForm />
    </div>
  );
};

export default AddCategories;

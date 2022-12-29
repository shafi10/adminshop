import * as React from "react";
import ProductForm from "../../components/product/productForm";

export interface Props {
  title?: string;
}

const AddProducts: React.FC<Props> = () => {
  return (
    <div>
      <ProductForm />
    </div>
  );
};

export default AddProducts;

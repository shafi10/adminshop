import * as React from "react";
import SectionTitle from "../../components/ui/title";
import ProductList from "../../components/product/productList";

export interface Props {
  title?: string;
}

const Products: React.FC<Props> = () => {
  return (
    <div>
      <SectionTitle title={"Products"} />
      <ProductList />
    </div>
  );
};

export default Products;

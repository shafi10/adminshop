import * as React from "react";
import CategoryList from "../../components/categories/categoryList";
import SectionTitle from "../../components/ui/title";

export interface Props {
  title?: string;
}

const Categories: React.FC<Props> = () => {
  return (
    <div className="">
      <SectionTitle title={"Categories"} />
      <CategoryList />
    </div>
  );
};

export default Categories;

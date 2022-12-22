import * as React from "react";
import Table from "../../components/ui/table";
import { useGetCategoriesQuery } from "../../framework/categories/get-categories";

export interface Props {
  title?: string;
}

const tableHead = [
  { label: "Name", width: "" },
  { label: "IS Active", width: "" },
  { label: "IS Visible", width: "" },
  { label: "Created At", width: "" },
  { label: "Actions", width: "" },
];

const CategoryList: React.FC<Props> = () => {
  const { data } = useGetCategoriesQuery();
  return (
    <div className="">
      <Table tableHead={tableHead}>
        {data?.map((category) => (
          <tr key={category._id}>
            <td>{category?.name}</td>
            {/* <td>{category?.image}</td> */}
            <td>{category?.is_active ? "Yes" : "No"}</td>
            <td>{category?.is_visible ? "Yes" : "No"}</td>
            <td>{category?.createdAt}</td>
            <td>
              <div>
                <span>View</span>
                <span>Edit</span>
              </div>
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
};

export default CategoryList;

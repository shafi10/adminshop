import * as React from "react";
import Table from "../../components/ui/table";
import { useGetCategoriesQuery } from "../../framework/categories/get-categories";
import { dateFormat } from "../../utils/date-format";
import ActionsButton from "../ui/actions";

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

  const detailsBtnHandler = () => {
    return "";
  };
  const editBtnHandler = () => {
    return "";
  };
  const deleteBtnHandler = () => {
    return "";
  };
  return (
    <div className="">
      <Table tableHead={tableHead}>
        {data?.map((category) => (
          <tr key={category._id}>
            <td>{category?.name}</td>
            {/* <td>{category?.image}</td> */}
            <td>{category?.is_active ? "Yes" : "No"}</td>
            <td>{category?.is_visible ? "Yes" : "No"}</td>
            <td>{dateFormat(category?.createdAt)}</td>
            <td>
              <ActionsButton
                isDetails={true}
                isEdit={true}
                isDelete={true}
                detailsBtnHandler={detailsBtnHandler}
                editBtnHandler={editBtnHandler}
                deleteBtnHandler={deleteBtnHandler}
              />
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
};

export default CategoryList;

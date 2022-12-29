import * as React from "react";
import Table from "../ui/table";
import { useGetCategoriesQuery } from "../../framework/categories/get-categories";
import { dateFormat } from "../../utils/date-format";
import ActionsButton from "../ui/actions";
import { useNavigate } from "react-router-dom";
import { Category } from "../../utils/typs";
import { useDeleteCategory } from "../../framework/categories/use-delete-category";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { openModal } from "../../feature/modalSlice";
import { ROUTES } from "../../utils/routes";

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
  useGetCategoriesQuery();
  const { categories } = useSelector((state: RootState) => state.dataSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { mutate: deleteCategory } = useDeleteCategory(categories);

  const detailsBtnHandler = (data: Category) => {
    dispatch(openModal({ view: "CATEGORY_VIEW", payload: data }));
  };
  const editBtnHandler = (data: Category) => {
    navigate(`/${ROUTES.EDITCATEGORIES}/${data?._id}`, { state: data });
  };
  const deleteBtnHandler = (id: string) => {
    deleteCategory(id);
  };
  return (
    <div className="">
      <Table tableHead={tableHead}>
        {categories?.map((category) => (
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
                detailsBtnHandler={() => detailsBtnHandler(category)}
                editBtnHandler={() => editBtnHandler(category)}
                deleteBtnHandler={() => deleteBtnHandler(category?._id)}
              />
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
};

export default CategoryList;

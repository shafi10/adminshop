import * as React from "react";
import Table from "../ui/table";
import { dateFormat } from "../../utils/date-format";
import ActionsButton from "../ui/actions";
import { useNavigate } from "react-router-dom";
import { Products } from "../../utils/typs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { openModal } from "../../feature/modalSlice";
import { useGetProductsQuery } from "../../framework/products/get-products";

export interface Props {
  title?: string;
}

const tableHead = [
  { label: "ID", width: "" },
  { label: "Name", width: "" },
  { label: "Price", width: "" },
  { label: "Created At", width: "" },
  { label: "Actions", width: "" },
];

const ProductList: React.FC<Props> = () => {
  useGetProductsQuery();
  const { products } = useSelector((state: RootState) => state.dataSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const { mutate: deleteCategory } = useDeleteCategory(categories);

  const detailsBtnHandler = (data: Products) => {
    dispatch(openModal({ view: "CATEGORY_VIEW", payload: data }));
  };
  const editBtnHandler = (data: Products) => {
    navigate(`/editCategories/${data?._id}`, { state: data });
  };
  const deleteBtnHandler = (id: string) => {
    // deleteCategory(id);
  };
  return (
    <div className="">
      <Table tableHead={tableHead}>
        {products?.map((product) => (
          <tr key={product._id}>
            <td>{product?._id}</td>
            <td>{product?.name}</td>
            <td>{product?.price}</td>
            <td>{dateFormat(product?.createdAt)}</td>
            <td>
              <ActionsButton
                isDetails={true}
                isEdit={true}
                isDelete={true}
                detailsBtnHandler={() => detailsBtnHandler(product)}
                editBtnHandler={() => editBtnHandler(product)}
                deleteBtnHandler={() => deleteBtnHandler(product?._id)}
              />
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
};

export default ProductList;

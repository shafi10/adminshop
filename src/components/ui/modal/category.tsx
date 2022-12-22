import React from "react";
import cn from "classnames";
import { closeModal } from "../../../feature/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import CloseButton from "../closeButton";
import "./modal.css";
import { RootState } from "../../../store";

interface Props {
  isPopup?: boolean;
  className?: string;
}

const CategoryModal: React.FC<Props> = ({ isPopup = true, className }) => {
  const { data } = useSelector((state: RootState) => state.modalSlice);
  const dispatch = useDispatch();
  return (
    <div className={cn("category_modal", className)}>
      {isPopup === true && (
        <CloseButton onClick={() => dispatch(closeModal())} />
      )}

      <div className="modal_content">
        <div>Category ID: {data?._id}</div>
        <div className="category_modal_layout">
          <div className="category_modal_image_layout">
            <img src={data?.image} className="category_modal_image" />
          </div>
          <div className="category_modal_title">
            Category Name : {data?.name}
          </div>
          <div className="category_modal_title">
            IS Active : {data?.is_active ? "Yes" : "No"}
          </div>
          <div className="category_modal_title">
            IS Visible : {data?.is_visible ? "Yes" : "No"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;

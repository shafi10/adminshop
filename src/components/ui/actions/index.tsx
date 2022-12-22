import * as React from "react";
import { BiCommentDetail, BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import "./actions.css";

export interface Props {
  isDetails?: boolean;
  isEdit?: boolean;
  isDelete?: boolean;
  detailsBtnHandler?: () => void;
  editBtnHandler?: () => void;
  deleteBtnHandler?: () => void;
}

const ActionsButton: React.FC<Props> = ({
  isDetails,
  isEdit,
  isDelete,
  deleteBtnHandler,
  editBtnHandler,
  detailsBtnHandler,
}) => {
  return (
    <div className="actions_buttons">
      {isDetails && (
        <button
          type="button"
          onClick={detailsBtnHandler}
          className="actions_btn"
        >
          <BiCommentDetail className="actions_details_btn" />
        </button>
      )}
      {isEdit && (
        <button type="button" onClick={editBtnHandler} className="actions_btn">
          <BiEdit className="actions_edit_btn" />
        </button>
      )}
      {isDelete && (
        <button
          type="button"
          onClick={deleteBtnHandler}
          className="actions_btn"
        >
          <MdDelete className="actions_delete_btn" />
        </button>
      )}
    </div>
  );
};

export default ActionsButton;

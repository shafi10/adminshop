import React from "react";
import cn from "classnames";
import Button from "../form/button";
import { useLogoutMutation } from "../../../framework/auth/use-logout";
import { closeModal } from "../../../feature/modalSlice";
import { useDispatch } from "react-redux";
import CloseButton from "../closeButton";
import "./modal.css";

interface Props {
  isPopup?: boolean;
  className?: string;
}

const LogoutModal: React.FC<Props> = ({ isPopup = true, className }) => {
  const { mutate: logout } = useLogoutMutation();
  const dispatch = useDispatch();
  return (
    <div className={cn("logout_modal", className)}>
      {isPopup === true && (
        <CloseButton onClick={() => dispatch(closeModal())} />
      )}

      <div className="modal_content">
        <div className="logout_title">Want to Logout?</div>
        <div className="logout_actions">
          <Button
            type="button"
            label="Cancel"
            isLoading={false}
            disabled={false}
            onClick={() => dispatch(closeModal())}
            className="logout_btn"
          />

          <Button
            type="button"
            label="Logout"
            onClick={() => {
              dispatch(closeModal());
              logout();
            }}
            isLoading={false}
            disabled={false}
            className="logout_btn"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;

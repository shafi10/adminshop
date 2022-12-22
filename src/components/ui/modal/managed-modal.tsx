import { useDispatch, useSelector } from "react-redux";
import Modal from "./index";
import { RootState } from "../../../store";
import { closeModal } from "../../../feature/modalSlice";
import LogoutModal from "./logout";
import CategoryModal from "./category";

const ManagedModal: React.FC = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state: RootState) => state.modalSlice);
  return (
    <Modal open={modal?.isOpen} onClose={() => dispatch(closeModal())}>
      {modal?.view === "LOGOUT_VIEW" && <LogoutModal />}
      {modal?.view === "CATEGORY_VIEW" && <CategoryModal />}
    </Modal>
  );
};

export default ManagedModal;

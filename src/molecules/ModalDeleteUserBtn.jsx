import trash from "../atoms/icons/trash.png";
import { ButtonAm } from "../atoms/ButtonAm";

export const ModalDeleteUserBtn = ({ showModal, userId, setCurrentUserId }) => {
  const onClickHandler = () => {
    showModal(true)
    setCurrentUserId(userId)
  }

  return (
    <ButtonAm
      onClickEvent={onClickHandler}
      icon={trash}
      typeButton={"icon"}
    />
  );
};

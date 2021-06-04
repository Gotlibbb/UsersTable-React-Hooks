import pencil from "../atoms/icons/pencil.png";
import { ButtonAm } from "../atoms/ButtonAm";

export const ModalUpdateUserBtn = ({ showModal, setCurrentUserId, userId }) => {
    const onClickHandler = () => {
    showModal(true)
    setCurrentUserId(userId)
  }
  return (
    <ButtonAm
      onClickEvent={onClickHandler}
      icon={pencil}
      typeButton={"icon"}
    />
  );
};

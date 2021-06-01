import pencil from "../atoms/icons/pencil.png";
import { Button } from "../atoms/Button";

export const ModalUpdateUserBtn = ({ showModal, setCurrentUserId, userId }) => {
    const onClickHandler = () => {
    showModal(true)
    setCurrentUserId(userId)
  }
  return (
    <Button
      onClickEvent={onClickHandler}
      icon={pencil}
      typeButton={"icon"}
    />
  );
};

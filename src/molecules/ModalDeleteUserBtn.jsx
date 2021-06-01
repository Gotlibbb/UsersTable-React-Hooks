import trash from "../atoms/icons/trash.png";
import { Button } from "../atoms/Button";

export const ModalDeleteUserBtn = ({ showModal, userId, setCurrentUserId }) => {
  const onClickHandler = () => {
    showModal(true)
    setCurrentUserId(userId)
  }

  return (
    <Button
      onClickEvent={onClickHandler}
      icon={trash}
      typeButton={"icon"}
    />
  );
};

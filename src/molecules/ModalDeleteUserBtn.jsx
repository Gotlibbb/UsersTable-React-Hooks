import trash from "../atoms/icons/trash.png";
import { ButtonAm } from "../atoms/ButtonAm";
import React from "react";

export const ModalDeleteUserBtn = React.memo(({ showModal, userId, setCurrentUserId }) => {
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
})

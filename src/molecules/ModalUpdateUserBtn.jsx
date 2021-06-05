import pencil from "../atoms/icons/pencil.png";
import { ButtonAm } from "../atoms/ButtonAm";
import React from "react";

export const ModalUpdateUserBtn = React.memo(({ showModal, setCurrentUserId, userId }) => {
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
})

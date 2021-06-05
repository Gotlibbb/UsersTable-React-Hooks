import add from "../atoms/icons/add.png";
import {ButtonAm} from "../atoms/ButtonAm";
import React from "react";

export const ModalAddUserBtn = React.memo(({showModal}) => {
  const onClickHandler = () => {
    showModal(true)
  }

  return (
      <ButtonAm
          onClickEvent={onClickHandler}
          icon={add}
          typeButton={"primary"}
          text={" Добавить"}
      />
  );
})

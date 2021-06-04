import add from "../atoms/icons/add.png";
import {ButtonAm} from "../atoms/ButtonAm";

export const ModalAddUserBtn = ({showModal}) => {
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
};

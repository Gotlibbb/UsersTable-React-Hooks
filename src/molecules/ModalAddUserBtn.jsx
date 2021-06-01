import add from "../atoms/icons/add.png";
import {Button} from "../atoms/Button";

export const ModalAddUserBtn = ({showModal}) => {
  const onClickHandler = () => {
    showModal(true)
  }

  return (
      <Button
          onClickEvent={onClickHandler}
          icon={add}
          typeButton={"add"}
          text={" Добавить"}
      />
  );
};

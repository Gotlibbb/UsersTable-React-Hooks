import add from "../atoms/icons/add.png";
import { Button } from "../atoms/Button";

export const AddUserBtn = ({ onClickEvent }) => {
  return (
    <Button
      onClickEvent={() => onClickEvent(true)}
      icon={add}
      typeButton={"add"}
      text={" Добавить"}
    />
  );
};

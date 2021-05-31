import trash from "../atoms/icons/trash.png";
import { Button } from "../atoms/Button";

export const DeleteUserBtn = ({ onClickEvent, userId }) => {
  return (
    <Button
      onClickEvent={() => onClickEvent(userId)}
      icon={trash}
      typeButton={"icon"}
    />
  );
};

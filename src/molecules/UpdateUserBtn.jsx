import pencil from "../atoms/icons/pencil.png";
import { Button } from "../atoms/Button";

export const UpdateUserBtn = ({ onClickEvent }) => {
  return (
    <Button
      onClickEvent={() => {
        onClickEvent(true);
      }}
      icon={pencil}
      typeButton={"icon"}
    />
  );
};

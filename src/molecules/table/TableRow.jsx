import { LineTable } from "../../atoms/LineTable";

export const TableRow = ({ user, setUpdateModalActive, DeleteUserHandler }) => {
  return (
    <LineTable
      user={user}
      setUpdateModalActive={setUpdateModalActive}
      DeleteUserHandler={DeleteUserHandler}
      itsRows={true}
    />
  );
};

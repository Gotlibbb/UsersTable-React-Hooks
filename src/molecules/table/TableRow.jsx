import { LineTable } from "../../atoms/LineTable";

export const TableRow = ({ user, setUpdateModalActive, setDeleteModalActive, setCurrentUserId }) => {
  return (
    <LineTable
      user={user}
      setUpdateModalActive={setUpdateModalActive}
      setDeleteModalActive={setDeleteModalActive}
      setCurrentUserId={setCurrentUserId}
      itsRows={true}
    />
  );
};

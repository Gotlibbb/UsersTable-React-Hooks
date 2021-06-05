import { LineTableAm } from "../../atoms/LineTableAm";
import React from "react";

export const TableRow = React.memo(({ user, setUpdateModalActive, setDeleteModalActive, setCurrentUserId }) => {
  return (
    <LineTableAm
      user={user}
      setUpdateModalActive={setUpdateModalActive}
      setDeleteModalActive={setDeleteModalActive}
      setCurrentUserId={setCurrentUserId}
      itsRows={true}
    />
  );
})

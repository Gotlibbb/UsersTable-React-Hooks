import style from "./UsersTable.module.css";
import { AddUserBtn } from "../../molecules/AddUserBtn";
import { TableHeader } from "../../molecules/table/TableHeader";
import { TableRow } from "../../molecules/table/TableRow";
import { useState } from "react";

export const UsersTable = ({
  users,
  AddUserHandler,
  UpdateUserHandler,
  DeleteUserHandler,
  modalActive
}) => {
  //активация модальных окон
  const [updateModalActive, setUpdateModalActive] = useState(true);
  const [createModalActive, setCreateModalActive] = useState(true);

  return (
    <div className={style.TableContainer}>
      <div className={style.TableContainer__AddUsersBlock}>
        <span>Пользователи</span>
        <AddUserBtn onClickEvent={setCreateModalActive} />
      </div>
      <TableHeader />

      {users &&
        users.map((u) => (
          <TableRow
            user={u}
            setUpdateModalActive={setUpdateModalActive}
            DeleteUserHandler={DeleteUserHandler}
            key={u.id}
          />
        ))}
    </div>
  );
};

import {ModalAddUserBtn} from "../../molecules/ModalAddUserBtn";
import {TableHeader} from "../../molecules/table/TableHeader";
import {TableRow} from "../../molecules/table/TableRow";
import styled from "styled-components";
import React from "react";

let TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
let AddUsersBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 32px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
`;

export const UsersTable = React.memo(({
                               users,
                               //отображение модалок
                               setUpdateModalActive,
                               setCreateModalActive,
                               setDeleteModalActive,

                               //  изменение актуального пользователя
                               setCurrentUserId,
                           }) => {


    return (
        <TableContainer>
            <AddUsersBlock>
                <span>Пользователи</span>
                <ModalAddUserBtn showModal={setCreateModalActive}/>
            </AddUsersBlock>
            <TableHeader/>

            {users &&
            users.map((u) => (
                <TableRow
                    user={u}
                    setUpdateModalActive={setUpdateModalActive}
                    setDeleteModalActive={setDeleteModalActive}
                    setCurrentUserId={setCurrentUserId}
                    key={u.id}
                />
            ))}

        </TableContainer>

    );
})

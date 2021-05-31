import styled from "styled-components";
import { UpdateUserBtn } from "../molecules/UpdateUserBtn";
import { DeleteUserBtn } from "../molecules/DeleteUserBtn";

export const LineTable = ({
  user,
  itsHeader,
  itsRows,
  setUpdateModalActive,
  DeleteUserHandler
}) => {
  let LineTable = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 6px;
    background: #ffffff;
    height: 48px;
    margin: 0 32px 4px 32px;
    padding: 0 32px 0 32px;
    ${itsHeader && "font-weight: 600;"}
  `;

  let CellTable = styled.span`
    width: 100px;
  `;

  let ButtonBlock = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80px;
  `;

  return (
    <LineTable>
      <CellTable>{itsRows ? user.sername : "Фамилия"}</CellTable>
      <CellTable>{itsRows ? user.name : "Имя"}</CellTable>
      <CellTable>{itsRows ? user.fatherName : "Отчество"}</CellTable>
      <CellTable>{itsRows ? user.email : "E-mail"}</CellTable>
      <CellTable>{itsRows ? user.login : "Логин"}</CellTable>

      {itsHeader && <CellTable> </CellTable>}
      {itsRows && (
        <CellTable>
          <ButtonBlock>
            <UpdateUserBtn onClickEvent={setUpdateModalActive} user={user} />
            <DeleteUserBtn onClickEvent={DeleteUserHandler} userId={user.id} />
          </ButtonBlock>
        </CellTable>
      )}
    </LineTable>
  );
};

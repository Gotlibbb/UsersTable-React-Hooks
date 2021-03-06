import styled, {css} from "styled-components";
import {ModalUpdateUserBtn} from "../molecules/ModalUpdateUserBtn";
import {ModalDeleteUserBtn} from "../molecules/ModalDeleteUserBtn";
import React from "react";

  let LineTable = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 6px;
      background: #ffffff;
      height: 48px;
      margin: 0 32px 4px 32px;
      padding: 0 32px 0 32px;
      ${props => props.itsHeader && css`font-weight: 600;`}
    `;

    let CellTable = styled.span`
      width: 100px;
    `;

    let ButtonBlock = styled.div`
      display: flex;
      justify-content: space-between;
      width: 80px;
    `;

export const LineTableAm =React.memo( ({
                              user,
                              itsHeader,
                              itsRows,
                              setUpdateModalActive,
                              setDeleteModalActive,
                              setCurrentUserId
                          }) => {

    return (
        <LineTable itsHeader={itsHeader}>
            <CellTable>{itsRows ? user.sername : "Фамилия"}</CellTable>
            <CellTable>{itsRows ? user.name : "Имя"}</CellTable>
            <CellTable>{itsRows ? user.fatherName : "Отчество"}</CellTable>
            <CellTable>{itsRows ? user.email : "E-mail"}</CellTable>
            <CellTable>{itsRows ? user.login : "Логин"}</CellTable>

            {itsHeader && <CellTable> </CellTable>}
            {itsRows && (
                <CellTable>
                    <ButtonBlock>
                        <ModalUpdateUserBtn showModal={setUpdateModalActive} userId={user.id}
                                            setCurrentUserId={setCurrentUserId}/>
                        <ModalDeleteUserBtn showModal={setDeleteModalActive} userId={user.id}
                                            setCurrentUserId={setCurrentUserId}/>
                    </ButtonBlock>
                </CellTable>
            )}
        </LineTable>
    );
})

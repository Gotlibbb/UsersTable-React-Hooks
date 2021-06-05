import {Input} from "../../atoms/Input";
import styled from "styled-components";
import {ButtonAm} from "../../atoms/ButtonAm";
import React, {useCallback, useState} from "react";
import {v1} from "uuid";


let ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);

`;
let ModalWindow = styled.div`
  background: white;
  border-radius: 10px;
  width: 608px;

  animation: show-modal 0.3s forwards;

  @keyframes show-modal {
    0% {
      opacity: 0;
      transform: translateY(-50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

`;
let ModalHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 56px;
  background: #353D4B;
  border-radius: 10px 10px 0 0;
`;
let Out = styled.span`
  text-align: right;
  color: #B8C1CC;
  font-size: 15px;
  flex: 1;
  padding-top: 2px;
  padding-right: 24px;

  span {
    cursor: pointer;
  }

`;
let Title = styled.span`
  position: absolute;
  text-align: center;

`;

let ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: white;
  height: 60px;
  background: #F6F7F9;
  border-radius: 0 0 10px 10px;
  padding-right: 24px;
`;

let DeleteWarning = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 168px;
  font-size: 16px;
`;
let InputsBl = styled.div`
  margin-bottom: 56px;
`;

const InputsBlock = React.memo((props) => {
    return <InputsBl>
        <Input title={"Фамилия"} placeHolder={"Введите фамилию"} valueInput={props.newSerName}
               setValueInput={props.setNewSerName}/>
        <Input title={"Имя"} placeHolder={"Введите имя"} valueInput={props.newName} setValueInput={props.setNewName}/>
        <Input title={"Отчество"} placeHolder={"Введите отчество"} valueInput={props.newFatherName}
               setValueInput={props.setNewFatherName}/>
        <Input title={"E-mail"} placeHolder={"Введите электронную почту"} valueInput={props.newEmail}
               setValueInput={props.setNewEmail}/>
        <Input title={"Логин"} placeHolder={"Введите логин"} valueInput={props.newLogin}
               setValueInput={props.setNewLogin}/>
    </InputsBl>
})

export const ModalWindowTable =
    React.memo(({
                    users,
                    deleteModalActive,
                    createModalActive,
                    updateModalActive,
                    closeModal,
                    currentUserId,
                    AddUserHandler,
                    UpdateUserHandler,
                    DeleteUserHandler,


                }) => {


        let initInputValueHandler = (value) => {
            if (updateModalActive) {
                let currentUser = users.filter(u => u.id === currentUserId)[0]
                return currentUser[value]
            } else if (createModalActive) {
                return ""
            }
            return ""
        }

        let [newSerName, setNewSerName] = useState(initInputValueHandler("sername"))
        let [newName, setNewName] = useState(initInputValueHandler("name"))
        let [newFatherName, setNewFatherName] = useState(initInputValueHandler("fatherName"))
        let [newEmail, setNewEmail] = useState(initInputValueHandler("email"))
        let [newLogin, setNewLogin] = useState(initInputValueHandler("login"))

        let newUser = {
            sername: newSerName,
            name: newName,
            fatherName: newFatherName,
            email: newEmail,
            login: newLogin,
            id: v1(),
        }
        let upUser = {
            sername: newSerName,
            name: newName,
            fatherName: newFatherName,
            email: newEmail,
            login: newLogin,
            id: currentUserId,
        }


        const createUser = useCallback((newUser) => {
            closeModal(false)
            AddUserHandler(newUser)
        }, [closeModal, AddUserHandler])

        const updateUser = useCallback((user, userId) => {
            closeModal(false)
            UpdateUserHandler(user, userId)
        }, [closeModal, updateModalActive])

        const deleteUser = useCallback(() => {
            closeModal(false)
            DeleteUserHandler(currentUserId)
        }, [currentUserId, DeleteUserHandler, closeModal])

        const checkInput = !(newLogin && newEmail && newFatherName && newName && newSerName);

        return (
            <ModalContainer>
                <ModalWindow>
                    <ModalHead>
                        {createModalActive && <Title>Создание пользователя</Title>}
                        {updateModalActive && <Title>Редактирование пользователя</Title>}
                        {deleteModalActive && <Title>Удаление пользователя</Title>}
                        <Out><span onClick={() => closeModal(false)}>⨉</span></Out>

                    </ModalHead>

                    {(createModalActive || updateModalActive) && <InputsBlock

                        newSerName={newSerName}
                        setNewSerName={setNewSerName}

                        newName={newName}
                        setNewName={setNewName}

                        newFatherName={newFatherName}
                        setNewFatherName={setNewFatherName}

                        newEmail={newEmail}
                        setNewEmail={setNewEmail}

                        newLogin={newLogin}
                        setNewLogin={setNewLogin}
                    />}

                    {deleteModalActive && <DeleteWarning>Удалить выбранного пользователя?</DeleteWarning>}

                    <ModalFooter>
                        {createModalActive &&
                        <ButtonAm create disabled={checkInput} typeButton={"primary"}
                                  onClickEvent={() => createUser(newUser)}
                                  text={"Создать"}/>}

                        {updateModalActive &&
                        <ButtonAm create disabled={checkInput} typeButton={"primary"}
                                  onClickEvent={() => updateUser(upUser, currentUserId)}
                                  text={"Редактировать"}/>}

                        {deleteModalActive &&
                        <ButtonAm create typeButton={"basic"} onClickEvent={() => closeModal(false)}
                                  text={"Отменить"}/>}
                        {deleteModalActive &&
                        <ButtonAm create typeButton={"primary"} onClickEvent={deleteUser} text={"Удалить"}/>}

                    </ModalFooter>
                </ModalWindow>
            </ModalContainer>
        )
    })
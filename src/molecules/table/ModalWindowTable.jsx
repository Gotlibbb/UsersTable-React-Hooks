import {Input} from "../../atoms/Input";
import styled from "styled-components";
import {Button} from "../../atoms/Button";


let ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);  
`;
let ModalWindow = styled.div`
  background: white;
  border-radius: 10px;
  width: 608px;
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
  cursor: pointer;
  
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
  margin-top: 50px;
`;

export const ModalWindowTable = ({user, modalTitle}) => {



    return (
        <ModalContainer>
            <ModalWindow>
                <ModalHead>
                    <Title>{modalTitle}</Title>
                    <Out>⨉</Out>
                </ModalHead>
                <Input title={"Фамилия"} placeHolder={"Введите фамилию"} initInputValue={user.sername}/>
                <Input title={"Имя"} placeHolder={"Введите имя"} initInputValue={user.name}/>
                <Input title={"Отчество"} placeHolder={"Введите отчество"} initInputValue={user.fatherName}/>
                <Input title={"E-mail"} placeHolder={"Введите электронную почту"} initInputValue={user.email}/>
                <Input title={"Логин"} placeHolder={"Введите логин"} initInputValue={user.login}/>
                <ModalFooter>
                    <Button create typeButton={"add"} onClick={alert} text={"Создать"}/>
                </ModalFooter>
            </ModalWindow>
        </ModalContainer>
    )
}
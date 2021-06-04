import styled, {css} from "styled-components";

let Button = styled.button`
    ${(props)=>props.typeButton === "icon" &&
    "background: #F6F7F9; height: 32px; width: 32px;  padding-right: 25px;  "};
    ${(props)=>props.typeButton === "primary" &&
    "background: #4587ED; padding: 8px 32px 8px 32px; "};
    border-radius: 6px;
    color: white;
    border: 0 solid #b8c1cc;
    font-size: 14px;
    letter-spacing: 0.03em;
    cursor: pointer;
    ${(props)=>props.create && css`width: 153px`}
  ` ;

 let Img = styled.img`
    ${(props)=>props.typeButton === "primary" && "width: 13px; padding-right: 5px "};
    ${(props)=>props.typeButton === "icon" && "width: 20px;  padding-top: 3px;  "};
  `;

export const ButtonAm = ({...props},onClickEvent ) => {

  return (
    <Button {...props} onClick={onClickEvent} disable={!props.disable}>
      {props.create ? "" : <Img {...props} src={props.icon} alt="icon"/>}
      {props.text}
    </Button>
  );
};

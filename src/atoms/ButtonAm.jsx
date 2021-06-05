let Button = styled.button`
  
  transition: 0.1s box-shadow;

  &:active {
    
    box-shadow: inset 2px 1px 3px 1px rgba(0, 0, 0, 0.1);
  }

  color: white;
  outline: none;
  cursor: pointer;

  
  ${(props) => props.disabled && css`
    opacity: 0.7;
    cursor: unset`}
  ${(props) => props.typeButton === "icon" &&
          css`background: #F6F7F9;
            height: 32px;
            width: 32px;
            padding-right: 25px;`};
  ${(props) => props.typeButton === "primary" &&
          css`background: #4587ED;
            padding: 8px 32px 8px 32px;`};
  ${(props) => props.typeButton === "basic" &&
          css`background: #E4E5E8;
            color: #6D7885;
            padding: 8px 32px 8px 32px;
            margin-right: 24px;
          `};
  border-radius: 6px;
  border: 0 solid #b8c1cc;
  font-size: 14px;
  letter-spacing: 0.03em;
  ${(props) => props.create && css`width: 153px`}

`;
import styled, {css} from "styled-components";

import React from "react";

let Img = styled.img`
  ${(props) => props.typeButton === "primary" && css`width: 13px;
    padding-right: 5px `};
  ${(props) => props.typeButton === "icon" && css`width: 20px;
    padding-top: 3px;`};
`;

export const ButtonAm = React.memo((props) => {

    return (
        <Button typeButton={props.typeButton}
                create={props.create}
                onClick={props.onClickEvent}
                disabled={props.disabled}>
            {props.create || <Img typeButton={props.typeButton} src={props.icon} alt="icon"/>}
            {props.text}
        </Button>
    );
})

import styled from "styled-components";

export const Button = (props) => {
  let Button = styled.button`
    ${props.typeButton === "icon" &&
    "background: #F6F7F9; height: 32px; width: 32px;  padding-right: 25px;  "};
    ${props.typeButton === "add" &&
    "background: #4587ED; padding: 8px 32px 8px 32px; "};
    border-radius: 6px;
    color: white;
    border: 0 solid #b8c1cc;
    font-size: 14px;
    letter-spacing: 0.03em;
    cursor: pointer;
  `;

  let Img = styled.img`
    ${props.typeButton === "add" && "width: 13px; padding-right: 5px "};
    ${props.typeButton === "icon" && "width: 20px;  padding-top: 3px;  "};
  `;

  return (
    <Button onClick={props.onClickEvent}>
      <Img src={props.icon} alt="icon" />
      {props.text}
    </Button>
  );
};

import styled from "styled-components";
import {useState} from "react";

    let InputBlock = styled.div`
        display: flex;
        flex-direction: column;
        padding: 28px  64px 0 ;
    `;
    let Title = styled.span`
        color: #818C99;
        padding-bottom: 4px;
        font-size: 14px;
        letter-spacing: 0.02em;
        font-weight: 600;
    `;
    let InputSC = styled.input`
       ::placeholder{
         color:#818C99;
         opacity: 0.6;
       }
        font-size: 14px;
        border-radius: 6px;
        outline: none;
        background: #F9FAFC;
        
        border: 2px solid #EBECEF;
        padding: 8px 12px;
    `;

export const Input = ({title, placeHolder, initInputValue=""}) => {

    let [value, setValue] = useState(initInputValue)

    return (
            <InputBlock>
                <Title>{title}</Title>
                <InputSC type={"text"} placeholder={placeHolder} value={value} onChange={(e)=>setValue(e.currentTarget.value)}/>
            </InputBlock>
    )
}
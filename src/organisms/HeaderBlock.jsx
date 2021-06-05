import styled from "styled-components"
import React from "react";

let HeaderBlock = styled.div`
  height: 56px;
  background: #353d4b;
`;

export const Header = React.memo(() => {
    return <HeaderBlock> </HeaderBlock>;
})

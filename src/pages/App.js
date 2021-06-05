import {Header} from "../organisms/HeaderBlock";
import {SideBar} from "../organisms/SideBarBLock";
import {UsersTableContainer} from "../organisms/UsersTable/UsersTableContainer";
import "typeface-roboto";
import styled from "styled-components"
import "./styles.module.css"
import React from "react";

let AppBlock = styled.div`
  flex-direction: column;
  background-color: #e5e5e5;
  height: 100%;
`;

let FlexBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

let ContentBlock = styled.div`
  width: 100%;
`;

export const App = React.memo(() => {
    return (
        <AppBlock>
            <Header/>
            <FlexBlock>
                <SideBar/>
                <ContentBlock>
                    <UsersTableContainer/>
                </ContentBlock>
            </FlexBlock>
        </AppBlock>
    );
})

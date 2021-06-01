import {Header} from "../organisms/Header";
import {SideBar} from "../organisms/SideBar";
import {UsersTableContainer} from "../organisms/UsersTable/UsersTableContainer";
import "typeface-roboto";
import styled from "styled-components"
import "./styles.module.css"

export const App = () => {

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
};

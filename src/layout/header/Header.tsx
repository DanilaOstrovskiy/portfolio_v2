import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {LanguageSwitcher} from "../../components/languageSwitcher/LanguageSwitcher";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper";


export const Header = () => {
    const headerMenu = ["#home",
        "#works",
        "#about-me",
        "#contacts"]
    return (
        <StyledHeader>
            <Logo/>
            <FlexWrapper>
                <Menu menuItems={headerMenu}/>
                <LanguageSwitcher/>
            </FlexWrapper>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
background-color: green;
display: flex;
justify-content: space-between;`


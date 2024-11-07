import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {LanguageSwitcher} from "../../components/languageSwitcher/LanguageSwitcher";


export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
            <LanguageSwitcher/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
background-color: green;
display: flex;
justify-content: space-between;`


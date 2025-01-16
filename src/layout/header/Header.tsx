import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {FlexWrapper} from "../../components/shared/flexWrapper/FlexWrapper";
import {Container} from "../../components/shared/Container/Container";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {theme} from "../../styles/Theme";


export const Header = () => {
    const headerMenu = [
        { name: 'menu.home', path: 'home' },
        { name: 'menu.about', path: 'about' },
        { name: 'menu.projects', path: 'works' },
        { name: 'menu.contacts', path: 'contacts' }
    ]

    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'flex-end'}>
                    <Logo />
                    <HeaderMenu menuItems={headerMenu}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    padding-top: 32px;
    padding-bottom: 35px;
    background-color: ${theme.colors.primaryBg};
`


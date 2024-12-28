import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper";
import {Container} from "../../components/Container";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {theme} from "../../styles/Theme";


export const Header = () => {
    const headerMenu = ["home",
        "works",
        "about-me",
        "contacts"]
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'flex-end'} >
                    <Logo />
                    <HeaderMenu menuItems={headerMenu}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    padding: 32px 0 8px 0;
    background-color: ${theme.colors.primaryBg};
`


import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {LanguageSwitcher} from "../../components/languageSwitcher/LanguageSwitcher";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper";
import {Container} from "../../components/Container";


export const Header = () => {
    const headerMenu = ["#home",
        "#works",
        "#about-me",
        "#contacts"]
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <MenuWrapper>
                        <Menu menuItems={headerMenu}/>
                        <LanguageSwitcher/>
                    </MenuWrapper>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
background-color: green;`

const MenuWrapper = styled.div`
display: flex;`

import React, {useEffect} from 'react';
import {Logo} from "../../components/logo/Logo";
import {FlexWrapper} from "../../components/shared/flexWrapper/FlexWrapper";
import {Container} from "../../components/shared/Container/Container";

import {MobileMenu} from "./mobileMenu/MobileMenu";
import {S} from './Header_styles'
import {DesktopMenu} from "./desktopMenu/DesktopMenu";
import {useWindowWidth} from "../../hooks/useWindowWidth";


export const Header = () => {
    const isMobile = useWindowWidth(768)




    const headerMenu = [
        {name: 'common.menu.home', path: 'home'},
        {name: 'common.menu.projects', path: 'works'},
        {name: 'common.menu.about', path: 'about'},
        {name: 'common.menu.contacts', path: 'contacts'}
    ]


    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={'space-between'} align={'flex-end'}>
                    <Logo/>
                    {
                        isMobile ?
                        <MobileMenu menuItems={headerMenu}/> :
                        <DesktopMenu menuItems={headerMenu}/>
                    }
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};




import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {LanguageSelector} from "../../../components/languageSelector/LanguageSelector";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";



type MenuItem = {
    name: string;
    path: string;
};

type MenuPropsType = {
    menuItems: MenuItem[];
}

export const HeaderMenu = (props: MenuPropsType) => {
    const {menuItems} = props;
    const {t} = useTranslation()


    return (
        <StyledHeaderMenu>
            <ul>
                {menuItems.map((item, i) => {
                    return (
                        <ListItem key={i}>
                            <StyledLink to={`/${item.path}`}><span>#</span>{t(item.name)}</StyledLink>
                        </ListItem>
                    )
                })}
                <ListItem><LanguageSelector/></ListItem>
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }
    
    @media ${theme.media.tablet} {
        display: none;
    }
    
`

const StyledLink = styled(Link)`
    font-family: "Fira Code", sans-serif;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: ${theme.colors.secondary};
    
    span {
        color: ${theme.colors.accent};
    }
    &:hover {
        color: ${theme.colors.primary};
    }
    &:active {
        color: ${theme.colors.primary};
        font-weight: 500;
    }
`
const ListItem = styled.li`
    
`

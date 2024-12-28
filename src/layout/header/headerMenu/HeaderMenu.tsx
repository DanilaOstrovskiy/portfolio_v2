import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {LanguageSelector} from "../../../components/languageSelector/LanguageSelector";


type MenuPropsType = {
    menuItems: string[];
}

export const HeaderMenu = (props: MenuPropsType) => {
    const {menuItems} = props;

    return (
        <StyledMenu>
            <ul>
                {menuItems.map((item, i) => {
                    return (
                        <ListItem key={i}>
                            <Link href={""}><span>#</span>{item}</Link>
                        </ListItem>
                    )
                })}
                <ListItem><LanguageSelector/></ListItem>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
        list-style-type: none;
    }
`

const Link = styled.a`
    font-family: "Fira Code", sans-serif;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: ${theme.colors.secondaryText};
    
    span {
        color: ${theme.colors.accent};
    }
    &:hover {
        color: ${theme.colors.primaryText};
    }
    &:active {
        color: ${theme.colors.primaryText};
        font-weight: 500;
    }
`
const ListItem = styled.li`
    
`

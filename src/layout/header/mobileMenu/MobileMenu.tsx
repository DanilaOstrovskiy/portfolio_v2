import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {LanguageSelector} from "../../../components/languageSelector/LanguageSelector";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Socialbar} from "./Social/SocialBar";


type MenuItem = {
    name: string;
    path: string;
};

type MenuPropsType = {
    menuItems: MenuItem[];
}

export const MobileMenu = (props: MenuPropsType) => {
    const {menuItems} = props;

    const [isOpen, setIsOpen] = useState(false)
    const {t} = useTranslation()
    const onBurgerBtnClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={isOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopup isOpen={isOpen} onClick={(e) => {
                // Проверяем, не является ли цель клика потомком MobileMenuPopup
                if (e.target === e.currentTarget) {
                    setIsOpen(false);
                }
            }}>
                <MenuList>
                    {menuItems.map((item, i) => {
                        return (
                            <ListItem key={i}>
                                <StyledLink to={`/${item.path}`} onClick={() => setIsOpen(false)}><span>#</span>{t(item.name)}</StyledLink>
                            </ListItem>
                        )
                    })}
                    <ListItem onClick={(e) => e.stopPropagation()}>
                        <LanguageSelector size="medium"/>
                    </ListItem>
                </MenuList>
                <div><Socialbar/></div>

            </MobileMenuPopup>


        </StyledMobileMenu>
    );
};


const StyledMobileMenu = styled.nav`
    display: none;

    @media ${theme.media.tablet} {
        display: inline-block;
    }
`

const MenuList = styled.ul`
    padding-left: 16px;
`


const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background-color: ${theme.colors.primaryBg};
    display: none;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        

    `}
    ul {
        display: flex;
        flex-direction: column;
        gap: 30px;
        justify-content: center;
        padding-top: 100px;
        
    }

`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    width: 24px;
    height: 24px;
    z-index: 99999;
    top: 10px;
    right: 19px;

    span {
        display: block;
        width: 24px;
        height: 2px;
        background-color: #d9d9d9;
        position: absolute;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgb(192, 238, 255, 0);
        `
        }
        &::before {
            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(-9px);
                content: "";
                width: 24px;
                height: 2px;
                background-color: #d9d9d9;
                position: absolute;
            `
            }
        }

        &::after {
            content: "";
            width: 15px;
            height: 2px;
            background-color: #d9d9d9;
            position: absolute;
            right: 0;
            transform: translateY(10px);
            transition: transform 0.2s;

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                width: 24px;
                transform: rotate(45deg) translateY(-9px);`
            }
        }
        

    }
`

const StyledLink = styled(Link)`
    font-family: "Fira Code", sans-serif;
    font-weight: 400;
    font-size: 32px;
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

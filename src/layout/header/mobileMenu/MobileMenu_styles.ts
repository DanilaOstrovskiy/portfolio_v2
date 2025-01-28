import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {Link} from "react-router-dom";

const MobileMenu = styled.nav`
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
        cursor: pointer;

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

export const S = {
    MobileMenu,
    MenuList,
    MobileMenuPopup,
    BurgerButton,
    StyledLink,
    ListItem
}
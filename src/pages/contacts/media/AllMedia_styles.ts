import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Media = styled.section`
    padding-top: 14px;
    padding-bottom: 45px;
    position: relative;
    height: 100vh;

    &::before {
        z-index: 1;
        content: "";
        display: inline-block;
        position: absolute;

        width: 60px;
        height: 60px;
        top: 0;
        left: 17px;

        background-color: transparent;
        background-image: radial-gradient(circle, ${theme.colors.secondary} 2px, transparent 2px);
        background-size: 20px 20px;

        @media ${theme.media.mobile}, ${theme.media.tablet}, ${theme.media.desktopL} {
            display: none;
        }
    }

    @media ${theme.media.mobile}, ${theme.media.tablet} {
        padding: 12px 20px;
    }
`

const MediaWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    padding-top: 16px;
    flex-shrink: 1;


`

const MediaContactList = styled.ul`
    list-style: none;
    gap: 8px;
    display: flex;
`
const Link = styled.a`
    display: flex;
    align-items: center;
    color: ${theme.colors.svg};
    transition: color 0.3s ease, fill 0.3s ease;  // добавляем transition для fill

    svg {
        fill: ${theme.colors.svg};  // используем fill вместо color
    }

    &:hover {
        color: ${theme.colors.primary};

        svg {
            fill: ${theme.colors.primary};  // меняем fill при наведении
        }
    }
`

const MediaContactItem = styled.li`
    display: flex;
    align-items: center;
    color: ${theme.colors.secondary};
    
    gap: 5px;
    font-weight: 400;
`

export const S = {Media,MediaWrapper,MediaContactList,Link,MediaContactItem}


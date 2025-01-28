import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Sidebar = styled.div`
    position: fixed;

    transform: translate(17px, 0);
    background: rgb(44, 48, 54, 0.8);
    z-index: 100;

    @media ${theme.media.mobile}, ${theme.media.tablet}, ${theme.media.desktopL} {
        display: none;
    }
`;


const SocialListWrapper = styled.div`
    display: flex;
    height: 311px;

    span {
        position: relative;

        &::before {
            content: "";
            display: inline-block;
            position: absolute;
            height: 191px;
            width: 1px;
            background: ${theme.colors.secondary};
            transform: translateX(15px);
        }
    }
`


const SocialList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    list-style-type: none;

`

const SocialItem = styled.li`
    font-size: 1.5rem;
`

const Link = styled.a`
    color: ${theme.colors.svg};
    transition: color 0.3s ease;

    &:hover {
        color: ${theme.colors.primary};
    }
`

export const S = {
    Sidebar,
    SocialListWrapper,
    SocialList,
    SocialItem,
    Link
}
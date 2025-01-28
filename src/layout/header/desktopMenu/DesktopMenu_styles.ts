import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Link} from "react-router-dom";

const HeaderMenu = styled.nav`
    
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

export const S = {
    HeaderMenu,
    StyledLink,
    ListItem
}
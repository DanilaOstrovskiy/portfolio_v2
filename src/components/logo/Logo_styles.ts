import styled from "styled-components";
import {Link} from "react-router-dom";
import {theme} from "../../styles/Theme";

const StyledLink = styled(Link)`
    display: flex;  
    align-items: center;
    &:hover {
        color: ${theme.colors.primary};
    }
    
    & span {
        padding-left: 5px;
        color: white;
        font-weight: 500;
    }

    @media ${theme.media.tablet} {
        padding-left: 16px;
    }
    
    z-index: 9999;
`

export const S = {StyledLink}
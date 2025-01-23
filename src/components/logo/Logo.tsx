import React, {useState} from 'react';
import {Icon} from "../ui/icon/Icon";
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {Link} from "react-router-dom";

export const Logo = () => {
    const [iconId, setIconId] = useState("logo");

    return (
        <StyledLink to="/"
              onMouseEnter={() => setIconId("pink_logo")}
              onMouseLeave={() => setIconId("logo")}>
            <Icon width={"16px"} height={"16px"} iconId={iconId} viewBox={"0 0 53 53"} />
            <span>Elias</span>
        </StyledLink>
    );

};
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

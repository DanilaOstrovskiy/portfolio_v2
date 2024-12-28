import React, {useState} from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Logo = () => {
    const [iconId, setIconId] = useState("logo");

    return (
        <Link href=""
              onMouseEnter={() => setIconId("pink_logo")}
              onMouseLeave={() => setIconId("logo")}>
            <Icon width={"16px"} height={"16px"} iconId={iconId} viewBox={"0 0 53 53"} />
            <span>Elias</span>
        </Link>
    );

};
const Link = styled.a`
    &:hover {
        color: ${theme.colors.primaryText};
    }
    
    & span {
        padding-left: 5px;
        color: white;
        font-weight: 500;
    }`

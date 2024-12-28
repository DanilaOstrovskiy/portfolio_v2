import React from 'react';
import styled from "styled-components";

type MenuPropsType = {
    menuItems: string[];
}

export const Menu = (props: MenuPropsType) => {
    const {menuItems} = props;

    return (
        <StyledMenu>
            <ul>
                {menuItems.map((item, i) => {
                    return (
                        <li key={i}>
                            <a href={""}>{item}</a>
                        </li>
                    )
                })}
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


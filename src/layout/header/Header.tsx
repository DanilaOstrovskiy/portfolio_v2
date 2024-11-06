import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo></Logo>
            <nav>
                <ul>
                    <li><a href="">#home</a></li>
                    <li><a href="">#works</a></li>
                    <li><a href="">#about-me</a></li>
                    <li><a href="">#contacts</a></li>
                    <li><a href="">EN</a></li>
                </ul>
            </nav>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
background-color: green;`


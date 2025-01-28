import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {getSizeValue, Size} from "./LanguageSelector";

interface StyledProps {
    $size: Size;
    $isSelected?: boolean;
    $isExpanded?: boolean;
}

const Container = styled.div<Pick<StyledProps, '$size'>>`
    position: relative;
    z-index: 1000;
    width: ${({ $size }) => getSizeValue($size, 'container')};
`;

const LanguageButton = styled.button<Pick<StyledProps, '$size' | '$isSelected'>>`
    background-color: ${theme.colors.primaryBg};
    color: ${theme.colors.secondary};
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 1000;
    width: 100%;
    height: ${({ $size }) => getSizeValue($size, 'button')};
    border: none;
    cursor: pointer;
    font-family: "Fira Code", sans-serif;
    font-weight: 500;
    font-size: ${({ $size }) => getSizeValue($size, 'fontSize')};
    padding: 0;
`;

const Arrow = styled.div<Pick<StyledProps, '$size' | '$isExpanded'>>`
    transform: ${({ $isExpanded }) => $isExpanded ? 'rotate(180deg)' : 'rotate(0)'};
    transition: transform 0.2s;
    display: flex;
    margin-left: 4px;

    svg {
        width: ${({ $size }) => getSizeValue($size, 'arrowWidth')};
        height: ${({ $size }) => getSizeValue($size, 'arrowHeight')};
    }
`;

const Dropdown = styled.div<Pick<StyledProps, '$size'>>`
    position: absolute;
    z-index: 1000;
    top: 100%;
    left: 0;
    width: 100%;
    max-width: ${({ $size }) => getSizeValue($size, 'container')};
    background: ${theme.colors.primaryBg};
    border: 1px solid ${theme.colors.secondary};
    justify-content: space-around;
`;

export const S = {
    Container,
    LanguageButton,
    Arrow,
    Dropdown
}
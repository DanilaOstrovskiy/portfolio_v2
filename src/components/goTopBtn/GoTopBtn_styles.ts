import styled from "styled-components";
import { theme } from "../../styles/Theme";

const GoTopBtnStyled = styled.button<{ $visible: boolean }>`
    background-color: ${theme.colors.secondaryBg};
    padding: 8px;
    position: fixed;
    right: 30px;
    bottom: 30px;
    cursor: pointer;
    transform: rotate(180deg);
    border: 1px solid ${theme.colors.secondary};
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    
    
    opacity: ${(props) => (props.$visible ? 1 : 0)};
    transform: ${(props) => (props.$visible ? "rotate(180deg) translateY(0)" : "rotate(180deg) translateY(20px)")};
    pointer-events: ${(props) => (props.$visible ? "all" : "none")};
`;

export const S = { GoTopBtnStyled };

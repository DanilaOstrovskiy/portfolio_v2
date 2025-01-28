import styled from "styled-components";
import {theme} from "../../styles/Theme";

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background-color: ${theme.colors.primaryBg};
    padding: 30px;
    position: relative;
    max-width: 500px;
    width: 100%;
    color: ${theme.colors.secondary};
`;

const CloseButton = styled.button`
    position: absolute;
    top: 2px;
    right: 7px;
    border: none;
    background: none;
    font-size: 24px;
    cursor: pointer;
    color: ${theme.colors.secondary};
    
    &:hover {
        color: ${theme.colors.primary};
    }
`;

export const S = {ModalOverlay, ModalContent, CloseButton};
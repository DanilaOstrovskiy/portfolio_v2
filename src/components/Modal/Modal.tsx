// Modal.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import {theme} from "../../styles/Theme";


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>&times;</CloseButton>
                {children}
            </ModalContent>
        </ModalOverlay>,
        document.body
    );
};

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
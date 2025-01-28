import React from 'react';
import ReactDOM from 'react-dom';
import {S} from "./Modal_styles"

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <S.ModalOverlay onClick={onClose}>
            <S.ModalContent onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                <S.CloseButton onClick={onClose}>&times;</S.CloseButton>
                {children}
            </S.ModalContent>
        </S.ModalOverlay>,
        document.body
    );
};


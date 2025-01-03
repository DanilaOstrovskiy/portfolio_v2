import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";

type ButtonVariant = 'primary' | 'secondary' | 'danger';
type ButtonSize = 'small' | 'medium' | 'large';

type ButtonProps = {
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    fullWidth?: boolean;
}

const variants = {
    primary: css`
    background: ${theme.colors.button.primary.defaultBg};
    color: ${theme.colors.button.primary.text};
    border: 1px solid ${theme.colors.button.primary.border};
    
    &:hover:not(:disabled) {
      background: ${theme.colors.button.primary.hoverBg};
      border-color: ${theme.colors.button.primary.border};
    }
    
    &:active:not(:disabled) {
      background:  ${theme.colors.button.primary.activeBg};
      border-color: ${theme.colors.button.primary.border};
    }
  `,
    secondary: css`
    background: transparent;
    color: ${theme.colors.button.secondary.text};
    border: 1px solid ${theme.colors.button.secondary.border};
    
    &:hover:not(:disabled) {
      background: ${theme.colors.button.secondary.hoverBg};
    }
    
    &:active:not(:disabled) {
      background: ${theme.colors.button.secondary.activeBg};
    }
  `,
    danger: css`
    background: #d32f2f;
    color: white;
    border: 1px solid #d32f2f;
    
    &:hover:not(:disabled) {
      background: #c62828;
      border-color: #c62828;
    }
    
    &:active:not(:disabled) {
      background: #b71c1c;
      border-color: #b71c1c;
    }
  `
};

export const StyledButton = styled.button<ButtonProps>`
    // Размеры кнопки
    ${({ size = 'medium' }) => sizes[size]}

        // Варианты кнопки
    ${({ variant = 'primary' }) => variants[variant]}

        // Состояние disabled
    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    // Полная ширина
    ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}

        // Фокус
    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.3);
    }

    // Состояние загрузки (если нужно)
    &.loading {
        position: relative;
        pointer-events: none;

        &::after {
            content: '';
            position: absolute;
            width: 16px;
            height: 16px;
            border: 2px solid;
            border-radius: 50%;
            border-color: currentColor transparent currentColor transparent;
            animation: spin 1s linear infinite;
        }
    }

`

const sizes = {
    small: css`
        padding: 8px 16px;
        font-size: 16px;
        font-weight: 500;
    `,
    medium: css`
        padding: 12px 20px;
        font-size: 18px;
        font-weight: 600;
    `,
    large: css`
        padding: 16px 24px;
        font-size: 20px;
        font-weight: 700;
    `
};


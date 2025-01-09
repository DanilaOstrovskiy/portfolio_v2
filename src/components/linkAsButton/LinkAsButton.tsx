import styled, {css, DefaultTheme} from "styled-components";
import {ButtonSize, ButtonVariant, sizes, variants} from "../button/Button";
import {theme} from "../../styles/Theme";

type LinkButtonProps = {
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    fullWidth?: boolean;
    href: string;
    target?: string;
    rel?: string;
    children?: React.ReactNode;
    theme?: DefaultTheme;
}

// Базовые стили для ссылки
const linkStyles = css`
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    font-family: inherit;
    transition: all 0.2s ease-in-out;
    text-align: center;
    
    // Отключаем стандартные стили ссылки при клике
    &:focus {
        outline: none;
    }
    
    // Специальная обработка disabled состояния для ссылки
    ${(props: LinkButtonProps) => props.disabled && css`
        pointer-events: none;
        opacity: 0.6;
    `}
`;

// Создаем компонент ссылки, который наследует стили кнопки
export const LinkButton = styled.a<LinkButtonProps>`
    ${linkStyles}
    ${({ variant = 'primary' }) => variants[variant]}
    ${({ size = 'medium' }) => sizes[size]}
    
    // Наследуем остальные стили от кнопки
    ${({ fullWidth }) => fullWidth && css`
        width: 100%;
    `}

    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.3);
    }
`;

// Компонент-обертка для удобного использования
export const ButtonLink: React.FC<LinkButtonProps> = ({
                                                          children,
                                                          disabled,
                                                          href,
                                                          target,
                                                          ...props
                                                      }) => {
    // Если ссылка открывается в новом окне, добавляем rel="noopener noreferrer"
    const rel = target === '_blank' ? 'noopener noreferrer' : undefined;

    return (
        <LinkButton
            href={href}
            disabled={disabled}
            target={target}
            rel={rel}
            {...props}
        >
            {children}
        </LinkButton>
    );
};

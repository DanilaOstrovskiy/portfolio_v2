import React from 'react';
import {DefaultTheme} from "styled-components";
import {LinkProps, useNavigate} from "react-router-dom";
import {ButtonSize, ButtonVariant} from "../button/Button";
import {S} from "./LinkAsButton_styles"

// Types
interface BaseStyleProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    fullWidth?: boolean;
    theme?: DefaultTheme;
}

interface LinkAsButtonProps extends BaseStyleProps, Omit<LinkProps, keyof BaseStyleProps> {
    to: string;
    target?: string;
    rel?: string;
    children?: React.ReactNode;
}


// Helper Functions
const getRelAttribute = (target?: string): string | undefined =>
    target === '_blank' ? 'noopener noreferrer' : undefined;

// Main Component
export const LinkAsButton: React.FC<LinkAsButtonProps> = ({
                                                              children,
                                                              disabled = false,
                                                              to,
                                                              target,
                                                              variant = 'primary',
                                                              size = 'medium',
                                                              fullWidth = false,
                                                              ...props
                                                          }) => {
    const rel = getRelAttribute(target);

    const navigate = useNavigate();

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (to.includes("#")) {
            event.preventDefault();

            // Сначала навигируем на страницу
            navigate(to, { replace: true });

            // Затем выполняем скролл
            const id = to.split('#')[1];
            const element = document.getElementById(id);

            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        }
    };

    return (
        <S.StyledLink
                      to={to}
                      disabled={disabled}
                      target={target}
                      rel={rel}
                      variant={variant}
                      size={size}
                      fullWidth={fullWidth}
                      onClick={handleClick}
                      {...props}
        >
            {children}
        </S.StyledLink>
    );
};


// Экспорт типов для использования в других компонентах
export type {LinkAsButtonProps, BaseStyleProps};
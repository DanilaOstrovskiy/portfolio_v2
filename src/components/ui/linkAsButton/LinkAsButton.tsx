import React from 'react';
import {DefaultTheme} from "styled-components";
import {LinkProps} from "react-router-dom";
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

    return (
        <S.StyledLink
            to={to}
            disabled={disabled}
            target={target}
            rel={rel}
            variant={variant}
            size={size}
            fullWidth={fullWidth}
            {...props}
        >
            {children}
        </S.StyledLink>
    );
};



// Экспорт типов для использования в других компонентах
export type { LinkAsButtonProps, BaseStyleProps };
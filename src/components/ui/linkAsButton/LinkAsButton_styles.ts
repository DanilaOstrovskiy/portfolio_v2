// Styled Components Utils
import styled, {css} from "styled-components";
import {BaseStyleProps} from "./LinkAsButton";
import {sizes, variants} from "../button/Button";
import {Link} from "react-router-dom";

const getDisabledStyles = css`
    pointer-events: none;
    opacity: 0.6;
`;

const getFullWidthStyles = css`
    width: 100%;
`;

const getFocusStyles = css`
    outline: none;
    box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.3);
`;

// Base Link Styles
const baseLinkStyles = css<BaseStyleProps>`
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    font-family: inherit;
    transition: all 0.2s ease-in-out;
    text-align: center;
    
    &:focus {
        ${getFocusStyles}
    }
    
    ${({ disabled }) => disabled && getDisabledStyles}
    ${({ fullWidth }) => fullWidth && getFullWidthStyles}
    ${({ variant = 'primary' }) => variants[variant]}
    ${({ size = 'medium' }) => sizes[size]}
`;

// Styled Components
const StyledLink = styled(Link)<BaseStyleProps>`
    ${baseLinkStyles}
`;

export const S = {
    getDisabledStyles, getFullWidthStyles, getFocusStyles, baseLinkStyles, StyledLink
}
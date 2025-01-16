import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

type SectionTitleProps = {
    prefix: string;
    title: string;
    showLine?: boolean;
    linePosition?: number; // добавляем опциональный проп для позиции линии
    lineWidth?: number;
}

export const SectionTitle = (props: SectionTitleProps) => {
    const {title, linePosition = 100, lineWidth = 511, showLine = false, prefix = ""} = props; // значение по умолчанию 100

    return (
        <StyledTitle $linePosition={linePosition} $lineWidth={lineWidth} $showLine={showLine}>
            <span>{prefix}</span>{title}
        </StyledTitle>
    );
};

// Добавляем тип для пропсов styled-component
type StyledTitleProps = {
    $linePosition: number;
    $lineWidth: number;
    $showLine: boolean;
}

const StyledTitle = styled.h2<StyledTitleProps>`
    font-family: "Fira Code", sans-serif;
    font-weight: 500;
    position: relative;
    span {
        color: ${theme.colors.accent};
    }
    &::after {
        content: "";
        display: ${props => props.$showLine ? 'inline-block' : 'none'};
        width: ${props => props.$lineWidth}px;
        height: 1px;
        background-color: ${theme.colors.accent};

        position: absolute;
        left: ${props => props.$linePosition}px;
        top: 15px;
        transform: translateX(-50%);
    }
`
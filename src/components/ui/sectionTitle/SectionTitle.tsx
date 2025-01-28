import React from 'react';
import {S} from "./SectionTitle_styles"

type SectionTitleProps = {
    prefix: string;
    title: string;
    showLine?: boolean;
    linePosition?: string; // добавляем опциональный проп для позиции линии
    lineWidth?: string;
}

export const SectionTitle = (props: SectionTitleProps) => {
    const {title, linePosition = "100px", lineWidth = "511px", showLine = false, prefix = ""} = props; // значение по умолчанию 100

    return (
        <S.Title $linePosition={linePosition} $lineWidth={lineWidth} $showLine={showLine}>
            <span>{prefix}</span>{title}
        </S.Title>
    );
};


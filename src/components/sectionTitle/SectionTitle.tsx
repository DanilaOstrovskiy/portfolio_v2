import React from 'react';
import styled from "styled-components";

type SectionTitlePropsType = {
    title: string;
}

export const SectionTitle = (props: SectionTitlePropsType) => {
    const { title } = props;
    return (
        <StyledTitle>{title}</StyledTitle>
    );
};

const StyledTitle = styled.h2`
    text-align: center;
`


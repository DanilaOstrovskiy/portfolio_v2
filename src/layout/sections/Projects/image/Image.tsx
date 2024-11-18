import React from 'react';
import styled from "styled-components";

type ImagePropsType = {
    src: string;
    alt: string;
};

export const Image = (props: ImagePropsType) => {
    let {src, alt} = props
    return (
        <StyledImage src={src} alt={alt} loading="lazy" />
    );
};

const StyledImage = styled.img`
    max-width: 100%;
    height: auto;
    object-fit: cover;
`;
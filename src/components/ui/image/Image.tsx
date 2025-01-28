import React from 'react';
import {S} from "./Image_styles"

type ImagePropsType = {
    src: string;
    alt: string;
};

export const Image = (props: ImagePropsType) => {
    let {src, alt} = props
    return (
        <S.Image src={src} alt={alt} loading="lazy" />
    );
};


import React from 'react';
import iconsSprite from '../../../assets/images/icons.svg';

type IconPropsType = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
    fill?: string
}
export const Icon = (props: IconPropsType) => {
    let {iconId, width, height, viewBox, fill} = props;
    return (
        <svg width={width || "50px"} height={height || "50px"} viewBox={viewBox || "0 0 50 50"} fill={fill || "none"}
             xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${iconId}`} />
        </svg>

    );
};


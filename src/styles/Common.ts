import {theme} from "./Theme";

type FontPropsType = {
    family?: string,
    weight?: number,
    color?: string,
    lineHeight?: number,
    Fmin?: number;
    Fmax?: number;
}

export const font = ({family, weight, color, lineHeight, Fmax, Fmin}: FontPropsType) => `
    font-family: ${family || "Fira Code"};
    weight: ${weight || "400"};
    color: ${color || theme.colors.primary};
    lineHeight: ${lineHeight || 1.2};
    font-size: calc( (100vw - 360px)/(1366 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
    
`
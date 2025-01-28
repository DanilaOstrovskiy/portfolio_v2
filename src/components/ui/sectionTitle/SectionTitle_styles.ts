// Добавляем тип для пропсов styled-component
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Link} from "react-router-dom";

type StyledTitleProps = {
    $linePosition: string;
    $lineWidth: string;
    $showLine: boolean;
}

const Title = styled.h2<StyledTitleProps>`
    font-family: "Fira Code", sans-serif;
    font-weight: 500;
    font-size: 32px;
    position: relative;
    span {
        color: ${theme.colors.accent};
    }
    &::after {
        content: "";
        display: ${props => props.$showLine ? 'inline-block' : 'none'};
        width: ${props => props.$lineWidth};
        height: 1px;
        background-color: ${theme.colors.accent};

        position: absolute;
        left: ${props => props.$linePosition};
        top: 18px;
        transform: translateX(-50%);

        @media ${theme.media.mobile}, ${theme.media.tablet} {
            display: none;
        }
    }
`

export const S = {Title}
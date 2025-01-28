import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/shared/flexWrapper/FlexWrapper";
import {LinkAsButton} from "../../../components/ui/linkAsButton/LinkAsButton";
import {DecoratorStyles} from "./About";

const About = styled.section<{
    $beforeDecorator?: DecoratorStyles;
    $afterDecorator?: DecoratorStyles;
}>`
    padding-top: 85px;
    padding-bottom: 40px;
    position: relative;

    ${(props: { $beforeDecorator?: DecoratorStyles }) => props.$beforeDecorator && `
        &::before {
            content: "";
            display: inline-block;
            position: absolute;
            width: ${props.$beforeDecorator.width};
            height: ${props.$beforeDecorator.height};
            left: ${props.$beforeDecorator.left};
            top: ${props.$beforeDecorator.top};
            border: ${props.$beforeDecorator.border};
            background-color: ${props.$beforeDecorator.backgroundColor};
            background-image: ${props.$beforeDecorator.backgroundImage};
            background-size: ${props.$beforeDecorator.backgroundSize};
            
            @media ${theme.media.mobile}, ${theme.media.tablet}, ${theme.media.desktopL} {
                display: none;
            }
        }`


    }
    ${(props: { $afterDecorator?: DecoratorStyles }) => props.$afterDecorator && `
        &::after {
            content: "";
            display: inline-block;
            position: absolute;
            width: ${props.$afterDecorator.width};
            height: ${props.$afterDecorator.height};
            right: ${props.$afterDecorator.right};
            top: ${props.$afterDecorator.top};
            border: ${props.$afterDecorator.border};
            background-color: ${props.$afterDecorator.backgroundColor};
            background-image: ${props.$afterDecorator.backgroundImage};
            background-size: ${props.$afterDecorator.backgroundSize};
            
            @media ${theme.media.mobile}, ${theme.media.tablet}, ${theme.media.desktopL} {
                display: none;
            }
        }
    `}
    ${FlexWrapper} {
        @media ${theme.media.mobileL}, ${theme.media.mobile}, ${theme.media.tablet} {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
    }

    ${LinkAsButton} {
        @media ${theme.media.mobile}, ${theme.media.tablet} {
            display: none;
        }
    }

    @media ${theme.media.mobile}, ${theme.media.tablet} {
        padding: 12px 20px;
    }


`;

const Description = styled.div`
    max-width: 515px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    line-height: 162%;
    padding-top: 25px;

    white-space: no-wrap;
`

const Photo = styled.img`
    width: 340px;
    object-fit: cover;
    z-index: 0;

    @media ${theme.media.mobile} {
        width: 210px;
        object-position: 0 0;
    }


`
const PhotoWrapper = styled.div`
    position: relative;
    transform: translateY(-40px);
    margin-bottom: -40px;

    span {
        &::before {
            content: "";
            display: inline-block;
            position: absolute;
            width: 271px;
            height: 1px;
            background-color: ${theme.colors.accent};
            z-index: 999;
            right: 25px;
            bottom: 5px;

            @media ${theme.media.mobile} {
                display: none;
            }


        }
    }


}
`

const IconWrapper = styled.div`
    position: absolute;

    &.dots5x5 {
        z-index: 1;
        top: 60px;
        right: 255px;
    }

    &.dots5x4 {
        z-index: 2;
        right: 15px;
        top: 278px;
    }

    @media ${theme.media.mobile} {
        display: none;
    }
`

const Paragraph = styled.p`
    color: ${theme.colors.secondary};
`

const ButtonWrapper = styled.div`
`

export const S = {
    About,
    Description,
    Photo,
    PhotoWrapper,
    IconWrapper,
    Paragraph,
    ButtonWrapper,
}
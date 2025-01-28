import styled from "styled-components";
import {FlexWrapper} from "../../../components/shared/flexWrapper/FlexWrapper";
import {theme} from "../../../styles/Theme";

const Skills = styled.section`
    padding-top: 72px;
    padding-bottom: 66px;

    ${FlexWrapper} {
        @media ${theme.media.mobile}, ${theme.media.tablet}, ${theme.media.tabletM} {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
    }

    @media ${theme.media.mobile}, ${theme.media.tablet} {
        padding: 12px 20px;
    }
`

const SkillsWrapper = styled.div`
    padding-top: 40px;
    
`

const SkillsCards = styled.div`
    max-width: 584px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap-reverse;
    gap: 10px;

    @media ${theme.media.mobile}, ${theme.media.tablet}, ${theme.media.tabletM} {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    @media ${theme.media.tabletL} {
        max-height: 280px;
    }

`
const SkillCard = styled.div`

    &:nth-child(1) {
        order: 5
    }

    &:nth-child(2) {
        order: 3
    }

    &:nth-child(3) {
        order: 1
    }

    &:nth-child(4) {
        order: 4
    }

    &:nth-child(5) {
        order: 2
    }
`;


const AbstractFigures = styled.div`
    position: relative;

    @media ${theme.media.mobile}, ${theme.media.tablet}, ${theme.media.tabletM} {
        display: none;
    }
`
const IconWrapper = styled.div`
    position: absolute;

    &.first_dots {
        transform: translate(34px, 58px);
    }

    &.big_square {
        content: "";
        width: 86px;
        height: 86px;
        border: 1px solid ${theme.colors.secondary};
        transform: translate(262px, 12px);
    }

    &.logo {
        transform: translate(49px, 190px);
    }

    &.second_dots {
        transform: translate(210px, 165px);
    }

    &.square {
        content: "";
        border: 1px solid ${theme.colors.secondary};
        width: 52px;
        height: 52px;

        transform: translate(331px, 215px);

    }
`

export const S = {Skills,SkillsWrapper,SkillsCards,SkillCard,AbstractFigures,IconWrapper}
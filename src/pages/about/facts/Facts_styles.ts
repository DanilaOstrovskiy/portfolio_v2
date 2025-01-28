import {theme} from "../../../styles/Theme";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/shared/flexWrapper/FlexWrapper";

const Facts = styled.section`
    padding-top: 66px;
    padding-bottom: 144px;

    position: relative;

    &::before {
        content: "";
        display: inline-block;
        position: absolute;
        width: 77px;
        height: 155px;
        left: 0;
        top: 124px;
        border: 1px solid ${theme.colors.secondary};
        @media ${theme.media.mobile}, ${theme.media.tablet}, ${theme.media.desktopL} {
            display: none;
        }

    }

    &::after {
        content: "";
        display: inline-block;
        position: absolute;
        width: 80px;
        height: 100px;
        right: 0;
        bottom: 57px;

        background-color: transparent;
        background-image: radial-gradient(circle, ${theme.colors.secondary} 2px, transparent 2px);
        background-size: 20px 20px;

        @media ${theme.media.mobile}, ${theme.media.tablet}, ${theme.media.desktopL} {
            display: none;
        }
    }

    @media ${theme.media.mobile}, ${theme.media.tablet} {
        padding: 12px 20px;
    }


    ${FlexWrapper} {
        justify-content: space-between;
        flex-wrap: wrap;
    }
`

const StyledContainer = styled.div`
    color: ${theme.colors.secondary};
    max-width: 620px;
    padding-top: 30px;
`

const List = styled.ul`

    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    span {
        color: ${theme.colors.primary};
    }
`

const Fact = styled.li`
    border: 1px solid ${theme.colors.secondary};
    padding: 10px;`


const AbstractFiguresWrapper = styled.div`
    position: relative;
    width: 178px;

    @media ${theme.media.mobile}, ${theme.media.tablet}, ${theme.media.tabletM} {
        display: none;
    }
`

const IconWrapper = styled.div`
    position: absolute;
    
    &.logo-wrapper {
        right: 85px;
        bottom: 0;
    }

    &.dots-wrapper {
        right: 190px;
        top: 30px;
    }
        
`

export const S = {
    Facts,
    StyledContainer,
    List,
    Fact,
    AbstractFiguresWrapper,
    IconWrapper
}
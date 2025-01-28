import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Skills = styled.section`
    padding-top: 66px;
    padding-bottom: 66px;
    position: relative;
    
    &::after {
        content: "";
        display: inline-block;
        position: absolute;
        width: 60px;
        height: 100px;
        right: 0;
        top:0;

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

`
const SkillsWrapper = styled.div`
    padding-top: 50px;
    max-width: 1024px;
    display: flex;
   

    @media ${theme.media.mobile}, ${theme.media.tablet}, ${theme.media.tabletM} {
        justify-content: space-around;
        flex-wrap: wrap;
        padding-top: 20px;
    }
    @media ${theme.media.tabletL} {
        max-height: 280px;
    }



`

const SkillsCards = styled.ul`

    max-width: 192px;
    display: flex;
    flex-direction: row;
    gap: 16px;
    
    @media ${theme.media.mobile}, ${theme.media.tablet}, ${theme.media.tabletM} {
        flex-wrap: wrap;
        justify-content: center;
    }
    
`

const SkillCard = styled.div`

    &:nth-child(1) {
      order: 1;
    }

    &:nth-child(2) {
       order:4;
    }

    &:nth-child(3) {
        order:3;
    }
    //
    &:nth-child(4) {
        order: 2;
    }
    //
    &:nth-child(5) {
        order: 5;
    }
`;

export const S  = {Skills,SkillsWrapper,SkillsCards,SkillCard}
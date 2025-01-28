import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const SmallProjects = styled.section`
    padding-top: 40px;
    position: relative;

    span.decorator {
        content: "";
        display: inline-block;
        position: absolute;
        width: 80px;
        height: 100px;
        right: 0;
        top: 146px;
  
        
        background-image: radial-gradient(circle, ${theme.colors.secondary} 2px, transparent 2px);
        background-size: 20px 20px;

        @media ${theme.media.mobile}, ${theme.media.tablet}, ${theme.media.desktopL} {
            display: none;
        }
        
    }
    
    &::before {
        content: "";
        display: inline-block;
        position: absolute;
        border: 1px solid ${theme.colors.secondary};
        width: 75px;
        height: 155px;
        left: 0;
        top: 0;

        @media ${theme.media.mobile}, ${theme.media.tablet}, ${theme.media.desktopL} {
            display: none;
        }
    }
    
    &::after {
        content: "";
        display: inline-block;
        position: absolute;
        width: 65px;
        height: 100px;
        left: 0;
        top: 56%;

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

const ProjectsWrapper = styled.section`
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);

    padding-top: 40px;
    padding-bottom: 190px;

    @media ${theme.media.mobile}, ${theme.media.mobileL}, ${theme.media.tablet} {
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    place-items: center;
}
`

export const S = {
    SmallProjects,
    ProjectsWrapper
}
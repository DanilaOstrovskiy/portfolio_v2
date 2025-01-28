import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const CompleteProjects = styled.section`
    padding-top: 40px;
    padding-bottom: 40px;

    position: relative;

    &::before {
        content: "";
        display: inline-block;
        position: absolute;
        width: 60px;
        height: 60px;
        left: 17px;
        top: 171px;

        background-color: transparent;
        background-image: radial-gradient(circle, ${theme.colors.secondary} 2px, transparent 2px);
        background-size: 20px 20px;

        @media ${theme.media.mobile}, ${theme.media.tablet}, ${theme.media.desktopL} {
            display: none;
        }
    }

    &::after {
        content: "";
        display: inline-block;
        position: absolute;
        border: 1px solid ${theme.colors.secondary};
        width: 75px;
        height: 155px;
        right: 0;
        top: 40px;

        @media ${theme.media.mobile}, ${theme.media.tablet}, ${theme.media.desktopL} {
            display: none;
        }
    }

    @media ${theme.media.mobile}, ${theme.media.tablet} {
        padding: 12px 20px;
    }
`

const ProjectsWrapper = styled.div`
    padding-top: 46px;
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(3, 1fr);
    
    @media ${theme.media.mobile}, ${theme.media.mobileL}, ${theme.media.tablet} {
        display: grid;
        gap: 15px;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        place-items: center;
    }

`
export const S = {CompleteProjects,ProjectsWrapper}
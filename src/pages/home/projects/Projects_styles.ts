import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Link} from "react-router-dom";

const Projects = styled.section`
    padding-top: 40px;
    padding-bottom: 40px;
    position: relative;

    &::after {
        content: "";
        display: inline-block;
        position: absolute;
        border: 1px solid ${theme.colors.secondary};
        width: 70px;
        height: 155px;
        right: 0;
        top: 50%;

        @media ${theme.media.mobile}, ${theme.media.tablet}, ${theme.media.desktopL} {
            display: none;
        }
    }

    @media ${theme.media.mobile}, ${theme.media.tablet} {
        padding: 12px 20px;
    }



`

const ProjectsWrapper = styled.div`
    padding-top: 45px;
    
`

const StyledLink = styled(Link)`
    display: flex;
    justify-content: end;
    color: ${theme.colors.primary};
    font-weight: 500;
    font-size: 16px;
`

export const S = {
    Projects,
    ProjectsWrapper,
    StyledLink
}
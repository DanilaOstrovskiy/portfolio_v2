import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

const Project = styled.div`
    max-width: 330px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    flex-grow: 1;
`

const ProjectInfo = styled.div`
    border-bottom: 1px solid ${theme.colors.secondary};
    border-left: 1px solid ${theme.colors.secondary};
    border-right: 1px solid ${theme.colors.secondary};
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`
const ProjectStack = styled.p`
    border: 1px solid ${theme.colors.secondary};
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    font-size: 16px;
    line-height:30px;
    gap: 16px;
    color: ${theme.colors.secondary};
`
const ProjectTitle = styled.h3`
    font-family: "Fira Code", sans-serif;
    font-weight: 500;
    font-size: 24px;
`
const ProjectDescription = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: ${theme.colors.secondary};
    line-height:20px;
`


export const S = {
    Project,
    ProjectInfo,
    ProjectStack,
    ProjectTitle,
    ProjectDescription
}
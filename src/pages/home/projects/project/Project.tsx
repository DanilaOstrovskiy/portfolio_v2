import React from 'react';
import styled from "styled-components";
import {Image} from "../../../../components/ui/image/Image";
import {theme} from "../../../../styles/Theme";
import {FlexWrapper} from "../../../../components/shared/flexWrapper/FlexWrapper";
import {ProjectButtons} from "./projectButton/ProjectButtons";

type ProjectPropsType = {
    imgSrc: string;
    alt: string;
    stack: string;
    title: string;
    description: string;
    live?: string;
    cached?: string;
}


export const Project = (props: ProjectPropsType) => {
    const {imgSrc, alt, stack, description, title, live, cached} = props
    return (
        <StyledProject>
            <FlexWrapper direction={"column"} >
                    <Image src={imgSrc} alt={alt} />
                <ProjectStack>{stack}</ProjectStack>
                <ProjectInfo>
                    <ProjectTitle>{title}</ProjectTitle>
                    <ProjectDescription>{description}</ProjectDescription>
                    <ProjectButtons live={live} cached={cached} />
                </ProjectInfo>
            </FlexWrapper>

        </StyledProject>

    );
};

const StyledProject = styled.div`
    width: 30%;
    background-color: rgba(0, 0, 0, 0);
`


const ProjectInfo = styled.div`
    border-bottom: 1px solid ${theme.colors.secondary};
    border-left: 1px solid ${theme.colors.secondary};
    border-right: 1px solid ${theme.colors.secondary};
    padding:16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    
    
`
const ProjectStack = styled.p`
    border-bottom: 1px solid ${theme.colors.secondary};
    border-left: 1px solid ${theme.colors.secondary};
    border-right: 1px solid ${theme.colors.secondary};
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
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
    
`



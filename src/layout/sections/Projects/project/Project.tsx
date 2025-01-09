import React from 'react';
import styled from "styled-components";
import {Image} from "../../../../components/image/Image";
import {theme} from "../../../../styles/Theme";
import {FlexWrapper} from "../../../../components/flexWrapper/FlexWrapper";
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
            <FlexWrapper direction={"column"} justify={"center"}>
                <Image src={imgSrc} alt={alt}/>

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
    margin-top:47px;
    
`

const ProjectInfo = styled.div`
    border-bottom: 1px solid ${theme.colors.secondaryText};
    border-left: 1px solid ${theme.colors.secondaryText};
    border-right: 1px solid ${theme.colors.secondaryText};
    padding:16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    
    
`
const ProjectStack = styled.p`
    
    border-bottom: 1px solid ${theme.colors.secondaryText};
    border-left: 1px solid ${theme.colors.secondaryText};
    border-right: 1px solid ${theme.colors.secondaryText};
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    gap: 16px;

`
const ProjectTitle = styled.h3`
    font-family: "Fira Code", sans-serif;
    font-weight: 500;
    font-size: 24px;
    
`
const ProjectDescription = styled.p`
    font-weight: 400;
    font-size: 16px;
    
`



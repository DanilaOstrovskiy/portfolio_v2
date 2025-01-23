import React from 'react';
import styled from "styled-components";
import {Image} from "../../../../components/ui/image/Image";
import {theme} from "../../../../styles/Theme";
import {FlexWrapper} from "../../../../components/shared/flexWrapper/FlexWrapper";
import {ProjectButtons} from "./projectButton/ProjectButtons";

type ProjectPropsType = {
    imgSrc?: string;
    alt?: string;
    stack: string;
    title: string;
    description: string;
    demoLink?: string;      // вместо live
    sourceLink?: string;    // вместо cached
    primaryButtonTitle?: string;
    secondaryButtonTitle?: string;
}


export const Project = (props: ProjectPropsType) => {
    const {
        imgSrc,
        alt,
        stack,
        description,
        title,
        demoLink,
        sourceLink,
        primaryButtonTitle,
        secondaryButtonTitle
    } = props
    return (
        <StyledProject>
            <FlexWrapper direction={"column"}>
                {imgSrc && alt && <Image src={imgSrc} alt={alt}/>}
                <ProjectStack>{stack}</ProjectStack>
                <ProjectInfo>
                    <ProjectTitle>{title}</ProjectTitle>
                    <ProjectDescription>{description}</ProjectDescription>
                    <ProjectButtons
                        primaryLink={demoLink}
                        secondaryLink={sourceLink}
                        primaryTitle={primaryButtonTitle}
                        secondaryTitle={secondaryButtonTitle}/>
                </ProjectInfo>
            </FlexWrapper>

        </StyledProject>

    );
};

const StyledProject = styled.div`
    max-width: 330px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    flex-grow: 1;
 
`



const ProjectInfo = styled.div`
    border-bottom: 1px solid ${theme.colors.secondary};
    border-left: 1px solid ${theme.colors.secondary};
    border-right: 1px solid ${theme.colors.secondary};
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;


`
const ProjectStack = styled.p`
    border: 1px solid ${theme.colors.secondary};
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



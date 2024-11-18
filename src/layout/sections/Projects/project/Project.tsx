import React from 'react';
import styled from "styled-components";
import {Image} from "../image/Image";

type ProjectPropsType = {
    imgSrc: string;
    alt: string;
    stack: string;
    title: string;
    description: string;
}


export const Project = (props: ProjectPropsType) => {
    const {imgSrc, alt, stack, description, title} = props
    return (
        <StyledProject>
            <Image src={imgSrc} alt={alt}/>
            <ProjectStack>{stack}</ProjectStack>
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectDescription>{description}</ProjectDescription>
            <a href="#">Live  &lt;~&gt;</a>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    width: 30%;
    background-color: rgba(255, 255, 255, 0.4);
    margin: 10px;
`
const ProjectStack = styled.p``
const ProjectTitle = styled.h3``
const ProjectDescription = styled.p``

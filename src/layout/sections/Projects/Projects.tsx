import React from 'react';
import styled from "styled-components";
import {Project} from "./project/Project";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import project_1 from "./../../../assets/images/proj1.webp";
import project_2 from "./../../../assets/images/proj2.webp";
import project_3 from "./../../../assets/images/proj3.webp";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper";

const projectsData = [
    {
        id: 1,
        imgSrc: project_1,
        alt: "ChertNodes",
        stack: "HTML SCSS Python Flask",
        title: "ChertNodes",
        description: "Minecraft servers hosting",
    },
    {
        id: 2,
        imgSrc: project_2,
        alt: "ProtectX",
        stack: "React Express Discord.js Node.js",
        title: "ProtectX",
        description: "Discord anti-crash bot",
    },
    {
        id: 3,
        imgSrc: project_3,
        alt: "Kahoot Answers Viewer",
        stack: "CSS Express Node.js",
        title: "Kahoot Answers Viewer",
        description: "Get answers to your Kahoot quiz",
    },
];

export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>#projects</SectionTitle>
            <StyledAnchor href="projects">View all ~~&gt;</StyledAnchor>
            <FlexWrapper>
                {projectsData.map((project) => (
                    <Project
                        key={project.id}
                        imgSrc={project.imgSrc}
                        alt={project.alt}
                        stack={project.stack}
                        title={project.title}
                        description={project.description}
                    />
                ))}
            </FlexWrapper>
        </StyledProjects>
    );
};


const StyledProjects = styled.section`
    min-height: 100vh;
`

const StyledAnchor = styled.a`
    display: flex;
    justify-content: end;
`

import React from 'react';
import styled from "styled-components";
import {Project} from "./project/Project";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import project_1 from "./../../../assets/images/proj1.webp";
import project_2 from "./../../../assets/images/proj2.webp";
import project_3 from "./../../../assets/images/proj3.webp";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

const projectsData = [
    {
        id: 1,
        imgSrc: project_1,
        alt: "ChertNodes",
        stack: "HTML SCSS Python Flask",
        title: "ChertNodes",
        description: "Minecraft servers hosting",
        live: "#",
        cached: "#",
    },
    {
        id: 2,
        imgSrc: project_2,
        alt: "ProtectX",
        stack: "React Express Discord.js Node.js HTML SCSS Python Flask",
        title: "ProtectX",
        description: "Discord anti-crash bot",
        live: "#",
        cached: "",

    },
    {
        id: 3,
        imgSrc: project_3,
        alt: "Kahoot Answers Viewer",
        stack: "CSS Express Node.js",
        title: "Kahoot Answers Viewer",
        description: "Get answers to your Kahoot quiz",
        live: "#",
        cached: "",
    },
];

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <FlexWrapper align={"center"} justify={'space-between'}>
                    <SectionTitle title={"projects"} linePosition={400} lineWidth={511}/>
                    <Link href="#">View all ~~&gt;</Link>
                </FlexWrapper>
                <ProjectsWrapper>
                    <FlexWrapper justify={"space-around"}>
                        {projectsData.map((project) => (
                            <Project
                                key={project.id}
                                imgSrc={project.imgSrc}
                                alt={project.alt}
                                stack={project.stack}
                                title={project.title}
                                description={project.description}
                                live={project.live}
                                cached={project.cached}
                            />
                        ))}
                    </FlexWrapper>
                </ProjectsWrapper>
            </Container>

        </StyledProjects>
    );
};


const StyledProjects = styled.section`
    padding-top: 66px;
    padding-bottom: 66px;

    position: relative;

   
        &::after {
            content: "";
            display: inline-block;
            position: absolute;
            border: 1px solid ${theme.colors.secondary};
            width: 70px;
            height: 155px;
            right: 0;
            top: 30%;
        
    }`

const ProjectsWrapper = styled.div`
    padding-top: 50px
`

const Link = styled.a`
    display: flex;
    justify-content: end;
    color: ${theme.colors.primary};
    font-weight: 500;
    font-size: 16px;
`

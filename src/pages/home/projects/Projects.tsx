import React from 'react';
import styled from "styled-components";
import {Project} from "./project/Project";
import {SectionTitle} from "../../../components/ui/sectionTitle/SectionTitle";
import project_1 from "../../../assets/images/proj1.webp";
import project_2 from "../../../assets/images/proj2.webp";
import project_3 from "../../../assets/images/proj3.webp";
import {FlexWrapper} from "../../../components/shared/flexWrapper/FlexWrapper";
import {Container} from "../../../components/shared/Container/Container";
import {theme} from "../../../styles/Theme";
import {Link} from "react-router-dom";

const projectsData = [
    {
        id: 1,
        imgSrc: project_1,
        alt: "ChertNodes",
        stack: "HTML SCSS Python Flask",
        title: "ChertNodes",
        description: "Minecraft servers hosting",
        liveSource: "#",
        cachedSource: "#",
        primaryButtonTitle:"Live",
        secondaryButtonTitle:"Cached"
    },
    {
        id: 2,
        imgSrc: project_2,
        alt: "ProtectX",
        stack: "React Express Discord.js Node.js HTML SCSS Python Flask",
        title: "ProtectX",
        description: "Discord anti-crash bot",
        liveSource: "#",
        cachedSource: "",
        primaryButtonTitle:"Live",
        secondaryButtonTitle:""
    },
    {
        id: 3,
        imgSrc: project_3,
        alt: "Kahoot Answers Viewer",
        stack: "CSS Express Node.js",
        title: "Kahoot Answers Viewer",
        description: "Get answers to your Kahoot quiz",
        liveSource: "#",
        cachedSource: "",
        primaryButtonTitle:"Live",
        secondaryButtonTitle:""
    },
];

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <FlexWrapper align={"center"} justify={'space-between'}>
                    <SectionTitle prefix="#" title={"projects"} showLine={true} linePosition={400} lineWidth={511}/>
                    <StyledLink to="/works">View all ~~&gt;</StyledLink>
                </FlexWrapper>
                <ProjectsWrapper>
                    <FlexWrapper justify={"space-between"}>
                        {projectsData.map((project) => (
                            <Project
                                key={project.id}
                                imgSrc={project.imgSrc}
                                alt={project.alt}
                                stack={project.stack}
                                title={project.title}
                                description={project.description}
                                demoLink={project.liveSource}
                                sourceLink={project.cachedSource}
                                primaryButtonTitle={project.primaryButtonTitle}
                                secondaryButtonTitle={project.secondaryButtonTitle}

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

const StyledLink = styled(Link)`
    display: flex;
    justify-content: end;
    color: ${theme.colors.primary};
    font-weight: 500;
    font-size: 16px;
`

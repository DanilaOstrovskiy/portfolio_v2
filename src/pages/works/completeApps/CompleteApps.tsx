import React from 'react';
import project_1 from "../../../assets/images/proj1.webp";
import project_3 from "../../../assets/images/proj3.webp";
import project_2 from "../../../assets/images/proj2.webp";
import project_4 from "../../../assets/images/proj4.webp";
import project_5 from "../../../assets/images/proj5.webp";
import {SectionTitle} from "../../../components/ui/sectionTitle/SectionTitle";
import {Project} from "../../home/projects/project/Project";
import {Container} from "../../../components/shared/Container/Container";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const CompleteApps = () => {
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
            primaryButtonTitle: "Live",
            secondaryButtonTitle: "Cached"
        }, {
            id: 2,
            imgSrc: project_3,
            alt: "Kahoot Answers Viewer",
            stack: "CSS Express Node.js",
            title: "Kahoot Answers Viewer",
            description: "Get answers to your Kahoot quiz",
            liveSource: "#",
            cachedSource: "#",
            primaryButtonTitle: "Live",
            secondaryButtonTitle: ""
        },
        {
            id: 3,
            imgSrc: project_2,
            alt: "ProtectX",
            stack: "React Express Discord.js Node.js HTML SCSS Python Flask",
            title: "ProtectX",
            description: "Discord anti-crash bot",
            liveSource: "#",
            cachedSource: "#",
            primaryButtonTitle: "",
            secondaryButtonTitle: "Cached"

        },
        {
            id: 4,
            imgSrc: project_4,
            alt: "Kotik Bot",
            stack: "HTML CSS JS",
            title: "Kotik Bot",
            description: "Multi-functional discord bot",
            liveSource: "#",
            cachedSource: "#",
            primaryButtonTitle: "Live",
            secondaryButtonTitle: ""
        }, {
            id: 5,
            imgSrc: project_5,
            alt: "Portfolio",
            stack: "Vue TS Less",
            title: "Portfolio",
            description: "You’re using it rn",
            liveSource: "#",
            cachedSource: "#",
            primaryButtonTitle: "Github",
            secondaryButtonTitle: ""
        },

    ];
    return (
        <StyledCompleteProjects>
            <Container>
                <SectionTitle prefix={"#"} title={"complete-apps"}/>
                <ProjectsWrapper>
                    {projectsData.map((project) => (
                        <Project
                            key={project.id}
                            imgSrc={project.imgSrc}
                            alt={project.alt}
                            stack={project.stack}
                            title={project.title}
                            description={project.description}
                            sourceLink={project.liveSource}
                            demoLink={project.cachedSource}
                            primaryButtonTitle={project.primaryButtonTitle}
                            secondaryButtonTitle={project.secondaryButtonTitle}
                        />
                    ))}
                </ProjectsWrapper>
            </Container>
        </StyledCompleteProjects>
    );
};

const StyledCompleteProjects = styled.section`
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
    }

        
`

const ProjectsWrapper = styled.div`
    padding-top: 46px;
    
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(3, 1fr);

`
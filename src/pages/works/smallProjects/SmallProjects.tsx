import React from 'react';
import {Container} from "../../../components/shared/Container/Container";
import {SectionTitle} from "../../../components/ui/sectionTitle/SectionTitle";
import {Project} from "../../home/projects/project/Project";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const SmallProjects = () => {
    const smallProjects = [
        {
            id: 1,
            stack: "Discord.js TS JS",
            title: "Bot boilerplate",
            description: "Start creating scalable discord.js bot with typescript in seconds",
            liveSource: "#",
            cachedSource: "https://github.com/",
            primaryButtonTitle: "Github",
            secondaryButtonTitle: ""
        },
        {
            id: 2,
            stack: "VUE CSS JS",
            title: "My blog",
            description: "Front-end of my future blog website written in vue",
            liveSource: "#",
            cachedSource: "https://github.com/",
            primaryButtonTitle: "Github",
            secondaryButtonTitle: ""
        },
        {
            id: 3,
            stack: "Figma",
            title: "Chess pro",
            description: "Figma landing page about service for viewing chess tournaments",
            liveSource: "#",
            cachedSource: "https://figma.com/",
            primaryButtonTitle: "Figma",
            secondaryButtonTitle: ""
        },
        {
            id: 4,
            stack: "Figma",
            title: "Crash protect website",
            description: "Figma template for website about anti-raid, anti-crash discord bot",
            liveSource: "#",
            cachedSource: "https://figma.com/",
            primaryButtonTitle: "Figma",
            secondaryButtonTitle: ""
        },
        {
            id: 5,
            stack: "HTML CSS",
            title: "CSS experiments",
            description: "Collection of my different little projects in css",
            liveSource: "https://example.com/",
            cachedSource: "#",
            primaryButtonTitle: "Live",
            secondaryButtonTitle: ""
        },
        {
            id: 6,
            stack: "Lua NeoVim",
            title: "Web Dev nvim config",
            description: "Config for neovim perfect for web developer",
            liveSource: "#",
            cachedSource: "https://github.com/",
            primaryButtonTitle: "Github",
        },
        {
            id: 7,
            stack: "Python Quart HTML",
            title: "Ooku",
            description: "Simple link shortener with auth",
            liveSource: "#",
            cachedSource: "#",
            primaryButtonTitle: "live",
        },
        {
            id: 8,
            stack: "Figma",
            title: "School website",
            description: "Figma template website for my school",
            liveSource: "#",
            cachedSource: "https://figma.com/",
            primaryButtonTitle: "Figma",
        }]
    return (
        <StyledSmallProjects>
            <Container>
                <span className="decorator"/>
                <SectionTitle prefix={"#"} title={"small-projects"}/>
                <ProjectsWrapper>
                    {smallProjects.map((project) => (
                        <Project
                            key={project.id}
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
        </StyledSmallProjects>
    );
};

const StyledSmallProjects = styled.section`
    padding-top: 40px;
    position: relative;

    span.decorator {
        content: "";
        display: inline-block;
        position: absolute;
        width: 80px;
        height: 100px;
        right: 0;
        top: 146px;
  
        
        background-image: radial-gradient(circle, ${theme.colors.secondary} 2px, transparent 2px);
        background-size: 20px 20px;
    }
    
    &::before {
        content: "";
        display: inline-block;
        position: absolute;
        border: 1px solid ${theme.colors.secondary};
        width: 75px;
        height: 155px;
        left: 0;
        top: 0;
    }
    
    &::after {
        content: "";
        display: inline-block;
        position: absolute;
        width: 65px;
        height: 100px;
        left: 0;
        top: 56%;

        background-color: transparent;
        background-image: radial-gradient(circle, ${theme.colors.secondary} 2px, transparent 2px);
        background-size: 20px 20px;
    }
`

const ProjectsWrapper = styled.section`
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);

    padding-top: 40px;
    padding-bottom: 190px
`
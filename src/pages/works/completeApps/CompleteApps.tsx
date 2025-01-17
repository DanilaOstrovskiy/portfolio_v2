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
import {TFunction} from "i18next";
import {IProject} from "../../home/projects/Projects";
import {useTranslation} from "react-i18next";


const getProjectsData = (t: TFunction): IProject[] => [
    {
        id: 1,
        imgSrc: project_1,
        alt: t('projects.completeApps.items.chertNodes.alt'),
        stack: "HTML SCSS Python Flask",
        title: t('projects.completeApps.items.chertNodes.title'),
        description: t('projects.completeApps.items.chertNodes.description'),
        liveSource: "#",
        cachedSource: "#",
        primaryButtonTitle: t('projects.completeApps.items.chertNodes.buttons.live'),
        secondaryButtonTitle: t('projects.completeApps.items.chertNodes.buttons.cached')
    },
    {
        id: 2,
        imgSrc: project_3,
        alt: t('projects.completeApps.items.kahoot.alt'),
        stack: "CSS Express Node.js",
        title: t('projects.completeApps.items.kahoot.title'),
        description: t('projects.completeApps.items.kahoot.description'),
        liveSource: "#",
        cachedSource: "#",
        primaryButtonTitle: t('projects.completeApps.items.kahoot.buttons.live'),
        secondaryButtonTitle: ""
    },
    {
        id: 3,
        imgSrc: project_2,
        alt: t('projects.completeApps.items.protectX.alt'),
        stack: "React Express Discord.js Node.js HTML SCSS Python Flask",
        title: t('projects.completeApps.items.protectX.title'),
        description: t('projects.completeApps.items.protectX.description'),
        liveSource: "#",
        cachedSource: "#",
        primaryButtonTitle: "",
        secondaryButtonTitle: t('projects.completeApps.items.protectX.buttons.cached')
    },
    {
        id: 4,
        imgSrc: project_4,
        alt: t('projects.completeApps.items.kotikBot.title'),
        stack: "HTML CSS JS",
        title: t('projects.completeApps.items.kotikBot.title'),
        description: t('projects.completeApps.items.kotikBot.description'),
        liveSource: "#",
        cachedSource: "#",
        primaryButtonTitle: t('projects.completeApps.items.kotikBot.buttons.live'),
        secondaryButtonTitle: ""
    },
    {
        id: 5,
        imgSrc: project_5,
        alt: t('projects.completeApps.items.portfolio.title'),
        stack: "Vue TS Less",
        title: t('projects.completeApps.items.portfolio.title'),
        description: t('projects.completeApps.items.portfolio.description'),
        liveSource: "#",
        cachedSource: "#",
        primaryButtonTitle: t('projects.completeApps.items.portfolio.buttons.live'),
        secondaryButtonTitle: ""
    }
];


export const CompleteApps = () => {
    const {t} = useTranslation();

    const projects = getProjectsData(t)
    return (
        <StyledCompleteProjects>
            <Container>
                <SectionTitle prefix={"#"} title={t('projects.completeApps.title')}/>
                <ProjectsWrapper>
                    {projects.map((project) => (
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
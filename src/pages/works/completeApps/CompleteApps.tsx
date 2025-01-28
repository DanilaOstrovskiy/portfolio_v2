import React from 'react';
import project_1 from "../../../assets/images/proj1.webp";
import project_3 from "../../../assets/images/proj3.webp";
import project_2 from "../../../assets/images/proj2.webp";
import project_4 from "../../../assets/images/proj4.webp";
import project_5 from "../../../assets/images/proj5.webp";
import {SectionTitle} from "../../../components/ui/sectionTitle/SectionTitle";
import {Project} from "../../home/projects/project/Project";
import {Container} from "../../../components/shared/Container/Container";
import {TFunction} from "i18next";
import {IProject} from "../../home/projects/Projects";
import {useTranslation} from "react-i18next";
import {S} from "./CompleteApps_style"

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
        <S.CompleteProjects>
            <Container>
                <SectionTitle prefix={"#"} title={t('projects.completeApps.title')}/>
                <S.ProjectsWrapper>
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
                </S.ProjectsWrapper>
            </Container>
        </S.CompleteProjects>
    );
};


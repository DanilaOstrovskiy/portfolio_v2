import React from 'react';
import {Container} from "../../../components/shared/Container/Container";
import {SectionTitle} from "../../../components/ui/sectionTitle/SectionTitle";
import {Project} from "../../home/projects/project/Project";
import {useTranslation} from "react-i18next";
import {S} from "./SmallProject_styles"

export const SmallProjects = () => {
    const {t} = useTranslation();
    const smallProjects = [
        {
            id: 1,
            stack: "Discord.js TS JS",
            title: "Bot boilerplate",
            description: t('projects.smallApps.items.botBoilerplate.description'),
            liveSource: "#",
            cachedSource: "https://github.com/",
            primaryButtonTitle: t('projects.smallApps.items.botBoilerplate.buttons.live'),
            secondaryButtonTitle: t('projects.smallApps.items.botBoilerplate.buttons.cached')
        },
        {
            id: 2,
            stack: "VUE CSS JS",
            title: "My blog",
            description: t('projects.smallApps.items.myBlog.description'),
            liveSource: "#",
            cachedSource: "https://github.com/",
            primaryButtonTitle: t('projects.smallApps.items.myBlog.buttons.live'),
            secondaryButtonTitle: t('projects.smallApps.items.myBlog.buttons.cached')
        },
        {
            id: 3,
            stack: "Figma",
            title: "Chess pro",
            description: t('projects.smallApps.items.chessPro.description'),
            liveSource: "#",
            cachedSource: "https://figma.com/",
            primaryButtonTitle: t('projects.smallApps.items.chessPro.buttons.live'),
            secondaryButtonTitle: t('projects.smallApps.items.chessPro.buttons.cached')
        },
        {
            id: 4,
            stack: "Figma",
            title: "Crash protect website",
            description: t('projects.smallApps.items.crashProtectWebsite.description'),
            liveSource: "#",
            cachedSource: "https://figma.com/",
            primaryButtonTitle: t('projects.smallApps.items.crashProtectWebsite.buttons.live'),
            secondaryButtonTitle: t('projects.smallApps.items.crashProtectWebsite.buttons.cached')
        },
        {
            id: 5,
            stack: "HTML CSS",
            title: "CSS experiments",
            description: t('projects.smallApps.items.cssExperiments.description'),
            liveSource: "https://example.com/",
            cachedSource: "#",
            primaryButtonTitle: t('projects.smallApps.items.cssExperiments.buttons.live'),
            secondaryButtonTitle: t('projects.smallApps.items.cssExperiments.buttons.cached')
        },
        {
            id: 6,
            stack: "Lua NeoVim",
            title: "Web Dev nvim config",
            description: t('projects.smallApps.items.webDev.description'),
            liveSource: "#",
            cachedSource: "https://github.com/",
            primaryButtonTitle: t('projects.smallApps.items.webDev.buttons.live')
        },
        {
            id: 7,
            stack: "Python Quart HTML",
            title: "Ooku",
            description: t('projects.smallApps.items.ooku.description'),
            liveSource: "#",
            cachedSource: "#",
            primaryButtonTitle: t('projects.smallApps.items.ooku.buttons.live')
        },
        {
            id: 8,
            stack: "Figma",
            title: "School website",
            description: t('projects.smallApps.items.schoolWebsite.description'),
            liveSource: "#",
            cachedSource: "https://figma.com/",
            primaryButtonTitle: t('projects.smallApps.items.schoolWebsite.buttons.live')
        }
    ];

    return (
        <S.SmallProjects>
            <Container>
                <span className="decorator"/>
                <SectionTitle prefix={"#"} title={t('projects.smallApps.title')}/>
                <S.ProjectsWrapper>
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
                </S.ProjectsWrapper>
            </Container>
        </S.SmallProjects>
    );
};


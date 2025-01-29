import React from 'react';
import {Project} from "./project/Project";
import {SectionTitle} from "../../../components/ui/sectionTitle/SectionTitle";
import project_1 from "../../../assets/images/proj1.webp";
import project_2 from "../../../assets/images/proj2.webp";
import project_3 from "../../../assets/images/proj3.webp";
import {FlexWrapper} from "../../../components/shared/flexWrapper/FlexWrapper";
import {Container} from "../../../components/shared/Container/Container";
import {useTranslation} from "react-i18next";
import {TFunction} from "i18next";
import {S} from "./Projects_styles";


export interface IProject {
    id: number;
    imgSrc: string;
    alt: string;
    stack: string;
    title: string;
    description: string;
    liveSource: string;
    cachedSource: string;
    primaryButtonTitle: string;
    secondaryButtonTitle: string;
}


const getProjectsData = (t: TFunction): IProject[] => [
    {
        id: 1,
        imgSrc: project_1,
        alt: t('home.projects.items.chertNodes.alt'),
        stack: "HTML SCSS Python Flask",
        title: t('home.projects.items.chertNodes.title'),
        description: t('home.projects.items.chertNodes.description'),
        liveSource: "#",
        cachedSource: "#",
        primaryButtonTitle: t('home.projects.items.chertNodes.buttons.live'),
        secondaryButtonTitle: t('home.projects.items.chertNodes.buttons.cached')
    },
    {
        id: 2,
        imgSrc: project_2,
        alt: t('home.projects.items.protectX.alt'),
        stack: "React Express Discord.js Node.js HTML SCSS Python Flask",
        title: t('home.projects.items.protectX.title'),
        description: t('home.projects.items.protectX.description'),
        liveSource: "#",
        cachedSource: "",
        primaryButtonTitle: t('home.projects.items.protectX.buttons.live'),
        secondaryButtonTitle: ""
    },
    {
        id: 3,
        imgSrc: project_3,
        alt: t('home.projects.items.kahoot.alt'),
        stack: "CSS Express Node.js",
        title: t('home.projects.items.kahoot.title'),
        description: t('home.projects.items.kahoot.description'),
        liveSource: "#",
        cachedSource: "",
        primaryButtonTitle: t('home.projects.items.kahoot.buttons.live'),
        secondaryButtonTitle: ""
    },
];

export const Projects = () =>
{
    const {t} = useTranslation();
    const projects = getProjectsData(t);
    return (
        <S.Projects>
            <Container>
                <FlexWrapper align={"center"} justify={'space-between'}>
                    <SectionTitle prefix="#" title={t('home.projects.title')} showLine={true} linePosition={"440px"} lineWidth={"511px"}/>
                    <S.StyledLink to="/works#works">{t('home.projects.viewAll')}</S.StyledLink>
                </FlexWrapper>
                <S.ProjectsWrapper>
                    <FlexWrapper justify={"space-around"} wrap={"wrap"} gap={"15px"}>
                        {projects.map((project:IProject) => (
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
                </S.ProjectsWrapper>
            </Container>
        </S.Projects>
    );
};



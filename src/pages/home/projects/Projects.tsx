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
import {useTranslation} from "react-i18next";
import {TFunction} from "i18next";


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

export interface IProjectProps extends IProject {
    key: number;
    demoLink: string;
    sourceLink: string;
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
        <StyledProjects>
            <Container>
                <FlexWrapper align={"center"} justify={'space-between'}>
                    <SectionTitle prefix="#" title={t('home.projects.title')} showLine={true} linePosition={400} lineWidth={511}/>
                    <StyledLink to="/works">{t('home.projects.viewAll')}</StyledLink>
                </FlexWrapper>
                <ProjectsWrapper>
                    <FlexWrapper justify={"space-between"}>
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

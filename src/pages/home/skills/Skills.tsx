import React from 'react';
import {SectionTitle} from "../../../components/ui/sectionTitle/SectionTitle";
import {Skill} from "./skill/Skill";
import styled from "styled-components";
import {Icon} from "../../../components/ui/icon/Icon";
import {Container} from "../../../components/shared/Container/Container";
import {theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/shared/flexWrapper/FlexWrapper";
import {TFunction} from "i18next";
import {useTranslation} from "react-i18next";

export interface ISkill {
    title: string;
    items: string[]
}


export const getSkillsData = (t: TFunction): ISkill[] => [
    {title: t('home.skills.languages'), items: ["TypeScript", "Lua", "Python", "JavaScript"]},
    {title: t('home.skills.databases'), items: ["SQLite", "PostgresSQL", "Mongo"]},
    {title: t('home.skills.tools'), items: ["VSCode", "Neovim", "Linux", "Figma", "XFCE", "Arch", "Git", "Font Awesome"]},
    {title: t('home.skills.other'), items: ["HTML", "CSS", "EJS", "SCSS", "REST", "Jinja"]},
    {title: t('home.skills.frameworks'), items: ["React", "Vue", "Disnake", "Discord.js", "Flask", "Express.js"]}]


export const Skills = () => {
    const {t} = useTranslation();
    const skills = getSkillsData(t)
    return (
        <StyledSkills>
            <Container>
                <SectionTitle prefix="#" title={t('home.skills.title')} showLine={true} linePosition={"240px"} lineWidth={"239px"}/>
                <FlexWrapper justify={"space-between"} wrap={"wrap"}>
                    <AbstractFigures>
                        <StyledIconWrapper className="first_dots">
                            <Icon iconId={"dots5x5"} viewBox={"0 0 84 84"} height={"63"}
                                  width={"63"}/>
                        </StyledIconWrapper>
                        <StyledIconWrapper className="big_square"></StyledIconWrapper>
                        <StyledIconWrapper className="logo">
                            <Icon iconId={"middle_logo"} viewBox={"0 0 114 114"} height={"114"} width={"114"}/>
                        </StyledIconWrapper>
                        <StyledIconWrapper className="second_dots">
                            <Icon iconId={"dots5x5"} viewBox={"0 0 84 84"} height={"63"} width={"63"}/>
                        </StyledIconWrapper>
                        <StyledIconWrapper className="square"></StyledIconWrapper>
                    </AbstractFigures>
                    <SkillsWrapper>
                        <SkillsCards>
                            {skills.map((skill, index) => (
                                <SkillCard key={index}>
                                    <Skill key={index}
                                           width={"196px"}
                                           title={skill.title}
                                           items={skill.items}
                                    />
                                </SkillCard>
                            ))}
                        </SkillsCards>
                    </SkillsWrapper>
                </FlexWrapper>

            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    padding-top: 66px;
    padding-bottom: 66px;

    ${FlexWrapper} {
        @media ${theme.media.mobile}, ${theme.media.tablet}, ${theme.media.tabletM} {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
    }

    @media ${theme.media.mobile}, ${theme.media.tablet} {
            padding: 12px 20px;
    }
`

const SkillsWrapper = styled.div`
    padding-top: 50px;
`

const SkillsCards = styled.div`
    
    max-width: 584px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap-reverse;
    gap: 16px;

    @media ${theme.media.mobile}, ${theme.media.tablet}, ${theme.media.tabletM} {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    @media ${theme.media.tabletL} {
        max-height: 280px;
    }

`
const SkillCard = styled.div`

    &:nth-child(1) {
        order: 5
    }

    &:nth-child(2) {
        order: 3
    }

    &:nth-child(3) {
        order: 1
    }

    &:nth-child(4) {
        order: 4
    }

    &:nth-child(5) {
        order: 2
    }
`;


const AbstractFigures = styled.div`
    position: relative;

    @media ${theme.media.mobile}, ${theme.media.tablet}, ${theme.media.tabletM} {
        display: none;
    }
`
const StyledIconWrapper = styled.div`
    position: absolute;

    &.first_dots {
        transform: translate(34px, 58px);
    }

    &.big_square {
        content: "";
        width: 86px;
        height: 86px;
        border: 1px solid ${theme.colors.secondary};
        transform: translate(262px, 12px);
    }

    &.logo {
        transform: translate(49px, 190px);
    }

    &.second_dots {
        transform: translate(210px, 165px);
    }

    &.square {
        content: "";
        border: 1px solid ${theme.colors.secondary};
        width: 52px;
        height: 52px;

        transform: translate(331px, 215px);

    }
`


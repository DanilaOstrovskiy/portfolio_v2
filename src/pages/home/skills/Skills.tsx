import React from 'react';
import {SectionTitle} from "../../../components/ui/sectionTitle/SectionTitle";
import {Skill} from "./skill/Skill";
import {Icon} from "../../../components/ui/icon/Icon";
import {Container} from "../../../components/shared/Container/Container";
import {FlexWrapper} from "../../../components/shared/flexWrapper/FlexWrapper";
import {TFunction} from "i18next";
import {useTranslation} from "react-i18next";
import {S} from "./Skills_styles"

export type SkillType = {
    title: string;
    items: string[]
}


export const getSkillsData = (t: TFunction): SkillType[] => [
    {title: t('home.skills.languages'), items: ["TypeScript", "Lua", "Python", "JavaScript"]},
    {title: t('home.skills.databases'), items: ["SQLite", "PostgresSQL", "Mongo"]},
    {title: t('home.skills.tools'), items: ["VSCode", "Neovim", "Linux", "Figma", "XFCE", "Arch", "Git", "Font Awesome"]},
    {title: t('home.skills.other'), items: ["HTML", "CSS", "EJS", "SCSS", "REST", "Jinja"]},
    {title: t('home.skills.frameworks'), items: ["React", "Vue", "Disnake", "Discord.js", "Flask", "Express.js"]}]


export const Skills = () => {
    const {t} = useTranslation();
    const skills = getSkillsData(t)
    return (
        <S.Skills>
            <Container>
                <SectionTitle prefix="#" title={t('home.skills.title')} showLine={true} linePosition={"272px"} lineWidth={"239px"}/>
                <FlexWrapper justify={"space-between"} wrap={"wrap"}>
                    <S.AbstractFigures>
                        <S.IconWrapper className="first_dots">
                            <Icon iconId={"dots5x5"} viewBox={"0 0 84 84"} height={"63"}
                                  width={"63"}/>
                        </S.IconWrapper>
                        <S.IconWrapper className="big_square"></S.IconWrapper>
                        <S.IconWrapper className="logo">
                            <Icon iconId={"middle_logo"} viewBox={"0 0 114 114"} height={"114"} width={"114"}/>
                        </S.IconWrapper>
                        <S.IconWrapper className="second_dots">
                            <Icon iconId={"dots5x5"} viewBox={"0 0 84 84"} height={"63"} width={"63"}/>
                        </S.IconWrapper>
                        <S.IconWrapper className="square"></S.IconWrapper>
                    </S.AbstractFigures>
                    <S.SkillsWrapper>
                        <S.SkillsCards>
                            {skills.map((skill, index) => (
                                <S.SkillCard key={index}>
                                    <Skill key={index}
                                           title={skill.title}
                                           items={skill.items}
                                    />
                                </S.SkillCard>
                            ))}
                        </S.SkillsCards>
                    </S.SkillsWrapper>
                </FlexWrapper>

            </Container>
        </S.Skills>
    );
};


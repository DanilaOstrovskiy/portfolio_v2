import React from 'react';
import {SectionTitle} from "../../../components/ui/sectionTitle/SectionTitle";
import {Skill} from "../../home/skills/skill/Skill";
import {Container} from "../../../components/shared/Container/Container";
import {getSkillsData} from "../../home/skills/Skills";
import {useTranslation} from "react-i18next";
import {S} from "./SkillsOverview_styles"

export const SkillsOverview = () => {
    const {t} = useTranslation();
    const skills = getSkillsData(t)

    return (

        <S.Skills>
            <Container>
                <SectionTitle prefix={"#"} title={"skills"}/>
                <S.SkillsWrapper>
                    <S.SkillsCards>
                        {
                            skills.map((skill, index) => (
                                <S.SkillCard key={index}>
                                    <Skill
                                        key={index} title={skill.title} items={skill.items}/>
                                </S.SkillCard>
                            ))}
                    </S.SkillsCards>
                </S.SkillsWrapper>
            </Container>
        </S.Skills>
    );
};



import React from 'react';
import {SectionTitle} from "../../../components/ui/sectionTitle/SectionTitle";
import styled from "styled-components";
import {Skill} from "../../home/skills/skill/Skill";

import {Container} from "../../../components/shared/Container/Container";
import {theme} from "../../../styles/Theme";
import {getSkillsData} from "../../home/skills/Skills";
import {useTranslation} from "react-i18next";

const SkillsOverview = () => {
    const {t} = useTranslation();
    const skills = getSkillsData(t)
    return (

        <StyledSkills>
            <Container>
                <SectionTitle prefix={"#"} title={"skills"}/>
                <SkillsWrapper>
                    <SkillsCards>
                        {
                            skills.map((skill, index) => (
                                <SkillCard key={index}>
                                    <Skill width={"192px"}
                                        key={index} title={skill.title} items={skill.items}/>
                                </SkillCard>
                            ))}
                    </SkillsCards>

                </SkillsWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    padding-top: 66px;
    padding-bottom: 66px;
    position: relative;
    
    &::after {
        content: "";
        display: inline-block;
        position: absolute;
        width: 60px;
        height: 100px;
        right: 0;
        top:0;

        background-color: transparent;
        background-image: radial-gradient(circle, ${theme.colors.secondary} 2px, transparent 2px);
        background-size: 20px 20px;

        @media ${theme.media.mobile}, ${theme.media.tablet}, ${theme.media.desktopL} {
            display: none;
        }
    }
 



`
const SkillsWrapper = styled.div`
    padding-top: 50px;
    max-width: 1024px;
`

const SkillsCards = styled.div`
    max-height: 280px;
    width: 192px;
    display: flex;
    flex-direction: row;
    gap: 16px;

`

const SkillCard = styled.div`

    &:nth-child(1) {
      order: 1;
    }

    &:nth-child(2) {
       order:4;
    }

    &:nth-child(3) {
        order:3;
    }
    //
    &:nth-child(4) {
        order: 2;
    }
    //
    &:nth-child(5) {
        order: 5;
    }
`;

export default SkillsOverview;
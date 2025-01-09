import React from 'react';
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {Skill} from "./skill/Skill";
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper";
import {theme} from "../../../styles/Theme";

const data = [
    {title: "Languages", items: ["TypeScript", "Lua", "Python", "JavaScript"]},
    {title: "Databases", items: ["SQLite", "PostgresSQL", "Mongo"]},
    {title: "Tools", items: ["VSCode", "Neovim", "Linux", "Figma", "XFCE", "Arch", "Git", "Font Awesome"]},
    {title: "Other", items: ["HTML", "CSS", "EJS", "SCSS", "REST", "Jinja"]},
    {title: "Frameworks", items: ["React", "Vue", "Disnake", "Discord.js", "Flask", "Express.js"]},
];


export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle title={"skills"} linePosition={240} lineWidth={239} />
                <FlexWrapper justify={'space-between'}>
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
                    <SkillsCards>
                        {data.map((skill, index) => (
                            <SkillCard key={index}>
                                <Skill key={index} title={skill.title} items={skill.items}/>
                            </SkillCard>
                        ))}
                    </SkillsCards>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`

`

const SkillsCards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 178px);
    gap: 5px;

`

const SkillCard = styled.div`

    &:nth-child(4) {
        grid-column: 2;
        position: relative;
        transform: translateY(-25px);
    }

    &:nth-child(5) {
        grid-column: 3;
    }
`;


const AbstractFigures = styled.div`
    position: relative;
`
const StyledIconWrapper = styled.div`
    position: absolute;
    &.first_dots {
        top: 61px;
        left: 34px;
    }   
    &.big_square {
        content:"";
        width: 86px;
        height: 86px;
        border: 1px solid ${theme.colors.secondaryText};
        left: 262px;
        top: 12px;
    }

    &.logo {
        bottom: 20px;
        left: 49px;

    }
    &.second_dots {
        left:210px;
        bottom: 100px;
    }
    &.square {
        content:"";
        border: 1px solid ${theme.colors.secondaryText};
        width: 52px;
        height: 52px;
        bottom: 70px;
        left: 330px;
    }
`


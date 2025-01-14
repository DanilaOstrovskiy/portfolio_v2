import React from 'react';
import {SectionTitle} from "../../../components/ui/sectionTitle/SectionTitle";
import {Skill} from "./skill/Skill";
import styled from "styled-components";
import {Icon} from "../../../components/ui/icon/Icon";
import {Container} from "../../../components/shared/Container/Container";
import {theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/shared/flexWrapper/FlexWrapper";

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
                <SectionTitle title={"skills"} linePosition={240} lineWidth={239}/>
                <FlexWrapper justify={"space-between"}>
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
                            {data.map((skill, index) => (
                                <SkillCard key={index}>
                                    <Skill key={index} title={skill.title} items={skill.items}/>
                                </SkillCard>
                            ))}
                        </SkillsCards>
                    </SkillsWrapper></FlexWrapper>

            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    padding-top: 66px;
    padding-bottom: 66px;
`
const SkillsWrapper = styled.div`
    padding-top: 50px;
`

const SkillsCards = styled.div`
    //display: grid;
    //grid-template-columns: repeat(3, 178px);
    //gap: 5px;
    //padding-top: 50px;
    max-height: 280px;
    width: 584px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap-reverse;
    gap: 16px;

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


    //&:nth-child(4) {
    //    grid-column: 2;
    //    position: relative;
    //    transform: translateY(-25px);
    //}
    //
    //&:nth-child(5) {
    //    grid-column: 3;
    //}
`;


const AbstractFigures = styled.div`
    position: relative;
`
const StyledIconWrapper = styled.div`
    position: absolute;

    &.first_dots {
        transform:translate(34px,58px) ;
    }

    &.big_square {
        content: "";
        width: 86px;
        height: 86px;
        border: 1px solid ${theme.colors.secondary};
        transform:translate(262px,12px);
    }

    &.logo {
        transform:translate(49px,190px);
    }

    &.second_dots {
        transform:translate(210px,165px);
    }

    &.square {
        content: "";
        border: 1px solid ${theme.colors.secondary};
        width: 52px;
        height: 52px;
          
        transform:translate(331px,215px);

    }
`


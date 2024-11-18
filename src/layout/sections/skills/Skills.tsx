import React from 'react';
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {Skill} from "./skill/Skill";
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";

const data = [
    {title: "Languages", items: ["TypeScript", "Lua", "Python", "JavaScript"]},
    {title: "Databases", items: ["SQLite", "PostgreSQL", "Mongo"]},
    {title: "Tools", items: ["VSCode", "Neovim", "Linux", "Figma", "XFCE", "Arch", "Git", "Font Awesome"]},
    {title: "Other", items: ["HTML", "CSS", "EJS", "SCSS", "REST", "Jinja"]},
    {title: "Frameworks", items: ["React", "Vue", "Disnake", "Discord.js", "Flask", "Express.js"]},
];


export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle title={"#skills"}/>
            <SkillsWrapper>
            <AbstractFigures>
                <Icon iconId={"pink_logo"} height={"86"} width={"150"}/>
            </AbstractFigures>
                <SkillsCards>
                    {data.map((skill, index) => (
                        <SkillCard key={index}>
                            <Skill key={index} title={skill.title} items={skill.items}/>
                        </SkillCard>
                    ))}
                </SkillsCards>
            </SkillsWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: grey;
    min-height: 100vh;
`

const SkillsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 512px); /* Две колонки одинаковой ширины */
    max-width: 1024px; /* Общая ширина сетки */
    margin: 0 auto; /* Центрирование контейнера */
    `

const SkillsCards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 178px);
    gap: 5px;

`

const SkillCard = styled.div`
    &:nth-child(4) {
        grid-column: 2 
    }

    &:nth-child(5) {
        grid-column: 3 
    }
`;


const AbstractFigures = styled.div`
`



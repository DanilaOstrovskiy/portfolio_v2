import React from 'react';
import styled from "styled-components";

type PropsSkillType = {
    title: string;
    items: string[];
}

export const Skill = (props: PropsSkillType ) => {

    const { title, items } = props;
    return (
        <SkillContainer>
            <SkillsTitle>{title}</SkillsTitle>
            <SkillsItems>{items.map((item, index) => (
                    <SkillItem key={index}>{item}</SkillItem>
                ))}</SkillsItems>
        </SkillContainer>
    );
};

const SkillContainer = styled.div`
    border: 1px solid white;
    width: 178px;
`

const SkillsTitle = styled.h4`
    color: white;
    padding-left: 8px;
    margin: 0;
  `

const SkillsItems = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    border-top: 1px solid white;
`
const SkillItem = styled.li`
    display:inline-block;
    list-style-type: none;
    padding-left: 5px;
`;
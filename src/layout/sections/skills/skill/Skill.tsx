import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

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
    border:1px solid ${theme.colors.secondaryText};
    max-width: 178px;
    display: flex;
    flex-direction: column;
;
`

const SkillsTitle = styled.h4`
    color: white;
    padding: 8px;
    border: 1px 1px 0 1px 1px solid ${theme.colors.secondaryText};
`

const SkillsItems = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 8px;
    gap: 8px;
    border-top: 1px solid ${theme.colors.secondaryText};
`
const SkillItem = styled.li`
    font-size: 16px;
    font-weight: 400;
    color: ${theme.colors.secondaryText};
    display:inline-block;
    list-style-type: none;
    
`;
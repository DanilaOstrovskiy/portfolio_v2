import React from 'react';
import SectionHeader from "../works/sectionHeader/SectionHeader";
import {About} from "../home/about/About";
import {theme} from "../../styles/Theme";
import SkillsOverview from "./SkillsOverview/SkillsOverview";
import {Facts} from "./facts/Facts";
import {useTranslation} from "react-i18next";
import styled from "styled-components";


const AboutMe = () => {
    const {t} = useTranslation();
    return (
        <StyledAboutMe>
            <SectionHeader
                prefix={"/"}
                title={t('about.headerTitle')}
                description={t('about.description')}/>
            <About
                showLine={false}
                showButton={false}

                beforeDecorator={{
                    width: "60px",
                    height: "60px",
                    right: "0",
                    top: "36%",
                    backgroundColor: "transparent",
                    backgroundImage: `radial-gradient(${theme.colors.secondary} 2px, transparent 2px)`,
                    backgroundSize: "20px 20px"
                }}

                afterDecorator={{
                    width: "70px",
                    height: "155px",
                    right: "0",
                    top: "20%",
                    border: `1px solid ${theme.colors.secondary}`,
                }}
            />
            <SkillsOverview/>
            <Facts/>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    padding-top: 32px;`

export default AboutMe;
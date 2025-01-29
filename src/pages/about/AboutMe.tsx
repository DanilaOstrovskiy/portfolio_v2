import React, {useEffect} from 'react';
import SectionHeader from "../works/sectionHeader/SectionHeader";
import {About} from "../home/about/About";
import {theme} from "../../styles/Theme";
import {Facts} from "./facts/Facts";
import {useTranslation} from "react-i18next";
import {SkillsOverview} from "./SkillsOverview/SkillsOverview";
import {S} from "./AboutMe_styles"
import {useLocation} from "react-router-dom";


const AboutMe = () => {
    const {t} = useTranslation();

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.substring(1); // Убираем #
            const element = document.getElementById(id);

            if (element) {
                setTimeout(() => { // Даем время DOM загрузиться
                    element.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        }
    }, [location]);

    return (
        <S.AboutMe id="about">
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
        </S.AboutMe>
    );
};


export default AboutMe;
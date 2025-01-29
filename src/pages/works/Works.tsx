import React, {useEffect} from 'react';
import {CompleteApps} from "./completeApps/CompleteApps";
import {SmallProjects} from "./smallProjects/SmallProjects";
import SectionHeader from "./sectionHeader/SectionHeader";
import {useTranslation} from "react-i18next";
import {S} from "./Works_styles"
import {useLocation} from "react-router-dom";


const Works = () => {
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
        <S.Works>
            <SectionHeader id={"works"} prefix={"/"} title={t('projects.title')}  description={t('projects.description')} />
            <CompleteApps/>
            <SmallProjects/>
        </S.Works>
    );
};



export default Works;

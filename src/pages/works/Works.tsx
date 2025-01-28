import React from 'react';
import {CompleteApps} from "./completeApps/CompleteApps";
import {SmallProjects} from "./smallProjects/SmallProjects";
import SectionHeader from "./sectionHeader/SectionHeader";
import {useTranslation} from "react-i18next";
import {S} from "./Works_styles"


const Works = () => {
    const {t} = useTranslation();
    return (
        <S.Works>
            <SectionHeader prefix={"/"} title={t('projects.title')}  description={t('projects.description')} />
            <CompleteApps/>
            <SmallProjects/>
        </S.Works>
    );
};



export default Works;

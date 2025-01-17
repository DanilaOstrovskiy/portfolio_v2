import React from 'react';
import styled from "styled-components";
import {CompleteApps} from "./completeApps/CompleteApps";
import {SmallProjects} from "./smallProjects/SmallProjects";
import SectionHeader from "./sectionHeader/SectionHeader";
import {useTranslation} from "react-i18next";


const Works = () => {
    const {t} = useTranslation();
    return (
        <StyledWorks>
            <SectionHeader prefix={"/"} title={t('projects.title')}  description={t('projects.description')} />
            <CompleteApps/>
            <SmallProjects/>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    padding-top: 32px;
`


export default Works;

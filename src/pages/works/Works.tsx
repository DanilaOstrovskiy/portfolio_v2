import React from 'react';
import styled from "styled-components";
import {CompleteApps} from "./completeApps/CompleteApps";
import {SmallProjects} from "./smallProjects/SmallProjects";
import SectionHeader from "./sectionHeader/SectionHeader";


const Works = () => {

    return (
        <StyledWorks>
            <SectionHeader prefix={"/"} title={"projects"}  description={"List of my projects"} />
            <CompleteApps/>
            <SmallProjects/>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
`


export default Works;

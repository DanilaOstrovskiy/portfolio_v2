import React from 'react';
import {Container} from "../../../components/shared/Container/Container";
import {SectionTitle} from "../../../components/ui/sectionTitle/SectionTitle";
import styled from "styled-components";

type SectionHeaderPropsType = {
    prefix: string,
    title: string,
    description: string,
}


const SectionHeader = (props: SectionHeaderPropsType) => {

    const {prefix,description,title} = props
    return (
        <StyledHeaderSection>
            <Container>
                <SectionTitle prefix={prefix} title={title}/>
                <StyledText>{description}</StyledText>
            </Container>
        </StyledHeaderSection>
    );
};

const StyledHeaderSection = styled.section`
    padding-top: 32px;
    padding-bottom: 40px;

`

const StyledText = styled.p`
    padding-top: 14px;
`

export default SectionHeader;
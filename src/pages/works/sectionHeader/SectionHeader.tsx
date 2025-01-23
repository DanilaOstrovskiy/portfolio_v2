import React from 'react';
import {Container} from "../../../components/shared/Container/Container";
import {SectionTitle} from "../../../components/ui/sectionTitle/SectionTitle";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

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
    padding-bottom: 40px;

    @media ${theme.media.mobile}, ${theme.media.tablet} {
        padding: 12px 20px;
    }

`

const StyledText = styled.p`
    padding-top: 14px;
`

export default SectionHeader;
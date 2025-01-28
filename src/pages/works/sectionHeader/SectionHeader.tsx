import React from 'react';
import {Container} from "../../../components/shared/Container/Container";
import {SectionTitle} from "../../../components/ui/sectionTitle/SectionTitle";
import {S} from "./SectionHeader_styles"

type SectionHeaderPropsType = {
    prefix: string,
    title: string,
    description: string,
}


const SectionHeader = (props: SectionHeaderPropsType) => {

    const {prefix,description,title} = props
    return (
        <S.HeaderSection>
            <Container>
                <SectionTitle prefix={prefix} title={title}/>
                <S.Text>{description}</S.Text>
            </Container>
        </S.HeaderSection>
    );
};



export default SectionHeader;
import React from 'react';
import {Container} from "../../../components/shared/Container/Container";
import {SectionTitle} from "../../../components/ui/sectionTitle/SectionTitle";
import {S} from "./SectionHeader_styles"

type SectionHeaderPropsType = {
    id?: string
    prefix: string,
    title: string,
    description: string,
}


const SectionHeader = (props: SectionHeaderPropsType) => {

    const {prefix,description,title,id} = props
    return (
        <S.HeaderSection id={id}>
            <Container>
                <SectionTitle prefix={prefix} title={title}/>
                <S.Text>{description}</S.Text>
            </Container>
        </S.HeaderSection>
    );
};



export default SectionHeader;
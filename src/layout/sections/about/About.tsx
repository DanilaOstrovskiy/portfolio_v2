import React from 'react';
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import styled from "styled-components";
import {Image} from "../../../components/image/Image";
import avatar2 from "../../../assets/images/avatar2.webp";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper";

export const About = () => {
    return (
        <StyledAbout>
            <SectionTitle>#about-me</SectionTitle>
            <FlexWrapper align={'left'}>
                <StyledDescription>
                    <StyledParagraph>Hello, i’m Elias!</StyledParagraph>
                    <StyledParagraph>I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop
                        responsive
                        websites from scratch and raise them into modern user-friendly web
                        experiences. </StyledParagraph>
                    <StyledParagraph>Transforming my creativity and knowledge into a websites has been my passion for
                        over a
                        year. I have been helping various clients to establish their presence online. I always strive to
                        learn about the newest technologies and frameworks</StyledParagraph>
                    <a href="#">Read more -&gt;</a>
                </StyledDescription>
                <StyledAvatar>
                <Image src={avatar2} alt={"avatar2"}/>
                </StyledAvatar>
            </FlexWrapper>

        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    min-height: 100vh;
    background-color: rgba(163, 149, 149, 0.93);
`;

const StyledDescription = styled.div``
const StyledAvatar = styled.div``

const StyledParagraph = styled.p``
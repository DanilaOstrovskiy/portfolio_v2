import React from 'react';
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import styled from "styled-components";
import {Image} from "../../../components/image/Image";
import avatar2 from "../../../assets/images/avatar2.webp";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper";

export const About = () => {
    return (
        <StyledAbout>
            <SectionTitle title={"about-me"}/>
            <FlexWrapper align={'left'}>
                <StyledDescription>
                    <StyledParagraph>Hello, i’m Elias!</StyledParagraph>
                    <StyledParagraph>I’m a self-taught front-end developer based in Manchester, Great Britain. I can develop
                        responsive
                        websites from scratch and raise them into modern user-friendly web
                        experiences. </StyledParagraph>
                    <StyledParagraph>Transforming my creativity and knowledge into a websites has been my passion for
                        over a
                        year. I have been helping various clients to establish their presence online. I always strive to
                        learn about the newest technologies and frameworks</StyledParagraph>
                    <Link href="#">Read more -&gt;</Link>
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
`;

const StyledDescription = styled.div``
const StyledAvatar = styled.div``

const StyledParagraph = styled.p``
const Link = styled.a``
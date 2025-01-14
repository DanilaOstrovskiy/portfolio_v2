import React from 'react';
import {SectionTitle} from "../../../components/ui/sectionTitle/SectionTitle";
import styled from "styled-components";
import avatar2 from "../../../assets/images/avatar2.webp";
import {FlexWrapper} from "../../../components/shared/flexWrapper/FlexWrapper";
import {Container} from "../../../components/shared/Container/Container";
import {LinkAsButton} from "../../../components/ui/linkAsButton/LinkAsButton";
import {theme} from "../../../styles/Theme";
import {Icon} from "../../../components/ui/icon/Icon";

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <SectionTitle title={"about-me"} lineWidth={326} linePosition={300}/>
                <FlexWrapper justify={'space-between'}>
                    <StyledDescription>
                        <StyledParagraph>Hello, i’m Elias!</StyledParagraph>
                        <StyledParagraph>I’m a self-taught front-end developer based in Manchester, Great Britain. I can
                            develop
                            responsive
                            websites from scratch and raise them into modern user-friendly web
                            experiences.
                        </StyledParagraph>
                        <StyledParagraph>Transforming my creativity and knowledge into a websites has been my passion
                            for
                            over a
                            year. I have been helping various clients to establish their presence online. I always
                            strive to
                            learn about the newest technologies and frameworks</StyledParagraph>
                        <ButtonWrapper>
                            <LinkAsButton href="#" variant={"primary"} size={"small"}>Read more -&gt;</LinkAsButton>
                        </ButtonWrapper>
                    </StyledDescription>

                    <PhotoWrapper>
                        <IconWrapper className="dots5x5">
                            <Icon iconId={"dots5x5"} viewBox={"0 0 84 84"} width={"84"} height={"84"}></Icon>
                        </IconWrapper>
                        <Photo src={avatar2} alt={"avatar2"}/>
                        <span></span>
                        <IconWrapper className="dots5x4">
                            <Icon iconId={"dots5x4"} viewBox="0 0 104 56" width={"104"} height={"56"}></Icon>
                        </IconWrapper>
                    </PhotoWrapper>


                </FlexWrapper>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    padding-top: 66px;
    padding-bottom: 66px;

    position: relative;
    
    &::before {
        content: "";
        display: inline-block;
        position: absolute;
        border: 1px solid ${theme.colors.secondary};
        width: 70px;
        height: 155px;
        left: 0;
        top: 30%;
    }

        &::after {
            content: "";
            display: inline-block;
            position: absolute;
            width: 80px;
            height: 103px;
            right: 0;
            top: 60%;

            background-color: transparent;
            background-image: radial-gradient(circle, ${theme.colors.secondary} 2px, transparent 2px);
            background-size: 20px 20px;
        }
`;

const StyledDescription = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    line-height: 162%;
    padding-top: 30px;
`

const Photo = styled.img`
    width: 340px;
    object-fit: cover;
    z-index: 0;
`
const PhotoWrapper = styled.div`
    position: relative;
    transform: translateY(-40px);
    margin-bottom: -40px;
    span{
        &::before {
            content: "";
            display: inline-block;
            position: absolute;
            width: 271px;
            height: 1px;
            background-color: ${theme.colors.accent};
            z-index: 999;
            right: 25px;
            bottom: 5px
        }
    }

`

const IconWrapper = styled.div`
    position: absolute;

    &.dots5x5 {
        z-index: 1;
        top: 60px;
        right: 255px;
    }

    &.dots5x4 {
        z-index: 2;

        right: 15px;
        top: 278px;
    }
`


const StyledParagraph = styled.p`
    color: ${theme.colors.secondary};
`

const ButtonWrapper = styled.div`
`

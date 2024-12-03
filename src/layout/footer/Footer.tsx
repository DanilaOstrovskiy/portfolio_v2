import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper";

export const Footer = () => {
    const mediaItems = [
        { iconId: "github" },
        { iconId: "figma" },
        { iconId: "discord" }
    ];

    return (
        <StyledFooter>
            <FlexWrapper  align={'center'} justify={'space-around'} >
                <FooterSection>
                    <StyledName>Elias</StyledName>
                    <StyledEmail>elias@elias-dev.ml</StyledEmail>
                    <StyledDesciption>Web designer and front-end developer</StyledDesciption>
                </FooterSection>
                <FooterMedia>
                    <MediaTitle>Media</MediaTitle>
                    {mediaItems.map((item, index) => (
                        <Icon key={index} iconId={item.iconId}/>
                    ))}
                </FooterMedia>
            </FlexWrapper>
                <Copyright>&copy; Copyright 2022. Made by Elias</Copyright>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #e6c8d9;
`
const FooterSection = styled.section``
const StyledName = styled.p``
const StyledEmail = styled.p``
const StyledDesciption = styled.p``

const FooterMedia = styled.section``
const MediaTitle = styled.h6``

const Copyright = styled.section`
text-align: center`

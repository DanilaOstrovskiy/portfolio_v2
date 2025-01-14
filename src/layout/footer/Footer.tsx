import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/ui/icon/Icon";
import {theme} from "../../styles/Theme";
import {Container} from "../../components/shared/Container/Container";
import {Logo} from "../../components/logo/Logo";

export const Footer = () => {
    const mediaItems = [
        {iconId: "github"},
        {iconId: "figma"},
        {iconId: "discord"}
    ];

    return (
        <StyledFooter>
            <Container>
                <FooterWrapper>
                    <FooterSection>
                        <LogoEmailWrapper>
                            <Logo/>
                            <StyledEmail>elias@elias-dev.ml</StyledEmail>
                        </LogoEmailWrapper>

                        <StyledDescription>Web designer and front-end developer</StyledDescription>
                    </FooterSection>
                    <SocialMediaWrapper>
                        <MediaTitle>Media</MediaTitle>
                        <SocialList>
                            {mediaItems.map((item, index) => (
                                <SocialItem key={index}>
                                    <Link> <Icon key={index} iconId={item.iconId} viewBox={"0 0 32 32"} height={"32"}
                                                 width={"32"}/></Link>

                                </SocialItem>
                            ))}
                        </SocialList>
                    </SocialMediaWrapper>

                </FooterWrapper>
                <Copyright>&copy; Copyright 2022. Made by Elias</Copyright></Container>
            <Container/>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
    padding-top: 66px;
    padding-bottom: 32px;
    position: relative;

    
    &::before {
        content: "";
        width: 100%;
        height: 1px;
        z-index: 10;
        position: absolute;
        background-color: ${theme.colors.secondary}
    }
    
`
const FooterWrapper = styled.footer`
    display: flex;
    justify-content: space-between;
    padding-top: 32px;
    padding-bottom: 24px;

`
const FooterSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`
const LogoEmailWrapper = styled.div`
    display: flex;
    gap: 24px;`

const StyledEmail = styled.p`
    color: ${theme.colors.secondary};
`
const StyledDescription = styled.p`
`

const MediaTitle = styled.h6`
    font-weight: 500;
    font-size: 24px;
`
const SocialMediaWrapper = styled.div`
    display: flex;
    gap: 12px;
    flex-direction: column;`

const SocialList = styled.ul`
    display: flex;
    list-style-type: none;
    gap: 12px;`

const SocialItem = styled.li`
    color: ${theme.colors.svg};
`
const Link = styled.a`
    color: ${theme.colors.svg};;
    transition: color 0.3s ease;

    &:hover {
        color: ${theme.colors.primary};
    }
`


const Copyright = styled.section`
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    color: ${theme.colors.secondary};
    padding-top: 24px;
`

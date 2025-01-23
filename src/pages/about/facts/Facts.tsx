import React from 'react';
import {Container} from "../../../components/shared/Container/Container";
import {SectionTitle} from "../../../components/ui/sectionTitle/SectionTitle";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Icon} from "../../../components/ui/icon/Icon";
import {FlexWrapper} from "../../../components/shared/flexWrapper/FlexWrapper";
import {useTranslation} from "react-i18next";

export const Facts = () => {
    const {t} = useTranslation();
    return (
        <StyledFacts>
            <Container>
                <SectionTitle prefix={"#"} title={t('about.facts.title')} showLine={false}/>
                <FlexWrapper justify={'space-between'}>
                    <StyledContainer>
                        <StyledList>
                            <StyledItem>{t('about.facts.firstFact')}</StyledItem>
                            <StyledItem>{t('about.facts.secondFact')}</StyledItem>
                            <StyledItem>{t('about.facts.thirdFact.like')} <span>{t('about.facts.thirdFact.pizza')}</span>{t('about.facts.thirdFact.and')} <span>{t('about.facts.thirdFact.pasta')}</span></StyledItem>
                            <StyledItem>{t('about.facts.fourthFact.was')} <span>{t('about.facts.fourthFact.egypt')}</span>, <span>{t('about.facts.fourthFact.poland')}</span> {t('about.facts.fourthFact.and')}<span>{t('about.facts.fourthFact.turkey')}</span></StyledItem>
                            <StyledItem>{t('about.facts.fifthFact.favoriteMovie')}<span>{t('about.facts.fifthFact.greenMile')}</span></StyledItem>
                            <StyledItem>{t('about.facts.sixthFact')}</StyledItem>
                            <StyledItem>{t('about.facts.seventhFact')}</StyledItem>
                        </StyledList>
                    </StyledContainer>
                    <AbstractFiguresWrapper>
                        <IconWrapper className="logo-wrapper">
                            <Icon iconId={"pink_logo_v2"} viewBox={"0 0 114 114"} height={"114px"} width={"114px"}/>
                        </IconWrapper>
                        <IconWrapper className="dots-wrapper">
                            <Icon iconId={"dots4x4"} viewBox={"0 0 84 84"} height={"84px"} width={"84px"}/>
                        </IconWrapper>
                    </AbstractFiguresWrapper>
                </FlexWrapper>
            </Container>
        </StyledFacts>
    );
};

const StyledFacts = styled.section`
    padding-top: 66px;
    padding-bottom: 144px;

    position: relative;
    &::before {
        content: "";
        display: inline-block;
        position: absolute;
        width: 77px;
        height: 155px;
        left: 0;
        top: 124px;
        border: 1px solid ${theme.colors.secondary};
        @media ${theme.media.mobile}, ${theme.media.tablet}, ${theme.media.desktopL} {
            display: none;
        }

    }
    
    &::after {
        content: "";
        display: inline-block;
        position: absolute;
        width: 80px;
        height: 100px;
        right: 0;
        bottom:57px;

        background-color: transparent;
        background-image: radial-gradient(circle, ${theme.colors.secondary} 2px, transparent 2px);
        background-size: 20px 20px;

        @media ${theme.media.mobile}, ${theme.media.tablet}, ${theme.media.desktopL} {
            display: none;
        }
    }

    @media ${theme.media.mobile}, ${theme.media.tablet} {
        padding: 12px 20px;
    }

    
    ${FlexWrapper}{
        justify-content: space-around;
        flex-wrap: wrap;
    }
`

const StyledContainer = styled.div`
    color: ${theme.colors.secondary};
    max-width: 620px;
    padding-top: 30px;
`

const StyledList = styled.ul`

    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    span {
        color: ${theme.colors.primary};
    }
`

const StyledItem = styled.li`
    border: 1px solid ${theme.colors.secondary};
    padding: 10px;`


const AbstractFiguresWrapper = styled.div`
    position: relative;

    @media ${theme.media.mobile}, ${theme.media.tablet}, ${theme.media.tabletM} {
        display: none;
    }
`

const IconWrapper = styled.div`
    position: absolute;
    
    &.logo-wrapper {
        right: 85px;
        bottom: 0;
    }

    &.dots-wrapper {
        right: 190px;
        top: 30px;
    }
        
`





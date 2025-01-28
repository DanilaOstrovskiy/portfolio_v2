import React from 'react';
import {Container} from "../../../components/shared/Container/Container";
import {SectionTitle} from "../../../components/ui/sectionTitle/SectionTitle";
import {Icon} from "../../../components/ui/icon/Icon";
import {FlexWrapper} from "../../../components/shared/flexWrapper/FlexWrapper";
import {useTranslation} from "react-i18next";
import {S} from  "./Facts_styles"

export const Facts = () => {
    const {t} = useTranslation();
    return (
        <S.Facts>
            <Container>
                <SectionTitle prefix={"#"} title={t('about.facts.title')} showLine={false}/>
                <FlexWrapper justify={'space-between'}>
                    <S.StyledContainer>
                        <S.List>
                            <S.Fact>{t('about.facts.firstFact')}</S.Fact>
                            <S.Fact>{t('about.facts.secondFact')}</S.Fact>
                            <S.Fact>{t('about.facts.thirdFact.like')} <span>{t('about.facts.thirdFact.pizza')}</span>{t('about.facts.thirdFact.and')} <span>{t('about.facts.thirdFact.pasta')}</span></S.Fact>
                            <S.Fact>{t('about.facts.fourthFact.was')} <span>{t('about.facts.fourthFact.egypt')}</span>, <span>{t('about.facts.fourthFact.poland')}</span> {t('about.facts.fourthFact.and')}<span>{t('about.facts.fourthFact.turkey')}</span></S.Fact>
                            <S.Fact>{t('about.facts.fifthFact.favoriteMovie')}<span>{t('about.facts.fifthFact.greenMile')}</span></S.Fact>
                            <S.Fact>{t('about.facts.sixthFact')}</S.Fact>
                            <S.Fact>{t('about.facts.seventhFact')}</S.Fact>
                        </S.List>
                    </S.StyledContainer>
                    <S.AbstractFiguresWrapper>
                        <S.IconWrapper className="logo-wrapper">
                            <Icon iconId={"pink_logo_v2"} viewBox={"0 0 114 114"} height={"114px"} width={"114px"}/>
                        </S.IconWrapper>
                        <S.IconWrapper className="dots-wrapper">
                            <Icon iconId={"dots4x4"} viewBox={"0 0 84 84"} height={"84px"} width={"84px"}/>
                        </S.IconWrapper>
                    </S.AbstractFiguresWrapper>
                </FlexWrapper>
            </Container>
        </S.Facts>
    );
};






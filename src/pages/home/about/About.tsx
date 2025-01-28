import React from 'react';
import {SectionTitle} from "../../../components/ui/sectionTitle/SectionTitle";
import avatar2 from "../../../assets/images/avatar2.webp";
import {FlexWrapper} from "../../../components/shared/flexWrapper/FlexWrapper";
import {Container} from "../../../components/shared/Container/Container";
import {LinkAsButton} from "../../../components/ui/linkAsButton/LinkAsButton";
import {Icon} from "../../../components/ui/icon/Icon";
import {useTranslation} from "react-i18next";
import {S} from "./About_styles"

export interface DecoratorStyles {
    width: string;
    height: string;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    border?: string;
    backgroundImage?: string;
    backgroundSize?: string;
    backgroundColor?: string;
}

interface AboutProps {
    showButton?: boolean;
    showLine?: boolean;
    beforeDecorator?: DecoratorStyles;
    afterDecorator?: DecoratorStyles;
}

export const About: React.FC<AboutProps> = ({
                                                showButton,
                                                beforeDecorator,
                                                afterDecorator,
                                                showLine,
                                            }) => {
    const {t} = useTranslation();
    return (
        <S.About $beforeDecorator={beforeDecorator} $afterDecorator={afterDecorator}>
            <Container>
                <SectionTitle prefix={"#"} title={t('home.about.title')} showLine={showLine} lineWidth={"326px"} linePosition={"350px"}/>
                <FlexWrapper justify={'space-between'}>
                    <S.Description>
                        <S.Paragraph>{t('home.about.introduction')}</S.Paragraph>
                        <S.Paragraph>{t('home.about.firstParagraph')}
                        </S.Paragraph>
                        <S.Paragraph>{t('home.about.secondParagraph')}</S.Paragraph>
                        <S.ButtonWrapper>
                            {showButton && (<LinkAsButton to="/about" variant={"primary"} size={"small"}>{t('home.about.link')}</LinkAsButton>)}
                        </S.ButtonWrapper>
                    </S.Description>

                    <S.PhotoWrapper>
                        <S.IconWrapper className="dots5x5">
                            <Icon iconId={"dots5x5"} viewBox={"0 0 84 84"} width={"84"} height={"84"}></Icon>
                        </S.IconWrapper>
                        <S.Photo src={avatar2} alt={"avatar2"}/>
                        <span></span>
                        <S.IconWrapper className="dots5x4">
                            <Icon iconId={"dots5x4"} viewBox="0 0 104 56" width={"104"} height={"56"}></Icon>
                        </S.IconWrapper>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.About>
    );
};


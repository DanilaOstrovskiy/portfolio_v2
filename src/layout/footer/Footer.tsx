import React from 'react';
import {Icon} from "../../components/ui/icon/Icon";
import {Container} from "../../components/shared/Container/Container";
import {Logo} from "../../components/logo/Logo";
import {useTranslation} from "react-i18next";
import {S} from "./Footer_styles"

export const Footer = () => {
    const {t} = useTranslation();
    const mediaItems = [
        {
            iconId: "github",
            link: "https://github.com/"
        },
        {
            iconId: "figma",
            link: "https://www.figma.com/"
        },
        {
            iconId: "discord",
            link: "https://discord.com/"
        }
    ];

    return (
        <S.Footer>
            <Container>
                <S.FooterWrapper>
                    <S.FooterSection>
                        <S.LogoEmailWrapper>
                            <Logo/>
                            <S.Email>elias@elias-dev.ml</S.Email>
                        </S.LogoEmailWrapper>

                        <S.Description>{t('common.footer.description')}</S.Description>
                    </S.FooterSection>
                    <S.SocialMediaWrapper>
                        <S.MediaTitle>{t('common.footer.media')}</S.MediaTitle>
                        <S.SocialList>
                            {mediaItems.map((item, index) => (
                                <S.SocialItem key={index}>
                                    <S.Link href={item.link}> <Icon key={index} iconId={item.iconId}
                                                                    viewBox={"0 0 32 32"} height={"32"}
                                                                    width={"32"}/></S.Link>

                                </S.SocialItem>
                            ))}
                        </S.SocialList>
                    </S.SocialMediaWrapper>

                </S.FooterWrapper>
                <S.Copyright>&copy; Copyright 2022. Made by Elias</S.Copyright>
            </Container>
        </S.Footer>
    );
};


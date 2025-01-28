import React from 'react';
import {SectionTitle} from "../../../components/ui/sectionTitle/SectionTitle";
import {Container} from "../../../components/shared/Container/Container";
import {Icon} from "../../../components/ui/icon/Icon";
import {FlexWrapper} from "../../../components/shared/flexWrapper/FlexWrapper";
import {useTranslation} from "react-i18next";
import {S} from "./AllMedia_styles"

export const AllMedia = () => {

    const {t} = useTranslation();
    return (
        <S.Media>
            <Container>
                <SectionTitle prefix={"/"} title={t('contacts.allMedia.title')}/>
                <S.MediaWrapper>
                    <FlexWrapper>
                        <S.MediaContactList>
                            <S.MediaContactItem>
                                <S.Link href={"https://www.twitter.com"}>
                                    <Icon iconId={"twitter"} viewBox={"0 0 32 32"} height={"32"} width={"32"}/>
                                    <span>@elias</span>
                                </S.Link>
                            </S.MediaContactItem>
                            <S.MediaContactItem>
                                <S.Link href={"https://www.twitter.com"}>
                                    <Icon iconId={"twitter"} viewBox={"0 0 32 32"} height={"32"} width={"32"}/>
                                    <span>@elias</span>
                                </S.Link>
                            </S.MediaContactItem>
                        </S.MediaContactList>
                    </FlexWrapper>
                </S.MediaWrapper>
            </Container>
        </S.Media>
    );
};


import React from 'react';
import {SectionTitle} from "../../../components/ui/sectionTitle/SectionTitle";
import {Icon} from "../../../components/ui/icon/Icon";
import {Container} from "../../../components/shared/Container/Container";
import {useTranslation} from "react-i18next";
import {FlexWrapper} from "../../../components/shared/flexWrapper/FlexWrapper";
import {S} from "./ContactsSection_styles"

export const ContactSection = () => {
    const {t} = useTranslation();
    return (
        <S.Contacts>
            <Container>
                <SectionTitle prefix={"#"} title={t('home.contacts.title')} showLine={true} linePosition={"250px"}
                              lineWidth={"127px"}/>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <S.Text>
                        {t('home.contacts.text')}
                    </S.Text>
                        <S.ContactWrapper>
                            <S.ContactTitle>
                                {t('home.contacts.messageTitle')}
                            </S.ContactTitle>
                            <S.ContactList>
                                <S.ContactItem>
                                    <Icon iconId={"discord"} viewBox={"0 0 32 32"} height={"32"} width={"32"}/>
                                    <S.Link href={"https://discord.com/"}>!Elias#3519</S.Link>
                                </S.ContactItem>
                                <S.ContactItem>
                                    <Icon iconId={"mail"} viewBox={"0 0 32 32"} height={"32"} width={"32"}/>
                                    <S.Link href={"mailto:elias@elias.me"} >elias@elias.me</S.Link>
                                </S.ContactItem>
                            </S.ContactList>
                        </S.ContactWrapper>
                </FlexWrapper>
            </Container>
        </S.Contacts>
    );
};


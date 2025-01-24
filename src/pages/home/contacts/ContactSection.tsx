import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/ui/sectionTitle/SectionTitle";
import {Icon} from "../../../components/ui/icon/Icon";
import {Container} from "../../../components/shared/Container/Container";
import {theme} from "../../../styles/Theme";
import {useTranslation} from "react-i18next";
import {FlexWrapper} from "../../../components/shared/flexWrapper/FlexWrapper";

export const ContactSection = () => {
    const {t} = useTranslation();
    return (
        <StyledContacts>
            <Container>
                <SectionTitle prefix={"#"} title={t('home.contacts.title')} showLine={true} linePosition={"250px"}
                              lineWidth={"127px"}/>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <StyledText>
                        {t('home.contacts.text')}
                    </StyledText>
                    <ContactsWrapper>
                        <ContactWrapper>
                            <StyledContactTitle>
                                {t('home.contacts.messageTitle')}
                            </StyledContactTitle>
                            <StyledContactList>
                                <StyledContactItem>
                                    <Icon iconId={"discord"} viewBox={"0 0 32 32"} height={"32"} width={"32"}/>
                                    <span>!Elias#3519</span>
                                </StyledContactItem>
                                <StyledContactItem>
                                    <Icon iconId={"mail"} viewBox={"0 0 32 32"} height={"32"} width={"32"}/>
                                    <span>elias@elias.me</span>
                                </StyledContactItem>
                            </StyledContactList>
                        </ContactWrapper>
                    </ContactsWrapper>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    padding-top: 68px;
    padding-bottom: 148px;

    position: relative;

    &::before {
        content: "";
        display: inline-block;
        position: absolute;
        width: 60px;
        height: 120px;
        left: 0;
        top: 34%;

        background-color: transparent;
        background-image: radial-gradient(circle, ${theme.colors.secondary} 2px, transparent 2px);
        background-size: 25px 25px;

        @media ${theme.media.mobile}, ${theme.media.tablet}, ${theme.media.desktopL} {
            display: none;
        }
    }

    @media ${theme.media.mobile}, ${theme.media.tablet} {
        padding: 12px 20px;
    }

    ${FlexWrapper} {
        @media ${theme.media.mobile}, ${theme.media.tablet}, ${theme.media.tabletM} {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
    }

`
const ContactsWrapper = styled.div`
    padding-top: 45px;
`

const StyledText = styled.p`
    color: ${theme.colors.secondary};
    max-width: 505px;
    padding-top: 50px;
`

const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    border: 1px solid ${theme.colors.secondary};
    padding: 16px;

`
const StyledContactTitle = styled.p`
    font-weight: 600;


`

const StyledContactList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const StyledContactItem = styled.li`
    display: flex;
    align-items: center;
    color: ${theme.colors.secondary};
    gap: 5px;
    font-weight: 400;
`


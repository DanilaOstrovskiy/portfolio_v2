import React from 'react';
import styled from "styled-components";
import {ContactDetails} from "./contactDetails/ContactDetails";
import {AllMedia} from "./media/AllMedia";
import {theme} from "../../styles/Theme";
import SectionHeader from "../works/sectionHeader/SectionHeader";
import {useTranslation} from "react-i18next";


export const Contacts = () => {
    const {t} = useTranslation();
    return (
        <StyledContacts>
            <SectionHeader prefix={"/"} title= {t('contacts.title')} description={t('contacts.description')}/>
            <ContactDetails/>
            <AllMedia/>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    padding-top: 32px;

    @media ${theme.media.mobile}, ${theme.media.tablet} {
        padding: 82px 20px 12px;
    }`



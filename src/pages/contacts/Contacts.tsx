import React from 'react';
import {ContactDetails} from "./contactDetails/ContactDetails";
import {AllMedia} from "./media/AllMedia";
import SectionHeader from "../works/sectionHeader/SectionHeader";
import {useTranslation} from "react-i18next";
import {S} from "./Contacts_styles"


export const Contacts = () => {
    const {t} = useTranslation();
    return (
        <S.Contacts>
            <SectionHeader prefix={"/"} title= {t('contacts.title')} description={t('contacts.description')}/>
            <ContactDetails/>
            <AllMedia/>
        </S.Contacts>
    );
};





import React from 'react';
import styled from "styled-components";
import {ContactDetails} from "./contactDetails/ContactDetails";
import {AllMedia} from "./media/AllMedia";


export const Contacts = () => {
    return (
        <StyledContacts>
            <ContactDetails/>
            <AllMedia/>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    padding-top: 32px;`



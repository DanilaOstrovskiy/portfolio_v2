import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper";

export const Contacts = () => {
    return (
        <StyledContacts>
            <FlexWrapper direction={'column'} align={'center'}>
                <SectionTitle>#contacts</SectionTitle>
                <StyledText>
                    I’m interested in freelance opportunities. However, if you have other request or question, don’t
                    hesitate to contact me
                </StyledText>

                <StyledContactTitle>
                    Message me here
                </StyledContactTitle>
                <StyledContactList>
                    <StyledContactItem>
                        <Icon iconId={"discord"} viewBox={"0 0 32 32"} height={"30"} width={"30"}/>
                        <span>!Elias#3519</span>
                    </StyledContactItem>
                    <StyledContactItem>
                        <Icon iconId={"massage"} viewBox={"0 0 32 32"} height={"30"} width={"30"}/>
                        <span>elias@elias.me</span>
                    </StyledContactItem>
                </StyledContactList>
            </FlexWrapper>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    background-color: #b6daa7;
`
const StyledText = styled.p``
const StyledContactTitle = styled.p``
const StyledContactList = styled.ul`
list-style: none;`
const StyledContactItem = styled.li``


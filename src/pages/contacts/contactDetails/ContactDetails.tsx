import React from 'react';
import SectionHeader from "../../works/sectionHeader/SectionHeader";
import {FlexWrapper} from "../../../components/shared/flexWrapper/FlexWrapper";
import {Icon} from "../../../components/ui/icon/Icon";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/shared/Container/Container";

export const ContactDetails = () => {
    return (
        <StyledContactDetails>
            <Container>
                <SectionHeader prefix={"/"} title={"contacts"} description={"Who am i?"}/>
                <FlexWrapper justify={'space-between'}>
                    <StyledText>
                        I’m interested in freelance opportunities. However, if you have other request or question,
                        don’t
                        hesitate to contact me
                    </StyledText>
                    <InfoWrapper>
                        <SupportWrapper>
                            <StyledContactTitle>
                                Support me here
                            </StyledContactTitle>
                            <SupportNumber>4149500120690030</SupportNumber>
                        </SupportWrapper>
                        <ContactWrapper>
                            <StyledContactTitle>
                                Message me here
                            </StyledContactTitle>
                            <StyledContactList>
                                <StyledContactItem>
                                    <Icon iconId={"discord"} viewBox={"0 0 32 32"} height={"32"} width={"32"}/>
                                    <StyledText>!Elias#1234</StyledText>
                                </StyledContactItem>
                                <StyledContactItem>
                                    <Icon iconId={"mail"} viewBox={"0 0 32 32"} height={"32"} width={"32"}/>
                                    <span>elias@elias-dev.ml</span>
                                </StyledContactItem>
                            </StyledContactList>
                        </ContactWrapper>
                    </InfoWrapper>
                </FlexWrapper>
            </Container>
        </StyledContactDetails>
    );
};

const StyledContactDetails = styled.section`
    position: relative;
    padding-bottom: 14px;
    
    &::after {
        z-index: 2;
        content: "";
        display: inline-block;
        position: absolute;
        border-top: 1px solid ${theme.colors.secondary};
        border-left: 1px solid ${theme.colors.secondary};
        border-bottom: 1px solid ${theme.colors.secondary};
        width: 75px;
        height: 155px;
        right: 0;
        bottom: 0;
    }

`

const StyledText = styled.p`
    color: ${theme.colors.secondary};
    max-width: 505px;`

const InfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 11px
`

const SupportWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 15px;
    border: 1px solid ${theme.colors.secondary};
`
const SupportNumber = styled.p`
    display: inline-block;
    color: ${theme.colors.secondary};`

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



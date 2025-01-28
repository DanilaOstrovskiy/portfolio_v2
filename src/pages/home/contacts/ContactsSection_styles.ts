import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/shared/flexWrapper/FlexWrapper";

const Contacts = styled.section`

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

const Text = styled.p`
    color: ${theme.colors.secondary};
    max-width: 505px;
    padding-top: 50px;
`

const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    border: 1px solid ${theme.colors.secondary};
    padding: 45px 16px 16px 16px;
`
const ContactTitle = styled.p`
    font-weight: 600;
`

const ContactList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const ContactItem = styled.li`
    display: flex;
    align-items: center;
    color: ${theme.colors.secondary};
    gap: 5px;
    font-weight: 400;
`

const Link = styled.a`
    color: ${theme.colors.secondary};

    &:hover {
        color: ${theme.colors.primary};
    }`


export const S = {
    Contacts,
    Text,
    ContactWrapper,
    ContactTitle,
    ContactList,
    ContactItem,
    Link
};

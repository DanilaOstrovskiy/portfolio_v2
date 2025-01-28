import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Icon} from "../../../components/ui/icon/Icon";

const ContactDetails = styled.section`
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

        @media ${theme.media.mobile}, ${theme.media.tablet}, ${theme.media.desktopL} {
            display: none;
        }
    }

    @media ${theme.media.mobile}, ${theme.media.tablet} {
        padding: 12px 20px;
    }
`

const Text = styled.p`
    color: ${theme.colors.secondary};
    max-width: 505px;
    
`

const InfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 11px;
    @media ${theme.media.mobile}, ${theme.media.tablet}, ${theme.media.tabletM} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
`

const SupportWrapper = styled.button`
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 15px;
    border: 1px solid ${theme.colors.secondary};
    transition: color 0.3s ease;
    color: ${theme.colors.primary};
    font-family: "Fira Code", sans-serif;
    font-weight: 500;
    font-size: 16px;
    &:hover {
        cursor: pointer;
        border: 1px solid ${theme.colors.primary};
        
    }
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
    &:hover {
        color: ${theme.colors.secondary};
        text-decoration: underline;
        cursor: pointer;
    }
    svg {
        fill: ${theme.colors.secondary};
        :hover {
            fill: ${theme.colors.primary};
        }
    }
`

const Link = styled.a`
    color: ${theme.colors.secondary};

    &:hover {
        color: ${theme.colors.primary};
    }`

const CopyNotification = styled.span`
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${theme.colors.button.secondary.activeBg};
    font-family: "Fira Code", sans-serif;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 14px;
    animation: fadeIn 0.3s ease-in;
    white-space: nowrap;

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translate(-50%, -10px);
        }
        to {
            opacity: 1;
            transform: translate(-50%, 0);
        }
    }

`

export const S = {ContactDetails,InfoWrapper,Text,SupportWrapper,SupportNumber,ContactWrapper,ContactTitle,ContactList,ContactItem,Link,CopyNotification}
import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Footer = styled.footer`
    background-color: ${theme.colors.primaryBg};
    padding-bottom: 32px;
    position: relative;


    &::before {
        content: "";
        width: 100%;
        height: 1px;
        z-index: 10;
        position: absolute;
        background-color: ${theme.colors.secondary}
    }


`
const FooterWrapper = styled.footer`
    display: flex;
    justify-content: space-between;
    padding-top: 32px;
    padding-bottom: 24px;
    flex-wrap: wrap;
  
    
    @media ${theme.media.mobileL}, ${theme.media.mobile} {
        display: flex;
        gap:10px;
        justify-content: center;
        
    }

`
const FooterSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`
const LogoEmailWrapper = styled.div`
    display: flex;
    gap: 24px;`

const Email = styled.p`
    color: ${theme.colors.secondary};
`
const Description = styled.p`
`

const MediaTitle = styled.h6`
    font-weight: 500;
    font-size: 24px;
    @media ${theme.media.mobileL}, ${theme.media.mobile}, ${theme.media.tablet} {
        margin: 0 auto;
    }
`
const SocialMediaWrapper = styled.div`
    display: flex;
    gap: 12px;
    flex-direction: column;

`

const SocialList = styled.ul`
    display: flex;
    gap: 12px;`

const SocialItem = styled.li`
    color: ${theme.colors.svg};
`
const Link = styled.a`
    color: ${theme.colors.svg};
    transition: color 0.3s ease;

    &:hover {
        color: ${theme.colors.primary};
    }
`


const Copyright = styled.section`
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    color: ${theme.colors.secondary};
    padding-top: 24px;
`

export const S = {
    Footer,
    FooterWrapper,
    FooterSection,
    LogoEmailWrapper,
    Email,
    Description,
    MediaTitle,
    SocialMediaWrapper,
    SocialList,
    SocialItem,
    Link,
    Copyright

}
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const QuoteSection = styled.section`
    padding-top: 40px;
    padding-bottom: 40px;
    position: relative;
    
    @media ${theme.media.mobile}, ${theme.media.tablet} {
        padding: 12px 20px;
    }

    &::before {
        content: "";
        display: inline-block;
        position: absolute;
        border: 1px solid ${theme.colors.secondary};
        width: 91px;
        height: 91px;
        right: 0;
        top: 20%;

        @media ${theme.media.mobile}, ${theme.media.desktopL} {
            display: none;
        }
 
    }


`

const QuoteWrapper = styled.div`
    position: relative;
`
const Quote = styled.section`
    font-weight: 500;
    font-size: 24px;
    display: flex;
    align-items: center;
    padding: 32px;
    border: 1px solid ${theme.colors.secondary};

`
const IconQuoteWrapper = styled.div`
    background-color: ${theme.colors.primaryBg};
    position: absolute;
    padding: 4px 8px;

    &.up-quotes {
        z-index: 1;
        top: -13px;
        left: 15px
    }

    &.down-quotes {
        z-index: 1;
        right: 15px;
        bottom: 45px;
    }`

const AuthorWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`
const Author = styled.footer`
    font-weight: 400;
    font-size: 24px;
    padding: 18px;
    border-left: 1px solid ${theme.colors.secondary};
    border-right: 1px solid ${theme.colors.secondary};
    border-bottom: 1px solid ${theme.colors.secondary};
`

export const S = {
    QuoteSection,
    QuoteWrapper,
    Quote,
    IconQuoteWrapper,
    AuthorWrapper,
    Author
}
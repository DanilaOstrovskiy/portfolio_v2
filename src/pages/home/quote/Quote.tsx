import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/shared/Container/Container";
import {FlexWrapper} from "../../../components/shared/flexWrapper/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {Icon} from "../../../components/ui/icon/Icon";
import {useTranslation} from "react-i18next";



export const Quote = () => {

    const {t} = useTranslation();

    return (
        <StyledQuoteBlock>

            <Container>
                <FlexWrapper align={'center'} direction={"column"} justify={"center"}>
                    <BlockQuoteWrapper>
                        <IconQuoteWrapper className="up-quotes">
                            <Icon iconId={"up_quotes"} viewBox={"0 0 26 21"}
                                  height={"21px"}
                                  width={"26px"}/>
                        </IconQuoteWrapper>

                        <StyledQuote>
                            {t('home.quote.text')}
                        </StyledQuote>
                        <IconQuoteWrapper className="down-quotes">
                            <Icon iconId={"up_quotes"} viewBox={"0 0 26 21"}
                                  height={"21px"}
                                  width={"26px"}/>
                        </IconQuoteWrapper>
                        <AuthorWrapper>
                            <Author>
                                {t('home.quote.author')}
                            </Author>
                        </AuthorWrapper>
                    </BlockQuoteWrapper>
                </FlexWrapper>
            </Container>
            <span></span>
        </StyledQuoteBlock>


    );
};

const StyledQuoteBlock = styled.section`
    //min-height: 20vh;
    padding-top: 66px;
    padding-bottom: 66px;
    outline: 1px solid red;
    position: relative;
    
        &::before {
            content: "";
            display: inline-block;
            position: absolute;
            border: 1px solid ${theme.colors.secondary};
            width: 91px; 
            height: 91px;
            right: 0;
            top: 30%
        }
    
`

const BlockQuoteWrapper = styled.div`
    position: relative;
`
const StyledQuote = styled.section`
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
    padding: 16px;
    border-left: 1px solid ${theme.colors.secondary};
    border-right: 1px solid ${theme.colors.secondary};
    border-bottom: 1px solid ${theme.colors.secondary};
`


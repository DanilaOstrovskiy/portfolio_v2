import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {Icon} from "../../../components/icon/Icon";

type QuoteBlockPropsType = {
    blockquote: string;
    author: string;
}

export const QuoteBlock = (props: QuoteBlockPropsType) => {
    let {blockquote, author} = props
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

                        <Quote>
                            {blockquote}
                        </Quote>
                        <IconQuoteWrapper className="down-quotes">
                            <Icon iconId={"up_quotes"} viewBox={"0 0 26 21"}
                                  height={"21px"}
                                  width={"26px"}/>
                        </IconQuoteWrapper>
                        <AuthorWrapper>
                            <Author>
                                {author}
                            </Author>
                        </AuthorWrapper>
                    </BlockQuoteWrapper>
                </FlexWrapper>
            </Container>
        </StyledQuoteBlock>


    );
};

const StyledQuoteBlock = styled.section`
    min-height: 40vh;
    padding: 0 0 112px 0;
`

const BlockQuoteWrapper = styled.div`
    position: relative;
`
const Quote = styled.section`
    font-weight: 500;
    font-size: 24px;
    display: flex;
    align-items: center;
    padding: 32px;
    border: 1px solid ${theme.colors.secondaryText};

`
const IconQuoteWrapper = styled.div`
    background-color: ${theme.colors.primaryBg};
    position: absolute;
    padding: 4px 8px ;
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
    border-left: 1px solid ${theme.colors.secondaryText};
    border-right: 1px solid ${theme.colors.secondaryText};
    border-bottom: 1px solid ${theme.colors.secondaryText};
`


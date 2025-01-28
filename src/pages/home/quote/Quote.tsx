import React from 'react';
import {Container} from "../../../components/shared/Container/Container";
import {FlexWrapper} from "../../../components/shared/flexWrapper/FlexWrapper";
import {Icon} from "../../../components/ui/icon/Icon";
import {useTranslation} from "react-i18next";
import {S} from "./Quote_styles"


export const Quote = () => {

    const {t} = useTranslation();

    return (
        <S.QuoteSection>
            <Container>
                <FlexWrapper align={'center'} direction={"column"} justify={"center"}>
                    <S.QuoteWrapper>
                        <S.IconQuoteWrapper className="up-quotes">
                            <Icon iconId={"up_quotes"} viewBox={"0 0 26 21"}
                                  height={"21px"}
                                  width={"26px"}/>
                        </S.IconQuoteWrapper>

                        <S.Quote>
                            {t('home.quote.text')}
                        </S.Quote>
                        <S.IconQuoteWrapper className="down-quotes">
                            <Icon iconId={"up_quotes"} viewBox={"0 0 26 21"}
                                  height={"21px"}
                                  width={"26px"}/>
                        </S.IconQuoteWrapper>
                        <S.AuthorWrapper>
                            <S.Author>
                                {t('home.quote.author')}
                            </S.Author>
                        </S.AuthorWrapper>
                    </S.QuoteWrapper>
                </FlexWrapper>
            </Container>
            <span></span>
        </S.QuoteSection>

    );
};

import React from 'react';
import styled from "styled-components";

type QuoteBlockPropsType = {
    blockquote: string;
    author: string;
}

export const QuoteBlock = (props: QuoteBlockPropsType) => {
    let {blockquote, author} = props
    return (

            <StyledBlockquote>{blockquote}
                <StyledBlockquoteFooter>{author}</StyledBlockquoteFooter>
            </StyledBlockquote>


    );
};

const StyledBlockquote = styled.section`
    max-height: 100vh;
    text-align: center;
`
const StyledBlockquoteFooter = styled.footer``


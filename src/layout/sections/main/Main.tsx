import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/avatar1.webp'
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {StyledButton} from "../../../components/button/Button";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-around'}>
                    <div>
                        <Name>Elias is a web designer and front-end developer</Name>
                        <MainTitle>He crafts responsive websites where technologies meet creativity</MainTitle>
                        <StyledButton>Contact me!!</StyledButton>
                    </div>
                    <div>
                        <Photo src={photo} alt=""/>
                        <span>Currently working on Portfolio</span>
                    </div>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};


const StyledMain = styled.section`
    min-height: 100vh;
`

const Name = styled.h2`
    font-weight: 600;
    font-size: 32px;
`
const MainTitle = styled.h1`
    font-weight: 400;
    font-size: 16px;
    color: ${theme.colors.secondaryText}
`




const Photo = styled.img`
    width: 457px;
    height: 386px;
    object-fit: cover;
    object-position: 0 60px;
`



import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/avatar1.webp'
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper";
import {Button} from "../../../components/button/Button";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <div>
                    <Name>Elias is a web designer and front-end developer</Name>
                    <MainTitle>He crafts responsive websites where technologies meet creativity</MainTitle>
                    <Button>Contact me!!</Button>
                </div>
                <div>
                    <Photo src={photo} alt=""/>
                    <span>Currently working on Portfolio</span>
                </div>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: rgba(163, 149, 149, 0.93);
`

const Photo = styled.img`
    width: 350px;
    height: 350px;
    object-fit: cover;`

const MainTitle = styled.h1`
`

const Name = styled.h2`
`

import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/avatar1.webp'
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {StyledButton} from "../../../components/button/Button";
import {Icon} from "../../../components/icon/Icon";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <div>
                        <Name>Elias is a <span>web designer</span> and <span>front-end developer</span></Name>
                        <MainTitle>He crafts responsive websites where technologies <br/>meet creativity</MainTitle>
                        <StyledButton size={"small"} >Contact me!!</StyledButton>
                    </div>
                    <FlexWrapper direction={"column"} align={'center'}>
                        <PhotoWrapper>
                            <StyledIconWrapper className="logo-wrapper">
                                <Icon iconId={"big_Logo"} viewBox={"0 0 156 156"} height={"156px"} width={"156px"}/>
                            </StyledIconWrapper>
                            <Photo src={photo} alt="me"/>
                            <StyledIconWrapper className="dots-wrapper">
                                <Icon iconId={"dots5x5"} viewBox={"0 0 84 84"} height={"84px"} width={"84px"}/>
                            </StyledIconWrapper>
                        </PhotoWrapper>
                        <Status><span></span>Currently working on <b>Portfolio</b></Status>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};


const StyledMain = styled.section`
    min-height: 60vh;
`


const Name = styled.h2`
    font-weight: 600;
    font-size: 32px;

    span {
        color: ${theme.colors.accent}
    }
`
const MainTitle = styled.h1`
    font-weight: 400;
    font-size: 16px;
    color: ${theme.colors.secondaryText};
    margin: 31px 0 24px 0;
    line-height: 156%;

`


const PhotoWrapper = styled.div`
    max-height: 386px;
    max-width: 469px;
    overflow: hidden; // обрезаем всё, что выходит за пределы
    position: relative;
    z-index: 0;
`

const StyledIconWrapper = styled.div`
    position: absolute;

    &.logo-wrapper {
        z-index: -1;
        top: 90px;
        left: 15px;
    }

    &.dots-wrapper {
        z-index: 1;
        bottom: 45px;
        right: 10px;
    }
`
const Photo = styled.img`
    width: 650px;
    height: 100%;
    object-fit: cover;
    object-position: -115px -77px;
`

const Status = styled.span`
    display: inline-block;
    text-align: left;
    position: relative;
    z-index: 1;
    padding: 6px 6px 6px 35px;
    border: 1px solid ${theme.colors.secondaryText};
    color: ${theme.colors.secondaryText};
    max-width: 402px;
    width: 100%;

    span {
        position: relative;

        &::before {
            content: "";
            border: 1px solid ${theme.colors.accent};
            background-color: ${theme.colors.accent};
            width: 16px;
            height: 16px;
            position: absolute;
            left: -25px; // отступ слева
            top: 50%; // позиционирование по центру
            transform: translateY(-50%); // точное центрирование
            z-index: -1;
        }
    }

    b {
        font-weight: inherit;
        color: ${theme.colors.primaryText};
    }

`



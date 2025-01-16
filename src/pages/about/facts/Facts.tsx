import React from 'react';
import {Container} from "../../../components/shared/Container/Container";
import {SectionTitle} from "../../../components/ui/sectionTitle/SectionTitle";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Icon} from "../../../components/ui/icon/Icon";
import {FlexWrapper} from "../../../components/shared/flexWrapper/FlexWrapper";

export const Facts = () => {
    return (
        <StyledFacts>
            <Container>
                <SectionTitle prefix={"#"} title={"my-fan-facts"} showLine={false}/>
                <FlexWrapper justify={'space-between'}>
                    <StyledContainer>
                        <StyledList>
                            <StyledItem>I like winter more than summer</StyledItem>
                            <StyledItem>I often bike with my friends</StyledItem>
                            <StyledItem>I like <span>pizza</span> and <span>pasta</span></StyledItem>
                            <StyledItem>I was in <span>Egypt</span>, <span>Poland</span> and <span>Turkey</span></StyledItem>
                            <StyledItem>My favorite movie is <span>The Green Mile</span></StyledItem>
                            <StyledItem>I am still in school</StyledItem>
                            <StyledItem>I don’t have any siblings</StyledItem>
                        </StyledList>
                    </StyledContainer>
                    <AbstractFiguresWrapper>
                        <IconWrapper className="logo-wrapper">
                            <Icon iconId={"pink_logo_v2"} viewBox={"0 0 114 114"} height={"114px"} width={"114px"}/>
                        </IconWrapper>
                        <IconWrapper className="dots-wrapper">
                            <Icon iconId={"dots4x4"} viewBox={"0 0 84 84"} height={"84px"} width={"84px"}/>
                        </IconWrapper>
                    </AbstractFiguresWrapper>
                </FlexWrapper>
            </Container>
        </StyledFacts>
    );
};

const StyledFacts = styled.section`
    padding-top: 66px;
    padding-bottom: 144px;

    position: relative;
    &::before {
        content: "";
        display: inline-block;
        position: absolute;
        width: 77px;
        height: 155px;
        left: 0;
        top: 124px;
        border: 1px solid ${theme.colors.secondary};

    }
    
    &::after {
        content: "";
        display: inline-block;
        position: absolute;
        width: 80px;
        height: 100px;
        right: 0;
        bottom:57px;

        background-color: transparent;
        background-image: radial-gradient(circle, ${theme.colors.secondary} 2px, transparent 2px);
        background-size: 20px 20px;
    }
    

`

const StyledContainer = styled.div`
    color: ${theme.colors.secondary};
    max-width: 620px;
    padding-top: 30px;
`

const StyledList = styled.ul`

    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    span {
        color: ${theme.colors.primary};
    }
`

const StyledItem = styled.li`
    border: 1px solid ${theme.colors.secondary};
    padding: 10px;`


const AbstractFiguresWrapper = styled.div`
    position: relative;
    

`

const IconWrapper = styled.div`
    position: absolute;
    
    &.logo-wrapper {
        right: 85px;
        bottom: 0;
    }

    &.dots-wrapper {
        right: 190px;
        top: 30px;
    }
        
`





import React from 'react';
import {SectionTitle} from "../../../components/ui/sectionTitle/SectionTitle";
import {Container} from "../../../components/shared/Container/Container";
import {Icon} from "../../../components/ui/icon/Icon";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/shared/flexWrapper/FlexWrapper";
import {useTranslation} from "react-i18next";

export const AllMedia = () => {

    const {t} = useTranslation();
    return (
        <MediaStyled>
            <Container>
                <SectionTitle prefix={"/"} title={t('contacts.allMedia.title')}/>
                <MediaWrapper>
                    <FlexWrapper>
                        <MediaContactList>
                            <MediaContactItem>
                                <Link href={"https://www.twitter.com"}>
                                    <Icon iconId={"twitter"} viewBox={"0 0 32 32"} height={"32"} width={"32"}/>
                                    <span>@elias</span>
                                </Link>
                            </MediaContactItem>
                            <MediaContactItem>
                                <Link href={"https://www.twitter.com"}>
                                    <Icon iconId={"twitter"} viewBox={"0 0 32 32"} height={"32"} width={"32"}/>
                                    <span>@elias</span>
                                </Link>
                            </MediaContactItem>
                        </MediaContactList>
                    </FlexWrapper>
                </MediaWrapper>
            </Container>
        </MediaStyled>
    );
};

const MediaStyled = styled.section`
    padding-top: 14px;
    padding-bottom: 45px;
    position: relative;

    &::before {
        z-index: 1;
        content: "";
        display: inline-block;
        position: absolute;

        width: 60px;
        height: 60px;
        top: 0;
        left: 17px;

        background-color: transparent;
        background-image: radial-gradient(circle, ${theme.colors.secondary} 2px, transparent 2px);
        background-size: 20px 20px;
    }
`

const MediaWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    padding-top: 16px;


`

const MediaContactList = styled.ul`
    list-style: none;
    gap: 8px;
    display: flex;
`
const Link = styled.a`
    display: flex;
    align-items: center;
    color: ${theme.colors.svg};
    transition: color 0.3s ease, fill 0.3s ease;  // добавляем transition для fill

    svg {
        fill: ${theme.colors.svg};  // используем fill вместо color
    }

    &:hover {
        color: ${theme.colors.primary};

        svg {
            fill: ${theme.colors.primary};  // меняем fill при наведении
        }
    }
`

const MediaContactItem = styled.li`
    display: flex;
    align-items: center;
    color: ${theme.colors.secondary};
    
    gap: 5px;
    font-weight: 400;
`
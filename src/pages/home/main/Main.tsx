import React, {useState} from 'react';
import styled, {css, keyframes} from "styled-components";
import photo from '../../../assets/images/avatar1.webp'
import {FlexWrapper} from "../../../components/shared/flexWrapper/FlexWrapper";
import {Container} from "../../../components/shared/Container/Container";
import {theme} from "../../../styles/Theme";
import {StyledButton} from "../../../components/ui/button/Button";
import {Icon} from "../../../components/ui/icon/Icon";
import {Modal} from "../../../components/Modal/Modal";
import {ContactForm} from "../../../components/ContactForm/ContactForm";
import {useTranslation} from "react-i18next";
import {font} from "../../../styles/Common";


export const Main = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const {t} = useTranslation();

    const handleOpenModal = (): void => {
        setIsModalOpen(true);
    };

    const handleCloseModal = (): void => {
        setIsModalOpen(false);
    };
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'}  justify={'space-between'}>
                    <DescriptionWrapper>
                        <Name>{t('home.main.title.name')}<span>{t('home.main.title.professions.webDesigner')}</span> {t('home.main.title.and')} <span>{t('home.main.title.professions.frontendDev')}</span></Name>

                        <MainTitle>{t('home.main.title.description')}</MainTitle>
                        <StyledButton size={"small"} onClick={handleOpenModal}>
                            {t('home.main.buttons.contactMe')}
                        </StyledButton>
                    </DescriptionWrapper>
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
                        <Status><span></span>{t('home.main.status.currentlyWorking')} <b>{t('home.main.status.project')}</b></Status>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <ContactForm onClose={handleCloseModal}/>
            </Modal>
        </StyledMain>
    );
};


const StyledMain = styled.section`
    min-height: 40vh;
    padding-top: 40px;
    padding-bottom: 66px;
    ${FlexWrapper}{
        @media ${theme.media.tablet}, ${theme.media.mobile} {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }

    }

    @media ${theme.media.tablet} {
        padding-top: 5px;
        padding-bottom: 20px;
    }
    
    
    ${StyledButton} {
        @media ${theme.media.mobile}, ${theme.media.tablet} {
            display: none;
        }
    }

`

const DescriptionWrapper = styled.div`
    margin-bottom: 57px;

    @media ${theme.media.mobile}, ${theme.media.tablet} {
        margin-bottom: 0;
    }
`

const Name = styled.h2`
    ${font({family: "'Fira Code', sans-serif", weight: 600, Fmax: 32, Fmin: 32})};
    
    &:nth-child(2) {
        white-space: no-wrap;
    }

    span {
        color: ${theme.colors.accent};
        
    }

    @media ${theme.media.mobile}, ${theme.media.tablet} {
        padding: 82px 20px 12px;
    }
`

const MainTitle = styled.h1`
    font-weight: 600;
    font-size: 16px;
    max-width: 462px;
    color: ${theme.colors.secondary};
    margin: 31px 0 24px 0;
    line-height: 156%;

    @media ${theme.media.mobile}, ${theme.media.tablet} {
        padding: 12px 20px;
        margin: 0 0 0 0;
    }

`

const PhotoWrapper = styled.div`
    height: 386px;
    width: 469px;
    overflow: hidden; // обрезаем всё, что выходит за пределы
    position: relative;
    z-index: 0;
    
    @media ${theme.media.mobile} {
        width: 307px;
        height: 260px;
        object-position: 0 0;
    }
    
`

const StyledIconWrapper = styled.div`
    position: absolute;

    &.logo-wrapper {
        z-index: -1;
        top: 80px;
        left: 2px;

    }

    &.dots-wrapper {
        z-index: 1;
        bottom: 55px;
        right: 15px;

    }

    @media ${theme.media.mobile} {
        &.logo-wrapper {
            z-index: -1;
            top: 50px;
            left: 0px;

            & > svg {
                width: 100px;
                height: 100px;
            }
        }

        &.dots-wrapper {
            z-index: 1;
            bottom: 45px;

            & > svg {
                right: -38px;
                width: 50px;
                height: 50px;
            }

        }
    }

`
const Photo = styled.img`
    width: 650px;
    height: 100%;
    object-fit: cover;
    object-position: -115px -77px;

    @media ${theme.media.mobile} {
        width: 316px;
        height: 560px;
        object-position: -90px -59px;
    }

`
const pulse = keyframes`
    0% {
        box-shadow: 0 0 0 0 ${theme.colors.accent};
    }
    70% {
        box-shadow: 0 0 0 6px rgba(199, 120, 221, 0); // Уменьшаем размер тени
    }
    100% {
        box-shadow: 0 0 0 0 rgba(199, 120, 221, 0);
    }
`;

const Status = styled.span`
    display: inline-block;
    text-align: left;
    position: relative;
    z-index: 1;
    padding: 7px 7px 7px 30px;
    transform: translateY(-2px);
    border: 1px solid ${theme.colors.secondary};
    color: ${theme.colors.secondary};
    max-width: 400px;
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
            animation: ${pulse} 1.5s infinite;
        }
    }

    b {
        font-weight: inherit;
        color: ${theme.colors.primary};
    }

`



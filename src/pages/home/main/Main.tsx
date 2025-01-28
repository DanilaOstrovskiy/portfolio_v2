import React, {useState} from 'react';
import photo from '../../../assets/images/avatar1.webp'
import {FlexWrapper} from "../../../components/shared/flexWrapper/FlexWrapper";
import {Container} from "../../../components/shared/Container/Container";
import {StyledButton} from "../../../components/ui/button/Button";
import {Icon} from "../../../components/ui/icon/Icon";
import {Modal} from "../../../components/Modal/Modal";
import {ContactForm} from "../../../components/ContactForm/ContactForm";
import {useTranslation} from "react-i18next";
import {S} from "./Main_styles"


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
        <S.Main>
            <Container>
                <FlexWrapper align={'center'}  justify={'space-between'}>
                    <S.DescriptionWrapper>
                        <S.Name>{t('home.main.title.name')}<span>{t('home.main.title.professions.webDesigner')}</span> {t('home.main.title.and')} <span>{t('home.main.title.professions.frontendDev')}</span></S.Name>

                        <S.MainTitle>{t('home.main.title.description')}</S.MainTitle>
                        <StyledButton size={"small"} onClick={handleOpenModal}>
                            {t('home.main.buttons.contactMe')}
                        </StyledButton>
                    </S.DescriptionWrapper>
                    <FlexWrapper direction={"column"} align={'center'}>
                        <S.PhotoWrapper>
                            <S.IconWrapper className="logo-wrapper">
                                <Icon iconId={"big_Logo"} viewBox={"0 0 156 156"} height={"156px"} width={"156px"}/>
                            </S.IconWrapper>
                            <S.Photo src={photo} alt="me"/>
                            <S.IconWrapper className="dots-wrapper">
                                <Icon iconId={"dots5x5"} viewBox={"0 0 84 84"} height={"84px"} width={"84px"}/>
                            </S.IconWrapper>
                        </S.PhotoWrapper>
                        <S.Status><span></span>{t('home.main.status.currentlyWorking')} <b>{t('home.main.status.project')}</b></S.Status>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <ContactForm onClose={handleCloseModal}/>
            </Modal>
        </S.Main>
    );
};





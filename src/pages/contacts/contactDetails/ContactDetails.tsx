import React, {useState} from 'react';
import {FlexWrapper} from "../../../components/shared/flexWrapper/FlexWrapper";
import {Icon} from "../../../components/ui/icon/Icon";
import {Container} from "../../../components/shared/Container/Container";
import {useTranslation} from "react-i18next";
import {S} from "./ContactsDetails_styles"
import {Modal} from "../../../components/Modal/Modal";

export const ContactDetails = () => {
    const {t} = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showCopyNotification, setShowCopyNotification] = useState(false);


    const handleSupportClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleCopyNumber = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setShowCopyNotification(true);
            setTimeout(() => {
                setShowCopyNotification(false);
            }, 2000);
        } catch (err) {
            console.error('Failed to copy number:', err);
        }
    };

    return (
        <S.ContactDetails>
            <Container>
                <FlexWrapper justify={'space-between'} wrap={'wrap'} gap={"12px"}>
                    <S.Text>
                        {t('contacts.text')}
                    </S.Text>
                    <S.InfoWrapper>
                        <S.SupportWrapper onClick={handleSupportClick}>
                            <S.ContactTitle>
                                {t('contacts.support')}
                            </S.ContactTitle>
                            <S.SupportNumber>4149500120690030</S.SupportNumber>
                        </S.SupportWrapper>
                        <S.ContactWrapper>
                            <S.ContactTitle>
                                {t('contacts.message')}
                            </S.ContactTitle>
                            <S.ContactList>
                                <S.ContactItem>
                                    <Icon iconId={"discord"} viewBox={"0 0 32 32"} height={"32"} width={"32"}/>
                                    <S.Link href={"https://discord.com/"}>!Elias#1234</S.Link>
                                </S.ContactItem>
                                <S.ContactItem>
                                    <Icon iconId={"mail"} viewBox={"0 0 32 32"} height={"32"} width={"32"}/>
                                    <S.Link href={"mailto:elias@elias.me"}>elias@elias-dev.ml</S.Link>
                                </S.ContactItem>
                            </S.ContactList>
                        </S.ContactWrapper>
                    </S.InfoWrapper>
                </FlexWrapper>
            </Container>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <S.ContactList>
                    <S.ContactItem>
                        <button onClick={() => handleCopyNumber('4149500120690030')}><Icon iconId={"card"}
                                                                                           viewBox="0 0 32 32"
                                                                                           height={"32"} width={"32"}/>
                        </button>

                        <S.Text onClick={() => handleCopyNumber('4149500120690030')}>4149500120690030</S.Text>
                    </S.ContactItem>
                    <S.ContactItem>
                        <button onClick={() => handleCopyNumber('3E8ociqZa9mZUSwGdSmAEMAoAxBK3FNDcd')}><Icon
                            iconId={"bitcoin"} viewBox={"0 0 32 32"} height={"32"} width={"32"}/></button>
                        <S.Text
                            onClick={() => handleCopyNumber('3E8ociqZa9mZUSwGdSmAEMAoAxBK3FNDcd')}>3E8ociqZa9mZUSwGdSmAEMAoAxBK3FNDcd</S.Text>
                    </S.ContactItem>
                    {showCopyNotification && (
                        <S.CopyNotification>
                            Текст скопирован
                        </S.CopyNotification>
                    )}
                </S.ContactList>
            </Modal>
        </S.ContactDetails>
    );
};


import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {StyledButton} from "../ui/button/Button";
import {useTranslation} from "react-i18next";
import {S} from "./ContactForm_styles"


interface ContactFormProps {
    onClose: () => void;
}

interface FormInputs {
    name: string;
    email: string;
    title: string;
    message: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({onClose}) => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<FormInputs>();

    const {t} = useTranslation();

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        console.log(data);
        // Здесь будет логика отправки формы
        onClose();
    };

    return (
        <S.Form onSubmit={handleSubmit(onSubmit)}>
            <S.NameEmailWrapper>
                <S.FormGroup>

                    <S.Input
                        {...register("name", {required: t("common.contactForm.errorsMassage.nameRequired")})}
                        type="text" placeholder={" "}

                    />
                    <S.Label>{t('common.contactForm.name')}</S.Label>
                    {errors.name && <S.ErrorMessage>{errors.name.message}</S.ErrorMessage>
                    }
                </S.FormGroup>

                <S.FormGroup>
                    <S.Input
                        {...register("email", {
                            required: t("common.contactForm.errorsMassage.emailRequired"),
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: t("common.contactForm.errorsMassage.invalidEmail")
                            }
                        })}
                        type="email" placeholder={""}
                    />
                    <S.Label>{t('common.contactForm.email')}</S.Label>
                    {errors.email && <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>}
                </S.FormGroup></S.NameEmailWrapper>

            <S.FormGroup>

                <S.Input
                    {...register("title", {
                        required: t('common.contactForm.errorsMassage.required'),
                        minLength: {
                            value: 3,
                            message: t("common.contactForm.errorsMassage.minLength")
                        },
                        maxLength: {
                            value: 50,
                            message: t("common.contactForm.errorsMassage.maxLength")
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9\s.,!?-]+$/,
                            message: t("common.contactForm.errorsMassage.pattern")
                        }
                    })}
                    type="text" placeholder={" "}
                />
                <S.Label>{t('common.contactForm.title')}</S.Label>
                {errors.title && <S.ErrorMessage>{errors.title.message}</S.ErrorMessage>}
            </S.FormGroup>

            <S.FormGroup>
                <S.Textarea
                    {...register("message", {required: t("common.contactForm.errorsMassage.messageRequired")})}
                    placeholder=" "
                />
                {errors.message && <S.ErrorMessage>{errors.message.message}</S.ErrorMessage>}
                <S.TextareaLabel>{t('common.contactForm.message')}</S.TextareaLabel>
            </S.FormGroup>
            <S.ButtonWrapper>
                <StyledButton type="submit" size={"small"}>{t('common.contactForm.send')}</StyledButton>
            </S.ButtonWrapper>

        </S.Form>
    );
};



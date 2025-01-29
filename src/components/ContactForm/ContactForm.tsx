import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {StyledButton} from "../ui/button/Button";
import {useTranslation} from "react-i18next";
import {S} from "./ContactForm_styles"
import emailjs from "@emailjs/browser"


interface ContactFormProps {
    onClose: () => void;
}

interface FormInputs {
    name: string;
    email: string;
    subject: string;
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
        const templateParams = {
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message,
        };

        emailjs.send('service_l16z4fv', 'template_0prjn3d', templateParams, '2dYTxK5518JHyCMlU')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                onClose();
            })
            .catch((err) => {
                console.error('FAILED...', err);
            });
    };

    return (
        <S.Form onSubmit={handleSubmit(onSubmit)}>
            <S.NameEmailWrapper>
                <S.FormGroup>

                    <S.Input
                        {...register("name", {required: t("common.contactForm.errorsMassage.nameRequired")})}
                        type="text" placeholder={" "}

                        name="name"/>
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
                        type="email" placeholder={""} name={"email"}
                    />
                    <S.Label>{t('common.contactForm.email')}</S.Label>
                    {errors.email && <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>}
                </S.FormGroup></S.NameEmailWrapper>

            <S.FormGroup>

                <S.Input
                    {...register("subject", {
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
                            value: /^[a-zA-Zа-яА-Я0-9\s.,!?-]+$/,
                            message: t("common.contactForm.errorsMassage.pattern")
                        }
                    })}
                    type="text" placeholder={" "} name={"subject"}
                />
                <S.Label>{t('common.contactForm.title')}</S.Label>
                {errors.subject && <S.ErrorMessage>{errors.subject.message}</S.ErrorMessage>}
            </S.FormGroup>

            <S.FormGroup>
                <S.Textarea
                    {...register("message", {required: t("common.contactForm.errorsMassage.messageRequired")})}
                    placeholder=" "
                    name={"message"}/>
                {errors.message && <S.ErrorMessage>{errors.message.message}</S.ErrorMessage>}
                <S.TextareaLabel>{t('common.contactForm.message')}</S.TextareaLabel>
            </S.FormGroup>
            <S.ButtonWrapper>
                <StyledButton type="submit" size={"small"}>{t('common.contactForm.send')}</StyledButton>
            </S.ButtonWrapper>

        </S.Form>
    );
};



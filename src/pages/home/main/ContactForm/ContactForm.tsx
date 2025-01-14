import React from 'react';
import styled from "styled-components";
import {useForm, SubmitHandler} from "react-hook-form";
import {theme} from "../../../../styles/Theme";
import {StyledButton} from "../../../../components/ui/button/Button";


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

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        console.log(data);
        // Здесь будет логика отправки формы
        onClose();
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <NameEmailWrapper>
                <FormGroup>

                    <Input
                        {...register("name", {required: "Name is required"})}
                        type="text" placeholder={" "}

                    />
                    <Label>Name</Label>
                    {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>
                    }
                </FormGroup>

                <FormGroup>
                    <Input
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        })}
                        type="email" placeholder={""}
                    />
                    <Label>Email</Label>
                    {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                </FormGroup></NameEmailWrapper>

            <FormGroup>

                <Input
                    {...register("title", {
                        required: "Title is required",
                        minLength: {
                            value: 3,
                            message: "Title must be at least 3 characters"
                        },
                        maxLength: {
                            value: 50,
                            message: "Title cannot exceed 50 characters"
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9\s.,!?-]+$/,
                            message: "Title can only contain letters, numbers, spaces and basic punctuation"
                        }
                    })}
                    type="text" placeholder={" "}
                />
                <Label>Title</Label>
                {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
                <Textarea
                    {...register("message", {required: "Message is required"})}
                    placeholder=" "
                />
                {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
                <TextareaLabel>Message</TextareaLabel>
            </FormGroup>
            <ButtonWrapper>
                <StyledButton type="submit" size={"small"}>Send</StyledButton>
            </ButtonWrapper>

        </Form>
    );
};

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 569px;
`;


const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
`;

const NameEmailWrapper = styled.div`
    display: flex;
    gap: 16px;

    ${FormGroup} {
        flex: 1; // каждая группа займет равное пространство
        width: 50%; // явно указываем ширину 50%
    }


`

const Label = styled.label`
    color: ${theme.colors.secondary};
    position: absolute;
    left: 4px; // Увеличиваем отступ слева
    top: 7px;
 
    background-color: transparent;
    padding: 0 4px;
    transition: all 0.2s ease-in-out;
    pointer-events: none;
`;

const Input = styled.input`
    padding: 8px; 
    border: 1px solid ${theme.colors.secondary};
    background: transparent;
    color: ${theme.colors.secondary};
    width: 100%;
    text-indent: 8px;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
        -webkit-box-shadow: 0 0 0 30px ${theme.colors.primaryBg} inset !important;
        -webkit-text-fill-color: ${theme.colors.secondary} !important;
        transition: background-color 5000s ease-in-out 0s;
    }

    &::placeholder {
        padding-left: 16px;
        color: ${theme.colors.secondary};
    }


    &:focus,
    &:not(:placeholder-shown) {
        outline: none;
        border-color: ${theme.colors.primary};
        
    }

    &:focus ~ ${Label},
    &:not(:placeholder-shown) ~ ${Label} {
        top: 0;
        left: 9px;
        transform: translateY(-50%);
        font-size: 16px;
        background-color: ${theme.colors.primaryBg};
        color: ${theme.colors.primary};
    }
    
`;

const Textarea = styled.textarea`
    padding: 8px 12px;
    border: 1px solid ${theme.colors.secondary};
    background: transparent;
    color: ${theme.colors.secondary};
    min-height: 100px;
    resize: none;

    &:focus {
        outline: none;
        border-color: ${theme.colors.primary};
    }

    &:focus ~ ${Label},
    &:not(:placeholder-shown) ~ ${Label} {
        top: 0;
        left: 9px;
        transform: translateY(-50%);
        font-size: 16px;
        background-color: ${theme.colors.primaryBg};
        color: ${theme.colors.primary};
    }
`;

const TextareaLabel = styled(Label)`
    top: 8px; // Фиксированное расстояние от верха
    ${Textarea}:focus ~ &,
    ${Textarea}:not(:placeholder-shown) ~ & {
        top: 0;
        transform: translateY(-50%);
    }
`;

const ButtonWrapper = styled.div`
`

const ErrorMessage = styled.span`
    color: #ff6b6b;
    font-size: 14px;
    
    padding-left: 8px; // или через padding
    
`;


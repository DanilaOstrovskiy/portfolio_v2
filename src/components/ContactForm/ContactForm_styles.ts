import styled from "styled-components";
import {theme} from "../../styles/Theme";

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

    &::-webkit-scrollbar {
        width: 8px; // Добавляем ширину скроллбара
    }

    &::-webkit-scrollbar-track {
        background-color: ${theme.colors.primaryBg};
        
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${theme.colors.secondary};
        cursor: default;
        
        &:hover {
            background-color: ${theme.colors.primary};
        }
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
    padding-left: 8px; 
    
`;

export const S = {
    Form, FormGroup, NameEmailWrapper,Label, Input, Textarea, TextareaLabel,ButtonWrapper,ErrorMessage
}
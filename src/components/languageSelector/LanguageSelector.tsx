import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';
import {theme} from "../../styles/Theme";
import {Icon} from "../ui/icon/Icon";
import {useTranslation} from 'react-i18next';

type Language = {
    code: string;
    isExpanded?: boolean;
}

type LanguageSelectorProps = {
    size?: 'small' | 'medium';
}

export const LanguageSelector = ({size = 'small'}: LanguageSelectorProps) => {
    const {i18n} = useTranslation();
    const [languages] = useState<Language[]>([
        {code: 'EN', isExpanded: false},
        {code: 'RU'},
        {code: 'UA'}
    ]);

    const [selectedLanguage, setSelectedLanguage] = useState(
        languages.find(lang => lang.code === i18n.language.toUpperCase()) || languages[0]
    );

    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentLanguage = languages.find(lang => lang.code === i18n.language.toUpperCase());
        if (currentLanguage) {
            setSelectedLanguage(currentLanguage);
        }
    }, [i18n.language, languages]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLanguageSelect = (language: Language) => {
        setSelectedLanguage(language);
        i18n.changeLanguage(language.code.toLowerCase());
        setIsOpen(false);
    };

    return (
        <Container ref={ref} $size={size}>
            <LanguageButton onClick={() => setIsOpen(!isOpen)}
                            $isSelected={true}
                            $size={size}
            >
                {selectedLanguage.code}
                <Arrow $isExpanded={isOpen} $size={size}>
                    <Icon iconId={"arrow"} width={"10"} height={"7"} viewBox={"0 0 10 7"}/>
                </Arrow>
            </LanguageButton>
            {isOpen && (
                <Dropdown $size={size}>
                    {languages
                        .filter(lang => lang.code !== selectedLanguage.code)
                        .map(language => (
                            <LanguageButton
                                key={language.code}
                                onClick={() => handleLanguageSelect(language)}
                                $size={size}
                            >
                                {language.code}
                            </LanguageButton>
                        ))}
                </Dropdown>
            )}
        </Container>
    );
};

const Container = styled.div<{ $size?: 'small' | 'medium' }>`
    position: relative;
    z-index: 1000;
    width: ${props => {
        switch (props.$size) {
            case 'small':
                return '34px';
            case 'medium':
                return '53px';
            default:
                return '34px';
        }
    }};
`;

const LanguageButton = styled.button<{ $isSelected?: boolean, $size?: 'small' | 'medium' }>`
    background-color: ${theme.colors.primaryBg};
    color: ${theme.colors.secondary};
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 1000;
    width: 100%;
    height: ${props => {
        switch (props.$size) {
            case 'small':
                return '21px';
            case 'medium':
                return '42px';
            default:
                return '21px';
        }
    }};
    border: none;
    cursor: pointer;
    font-family: "Fira Code", sans-serif;
    font-weight: 500;
    font-size: ${props => {
        switch (props.$size) {
            case 'small':
                return '16px';
            case 'medium':
                return '32px';
            default:
                return '16px';
        }
    }};
    padding: 0;
`;

const Arrow = styled.div<{ $isExpanded?: boolean, $size?: 'small' | 'medium' }>`
    transform: ${props => props.$isExpanded ? 'rotate(180deg)' : 'rotate(0)'};
    transition: transform 0.2s;
    display: flex;
    margin-left: ${props => {
        switch (props.$size) {
            case 'small':
                return '4px';
            case 'medium':
                return '4px';
            default:
                return '4px';
        }
    }};

    svg {
        width: ${props => {
            switch (props.$size) {
                case 'small':
                    return '10px';
                case 'medium':
                    return '10px';
                default:
                    return '10px';
            }
        }};
        height: ${props => {
            switch (props.$size) {
                case 'small':
                    return '7px';
                case 'medium':
                    return '14px';
                default:
                    return '7px';
            }
        }};
    }
`;


const Dropdown = styled.div<{ $size?: 'small' | 'medium' | 'large' }>`
    position: absolute;
    z-index: 1000;
    top: 100%;
    left: 0;
    width: 100%;
    max-width: ${props => {
        switch (props.$size) {
            case 'small':
                return '34px';
            case 'medium':
                return '53px';
            default:
                return '34px';
        }
    }};
    background: ${theme.colors.primaryBg};
    border: 1px solid ${theme.colors.secondary};
    justify-content: space-around;
`;
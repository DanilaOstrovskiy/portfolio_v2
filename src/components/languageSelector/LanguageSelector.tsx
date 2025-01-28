import React, {useEffect, useRef, useState} from 'react';
import {Icon} from "../ui/icon/Icon";
import {useTranslation} from 'react-i18next';
import {S} from "./LanguageSelectors_styles"

export type Size = 'small' | 'medium';

interface Language {
    code: string;
    isExpanded?: boolean;
}

interface LanguageSelectorProps {
    size?: Size;
}

const SIZES = {
    small: {
        container: '34px',
        button: '21px',
        fontSize: '16px',
        arrowWidth: '10px',
        arrowHeight: '7px'
    },
    medium: {
        container: '53px',
        button: '42px',
        fontSize: '32px',
        arrowWidth: '10px',
        arrowHeight: '14px'
    }
} as const;

const LANGUAGES: Language[] = [
    { code: 'EN', isExpanded: false },
    { code: 'RU' },
    { code: 'UA' }
];

// Helpers
export const getSizeValue = (size: Size, property: keyof typeof SIZES.small) =>
    SIZES[size][property];

// Component
export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ size = 'small' }) => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const [selectedLanguage, setSelectedLanguage] = useState(
        LANGUAGES.find(lang => lang.code === i18n.language.toUpperCase()) || LANGUAGES[0]
    );

    useEffect(() => {
        const currentLanguage = LANGUAGES.find(lang =>
            lang.code === i18n.language.toUpperCase()
        );
        if (currentLanguage) {
            setSelectedLanguage(currentLanguage);
        }
    }, [i18n.language]);

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
        <S.Container ref={ref} $size={size}>
            <S.LanguageButton
                onClick={() => setIsOpen(!isOpen)}
                $isSelected={true}
                $size={size}
            >
                {selectedLanguage.code}
                <S.Arrow $isExpanded={isOpen} $size={size}>
                    <Icon
                        iconId="arrow"
                        width="10"
                        height="7"
                        viewBox="0 0 10 7"
                    />
                </S.Arrow>
            </S.LanguageButton>

            {isOpen && (
                <S.Dropdown $size={size}>
                    {LANGUAGES
                        .filter(lang => lang.code !== selectedLanguage.code)
                        .map(language => (
                            <S.LanguageButton
                                key={language.code}
                                onClick={() => handleLanguageSelect(language)}
                                $size={size}
                            >
                                {language.code}
                            </S.LanguageButton>
                        ))}
                </S.Dropdown>
            )}
        </S.Container>
    );
};


import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';
import {theme} from "../../styles/Theme";
import {Icon} from "../icon/Icon";

type Language = {
    code: string;
    isExpanded?: boolean;
}


export const LanguageSelector = () => {
    const [languages] = useState<Language[]>([
        {code: 'EN', isExpanded: false},
        {code: 'RU'},
        {code: 'UA'}
    ]);
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

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
        setIsOpen(false);
    };

    return (
        <Container ref={ref}>
            <LanguageButton onClick={() => setIsOpen(!isOpen)} $isSelected={true}>
                {selectedLanguage.code}
                <Arrow $isExpanded={isOpen}>
                    <Icon iconId={"arrow"} width={"10"} height={"7"} viewBox={"0 0 10 7"}/>
                </Arrow>
            </LanguageButton>
            {isOpen && (
                <Dropdown>
                    {languages
                        .filter(lang => lang.code !== selectedLanguage.code)
                        .map(language => (
                            <LanguageButton
                                key={language.code}
                                onClick={() => handleLanguageSelect(language)}
                            >
                                {language.code}
                            </LanguageButton>
                        ))}
                </Dropdown>
            )}
        </Container>
    );
};

const Container = styled.div`
    position: relative;
`;

const LanguageButton = styled.button<{ $isSelected?: boolean }>`
    background: #282c33;
    color: ${theme.colors.secondaryText};
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    border: none;
    cursor: pointer;
    font-family: "Fira Code", sans-serif;
    font-weight: 500;
    font-size: 16px;
`;

const Arrow = styled.div<{ $isExpanded?: boolean }>`
    transform: ${props => props.$isExpanded ? 'rotate(180deg)' : 'rotate(0)'};
    transition: transform 0.2s;
    display: flex;
    margin-left: 4px;
`;

const Dropdown = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    max-width: 36px;
    background: #3A3A3A;
    border: 1px solid #abb2bf;
    justify-content: space-around;
`;
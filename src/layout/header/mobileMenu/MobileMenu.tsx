import React, {useState} from 'react';
import {LanguageSelector} from "../../../components/languageSelector/LanguageSelector";
import {useTranslation} from "react-i18next";
import {Socialbar} from "./Social/SocialBar";
import {S} from "./MobileMenu_styles"

type MenuItem = {
    name: string;
    path: string;
};

type MenuPropsType = {
    menuItems: MenuItem[];
}

export const MobileMenu = (props: MenuPropsType) => {
    const {menuItems} = props;

    const [isOpen, setIsOpen] = useState(false)
    const {t} = useTranslation()
    const onBurgerBtnClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={isOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={isOpen} onClick={(e) => {
                // Проверяем, не является ли цель клика потомком MobileMenuPopup
                if (e.target === e.currentTarget) {
                    setIsOpen(false);
                }
            }}>
                <S.MenuList>
                    {menuItems.map((item, i) => {
                        return (
                            <S.ListItem key={i}>
                                <S.StyledLink to={`/${item.path}`}
                                              onClick={() => setIsOpen(false)}><span>#</span>{t(item.name)}
                                </S.StyledLink>
                            </S.ListItem>
                        )
                    })}
                    <S.ListItem onClick={(e) => e.stopPropagation()}>
                        <LanguageSelector size="medium"/>
                    </S.ListItem>
                </S.MenuList>
                <div><Socialbar/></div>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};



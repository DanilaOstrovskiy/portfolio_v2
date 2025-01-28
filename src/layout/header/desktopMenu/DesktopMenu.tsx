import React from 'react';
import {LanguageSelector} from "../../../components/languageSelector/LanguageSelector";
import {useTranslation} from "react-i18next";
import {S} from "./DesktopMenu_styles"

type MenuItem = {
    name: string;
    path: string;
};

type MenuPropsType = {
    menuItems: MenuItem[];
}

export const DesktopMenu = (props: MenuPropsType) => {
    const {menuItems} = props;
    const {t} = useTranslation()


    return (
        <S.HeaderMenu>
            <ul>
                {menuItems.map((item, i) => {
                    return (
                        <S.ListItem key={i}>
                            <S.StyledLink to={`/${item.path}`}><span>#</span>{t(item.name)}</S.StyledLink>
                        </S.ListItem>
                    )
                })}
                <S.ListItem><LanguageSelector/></S.ListItem>
            </ul>
        </S.HeaderMenu>
    );
};



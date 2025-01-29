import React, {useEffect, useState} from 'react';
import {S} from "./GoTopBtn_styles"
import {Icon} from "../ui/icon/Icon";
import {theme} from "../../styles/Theme";

export const GoTopBtn = () =>
{
    const [isVisible, setIsVisible] = useState(false);

    // Функция для обработки скролла
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <S.GoTopBtnStyled onClick={scrollToTop} $visible={isVisible}>
            <Icon iconId={"arrow"} viewBox={"0 0 10 7"} width={"10"} height={"7"} fill={theme.colors.primary}></Icon>
        </S.GoTopBtnStyled>
    );
};

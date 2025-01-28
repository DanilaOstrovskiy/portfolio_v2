import React, {useState} from 'react';
import {Icon} from "../ui/icon/Icon";
import {S} from "./Logo_styles"

export const Logo = () => {
    const [iconId, setIconId] = useState("logo");

    return (
        <S.StyledLink to="/"
              onMouseEnter={() => setIconId("pink_logo")}
              onMouseLeave={() => setIconId("logo")}>
            <Icon width={"16px"} height={"16px"} iconId={iconId} viewBox={"0 0 53 53"} />
            <span>Elias</span>
        </S.StyledLink>
    );

};

import React from 'react';
import {Icon} from "../../components/ui/icon/Icon";
import {Container} from "../../components/shared/Container/Container";
import {S} from "./SocialSidebar_styles"

export const SocialSidebar = () => {
    const mediaItems = [
        {
            iconId: "github",
            link: "https://github.com/"
        },
        {
            iconId: "dribbble",
            link: "https://dribbble.com/"
        },
        {
            iconId: "figma",
            link: "https://www.figma.com/"
        }
    ];
    return (
        <S.Sidebar>
            <Container>
                <S.SocialListWrapper>
                    <span></span>
                    <S.SocialList>
                        {mediaItems.map((item, index) => (
                            <S.SocialItem key={index}>
                                <S.Link href={item.link}>
                                    <Icon key={index} iconId={item.iconId} viewBox={"0 0 32 32"} height={"32"}
                                          width={"32"}/>
                                </S.Link>
                            </S.SocialItem>
                        ))}
                    </S.SocialList></S.SocialListWrapper>

            </Container>
        </S.Sidebar>
    );
};


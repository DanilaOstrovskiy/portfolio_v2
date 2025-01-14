import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/ui/icon/Icon";
import {Container} from "../../components/shared/Container/Container";
import {theme} from "../../styles/Theme";

export const SocialSidebar = () => {
    const mediaItems = [
        {
            iconId: "github",
            link: "#"
        },
        {
            iconId: "dribbble",
            link: "#"
        },
        {
            iconId: "figma",
            link: "#"
        }
    ];
    return (
        <Sidebar>
            <Container>
                <SocialListWrapper>
                    <span></span>
                    <SocialList>
                        {mediaItems.map((item, index) => (
                            <SocialItem key={index}>
                                <Link href={item.link}>
                                    <Icon key={index} iconId={item.iconId} viewBox={"0 0 32 32"} height={"32"}
                                          width={"32"}/>
                                </Link>
                            </SocialItem>
                        ))}
                    </SocialList></SocialListWrapper>

            </Container>
        </Sidebar>
    );
};

const Sidebar = styled.div`
    position: fixed;

    transform: translate(17px, 0);
    background: rgb(44, 48, 54, 0.8);
    z-index: 100;
`;


const SocialListWrapper = styled.div`
    display: flex;
    height: 311px;

    span {
        position: relative;

        &::before {
            content: "";
            display: inline-block;
            position: absolute;
            height: 191px;
            width: 1px;
            background: ${theme.colors.secondary};
            transform: translateX(15px);
        }
    }
`


const SocialList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    list-style-type: none;

`

const SocialItem = styled.li`
    font-size: 1.5rem;
`

const Link = styled.a`
    color:${theme.colors.svg};
    transition: color 0.3s ease;

    &:hover {
        color: ${theme.colors.primary};
    }
`
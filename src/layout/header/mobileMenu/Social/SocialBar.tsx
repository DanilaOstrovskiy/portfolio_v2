import {Container} from "../../../../components/shared/Container/Container";
import {Icon} from "../../../../components/ui/icon/Icon";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";


export const Socialbar = () => {
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
        <Social>
            <Container>
                    <SocialList className={"SocialListBar"}>
                    {mediaItems.map((item, index) => (
                        <SocialItem key={index}>
                            <Link href={item.link}>
                                <Icon key={index} iconId={item.iconId} viewBox={"0 0 32 32"} height={"64px"}
                                      width={"64"}/>
                            </Link>
                        </SocialItem>
                    ))}
                </SocialList>
            </Container>
        </Social>
    );
};

const Social = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999999;
    display: flex;
    flex-direction: row;

`;

const SocialList = styled.ul`
    &.SocialListBar {
        display: flex;
        flex-direction: row;
    }

`

const SocialItem = styled.li`
    font-size: 1.5rem;
`

const Link = styled.a`
    color: ${theme.colors.svg};
    transition: color 0.3s ease;

    &:hover {
        color: ${theme.colors.primary};
    }
`
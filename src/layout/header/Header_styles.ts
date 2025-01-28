import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Header = styled.header`
    padding-top: 32px;
    padding-bottom: 35px;
    background-color: ${theme.colors.primaryBg};

    @media ${theme.media.tablet} {
        padding-top: 19px;
        padding-bottom: 8px;
        position: fixed;
        left: 0;
        right: 0;
        z-index: 99999;
    }
`

export const S = {
    Header,
}

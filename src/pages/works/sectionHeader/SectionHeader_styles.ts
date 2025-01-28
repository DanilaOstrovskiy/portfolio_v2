import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const HeaderSection = styled.section`
    padding-bottom: 40px;

    @media ${theme.media.mobile}, ${theme.media.tablet} {
        padding: 12px 20px;
    }

`

const Text = styled.p`
    padding-top: 14px;
`
export const S = {
    HeaderSection,
    Text
}
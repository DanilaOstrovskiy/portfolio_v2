import {theme} from "../../styles/Theme";
import styled from "styled-components";

const AboutMe = styled.section`
    padding-top: 32px;
    @media ${theme.media.mobile}, ${theme.media.tablet} {
        padding: 32px 20px 12px;
    }`

export const S = {AboutMe}
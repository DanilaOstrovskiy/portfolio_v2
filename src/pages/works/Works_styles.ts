import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Works = styled.section`
    padding-top: 32px;

    @media ${theme.media.mobile}, ${theme.media.tablet} {
        padding: 82px 20px 12px;
    }
`
export const S = {Works}
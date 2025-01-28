import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Image = styled.img`
    max-width: 100%;
    height: 201px;
    object-fit: cover;
    border-top:  1px solid ${theme.colors.secondary};
    border-left:  1px solid ${theme.colors.secondary};
    border-right:  1px solid ${theme.colors.secondary};
`;
export const S = {Image}
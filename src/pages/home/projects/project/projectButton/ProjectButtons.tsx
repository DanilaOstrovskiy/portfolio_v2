import styled from "styled-components";
import {StyledLinkAsButton} from "../../../../../components/ui/linkAsButton/LinkAsButton";

type ProjectButtonsProps = {
    primaryLink?: string,
    secondaryLink?: string,
    primaryTitle?: string,
    secondaryTitle?: string
}

export const ProjectButtons = ({
                                   primaryLink,
                                   secondaryLink,
                                   primaryTitle ,
                                   secondaryTitle
                               }: ProjectButtonsProps) => {
    return (

        <ButtonsWrapper>
            {primaryLink && primaryTitle && (
                <StyledLinkAsButton
                    to={primaryLink}
                    variant="primary"
                    size="small"
                    target="_blank">
                    {primaryTitle}
                </StyledLinkAsButton>
            )}
            {secondaryLink && secondaryTitle && (
                    <StyledLinkAsButton
                        to={secondaryLink}
                        variant="secondary"
                        size="small"
                        target="_blank">
                        {secondaryTitle}
                    </StyledLinkAsButton>
                )}

        </ButtonsWrapper>


    )
        ;
};

const ButtonsWrapper = styled.div`
    display: flex;
    gap: 16px;

`
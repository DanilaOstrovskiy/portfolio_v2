import styled from "styled-components";
import {LinkAsButton} from "../../../../../components/ui/linkAsButton/LinkAsButton";


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
                <LinkAsButton
                    to={primaryLink}
                    variant="primary"
                    size="small"
                    target="_blank">
                    {primaryTitle}
                </LinkAsButton>
            )}
            {secondaryLink && secondaryTitle && (
                    <LinkAsButton
                        to={secondaryLink}
                        variant="secondary"
                        size="small"
                        target="_blank">
                        {secondaryTitle}
                    </LinkAsButton>
                )}
        </ButtonsWrapper>


    )
        ;
};

const ButtonsWrapper = styled.div`
    display: flex;
    gap: 16px;

`
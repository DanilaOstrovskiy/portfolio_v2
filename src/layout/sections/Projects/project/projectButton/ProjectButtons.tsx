import styled from "styled-components";
import {LinkAsButton} from "../../../../../components/linkAsButton/LinkAsButton";


export const ProjectButtons = ({live, cached}: { live?: string, cached?: string }) => {
    return (

        <ButtonsWrapper>

                <LinkAsButton
                    href={live || "/some-path"}
                    variant="primary"
                    size="small"
                    target="_blank">
                    Live &lt;~&gt;
                </LinkAsButton>

                {cached && (
                    <LinkAsButton
                        href={cached}
                        variant="secondary"
                        size="small"
                        target="_blank">
                        Cached &gt;=
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
import styled from "styled-components";
import {ButtonLink} from "../../../../../components/linkAsButton/LinkAsButton";

export const ProjectButtons = ({live, cached}: { live?: string, cached?: string }) => {
    return (

        <ButtonsWrapper>

                <ButtonLink
                    href={live || "/some-path"}
                    variant="primary"
                    size="small"
                    target="_blank">
                    Live &lt;~&gt;
                </ButtonLink>

                {cached && (
                    <ButtonLink
                        href={cached}
                        variant="secondary"
                        size="small"
                        target="_blank">
                        Cached &gt;=
                    </ButtonLink>
                )}

        </ButtonsWrapper>


    )
        ;
};

const ButtonsWrapper = styled.div`
    display: flex;
    gap: 16px;

`
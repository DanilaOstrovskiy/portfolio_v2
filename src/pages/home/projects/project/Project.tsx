import React from 'react';
import {Image} from "../../../../components/ui/image/Image";
import {FlexWrapper} from "../../../../components/shared/flexWrapper/FlexWrapper";
import {ProjectButtons} from "./projectButton/ProjectButtons";
import {S} from "./Project_styles"

type ProjectPropsType = {
    imgSrc?: string;
    alt?: string;
    stack: string;
    title: string;
    description: string;
    demoLink?: string;      // вместо live
    sourceLink?: string;    // вместо cached
    primaryButtonTitle?: string;
    secondaryButtonTitle?: string;
}


export const Project = (props: ProjectPropsType) => {
    const {
        imgSrc,
        alt,
        stack,
        description,
        title,
        demoLink,
        sourceLink,
        primaryButtonTitle,
        secondaryButtonTitle
    } = props
    return (
        <S.Project>
            <FlexWrapper direction={"column"}>
                {imgSrc && alt && <Image src={imgSrc} alt={alt}/>}
                <S.ProjectStack>{stack}</S.ProjectStack>
                <S.ProjectInfo>
                    <S.ProjectTitle>{title}</S.ProjectTitle>
                    <S.ProjectDescription>{description}</S.ProjectDescription>
                    <ProjectButtons
                        primaryLink={demoLink}
                        secondaryLink={sourceLink}
                        primaryTitle={primaryButtonTitle}
                        secondaryTitle={secondaryButtonTitle}/>
                </S.ProjectInfo>
            </FlexWrapper>
        </S.Project>

    );
};


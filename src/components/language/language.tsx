import { FC } from "react";
import "./language.css"

interface ILanguage {
    title:string;
    description:string;
}

export const Language:FC<ILanguage> = ({ title, description }) => {
    return (
        <>
            <h3 className="h3_language">{title}</h3>
            <p className="p_language">{description}</p>
        </>
    )
}
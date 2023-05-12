import { FC } from "react";
import "./experience.css"

export interface IExperience {
    years: string;
    company: string;
    position: string;
    text: string;
}

export const Experience:FC<IExperience> = ({years, company, position, text}) => {
    return (
        <div className="div_experience">
            <p className="p_experience_years">{years}</p>
            <p className="p_experience_company">{company}</p>
            <h3 className="h3_position">{position}</h3>
            <p className="p_text">{text}</p>
        </div>
    );
}
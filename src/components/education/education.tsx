import { FC } from "react";
import "./education.css"

export interface IEducation {
    years:string;
    degree:string;
    institution:string;
}

export const Education:FC<IEducation> = ({years, degree, institution}) => {
    return (
        <>
            <p className="p_education_years">{years}</p>
            <h3 className="h3_education">{degree}</h3>
            <p className="p_education_institution">{institution}</p>
        </>
    )
}
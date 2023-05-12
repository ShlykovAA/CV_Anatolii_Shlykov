import { FC } from "react";
import "./contacts.css"

export interface IContacts {
    title:string;
    description:string;
}

export const Contacts:FC<IContacts> = ({title, description}) => {
    return (
        <>
            <h3 className="h3_contact">{title}</h3>
            <p className="p_contact">{description}</p>
        </>
    )
}
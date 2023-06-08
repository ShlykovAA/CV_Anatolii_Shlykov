import { FC } from "react";
import "./contacts.css"

export interface IContacts {
    title:string;
    description:string;
    href: string;
}

export const Contacts:FC<IContacts> = ({title, description, href}) => {
    return (
        <>
            <h3 className="h3_contact">{title}</h3>
            <a className="a_contact" href={href}>{description}</a>
        </>
    )
}
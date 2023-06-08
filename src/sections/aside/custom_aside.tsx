import { FC } from "react";
import { Contacts } from "../../components/contacts";
import { dataForContacts, dataForEducation, dataForExpertise, dataForLanguage } from "../../constants/data_for_aside";
import { Education } from "../../components/education";
import { Language } from "../../components/language";
import myPhotoFile from "../../../public/my_photo.jpg"
import "./custom_aside.css"

export const CustomAside:FC = () => {
    return (
        <aside className="left_part">
            <section className="my_photo">
                <img src={myPhotoFile} alt="My photo for CV" className="photo"/>
            </section>
            <section className="contact">
                <h2>Contacts</h2>
                <hr className="left_line" />
                {dataForContacts.map((item) => (<Contacts {...item}/>))}
            </section>
            <section className="expertise">
                <h2>Expertise</h2>
                <hr className="left_line" />
                <ul className="ul_expertise">
                    {dataForExpertise.map((item,index) => {
                        return <li key={index} className="li_expertise">{item}</li>
                    })}
                </ul>
            </section>
            <section className="education">
                <h2>Education</h2>
                <hr className="left_line" />
                {dataForEducation.map((item) => (<Education {...item}/>))}
            </section>
            <section className="language">
                <h2>Language</h2>
                <hr className="left_line" />
                {dataForLanguage.map((item) => (<Language {...item}/>))}
            </section>
        </aside>
    );
}

import { FC } from "react";
import "./custom_aside.css"
import { Contacts } from "../../components/contacts";
import { dataForContacts, dataForEducation, dataForExpertise, dataForLanguage } from "../../constants/data_for_aside";
import { Education } from "../../components/education";

export const CustomAside:FC = () => {
    return (
        <aside className="left_part">
            <section className="my_photo">
                <img src="../../../public/my_photo.jpg" alt="My photo for CV" className="photo"/>
            </section>
            <section className="contact">
                <h2>Contacts</h2>
                <hr className="left_line" />
                {dataForContacts.map((item) => (<Contacts {...item}/>))}
            </section>
            <section className="education">
                <h2>Education</h2>
                <hr className="left_line" />
                {dataForEducation.map((item) => (<Education {...item}/>))}
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
            <section className="language">
                <h2>Language</h2>
                <hr className="left_line" />
                <Contacts {...dataForLanguage}/>
            </section>
        </aside>
    );
}
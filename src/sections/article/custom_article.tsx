import { FC } from "react";
import "./custom_article.css"
import { dataAboutMe, dataForExperience, dataForStatusAnswer, dataForStatusQuestion } from "../../constants/data_for_article";
import { Experience } from "../../components/experience";

export const CustomArticle:FC = () => {
    return (
        <article className="right_part">
            <section className="me">
                <div className="div_for_my_name">
                    <h1 className="first_name">Anatolii</h1><h1 className="last_name">Shlykov</h1>
                </div>
                <div className="div_for_status">
                    <div className="question">
                        {dataForStatusQuestion.map((item) => (<p className="p_status">{item}</p>))}
                    </div>
                    <div className="answer">
                        {dataForStatusAnswer.map((item) => (<p className="p_status">{item}</p>))}
                    </div>
                </div>
            </section>
            <section className="about_me">
                <h2>About me</h2>
                <hr className="right_line" />
                <p>{dataAboutMe}</p>
            </section>
            <section className="experience">
                <h2>Experience</h2>
                <hr className="right_line" />
                {dataForExperience.map((item) => (<Experience {...item}/>))}
            </section>
        </article>
    );
}
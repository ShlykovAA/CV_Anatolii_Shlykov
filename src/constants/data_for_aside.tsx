import { IContacts } from "../components/contacts";
import { IEducation } from "../components/education";

export const dataForContacts:IContacts[] = [
    {
        title: "Phone:",
        description: "+380975608901",
        href: "",
    },
    {
        title: "Email:",
        description: "anatolio7z@mail.com",
        href: "mailto:anatolio7z@mail.com",
    },
    {
        title: "Telegram:",
        description: "@Sintell",
        href: "t.me/Sintell",
    },
    {
        title: "LinkedIn:",
        description: "in/anatolii-shlykov",
        href: "https://www.linkedin.com/in/anatolii-shlykov-6b076827a/",
    },
    {
        title: "GitHub:",
        description: "github.com/ShlykovAA",
        href: "https://github.com/ShlykovAA",
    },
    {
        title: "Address:",
        description: "Ukraine, Ivano-Frankivsk",
        href: "",
    },
];

export const dataForEducation:IEducation[] = [
    {
        years: "2008-2012",
        degree: "Bachelor - Computer Ingineering",
        institution: "Kharkiv National University of Radioelectronics",
    },
    {
        years: "2012-2013",
        degree: "Master's degree - System Programming",
        institution: "Kharkiv National University of Radioelectronics",
    },
];

export const dataForExpertise: string[] = [
    "HTML, CSS, SCSS",
    "JavaScript, TypeScript",
    "React, Vite",
    "Git, GitHub",
    "Hooks, Formik, Yup, Redux",
    "Adaptive layout, Pixel Perfect",
];

interface IDataForLanguage {
    title: string;
    description: string;
}

export const dataForLanguage: IDataForLanguage[] = [
    {
        title: "English: Pre - Intermediate",
        description: "School Green Forest, Kharkiv. Completed Beginner, Elementary and Pre-Intermediate courses."
    },
    {
        title: "Front-End",
        description: "A-Level, Kharkiv. Completed basics of programming and Front-End courses."
    },
]
import { IContacts } from "../components/contacts";
import { IEducation } from "../components/education";

export const dataForContacts:IContacts[] = [
    {
        title: "Phone",
        description: "+38 066 909 27 05",
    },
    {
        title: "Email",
        description: "anatolio7z@mail.com",
    },
    {
        title: "Address",
        description: "Ukraine, Ivano-Frankivsk",
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
    "SAP, TMS, WMS",
    "Microsoft Office",
    "Zoom, Teams, Skype, etc",
    "I'm taking a course: Html, CSS, JavaScript",
    "Market (analogue 1С)",
    "Distant work",
];

export const dataForLanguage:IContacts = {
    title: "English: Pre - Intermediate",
    description: "School Green Forest, Kharkiv. Completed Beginner, Elementary and Pre-Intermediate courses."
}
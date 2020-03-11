import React from "react";
import { BaseModel, QuestionType } from "../ModelsState";
import { UserAnswers } from "../User";
import { EHRForm } from "../../components/Models/EHR";

export const EHR: BaseModel = 
{
    completeField: 'ehr_complete',
    name: 'EHR Maturity Model',
    shortName: 'EHR',
    // description: 'The RIOSM self-assessment survey uses short vignettes to describe a five-level maturity continuum, based on the maturity levels first proposed in the Capability Maturity Model (CMM).  RIOSM’s maturity level vignettes were derived from over 20 hours of interviews at 12 sites.  The result is an evidence-based model derived from data on the variability of capabilities and activities across institutions.',
    render: (dispatch: any, answers: UserAnswers) => <EHRForm dispatch={dispatch} answers={answers} />,
    questions: [
        {
        answerField: 'ehr_q1',
        text: "Choose the statement that best describes your institution’s current Electronic Health Record (EHR) use:", 
        type: QuestionType.SingleAnswer,
        options: [
                {
            text: "Do not currently use an EHR and have no plans to implement an EHR.",
            value: '1'
                },
                {
            text: "Do not currently use an EHR, but plan to implement an EHR in the next 1-3 years.",
            value: '2'
                },
                {
            text: "Do not currently use an EHR, but are in the process of implementing an EHR to go live within 6 months to a year.",
            value: '3'
                },
                {
            text: "Currently use an EHR in a limited manner (i.e. for outpatient care only or for billing purposes).",
            value: '4'
                },
                {
            text: "Currently use an EHR fully (i.e. for all patient and administratively related care).",
            value: '5'
                }
            ]
        },
        {
        answerField: 'ehr_q2',
        text: "What EHR system does your institution currently use?",
        options: [
                {
            text: "Allscripts",
            value: '1'
                },
                {
            text: "Cerner",
            value: '2'
                },
                {
            text: "CPSI",
            value: '3'
                },
                {
            text: "Epic",
            value: '4'
                },
                {
            text: "Medhost",
            value: '5'
                },
                {
            text: "Meditech",
            value: '6'
                },
                {
            text: "Other (please specify)",
            value: '7'
                },
                {
            text: "Combination (please specify)",
            value: '8'
                }
            ]
        },
        {
        answerField: 'ehr_q3',
        text: "Choose the statement that best describes your institution’s current Research activity in the EHR:", 
        options: [
                {
            text: "Do not allow research activity (such as recruitment through a patient portal, research documentation, research billing etc.) in the EHR (does not include data exports).",
            value: '1'
                },
                {
            text: "Allow research activity (such as recruitment through a patient portal, research documentation, research billing, etc.) in the EHR.",
            value: '2'
                }
            ]
        },
        {
        answerField: 'ehr_q4',
        text: "What research activities are performed in your institution’s EHR? (Select all that apply):",
        options: [
                {
            text: "Security/Access for Research Users",
            value: '1'
                },
                {
            text: "Research Billing/Compliance functions",
            value: '2'
                },
                {
            text: "Research Reporting",
            value: '3'
                },
                {
            text: "Clinical Research Tools",
            value: '4'
                },
                {
            text: "Research Specific Care Management",
            value: '5'
                },
                {
            text: "Research Interfaces & Integrations",
            value: '6'
                },
                {
            text: "Research Oncology Tools",
            value: '7'
                },
                {
            text: "Investigational Drug Services/Pharmacy",
            value: '8'        
                }

            ]
        },
        {
        answerField: 'ehr_q5',
        text: "Choose the staffing model that best represents your institutions model for research IT support in the EHR:",
        options: [
                {
            text: "Embedded Research EHR IT Staff",
            value: '1'
                },
                {
            text: "Dedicated Research EHR IT Staff",
            value: '2'
                },
                {
            text: "Combination of Dedicated and Embedded Research EHR IT Staff",
            value: '3'
                }
            ]
        },
        {
        answerField: 'ehr_q6a',
        text: "How many individuals embedded within your Information Technology (IT) teams have a percent of their effort spent building, testing, maintaining tools within the EHR which support Research?",
        options: [
                {
            text: "1 - 5",
            value: '1'
                },
                {
            text: "6 - 10",
            value: '2'
                },
                {
            text: "11 - 20",
            value: '3'
                },
                {
            text: "20+",
            value: '4'
                }
            ]
        },
        {
        answerField: 'ehr_q6b',
        text: "How many individuals’ effort within your institution are dedicated to building, testing, maintaining tools within the EHR which support research?",
        options: [
                {
            text: "1 - 5",
            value: '1'
                },
                {
            text: "6 - 10",
            value: '2'
                },
                {
            text: "11 - 20",
            value: '3'
                },
                {
            text: "20+",
            value: '4'
                }
            ]
        },
        {
        answerField: 'ehr_q7',
        text: "Of the individuals embedded within your Information Technology (IT) teams that support research within the EHR, what is the average percent effort they spend working on research builds, testing and maintenance within the EHR?",
        options: [
                {
            text: "Less than 5%",
            value: '1'
                },
                {
            text: "Between 6% and 25%",
            value: '2'
                },
                {
            text: "Between 26% and 50%",
            value: '3'
                },
                {
            text: "Between 51% and 75%",
            value: '4'
                },
                {
            text: "76% or more",
            value: '5'
                }
            ]
        },
        {
        answerField: 'ehr_q8',
        text: "Please indicate which areas of research activity in the EHR are supported by Embedded Research EHR IT Staff (Select all that apply):",
        options: [
                {
            text: "(Only show the options chosen in Q4)",
            value: '1'
                }
            ]
        },
        {
        answerField: 'ehr_q9',
        text: "Please indicate which areas of research activity in the EHR are supported by Dedicated Research EHR IT Staff (Select all that apply):",
        options: [
                {
            text: "(Only show the options chosen in Q4)",
            value: '1'
                }
            ]
        },
        {
        answerField: 'ehr_q10',
        text: "If your site uses Epic, what Epic certifications and/or proficiencies do the IT individuals supporting research in the EHR possess? (Select all that apply):",
        options: [
                {
            text: "Anesthesia",
            value: '1'
                },
                {
            text: "ASAP",
            value: '2'
                },
                {
            text: "Beacon",
            value: '3'
                },
                {
            text: "Beaker",
            value: '4'
                },
                {
            text: "BedTime",
            value: '5'
                },
                {
            text: "Benefits Engine",
            value: '6'
                },
                {
            text: "Bones",
            value: '7'
                },
                {
            text: "Bridges",
            value: '8'
                },
            //     {
            // text: "Bugsy",
            // value: '9'
            //     },
            //     {
            // text: "Caboodle",
            // value: '10'
            //     },
            //     {
            // text: "Cadence",
            // value: '11'
            //     },
            //     {
            // text: "Care Everywhere",
            // value: '12'
            //     },
            //     {
            // text: "Charge Router",
            // value: '13'
            //     },
            //     {
            // text: "Chronicles",
            // value: '14'
            //     },
            //     {
            // text: "Claims",
            // value: '15'
            //     },
            //     {
            // text: "Clinical Case Management",
            // value: '16'
            //     },
            //     {
            // text: "Cogito",
            // value: '17'
            //     },
            //     {
            // text: "Cogito Clarity",
            // value: '18'
            //     },
            //     {
            // text: "Cupid",
            // value: '19'
            //     },
            //     {
            // text: "Data Courier",
            // value: '20'
            //     },
            //     {
            // text: "Dorothy",
            // value: '21'
            //     },
            //     {
            // text: "Epic Client Systems Administration",
            // value: '22'
            //     },
            //     {
            // text: "EpicCare Ambulatory",
            // value: '23'
            //     },
            //     {
            // text: "EpicCare Inpatient",
            // value: '24'
            //     },
            //     {
            // text: "EpicCare Link",
            // value: '25'
            //     },
            //     {
            // text: "Grand Central",
            // value: '26'
            //     },
            //     {
            // text: "Health Information Fundamentals",
            // value: '27'
            //     },
            //     {
            // text: "Healthy Planet",
            // value: '28'
            //     },
            //     {
            // text: "HOD",
            // value: '29'
            //     },
            //     {
            // text: "Home Health Revenue Cycle",
            // value: '30'
            //     },
            //     {
            // text: "Hospice Billing",
            // value: '31'
            //     },
            //     {
            // text: "Identity",
            // value: '32'
            //     },
            //     {
            // text: "Interconnect",
            // value: '33'
            //     },
            //     {
            // text: "Kaleidoscope",
            // value: '34'
            //     },
            //     {
            // text: "MyChart",
            // value: '35'
            //     },
            //     {
            // text: "Nurse Triage",
            // value: '36'
            //     },
            //     {
            // text: "Operational Database",
            // value: '37'
            //     },
            //     {
            // text: "OpTime",
            // value: '38'
            //     },
            //     {
            // text: "Physician Builder",
            // value: '39'
            //     },
            //     {
            // text: "Phoenix",
            // value: '40'
            //     },
            //     {
            // text: "Prelude",
            // value: '41'
            //     },
            //     {
            // text: "Radiant",
            // value: '42'
            //     },
            //     {
            // text: "Referrals",
            // value: '43'
            //     },
            //     {
            // text: "Rehab",
            // value: '44'
            //     },
            //     {
            // text: "Research",
            // value: '45'
            //     },
            //     {
            // text: "Resolute HB for Single Billing Office",
            // value: '46'
            //     },
            //     {
            // text: "Resolute Hospital Billing",
            // value: '47'
            //     },
            //     {
            // text: "Resolute PB for Single Billing Office",
            // value: '48'
            //     },
            //     {
            // text: "Resolute Professional Billing",
            // value: '49'
            //     },
            //     {
            // text: "Security and Access",
            // value: '50'
            //     },
            //     {
            // text: "Stork",
            // value: '51'
            //     },
            //     {
            // text: "Tapestry",
            // value: '52'
            //     },
            //     {
            // text: "Training, Environments and Documentation",
            // value: '53'
            //     },
            //     {
            // text: "Welcome",
            // value: '54'
            //     },
            //     {
            // text: "Willow Ambulatory",
            // value: '55'
            //     },
            //     {
            // text: "Willow Inpatient",
            // value: '56'
            //     },
            //     {
            // text: "Willow Inventory",
            // value: '57'
            //     },
            //     {
            // text: "Wisdom",
            // value: '58'
            //     },
            //     {
            // text: "SmartForms",
            // value: '59'
            //     },
            //     {
            // text: "Order Transmittal",
            // value: '60'
            //     }
            ]
        }
    ]
}
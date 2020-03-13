import React from "react";
import { BaseModel, QuestionType, ModelQuestionOption } from "../ModelsState";
import { UserAnswers, ehr_q4_1, ehr_q4_2, ehr_q4_3 } from "../User";
import { EHRForm } from "../../components/Models/EHR";

export const EHR: BaseModel =
{
    completeField: 'ehr_complete',
    name: 'EHR Maturity Model',
    shortName: 'EHR',
    render: (dispatch: any, answers: UserAnswers) => <EHRForm dispatch={dispatch} answers={answers} />,
    questions: [
        {
            answerField: 'ehr_q1',
            text: "Choose the statement that best describes your institution’s current Electronic Health Record (EHR) use:",
            type: QuestionType.SingleAnswer,
            options: [
                {
                    text: "We do not currently use an EHR and have no plans to implement an EHR.",
                    value: '1'
                },
                {
                    text: "We do not currently use an EHR, but plan to implement an EHR in the next 1-3 years.",
                    value: '2'
                },
                {
                    text: "We do not currently use an EHR, but are in the process of implementing an EHR to go live within 6 months to a year.",
                    value: '3'
                },
                {
                    text: "We currently use an EHR in a limited manner (i.e. for outpatient care only or for billing purposes).",
                    value: '4'
                },
                {
                    text: "We currently use an EHR fully (i.e. for all patient and administratively related care).",
                    value: '5'
                }
            ]
        },
        {
            answerField: 'ehr_q2',
            shouldRender: (answers: UserAnswers) => new Set(['4', '5']).has(answers['ehr_q1']),
            text: "What EHR system does your institution currently use?",
            type: QuestionType.MultipleAnswer,
            options: [
                {
                    answerField: 'ehr_q2___1',
                    text: "Allscripts",
                    value: '1'
                },
                {
                    answerField: 'ehr_q2___2',
                    text: "Cerner",
                    value: '2'
                },
                {
                    answerField: 'ehr_q2___3',
                    text: "CPSI",
                    value: '3'
                },
                {
                    answerField: 'ehr_q2___4',
                    text: "Epic",
                    value: '4'
                },
                {
                    answerField: 'ehr_q2___5',
                    text: "Medhost",
                    value: '5'
                },
                {
                    answerField: 'ehr_q2___6',
                    text: "Meditech",
                    value: '6'
                },
                {
                    answerField: 'ehr_q2_1',
                    freeText: true,
                    text: "Other (please specify)",
                    value: '7'
                }
            ]
        },
        {
            answerField: 'ehr_q3',
            text: "Choose the statement that best describes your institution’s current Research activity in the EHR:",
            type: QuestionType.SingleAnswer,
            options: [
                {
                    text: "We do not allow research activity (such as recruitment through a patient portal, research documentation, research billing etc.) in the EHR (does not include data exports).",
                    value: '1'
                },
                {
                    text: "We allow research activity (such as recruitment through a patient portal, research documentation, research billing, etc.) in the EHR.",
                    value: '2'
                }
            ]
        },
        {
            answerField: 'ehr_q4',
            shouldRender: (answers: UserAnswers) => answers['ehr_q3'] === '2',
            text: "What research activities are performed in your institution’s EHR? (Select all that apply):",
            type: QuestionType.MultipleAnswer,
            options: [
                {
                    answerField: 'ehr_q4___1',
                    text: "Security/Access for Research Users",
                    value: '1'
                },
                {
                    answerField: 'ehr_q4___2',
                    text: "Research Billing/Compliance functions",
                    value: '2'
                },
                {
                    answerField: 'ehr_q4___3',
                    text: "Research Reporting",
                    value: '3'
                },
                {
                    answerField: 'ehr_q4___4',
                    text: "Clinical Research Tools",
                    value: '4'
                },
                {
                    answerField: 'ehr_q4___5',
                    text: "Research Specific Care Management",
                    value: '5'
                },
                {
                    answerField: 'ehr_q4___6',
                    text: "Research Interfaces & Integrations",
                    value: '6'
                },
                {
                    answerField: 'ehr_q4___7',
                    text: "Research Oncology Tools",
                    value: '7'
                },
                {
                    answerField: 'ehr_q4___8',
                    text: "Investigational Drug Services/Pharmacy",
                    value: '8'
                }

            ]
        },
        {
            answerField: 'ehr_q4_1',
            shouldRender: (answers: UserAnswers) => answers['ehr_q4___1'] === '1',
            text: <span>What research activities are performed in your institution’s EHR <strong>regarding Security/Access</strong>? (Select all that apply)</span>,
            type: QuestionType.MultipleAnswer,
            options: [
                {
                    answerField: 'ehr_q4_1___1',
                    text: "Research specific user access templates / subtemplates",
                    value: '1'
                },
                {
                    answerField: 'ehr_q4_1___2',
                    text: "Research specific security classes",
                    value: '2'
                },
                {
                    answerField: 'ehr_q4_1___3',
                    text: "Virtual Access for external research users not affiliated with your institution Virtual Access for external research monitor",
                    value: '3'
                },
                {
                    answerField: 'ehr_q4_1___4',
                    text: "Audits of research user activity within the EHR",
                    value: '4'
                }
            ]
        },
        {
            answerField: 'ehr_q4_2',
            shouldRender: (answers: UserAnswers) => answers['ehr_q4___2'] === '1',
            text: <span>What research activities are performed in your institution’s EHR <strong>regarding Billing/Compliance functions</strong>? (Select all that apply)</span>,
            type: QuestionType.MultipleAnswer,
            options: [
                {
                    answerField: 'ehr_q4_2___1',
                    text: <span>Research-only <strong>orderables</strong> builds &amp; updates</span>,
                    value: '1'
                },
                {
                    answerField: 'ehr_q4_2___2',
                    text: <span>Research <strong>component record</strong> builds &amp; updates</span>,
                    value: '2'
                },
                {
                    answerField: 'ehr_q4_2___3',
                    text: <span>Research <strong>rule configuration</strong> (excluding charge routing)</span>,
                    value: '3'
                },
                {
                    answerField: 'ehr_q4_2___4',
                    text: <span>Research <strong>billing functionality</strong> builds &amp; updates</span>,
                    value: '4'
                },
                {
                    answerField: 'ehr_q4_2___5',
                    text: <span>Research <strong>billing work queue build, configuration &amp; updates</strong></span>,
                    value: '5'
                },
                {
                    answerField: 'ehr_q4_2___6',
                    text: <span>Order/Smartset or Order group builds &amp; updates</span>,
                    value: '6'
                },
                {
                    answerField: 'ehr_q4_2___7',
                    text: <span>Non-interfaced research billing grid builds and updates</span>,
                    value: '7'
                },
                {
                    answerField: 'ehr_q4_2___8',
                    text: <span>Changes made to the Research record not a part of the Clinical Trials Management System or Clinical Trials offices responsibilities</span>,
                    value: '8'
                },
                {
                    answerField: 'ehr_q4_2___9',
                    text: <span>Research Task Builds</span>,
                    value: '9'
                },
                {
                    answerField: 'ehr_q4_2___10',
                    text: <span>Research Event notifications</span>,
                    value: '10'
                },
                {
                    answerField: 'ehr_q4_2___11',
                    text: <span>Consent and Amendment functionality build, configuration &amp; updates</span>,
                    value: '11'
                },
                {
                    answerField: 'ehr_q4_2___12',
                    text: <span>Facilitation of de-identified research participant workflows &amp; functionality</span>,
                    value: '12'
                }
            ]
        },
        {
            answerField: 'ehr_q4_3',
            shouldRender: (answers: UserAnswers) => answers['ehr_q4___3'] === '1',
            text: <span>What research activities are performed in your institution’s EHR <strong>regarding Research Reporting</strong>? (Select all that apply)</span>,
            type: QuestionType.MultipleAnswer,
            options: [
                {
                    answerField: 'ehr_q4_3___1',
                    text: <span>Creation, maintenance &amp; provisioning of reports within the EHR for study teams to utilize for research purposes (i.e. recruitment)</span>,
                    value: '1'
                },
                {
                    answerField: 'ehr_q4_3___2',
                    text: <span> Creation, validation, maintenance &amp; distribution of reports of data pulled from the EHR specific database for research data requests and facilitated through honest broker services</span>,
                    value: '2'
                },
                {
                    answerField: 'ehr_q4_3___3',
                    text: <span>(Epic Specific Institutions) Provide honest broker services for research study teams wishing to convert and export de-identified SlicerDicer queries</span>,
                    value: '3'
                },
                {
                    answerField: 'ehr_q4_3___4',
                    text: <span>Audits of users &amp; reports being run within the EHR</span>,
                    value: '4'
                },
                {
                    answerField: 'ehr_q4_3___5',
                    text: <span>Accounting of Disclosures documentation for research reports done in or through the EHR</span>,
                    value: '5'
                }
            ]
        },
        {
            answerField: 'ehr_q5',
            text: "Choose the staffing model that best represents your institutions model for research IT support in the EHR:",
            type: QuestionType.SingleAnswer,
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
            shouldRender: (answers: UserAnswers) => new Set(['1', '3']).has(answers['ehr_q5']),
            text: "How many individuals embedded within your Information Technology (IT) teams have a percent of their effort spent building, testing, maintaining tools within the EHR which support Research?",
            type: QuestionType.SingleAnswer,
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
            shouldRender: (answers: UserAnswers) => new Set(['1', '2']).has(answers['ehr_q5']),
            text: "How many individuals’ effort within your institution are dedicated to building, testing, maintaining tools within the EHR which support research?",
            type: QuestionType.SingleAnswer,
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
            type: QuestionType.SingleAnswer,
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
            getOptions: (answers: UserAnswers) => {
                const opts: ModelQuestionOption[] = [];
                // const ehr_q4_1 = ;
                if (answers[ehr_q4_1] === '1') {
                    opts.push({ text: ehr_q4_1.text, answerField: 'ehr_q8_1', value: '1' });
                };
                if (answers[ehr_q4_2] === '1') {
                    opts.push({ text: , answerField: 'ehr_q8_2', value: '2' });
                };
                if (answers[ehr_q4_3] === '1') {
                    opts.push({ text: , answerField: 'ehr_q8_3', value: '3' });
                };
                return opts;
            },
            text: "Please indicate which areas of research activity in the EHR are supported by Embedded Research EHR IT Staff (Select all that apply):",
            type: QuestionType.MultipleAnswer,
            options: []
        },
        {
            answerField: 'ehr_q9',
            getOptions: (answers: UserAnswers) => {
                const opts: ModelQuestionOption[] = [];

                if (answers[ehr_q4_1] === '1') {
                    opts.push({ text: , answerField: 'ehr_q9_1', value: '1' });
                };
                if (answers[ehr_q4_2] === '1') {
                    opts.push({ text: '', answerField: 'ehr_q9_2', value: '2' });
                };
                if (answers[ehr_q4_3] === '1') {
                    opts.push({ text: , answerField: 'ehr_q9_3', value: '3' });
                };
                return opts;
            },
            text: "Please indicate which areas of research activity in the EHR are supported by Dedicated Research EHR IT Staff (Select all that apply):",
            type: QuestionType.MultipleAnswer,
            options: []
        },
        {
            answerField: 'ehr_q10',
            text: <span>If your site uses Epic, what Epic certifications and/or proficiencies do the IT individuals <strong>supporting research</strong> in the EHR possess? (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [
                {
                    answerField: 'ehr_q10___1',
                    text: "Anesthesia",
                    value: '1'
                },
                {
                    answerField: 'ehr_q10___2',
                    text: "ASAP",
                    value: '2'
                },
                {
                    answerField: 'ehr_q10___3',
                    text: "Beacon",
                    value: '3'
                },
                {
                    answerField: 'ehr_q10___4',
                    text: "Beaker",
                    value: '4'
                },
                {
                    answerField: 'ehr_q10___5',
                    text: "BedTime",
                    value: '5'
                },
                {
                    answerField: 'ehr_q10___6',
                    text: "Benefits Engine",
                    value: '6'
                },
                {
                    answerField: 'ehr_q10___7',
                    text: "Bones",
                    value: '7'
                },
                {
                    answerField: 'ehr_q10___8',
                    text: "Bridges",
                    value: '8'
                },
                {
                    text: "Bugsy",
                    value: '9'
                },
                {
                    text: "Caboodle",
                    value: '10'
                },
                {
                    text: "Cadence",
                    value: '11'
                },
                {
                    text: "Care Everywhere",
                    value: '12'
                },
                {
                    text: "Charge Router",
                    value: '13'
                },
                {
                    text: "Chronicles",
                    value: '14'
                },
                {
                    text: "Claims",
                    value: '15'
                },
                {
                    text: "Clinical Case Management",
                    value: '16'
                },
                {
                    text: "Cogito",
                    value: '17'
                },
                {
                    text: "Cogito Clarity",
                    value: '18'
                },
                {
                    text: "Cupid",
                    value: '19'
                },
                {
                    text: "Data Courier",
                    value: '20'
                },
                {
                    text: "Dorothy",
                    value: '21'
                },
                {
                    text: "Epic Client Systems Administration",
                    value: '22'
                },
                {
                    text: "EpicCare Ambulatory",
                    value: '23'
                },
                {
                    text: "EpicCare Inpatient",
                    value: '24'
                },
                {
                    text: "EpicCare Link",
                    value: '25'
                },
                {
                    text: "Grand Central",
                    value: '26'
                },
                {
                    text: "Health Information Fundamentals",
                    value: '27'
                },
                {
                    text: "Healthy Planet",
                    value: '28'
                },
                {
                    text: "HOD",
                    value: '29'
                },
                {
                    text: "Home Health Revenue Cycle",
                    value: '30'
                },
                {
                    text: "Hospice Billing",
                    value: '31'
                },
                {
                    text: "Identity",
                    value: '32'
                },
                {
                    text: "Interconnect",
                    value: '33'
                },
                {
                    text: "Kaleidoscope",
                    value: '34'
                },
                {
                    text: "MyChart",
                    value: '35'
                },
                {
                    text: "Nurse Triage",
                    value: '36'
                },
                {
                    text: "Operational Database",
                    value: '37'
                },
                {
                    text: "OpTime",
                    value: '38'
                },
                {
                    text: "Physician Builder",
                    value: '39'
                },
                {
                    text: "Phoenix",
                    value: '40'
                },
                {
                    text: "Prelude",
                    value: '41'
                },
                {
                    text: "Radiant",
                    value: '42'
                },
                {
                    text: "Referrals",
                    value: '43'
                },
                {
                    text: "Rehab",
                    value: '44'
                },
                {
                    text: "Research",
                    value: '45'
                },
                {
                    text: "Resolute HB for Single Billing Office",
                    value: '46'
                },
                {
                    text: "Resolute Hospital Billing",
                    value: '47'
                },
                {
                    text: "Resolute PB for Single Billing Office",
                    value: '48'
                },
                {
                    text: "Resolute Professional Billing",
                    value: '49'
                },
                {
                    text: "Security and Access",
                    value: '50'
                },
                {
                    text: "Stork",
                    value: '51'
                },
                {
                    text: "Tapestry",
                    value: '52'
                },
                {
                    text: "Training, Environments and Documentation",
                    value: '53'
                },
                {
                    text: "Welcome",
                    value: '54'
                },
                {
                    text: "Willow Ambulatory",
                    value: '55'
                },
                {
                    text: "Willow Inpatient",
                    value: '56'
                },
                {
                    text: "Willow Inventory",
                    value: '57'
                },
                {
                    text: "Wisdom",
                    value: '58'
                },
                {
                    text: "SmartForms",
                    value: '59'
                },
                {
                    text: "Order Transmittal",
                    value: '60'
                }
            ]
        },
        {
            answerField: 'ehr_q10_1',
            text: <span>Epic certifications - Anesthesia (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [
                {
                    answerField: 'ehr_q10_1___1',
                    text: 'Anesthesia Certification/Proficiency',
                    value: '1'
                },
                {
                    answerField: 'ehr_q10_1___2',
                    text: 'Anesthesia for the Clinically Trained Certification/Proficiency',
                    value: '2'
                },
                {
                    answerField: 'ehr_q10_1___3',
                    text: 'Anesthesia for the Curriculum-Trained Certification/Proficiency',
                    value: '3'
                },
                {
                    answerField: 'ehr_q10_1___4',
                    text: 'Physician Builder Anesthesia Certification/Proficiency',
                    value: '4'
                },
                {
                    answerField: 'ehr_q10_1___5',
                    text: 'OpTime and Anesthesia Curriculum Certification/Proficiency',
                    value: '5'
                },
                {
                    answerField: 'ehr_q10_1___6',
                    text: 'OpTime and Anesthesia Curriculum Certification/Proficiency for the Application Certified',
                    value: '6'
                },
                {
                    answerField: 'ehr_q10_1___7',
                    text: 'Surgical Training Environment Build Certification/Proficiency',
                    value: '7'
                },
            ]  
        },
        {
            answerField: 'ehr_q10_2',
            text: <span>Epic certifications - ASAP (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [
                {
                    answerField: 'ehr_q10_2___1',
                    text: 'ASAP Emergency Department Certification/Proficiency',
                    value: '1'
                },
                {
                    answerField: 'ehr_q10_2___2',
                    text: 'ASAP Emergency Department for the Clinically Trained Certification/Proficiency',
                    value: '2'
                },
                {
                    answerField: 'ehr_q10_2___3',
                    text: 'ASAP Curriculum Certification/Proficiency',
                    value: '3'
                },
                {
                    answerField: 'ehr_q10_2___4',
                    text: 'ASAP Curriculum Certification/Proficiency for Application Certified',
                    value: '4'
                },
                {
                    answerField: 'ehr_q10_2___5',
                    text: 'ASAP Training Environment Build Certification/Proficiency',
                    value: '5'
                }
            ]  
        },
        {
            answerField: 'ehr_q10_3',
            text: <span>Epic certifications - Beacon (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [
                {
                    answerField: 'ehr_q10_3___1',
                    text: 'Beacon Certification/Proficiency',
                    value: '1'
                },
                {
                    answerField: 'ehr_q10_3___2',
                    text: 'Beacon Curriculum Certification/Proficiency',
                    value: '2'
                },
                {
                    answerField: 'ehr_q10_3___3',
                    text: 'Beacon Curriculum Certification/Proficiency for Application Certified',
                    value: '3'
                },
                {
                    answerField: 'ehr_q10_3___4',
                    text: 'Ancillary Clinicals Training Environment Build Certification/Proficiency',
                    value: '4'
                }
            ]  
        }
    ]
}
import React from "react";
import { BaseModel, QuestionType, ModelQuestionOption } from "../ModelsState";
import { UserAnswers } from "../User";
import { EHRForm } from "../../components/Models/EHR";
import {
    ehr_q4_1_arr, ehr_q4_2_arr, ehr_q4_3_arr, ehr_q4_4_arr, ehr_q4_5_arr,
    ehr_q4_5_1_arr, ehr_q4_6_arr, ehr_q4_7_arr, ehr_q4_8_arr, ehr_q4_arr
    } from "./EHRQ4Options";

export const EHR: BaseModel =
{
    completeField: 'ehr_complete',
    description: 'The EHR Maturity Model is designed to measure the purposes, personnel, and workflows utilized at your institution around your Electronic Health Record(s).',
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
                    text: <span>We do <strong>not</strong> currently use an EHR and have no plans to implement an EHR.</span>,
                    value: '1'
                },
                {
                    text: <span>We do <strong>not</strong> currently use an EHR, but plan to implement an EHR in the next 1-3 years.</span>,
                    value: '2'
                },
                {
                    text: <span>We do <strong>not</strong> currently use an EHR, but are in the process of implementing an EHR to go live within 6 months to a year.</span>,
                    value: '3'
                },
                {
                    text: "We currently use an EHR in a limited manner (i.e. for outpatient care only or for billing purposes).",
                    value: '4'
                },
                {
                    text: "We currently use an EHR fully (i.e. for all patient care and administration needs related to care).",
                    value: '5'
                }
            ]
        },
        {
            answerField: 'ehr_q2',
            shouldRender: (answers: UserAnswers) => new Set(['4', '5']).has(answers['ehr_q1']),
            text: "What EHR system(s) does your institution currently use? (Select all that apply)",
            type: QuestionType.MultipleAnswer,
            options: [
                {
                    answerField: 'ehr_q2___1',
                    text: "Allscripts",
                },
                {
                    answerField: 'ehr_q2___2',
                    text: "Cerner",
                },
                {
                    answerField: 'ehr_q2___3',
                    text: "CPSI",
                },
                {
                    answerField: 'ehr_q2___4',
                    text: "Epic",
                },
                {
                    answerField: 'ehr_q2___5',
                    text: "Medhost",
                },
                {
                    answerField: 'ehr_q2___6',
                    text: "Meditech",
                },
                {
                    answerField: 'ehr_q2_1',
                    freeText: true,
                    text: "Other (please specify)",
                }
            ]
        },
        {
            answerField: 'ehr_q3',
            shouldRender: (answers: UserAnswers) => new Set(['4', '5']).has(answers['ehr_q1']),
            text: "Choose the statement that best describes your institution’s current Research activity in the EHR:",
            type: QuestionType.SingleAnswer,
            options: [
                {
                    text: <span>We do <strong>not</strong> allow research activity (such as recruitment through a patient portal, research documentation, research billing etc.) in the EHR (does not include data exports).</span>,
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
            shouldRender: (answers: UserAnswers) => answers['ehr_q3'] === '2' && new Set(['4', '5']).has(answers['ehr_q1']),
            text: "What research activities are performed in your institution’s EHR? (Select all that apply):",
            type: QuestionType.MultipleAnswer,
            options: [
                {
                    answerField: 'ehr_q4___1',
                    text: "Security/Access for Research Users"
                },
                {
                    answerField: 'ehr_q4___2',
                    text: "Research Billing/Compliance functions"
                },
                {
                    answerField: 'ehr_q4___3',
                    text: "Research Reporting"
                },
                {
                    answerField: 'ehr_q4___4',
                    text: "Clinical Research Tools"
                },
                {
                    answerField: 'ehr_q4___5',
                    text: "Research Specific Care Management"
                },
                {
                    answerField: 'ehr_q4___6',
                    text: "Research Interfaces & Integrations"
                },
                {
                    answerField: 'ehr_q4___7',
                    text: "Research Oncology Tools"
                },
                {
                    answerField: 'ehr_q4___8',
                    text: "Investigational Drug Services/Pharmacy"
                }

            ]
        },
        {
            answerField: 'ehr_q4_1',
            shouldRender: (answers: UserAnswers) => answers['ehr_q4___1'] === '1' && answers['ehr_q3'] === '2' && new Set(['4', '5']).has(answers['ehr_q1']),
            text: <span>What research activities are performed in your institution’s EHR <strong>regarding Security/Access</strong>? (Select all that apply)</span>,
            type: QuestionType.MultipleAnswer,
            options: ehr_q4_1_arr
        },
        {
            answerField: 'ehr_q4_2',
            shouldRender: (answers: UserAnswers) => answers['ehr_q4___2'] === '1' && answers['ehr_q3'] === '2' && new Set(['4', '5']).has(answers['ehr_q1']),
            text: <span>What research activities are performed in your institution’s EHR <strong>regarding Billing/Compliance functions</strong>? (Select all that apply)</span>,
            type: QuestionType.MultipleAnswer,
            options: ehr_q4_2_arr
        },
        {
            answerField: 'ehr_q4_3',
            shouldRender: (answers: UserAnswers) => answers['ehr_q4___3'] === '1' && answers['ehr_q3'] === '2' && new Set(['4', '5']).has(answers['ehr_q1']),
            text: <span>What research activities are performed in your institution’s EHR <strong>regarding Research Reporting</strong>? (Select all that apply)</span>,
            type: QuestionType.MultipleAnswer,
            options: ehr_q4_3_arr
        },
        {
            answerField: 'ehr_q4_4',
            shouldRender: (answers: UserAnswers) => answers['ehr_q4___4'] === '1' && answers['ehr_q3'] === '2' && new Set(['4', '5']).has(answers['ehr_q1']),
            text: <span>What research activities are performed in your institution’s EHR <strong>regarding Clinical Research Tools</strong>? (Select all that apply)</span>,
            type: QuestionType.MultipleAnswer,
            options: ehr_q4_4_arr
        },
        {
            answerField: 'ehr_q4_5',
            shouldRender: (answers: UserAnswers) => answers['ehr_q4___5'] === '1' && answers['ehr_q3'] === '2' && new Set(['4', '5']).has(answers['ehr_q1']),
            text: <span>What research activities are performed in your institution’s EHR <strong>regarding Research Specific Care Management</strong>? (Select all that apply)</span>,
            type: QuestionType.MultipleAnswer,
            options: ehr_q4_5_arr
        },
        {
            answerField: 'ehr_q4_5_1',
            shouldRender: (answers: UserAnswers) => answers['ehr_q4_5___3'] === '1' && answers['ehr_q3'] === '2' && new Set(['4', '5']).has(answers['ehr_q1']),
            text: <span>What research activities are performed in your institution’s EHR <strong>regarding Research Specific Care Management - Patient Portal</strong>? (Select all that apply)</span>,
            type: QuestionType.MultipleAnswer,
            options: ehr_q4_5_1_arr
        },
        {
            answerField: 'ehr_q4_6',
            shouldRender: (answers: UserAnswers) => answers['ehr_q4___6'] === '1' && answers['ehr_q3'] === '2' && new Set(['4', '5']).has(answers['ehr_q1']),
            text: <span>What research activities are performed in your institution’s EHR <strong>regarding Research Interfaces &amp; Integrations</strong>? (Select all that apply)</span>,
            type: QuestionType.MultipleAnswer,
            options: ehr_q4_6_arr
        },
        {
            answerField: 'ehr_q4_7',
            shouldRender: (answers: UserAnswers) => answers['ehr_q4___7'] === '1' && answers['ehr_q3'] === '2' && new Set(['4', '5']).has(answers['ehr_q1']),
            text: <span>What research activities are performed in your institution’s EHR <strong>regarding Research Oncology Tools</strong>? (Select all that apply)</span>,
            type: QuestionType.MultipleAnswer,
            options: ehr_q4_7_arr
        },
        {
            answerField: 'ehr_q4_8',
            shouldRender: (answers: UserAnswers) => answers['ehr_q4___8'] === '1' && answers['ehr_q3'] === '2' && new Set(['4', '5']).has(answers['ehr_q1']),
            text: <span>What research activities are performed in your institution’s EHR <strong>regarding Research Investigational Drug Services/Pharmacy</strong>? (Select all that apply)</span>,
            type: QuestionType.MultipleAnswer,
            options: ehr_q4_8_arr
        },
        {
            answerField: 'ehr_q5',
            shouldRender: (answers: UserAnswers) => new Set(['4', '5']).has(answers['ehr_q1']) && answers['ehr_q3'] === '2',
            text: 
                <span>Choose the staffing model that best represents your institutions model for research IT support in the EHR:
                    <div className="form-question-subheader">
                        <div>Resource/Staffing Definitions:</div>
                        <div><u>Embedded EHR IT Staff</u>: Build analysts, reporting analysts and managers are pulled from other institutional Epic teams and work as a decentralized group to serve research needs in addition to their primary team responsibilities.</div>
                        <div><u>Dedicated EHR IT Staff</u>: Build analysts, reporting analysts and managers all work to facilitate research as one dedicated team with no other obligations outside of research initiatives.</div>
                        <div><u>No Research EHR IT Staff</u>: No Build analysts, reporting analysts and managers work to serve research needs within the Epic system.</div>
                    </div>
                </span>,
            type: QuestionType.SingleAnswer,
            options: [
                {
                    text: <span><strong>Embedded</strong> Research EHR IT Staff</span>,
                    value: '1'
                },
                {
                    text: <span><strong>Dedicated</strong> Research EHR IT Staff</span>,
                    value: '2'
                },
                {
                    text: <span>Combination of <strong>Dedicated</strong> and <strong>Embedded</strong> Research EHR IT Staff</span>,
                    value: '3'
                }
            ]
        },
        {
            answerField: 'ehr_q6a',
            shouldRender: (answers: UserAnswers) => new Set(['1','3']).has(answers['ehr_q5']) && new Set(['4','5']).has(answers['ehr_q1']) && answers['ehr_q3'] === '2',
            text: <span>How many individuals <strong>embedded</strong> within your Information Technology (IT) teams have a percent of their effort spent building, testing, maintaining tools within the EHR which support Research?</span>,
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
            shouldRender: (answers: UserAnswers) => new Set(['2','3']).has(answers['ehr_q5']) && new Set(['4','5']).has(answers['ehr_q1']) && answers['ehr_q3'] === '2',
            text: <span>How many individuals' effort within your institution are <strong>dedicated</strong> to building, testing, maintaining tools within the EHR which support research?</span>,
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
            shouldRender: (answers: UserAnswers) => new Set(['1','3']).has(answers['ehr_q5']) && new Set(['4','5']).has(answers['ehr_q1']) && answers['ehr_q3'] === '2',
            text: <span>Of the individuals <strong>embedded</strong> within your Information Technology (IT) teams that support research within the EHR, what is the average percent effort they spend working on research builds, testing and maintenance within the EHR?</span>,
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
            shouldRender: (answers: UserAnswers) => answers['ehr_q3'] === '2' && new Set(['4', '5']).has(answers['ehr_q1']),
            getOptions: (answers: UserAnswers) => {
                const opts: ModelQuestionOption[] = [];
                for (let i = 0; i < ehr_q4_arr.length; i++) {
                    const a = ehr_q4_arr[i];
                    if (answers[a.answerField!] === '1') {
                        opts.push({ ...a, answerField: a.q8_9AnswerField!.toString().replace('q','q8') } as any);
                    }
                }
                return opts;
            },
            text: <span>Please indicate which areas of research activity in the EHR are supported by <strong>Embedded</strong> Research EHR IT Staff (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: []
        },
        {
            answerField: 'ehr_q9',
            shouldRender: (answers: UserAnswers) => answers['ehr_q3'] === '2' && new Set(['4', '5']).has(answers['ehr_q1']),
            getOptions: (answers: UserAnswers) => {
                const opts: ModelQuestionOption[] = [];
                for (let i = 0; i < ehr_q4_arr.length; i++) {
                    const a = ehr_q4_arr[i];
                    if (answers[a.answerField!] === '1') {
                        opts.push({ ...a, answerField: a.q8_9AnswerField!.toString().replace('q','q9') } as any);
                    }
                }
                return opts;
            },
            text: <span>Please indicate which areas of research activity in the EHR are supported by <strong>Dedicated</strong> Research EHR IT Staff (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: []
        },
        {
            answerField: 'ehr_q10',
            shouldRender: (answers: UserAnswers) => answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>If your site uses Epic, what Epic certifications and/or proficiencies do the IT individuals <strong>supporting research</strong> in the EHR possess? (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [
                {
                    answerField: 'ehr_q10___1',
                    text: "Anesthesia"
                },
                {
                    answerField: 'ehr_q10___2',
                    text: "ASAP"
                },
                {
                    answerField: 'ehr_q10___3',
                    text: "Beacon"
                },
                {
                    answerField: 'ehr_q10___4',
                    text: "Beaker"
                },
                {
                    answerField: 'ehr_q10___5',
                    text: "BedTime"
                },
                {
                    answerField: 'ehr_q10___6',
                    text: "Benefits Engine"
                },
                {
                    answerField: 'ehr_q10___7',
                    text: "Bones"
                },
                {
                    answerField: 'ehr_q10___8',
                    text: "Bridges"
                },
                {
                    answerField: 'ehr_q10___9',
                    text: "Bugsy"
                },
                {
                    answerField: 'ehr_q10___10',
                    text: "Caboodle"
                },
                {
                    answerField: 'ehr_q10___11',
                    text: "Cadence"
                },
                {
                    answerField: 'ehr_q10___12',
                    text: "Care Everywhere"
                },
                {
                    answerField: 'ehr_q10___13',
                    text: "Charge Router"
                },
                {
                    answerField: 'ehr_q10___14',
                    text: "Chronicles"
                },
                {
                    answerField: 'ehr_q10___15',
                    text: "Claims"
                },
                {
                    answerField: 'ehr_q10___16',
                    text: "Clinical Case Management"
                },
                {
                    answerField: 'ehr_q10___17',
                    text: "Cogito"
                },
                {
                    answerField: 'ehr_q10___18',
                    text: "Cogito Clarity"
                },
                {
                    answerField: 'ehr_q10___19',
                    text: "Cupid"
                },
                {
                    answerField: 'ehr_q10___20',
                    text: "Data Courier"
                },
                {
                    answerField: 'ehr_q10___21',
                    text: "Dorothy"
                },
                {
                    answerField: 'ehr_q10___22',
                    text: "Epic Client Systems Administration"
                },
                {
                    answerField: 'ehr_q10___23',
                    text: "EpicCare Ambulatory"
                },
                {
                    answerField: 'ehr_q10___24',
                    text: "EpicCare Inpatient"
                },
                {
                    answerField: 'ehr_q10___25',
                    text: "EpicCare Link"
                },
                {
                    answerField: 'ehr_q10___26',
                    text: "Grand Central"
                },
                {
                    answerField: 'ehr_q10___27',
                    text: "Health Information Fundamentals"
                },
                {
                    answerField: 'ehr_q10___28',
                    text: "Healthy Planet"
                },
                {
                    answerField: 'ehr_q10___29',
                    text: "HOD"
                },
                {
                    answerField: 'ehr_q10___30',
                    text: "Home Health Revenue Cycle"
                },
                {
                    answerField: 'ehr_q10___31',
                    text: "Hospice Billing"
                },
                {
                    answerField: 'ehr_q10___32',
                    text: "Identity"
                },
                {
                    answerField: 'ehr_q10___33',
                    text: "Interconnect"
                },
                {
                    answerField: 'ehr_q10___34',
                    text: "Kaleidoscope"
                },
                {
                    answerField: 'ehr_q10___35',
                    text: "Long Term Care"
                },
                {
                    answerField: 'ehr_q10___36',
                    text: "MyChart"
                },
                {
                    answerField: 'ehr_q10___37',
                    text: "Nurse Triage"
                },
                {
                    answerField: 'ehr_q10___38',
                    text: "Operational Database"
                },
                {
                    answerField: 'ehr_q10___39',
                    text: "OpTime"
                },
                {
                    answerField: 'ehr_q10___40',
                    text: "Physician Builder"
                },
                {
                    answerField: 'ehr_q10___41',
                    text: "Phoenix"
                },
                {
                    answerField: 'ehr_q10___42',
                    text: "Prelude"
                },
                {
                    answerField: 'ehr_q10___43',
                    text: "Radiant"
                },
                {
                    answerField: 'ehr_q10___44',
                    text: "Referrals"
                },
                {
                    answerField: 'ehr_q10___45',
                    text: "Rehab"
                },
                {
                    answerField: 'ehr_q10___46',
                    text: "Research"
                },
                {
                    answerField: 'ehr_q10___47',
                    text: "Resolute HB for Single Billing Office"
                },
                {
                    answerField: 'ehr_q10___48',
                    text: "Resolute Hospital Billing"
                },
                {
                    answerField: 'ehr_q10___49',
                    text: "Resolute PB for Single Billing Office"
                },
                {
                    answerField: 'ehr_q10___50',
                    text: "Resolute Professional Billing"
                },
                {
                    answerField: 'ehr_q10___51',
                    text: "Security and Access"
                },
                {
                    answerField: 'ehr_q10___52',
                    text: "Stork"
                },
                {
                    answerField: 'ehr_q10___53',
                    text: "Tapestry"
                },
                {
                    answerField: 'ehr_q10___54',
                    text: "Training, Environments and Documentation"
                },
                {
                    answerField: 'ehr_q10___55',
                    text: "Welcome"
                },
                {
                    answerField: 'ehr_q10___56',
                    text: "Willow Ambulatory"
                },
                {
                    answerField: 'ehr_q10___57',
                    text: "Willow Inpatient"
                },
                {
                    answerField: 'ehr_q10___58',
                    text: "Willow Inventory"
                },
                {
                    answerField: 'ehr_q10___59',
                    text: "Wisdom"
                },
                {
                    answerField: 'ehr_q10___60',
                    text: "SmartForms"
                },
                {
                    answerField: 'ehr_q10___61',
                    text: "Order Transmittal"
                }
            ]
        },
        {
            answerField: 'ehr_q10_1',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___1'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Anesthesia (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [
                {
                    answerField: 'ehr_q10_1___1',
                    text: 'Anesthesia Certification/Proficiency'
                },
                {
                    answerField: 'ehr_q10_1___2',
                    text: 'Anesthesia for the Clinically Trained Certification/Proficiency'
                },
                {
                    answerField: 'ehr_q10_1___3',
                    text: 'Anesthesia for the Curriculum-Trained Certification/Proficiency'
                },
                {
                    answerField: 'ehr_q10_1___4',
                    text: 'Physician Builder Anesthesia Certification/Proficiency'
                },
                {
                    answerField: 'ehr_q10_1___5',
                    text: 'OpTime and Anesthesia Curriculum Certification/Proficiency'
                },
                {
                    answerField: 'ehr_q10_1___6',
                    text: 'OpTime and Anesthesia Curriculum Certification/Proficiency for the Application Certified'
                },
                {
                    answerField: 'ehr_q10_1___7',
                    text: 'Surgical Training Environment Build Certification/Proficiency'
                },
            ]
        },
        {
            answerField: 'ehr_q10_2',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___2'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>ASAP (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [
                {
                    answerField: 'ehr_q10_2___1',
                    text: 'ASAP Emergency Department Certification/Proficiency'
                },
                {
                    answerField: 'ehr_q10_2___2',
                    text: 'ASAP Emergency Department for the Clinically Trained Certification/Proficiency'
                },
                {
                    answerField: 'ehr_q10_2___3',
                    text: 'ASAP Curriculum Certification/Proficiency'
                },
                {
                    answerField: 'ehr_q10_2___4',
                    text: 'ASAP Curriculum Certification/Proficiency for Application Certified'
                },
                {
                    answerField: 'ehr_q10_2___5',
                    text: 'ASAP Training Environment Build Certification/Proficiency'
                }
            ]
        },
        {
            answerField: 'ehr_q10_3',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___3'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Beacon (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [
                {
                    answerField: 'ehr_q10_3___1',
                    text: 'Beacon Certification/Proficiency'
                },
                {
                    answerField: 'ehr_q10_3___2',
                    text: 'Beacon Curriculum Certification/Proficiency'
                },
                {
                    answerField: 'ehr_q10_3___3',
                    text: 'Beacon Curriculum Certification/Proficiency for Application Certified'
                },
                {
                    answerField: 'ehr_q10_3___4',
                    text: 'Ancillary Clinicals Training Environment Build Certification/Proficiency'
                }
            ]
        }, {
            answerField: 'ehr_q10_4',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___4'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Beaker (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_4___1',
                text: 'Beaker Anatomic Pathology Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_4___2',
                text: 'Beaker Clinical Pathology Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_4___3',
                text: 'Beaker Anatomic Pathology for the Clinically Pathology-Trained Certification'
            }, {
                answerField: 'ehr_q10_4___4',
                text: 'Beaker Clinical Pathology for the Clinically-Trained Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_4___5',
                text: 'Pathologist Builder Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_4___6',
                text: 'Beaker Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_4___7',
                text: 'Beaker Curriculum Certification/Proficiency for the Anatomic Pathology'
            }, {
                answerField: 'ehr_q10_4___8',
                text: 'Beaker Curriculum Certification/Proficiency for the clinical Pathology Certified'
            }, {
                answerField: 'ehr_q10_4___9',
                text: 'Beaker Training Environment Build Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_5',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___5'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>BedTime (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_5___1',
                text: 'Grand Central Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_5___2',
                text: 'Grand Central for the Epic Trained Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_5___3',
                text: 'Grand Central and Prelude Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_5___4',
                text: 'Patient Access Training Environment Build Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_6',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___6'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Benefits Engine (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_6___1',
                text: 'Benefits Engine Basics Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_6___2',
                text: 'Benefits Engine Healthplan Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_6___3',
                text: 'Benefits Engine AP Claims Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_7',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___7'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Bones (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_7___1',
                text: 'Bones Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_8',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___8'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Bridges (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_8___1',
                text: 'Bridges Interface Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_9',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___9'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Bugsy (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_9___1',
                text: 'Bugsy Infection Control Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_9___2',
                text: 'International Bugsy Infection Control Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_10',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___10'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Caboodle (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_10___1',
                text: 'Caboodle Administration Certification'
            }, {
                answerField: 'ehr_q10_10___2',
                text: 'Caboodle Development Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_10___3',
                text: 'Caboodle-Clarity Development Certification/Proficiency for Data Model Trained'
            }, {
                answerField: 'ehr_q10_10___4',
                text: 'Caboodle Data Model Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_10___5',
                text: 'Caboodle Data Model Certification/Proficiency for the Data Model Certified'
            }, {
                answerField: 'ehr_q10_10___6',
                text: 'Access Data Model Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_10___7',
                text: 'Access Data Model Certification/Proficiency for the Data Model Certified'
            }, {
                answerField: 'ehr_q10_10___8',
                text: 'Clinical Data Model Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_10___9',
                text: 'Clinical Data Model for Physician Builders Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_10___10',
                text: 'Clinical Data Model Certification/Proficiency for the Data Model Certified'
            }, {
                answerField: 'ehr_q10_10___11',
                text: 'Revenue Data Model Certification/Proficiency for the Data Model Certified'
            },]
        }, {
            answerField: 'ehr_q10_11',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___11'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Cadence (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_11___1',
                text: 'Cadence Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_11___2',
                text: 'Cadence Certification/Proficiency (Accelerated)'
            }, {
                answerField: 'ehr_q10_11___3',
                text: 'Prelude Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_11___4',
                text: 'Referrals and Authorizations for the Cadence or EpicCare Ambulatory Certified Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_11___5',
                text: 'Eligibility Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_11___6',
                text: 'Eligibility for the Prelude Certified Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_11___7',
                text: 'Cadence and Prelude Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_11___8',
                text: 'Cadence and Prelude Curriculum Certification/Proficiency for the Application Administration Certified'
            }, {
                answerField: 'ehr_q10_11___9',
                text: 'Patient Access Training Environment Build Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_11___10',
                text: 'ARCR: Patient Access Revenue Cycle Readiness Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_12',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___12'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Care Everywhere (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_12___1',
                text: 'Care Everywhere for the Previously Certified Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_12___2',
                text: 'Care Everywhere Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_13',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___13'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Charge Router (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_13___1',
                text: 'Charge Router Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_14',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___14'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Chronicles (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_14___1',
                text: 'Chronicles Database Programmer Certification'
            }, {
                answerField: 'ehr_q10_14___2',
                text: 'Interconnect Programmer Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_14___3',
                text: 'Chronicles Install Utilities Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_14___4',
                text: 'Hyperspace VB Programmer Certification'
            },]
        }, {
            answerField: 'ehr_q10_15',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___15'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Claims (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_15___1',
                text: 'Resolute Professional Billing Claims Administration Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_15___2',
                text: 'Resolute Hospital Billing Claims Administration Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_15___3',
                text: 'Resolute Hospital Billing Claims Administration for the Hospital Billing, Home Health Billing or Hospice Billing Certified Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_15___4',
                text: 'Resolute Hospital Billing Claims Administration for Single Billing Office Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_15___5',
                text: 'Resolute Professional Billing Electronic Remittance Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_15___6',
                text: 'Resolute Hospital Billing Electronic Remittance Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_16',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___16'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Clinical Case Management (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_16___1',
                text: 'Clinical Case Management Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_17',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___17'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Cogito (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_17___1',
                text: 'Cogito Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_17___2',
                text: 'Cogito Certification/Proficiency for the Data Model Certified'
            }, {
                answerField: 'ehr_q10_17___3',
                text: 'Cogito Project Manager Certification'
            }, {
                answerField: 'ehr_q10_17___4',
                text: 'Cogito Project Manager Certification for the Data Model Certified'
            }, {
                answerField: 'ehr_q10_17___5',
                text: 'Cogito Tools Administration Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_17___6',
                text: 'Cogito Tools Administration Certification/Proficiency for the Data Model Certified'
            },]
        }, {
            answerField: 'ehr_q10_18',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___18'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Cogito Clarity (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_18___1',
                text: 'Clarity data Model Certification/Proficiency for the Data Model Certified'
            }, {
                answerField: 'ehr_q10_18___2',
                text: 'Access Data Model Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_18___3',
                text: 'Access Data Model Certification/Proficiency for the Data Model Certified'
            }, {
                answerField: 'ehr_q10_18___4',
                text: 'Clinical Data Model Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_18___5',
                text: 'Clinical Data Model for Physician Builders Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_18___6',
                text: 'Clinical Data Model Certification/Proficiency for the Data Model Certified'
            }, {
                answerField: 'ehr_q10_18___7',
                text: 'Revenue Data Model Certification/Proficiency for the Data Model Certified'
            },]
        }, {
            answerField: 'ehr_q10_19',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___19'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Cupid (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_19___1',
                text: 'Cupid Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_19___2',
                text: 'Cupid for the Radiant Certified Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_19___3',
                text: 'Cupid for the CLN251/252 Certified Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_19___4',
                text: 'Cupid for the Clinically Certified Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_19___5',
                text: 'Cupid Structured Reporting Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_19___6',
                text: 'Cupid Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_19___7',
                text: 'Cupid Curriculum Certification/Proficiency for the Application Certified'
            }, {
                answerField: 'ehr_q10_19___8',
                text: 'Radiant and Cupid Training Environment Build Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_20',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___20'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Data Courier (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_20___1',
                text: 'Data Courier Administration Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_21',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___21'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Dorothy (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_21___1',
                text: 'Dorothy Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_21___2',
                text: 'Dorothy for the Clinically Certified Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_21___3',
                text: 'Dorothy for the Clinically Certified (Accelerated) Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_21___4',
                text: 'Dorothy and comfort Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_21___5',
                text: 'Dorothy and Comfort Curriculum Certification/Proficiency for the Application Administration Certified'
            }, {
                answerField: 'ehr_q10_21___6',
                text: 'Dorothy and Comfort Training Environment Build Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_22',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___22'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Epic Client Systems Administration (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_22___1',
                text: 'Epic Client Systems Administration Hyperspace Certification'
            }, {
                answerField: 'ehr_q10_22___2',
                text: 'Epic Client Systems Administration – BLOB, Business Continuity Access, and Printing Certification'
            }, {
                answerField: 'ehr_q10_22___3',
                text: 'Epic Client Systems Administration – Care Everywhere Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_22___4',
                text: 'Epic Client Systems Administration Hyperspace Web, Interconnect, and System Pulse Certification.'
            },]
        }, {
            answerField: 'ehr_q10_23',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___23'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>EpicCare Ambulatory (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_23___1',
                text: 'EpicCare Ambulatory Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_23___2',
                text: 'EpicCare Ambulatory for the Clinically Certified Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_23___3',
                text: 'Order Transmittal Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_23___4',
                text: 'Epic for the Clinical Informaticist Certification'
            }, {
                answerField: 'ehr_q10_23___5',
                text: 'Clinical Content Builder Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_23___6',
                text: 'EpicCare Ambulatory Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_23___7',
                text: 'EpicCare Ambulatory Curriculum Certification/Proficiency for the Application Certified'
            }, {
                answerField: 'ehr_q10_23___8',
                text: 'EpicCare Ambulatory training Environment Build Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_24',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___24'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>EpicCare Inpatient (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_24___1',
                text: 'EpicCare Inpatient Clinical Documentation Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_24___2',
                text: 'EpicCare Inpatient Procedure Orders Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_24___3',
                text: 'EpicCare Inpatient Clinical Documentation for the Clinically Certified Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_24___4',
                text: 'EpicCare Inpatient Clinical Documentation for the Orders Certified Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_24___5',
                text: 'EpicCare Inpatient Procedure Orders for the Clin Doc Certified Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_24___6',
                text: 'EpicCare Inpatient Procedure Orders for the Clinically-Trained Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_24___7',
                text: 'Epic for the Clinical informaticist Certification'
            }, {
                answerField: 'ehr_q10_24___8',
                text: 'Clinical Content Builder Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_24___9',
                text: 'EpicCare Inpatient Clinical Documentation Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_24___10',
                text: 'EpicCare Inpatient Procedure Orders Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_24___11',
                text: 'EpicCare Inpatient Clinical Documentation Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_24___12',
                text: 'For the Application Certified'
            }, {
                answerField: 'ehr_q10_24___13',
                text: 'EpicCare Inpatient Procedure Orders Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_24___14',
                text: 'For the Application Certified'
            }, {
                answerField: 'ehr_q10_24___15',
                text: 'EpicCare Inpatient Training Environment Build Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_25',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___25'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>EpicCare Link (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_25___1',
                text: 'EpicCare Link Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_25___2',
                text: 'EpicCare Link for the HIM or Tapestry Certified Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_26',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___26'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Grand Central (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_26___1',
                text: 'Grand Central Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_26___2',
                text: 'Grand Central for the Epic trained Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_26___3',
                text: 'Prelude Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_26___4',
                text: 'Eligibility Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_26___5',
                text: 'Grand Central and Prelude Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_26___6',
                text: 'Grand Central and Prelude Curriculum Certification/Proficiency for the Application Administration Certified'
            }, {
                answerField: 'ehr_q10_26___7',
                text: 'Patient Access Training Environment Build Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_27',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___27'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Health Information Fundamentals (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_27___1',
                text: 'HIM Deficiency Tracking Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_27___2',
                text: 'HIM Hospital Coding Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_27___3',
                text: 'HIM release of Information Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_27___4',
                text: 'ARCR: Coding Revenue Cycle Readiness Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_27___5',
                text: 'HIM and Identity Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_27___6',
                text: 'HIM and Identity Curriculum Certification/Proficiency for the Application Administration Certified'
            }, {
                answerField: 'ehr_q10_27___7',
                text: 'HIM and Identity training Environment Build Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_28',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___28'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Healthy Planet (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_28___1',
                text: 'Healthy Planet Analytics and clinical Build Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_28___2',
                text: 'Healthy Planet Analytics and Clinical Build for the Clinically Certified Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_28___3',
                text: 'Healthy Planet Analytics and Quality Measures Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_28___4',
                text: 'Healthy Planet Analytics and Quality Measures for the Clinically Data Model Certified Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_29',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___29'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>HOD (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_29___1',
                text: 'Hospital Outpatient Documents for the Access Certified Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_29___2',
                text: 'Hospital Outpatient Departments for the Clinically Trained Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_30',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___30'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Home Health Revenue Cycle (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_30___1',
                text: 'Home Health Revenue Cycle (2019 Version Only) Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_30___2',
                text: 'Home Health Revenue Cycle Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_30___3',
                text: 'Home Health And Hospice Revenue Cycle Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_30___4',
                text: 'Home health And Hospice Revenue Cycle Curriculum Certification/Proficiency for the Application Administration Certified'
            }, {
                answerField: 'ehr_q10_30___5',
                text: 'Billing Training Environment Build Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_31',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___31'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Hospice Billing (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_31___1',
                text: 'Home Health And Hospice Revenue Cycle Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_31___2',
                text: 'Home health And Hospice Revenue Cycle Curriculum Certification/Proficiency for the Application Administration Certified'
            }, {
                answerField: 'ehr_q10_31___3',
                text: 'Billing Training Environment Build Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_32',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___32'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Identity (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_32___1',
                text: 'Identity Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_32___2',
                text: 'HIM and Identity Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_32___3',
                text: 'HIM and Identity Curriculum Certification/Proficiency for the Application administration Certified'
            }, {
                answerField: 'ehr_q10_32___4',
                text: 'HIM and Identity Training Environment Build Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_33',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___33'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Interconnect (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_33___1',
                text: 'Interconnect Programmer Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_34',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___34'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Kaleidoscope (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_34___1',
                text: 'Kaleidoscope Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_34___2',
                text: 'EpicCare Ambulatory Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_34___3',
                text: 'EpicCare Ambulatory Training Environment Build Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_35',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___35'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Long Term Care (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_35___1',
                text: 'Long Term Care Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_36',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___36'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>MyChart (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_36___1',
                text: 'MyChart Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_36___2',
                text: 'Epic Client Systems Administration – MyChart, MyChart Mobile, and EpicCare-Link Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_37',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___37'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Nurse Triage (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_37___1',
                text: 'Nurse Triage Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_37___2',
                text: 'EpicCare Ambulatory Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_37___3',
                text: 'EpicCare Ambulatory Training Environment Build Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_38',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___38'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Operational Database (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_38___1',
                text: 'Operational Database Administrator Certification (on Caché)'
            },]
        }, {
            answerField: 'ehr_q10_39',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___39'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>OpTime (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_39___1',
                text: 'OpTime Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_39___2',
                text: 'OpTime for the Clinically Trained Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_39___3',
                text: 'OpTime and Anesthesia Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_39___4',
                text: 'OpTime and Anesthesia Curriculum Certification/Proficiency for the Application Certified'
            }, {
                answerField: 'ehr_q10_39___5',
                text: 'Surgical Training Environment Build Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_40',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___40'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Physician Builder (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_40___1',
                text: 'Physician Builder Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_40___2',
                text: 'Physician Builder Analytics Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_40___3',
                text: 'Physician Builder Healthy Planet Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_40___4',
                text: 'Physician Power User Certification'
            }, {
                answerField: 'ehr_q10_40___5',
                text: 'Physician Builder Radiology Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_41',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___41'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Phoenix (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_41___1',
                text: 'Phoenix Transplant Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_41___2',
                text: 'Ancillary Clinicals Training Environment Build Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_42',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___42'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Prelude (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_42___1',
                text: 'Prelude Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_42___2',
                text: 'Eligibility Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_42___3',
                text: 'Eligibility for the Prelude Certified Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_42___4',
                text: 'Cadence and Prelude Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_42___5',
                text: 'Grand Central and Prelude Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_42___6',
                text: 'Grand Central and Prelude Curriculum Certification/Proficiency for the Application Administration Certified'
            }, {
                answerField: 'ehr_q10_42___7',
                text: 'Patient Access Training Environment Build Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_42___8',
                text: 'ARCR: Patient Access Revenue Cycle Readiness Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_43',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___43'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Radiant (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_43___1',
                text: 'Radiant Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_43___2',
                text: 'Radiant for the Cupid Certified Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_43___3',
                text: 'Radiant for the CLN 251/252 Certified Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_43___4',
                text: 'Radiant for the Clinically Certified Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_43___5',
                text: 'Radiant Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_43___6',
                text: 'Radiant Curriculum Certification/Proficiency for the Application Certified'
            }, {
                answerField: 'ehr_q10_43___7',
                text: 'Radiant and Cupid Training Environment Build Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_44',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___44'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Referrals (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_44___1',
                text: 'Referrals and Authorizations Certification/Proficiency for Tapestry Organizations'
            }, {
                answerField: 'ehr_q10_44___2',
                text: 'Referrals and Authorizations for the Cadence or EpicCare Ambulatory Certified Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_45',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___45'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Rehab (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_45___1',
                text: 'Inpatient Rehab Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_46',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___46'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Research (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_46___1',
                text: 'Chronicles Database Programmer Certification'
            }, {
                answerField: 'ehr_q10_46___2',
                text: 'Research Clinical Tools Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_46___3',
                text: 'Research Billing Tools Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_46___4',
                text: 'Research Informatics Core Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_46___5',
                text: 'Research Clinical for Research Billing Certified Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_46___6',
                text: 'Interconnect Programmer Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_46___7',
                text: 'Research Clinical for the Clinically CLN Certified Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_46___8',
                text: 'Research Clinical for the Major Clinical Certified Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_46___9',
                text: 'Research Billing for Research Clinical Certified Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_46___10',
                text: 'Research Billing Tools for the Revenue & Access Application Certified Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_46___11',
                text: 'EpicCare Ambulatory Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_46___12',
                text: 'Ancillary Clinicals Training Environment Build Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_46___13',
                text: 'Billing Training Environment Build Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_46___14',
                text: 'EpicCare Ambulatory Training Environment Build Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_47',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___47'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Resolute HB for Single Billing Office (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_47___1',
                text: 'Resolute Hospital Billing Administration including Single Billing Office Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_47___2',
                text: 'Single Billing Office for the Resolute for the Resolute Administration Certified Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_47___3',
                text: 'Resolute Hospital Billing Claims Administration for the Hospital Billing, Home Health Billing or Hospice Billing Certified Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_47___4',
                text: 'Resolute Hospital Billing Claims Administration for Single Billing Office Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_47___5',
                text: 'Resolute Hospital Billing Charging Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_47___6',
                text: 'Resolute Hospital Billing Electronic Remittance Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_47___7',
                text: 'Resolute Hospital Billing Expected Reimbursement Contacts Administration Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_47___8',
                text: 'ARCR: Resolute Hospital Billing Insurance Follow-up Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_47___9',
                text: 'ARCR: Resolute Hospital Billing: Claims and Billing Readiness Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_47___10',
                text: 'ARCR: Single Billing Office Payment Application Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_47___11',
                text: 'ARCR: Single Billing Office Self-pay Follow-up Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_47___12',
                text: 'Resolute Hospital Billing Curriculum for Single Billing Office Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_47___13',
                text: 'Resolute Hospital Billing Curriculum Certification/Proficiency for the Application Administration Certified'
            }, {
                answerField: 'ehr_q10_47___14',
                text: 'Billing Training Environment Build Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_47___15',
                text: 'ARCR: Resolute Hospital Billing Director for Single Billing Office Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_48',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___48'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Resolute Hospital Billing (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_48___1',
                text: 'Resolute Hospital Billing Administration Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_48___2',
                text: 'International Billing Administrator Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_48___3',
                text: 'Resolute Hospital Billing Claims Administration Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_48___4',
                text: 'Resolute Hospital Billing Claims Administration for the Hospital Billing, Home Health Billing or Hospice Billing Certified Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_48___5',
                text: 'Resolute Hospital Billing Charging Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_48___6',
                text: 'Resolute Hospital Billing Electronic Remittance Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_48___7',
                text: 'Resolute Hospital Billing Expected Reimbursement Contracts Administration Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_48___8',
                text: 'ARCR: Resolute Hospital Billing Insurance Follow-up Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_48___9',
                text: 'ARCR: Resolute Hospital Billing Payment Application Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_48___10',
                text: 'ARCR: Resolute Hospital Billing Self-pay Follow-up Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_48___11',
                text: 'ARCR: Resolute Hospital Billing: Claims and Billing Readiness Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_48___12',
                text: 'Resolute Hospital Billing Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_48___13',
                text: 'Resolute Hospital Billing Curriculum Certification/Proficiency for the Application Administration Certified'
            }, {
                answerField: 'ehr_q10_48___14',
                text: 'Billing Training Environment Build Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_48___15',
                text: 'ARCR: Resolute Hospital Billing Director Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_49',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___49'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Resolute PB for Single Billing Office (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_49___1',
                text: 'Benefits Engine Healthplan Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_49___2',
                text: 'ARCR: Resolute Professional Billing Claims and Billing Readiness Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_49___3',
                text: 'ARCR: Resolute Professional Billing Insurance Follow-up Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_49___4',
                text: 'ARCR: Resolute Professional Billing Revenue Integrity: Charge Capture and Coding Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_49___5',
                text: 'ARCR: Single Billing Office Payment Application Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_49___6',
                text: 'ARCR: Single Billing Office Self-pay Follow-up Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_49___7',
                text: 'ARCR: Resolute PB Billing for Single Billing Office Director Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_49___8',
                text: 'Resolute Professional Billing for Single Billing Office Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_49___9',
                text: 'Resolute Professional Billing for Single Billing Office Curriculum Certification/Proficiency for the Application Administration Certified'
            }, {
                answerField: 'ehr_q10_49___10',
                text: 'Billing Training Environment Build Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_50',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___50'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Resolute Professional Billing (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_50___1',
                text: 'Resolute Professional Billing Administration Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_50___2',
                text: 'Resolute Professional Billing Claims Administration Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_50___3',
                text: 'ARCR: Resolute PB Billing Office Director Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_50___4',
                text: 'Benefits Engine Basics Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_50___5',
                text: 'Resolute Professional Billing Electronic Remittance Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_50___6',
                text: 'Benefits Engine Healthplan Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_50___7',
                text: 'ARCR: Resolute Professional Billing Claims and Billing Readiness Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_50___8',
                text: 'ARCR: Resolute Professional Billing Insurance Follow-up Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_50___9',
                text: 'ARCR: Resolute Professional Billing Payment Application Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_50___10',
                text: 'ARCR: Resolute Professional Billing Revenue Integrity: Charge Capture and Coding Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_50___11',
                text: 'ARCR: Resolute Professional Billing Self-pay Follow-up Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_50___12',
                text: 'Resolute Professional Billing Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_50___13',
                text: 'Resolute Professional Billing Curriculum Certification/Proficiency for the Application Administration Certified'
            }, {
                answerField: 'ehr_q10_50___14',
                text: 'Billing Training Environment Build Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_51',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___51'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Security and Access (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_51___1',
                text: 'Security Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_52',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___52'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Stork (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_52___1',
                text: 'Stork Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_53',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___53'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Tapestry (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_53___1',
                text: 'Tapestry Accounts Payable Administration Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_53___2',
                text: 'Tapestry AP Claims Administration Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_53___3',
                text: 'Tapestry AP Claims and Contracts Administration Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_53___4',
                text: 'Tapestry CRM Administration Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_53___5',
                text: 'Tapestry Eligibility and Enrollment Administration Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_53___6',
                text: 'Tapestry Premium Billing Administration Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_53___7',
                text: 'Referrals and Authorizations Certification/Proficiency for Tapestry Organizations'
            }, {
                answerField: 'ehr_q10_53___8',
                text: 'Benefits Engine Basics Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_53___9',
                text: 'Benefits Engine Healthplan Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_53___10',
                text: 'Benefits Engine AP Claims Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_53___11',
                text: 'ARCR: Tapestry Readiness Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_53___12',
                text: 'Tapestry Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_53___13',
                text: 'Tapestry Curriculum Certification/Proficiency for the Application Administration Certified'
            }, {
                answerField: 'ehr_q10_53___14',
                text: 'Tapestry Training Environment Build Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_54',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___54'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Training, Environments and Documentation (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_54___1',
                text: 'ASAP Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_54___2',
                text: 'Beacon Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_54___3',
                text: 'Beaker Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_54___4',
                text: 'Cadence and Prelude Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_54___5',
                text: 'Cupid Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_54___6',
                text: 'Dorothy and Comfort Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_54___7',
                text: 'EpicCare Ambulatory Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_54___8',
                text: 'EpicCare Inpatient Clinical Documentation Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_54___9',
                text: 'Grand Central and Prelude Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_54___10',
                text: 'HIM and Identity Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_54___11',
                text: 'Home Health And Hospice Revenue Cycle Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_54___12',
                text: 'OpTime and Anesthesia Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_54___13',
                text: 'Radiant Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_54___14',
                text: 'Resolute Hospital Billing Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_54___15',
                text: 'Resolute Hospital Billing Curriculum for Single Billing Office Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_54___16',
                text: 'Resolute Professional Billing Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_54___17',
                text: 'Resolute Professional Billing for Single Billing Office Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_54___18',
                text: 'Tapestry Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_54___19',
                text: 'Willow Ambulatory Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_54___20',
                text: 'Willow Inpatient Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_54___21',
                text: 'Ancillary Clinicals Training Environment Build Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_54___22',
                text: 'ASAP Training Environment Build Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_54___23',
                text: 'Beaker Training Environment Build Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_54___24',
                text: 'Billing Training Environment Build Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_54___25',
                text: 'Dorothy and Comfort Training Environment Build Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_54___26',
                text: 'EpicCare Ambulatory Training Environment Build Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_54___27',
                text: 'EpicCare Inpatient Training Environment Build Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_54___28',
                text: 'HIM and Identity Training Environment Build Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_54___29',
                text: 'Patient Access Training Environment Build Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_54___30',
                text: 'Radiant and Cupid Training Environment Build Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_54___31',
                text: 'Surgical Training Environment Build Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_54___32',
                text: 'Tapestry Training Environment Build Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_54___33',
                text: 'Willow Training Environment Build Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_54___34',
                text: 'International Training Environment Build Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_55',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___55'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Welcome (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_55___1',
                text: 'Welcome Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_56',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___56'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Willow Ambulatory (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_56___1',
                text: 'Willow Ambulatory Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_56___2',
                text: 'Willow Ambulatory Certification/Proficiency for the Willow Inpatient Certified'
            }, {
                answerField: 'ehr_q10_56___3',
                text: 'Willow Ambulatory Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_56___4',
                text: 'Willow Ambulatory Curriculum Certification/Proficiency for the Application Certified'
            }, {
                answerField: 'ehr_q10_56___5',
                text: 'Willow Training Environment Build Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_57',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___57'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Willow Inpatient (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_57___1',
                text: 'Willow Inpatient Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_57___2',
                text: 'Willow Inpatient for the Clinically Trained Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_57___3',
                text: 'Willow Inpatient for Epic Pharmacists Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_57___4',
                text: 'Inpatient Pharmacist Clinical Tools Builder Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_57___5',
                text: 'SmartForms Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_57___6',
                text: 'Willow Inpatient Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_57___7',
                text: 'Willow Inpatient Curriculum Certification/Proficiency for the Application Certified'
            }, {
                answerField: 'ehr_q10_57___8',
                text: 'Willow Training Environment Build Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_58',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___58'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Willow Inventory (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_58___1',
                text: 'Willow Inventory Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_59',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___59'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Wisdom (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_59___1',
                text: 'Wisdom Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_59___2',
                text: 'EpicCare Ambulatory Curriculum Certification/Proficiency'
            }, {
                answerField: 'ehr_q10_59___3',
                text: 'EpicCare Ambulatory Training Environment Build Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_60',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___60'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>SmartForms (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_60___1',
                text: 'SmartForms Certification/Proficiency'
            },]
        }, {
            answerField: 'ehr_q10_61',
            shouldRender: (answers: UserAnswers) => answers['ehr_q10___61'] === '1' && answers['ehr_q3'] === '2' && new Set(['4','5']).has(answers['ehr_q1']),
            text: <span>Order Transmittal (Select all that apply):</span>,
            type: QuestionType.MultipleAnswer,
            options: [{
                answerField: 'ehr_q10_61___1',
                text: 'Order Transmittal Certification/Proficiency'
            },
            ]
        }
    ]
};

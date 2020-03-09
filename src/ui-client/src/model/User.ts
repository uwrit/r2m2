import { AnswerTypes } from "./ModelsState";

export type AnswerField =

    // User name
    'user_fname'          |
    'user_lname'          |
    'email'               |
    'user_complete'       |

    // EHR
    'ehr_complete'        |
    'ehr_q1'              |
    'ehr_q2'              |
    'ehr_q3'              |
    'ehr_q4'              |
    'ehr_q5'              |
    'ehr_q6a'             |
    'ehr_q6b'             |
    'ehr_q7'              |
    'ehr_q8'              |
    'ehr_q9'              |
    'ehr_q10'             


export interface BaseUserAnswers {
    [key: string]: AnswerTypes
}

export interface UserAnswersDTO extends BaseUserAnswers {}
export interface UserAnswers extends BaseUserAnswers {}

export interface UserDTOContainer {
    user: UserAnswersDTO;
}

export interface UserUpdateDTO {
    count: number;
}

// EHR
export const EHR_Q1: AnswerField  = 'ehr_q1';
export const EHR_Q2: AnswerField  = 'ehr_q2';
export const EHR_Q3: AnswerField  = 'ehr_q3';
export const EHR_Q4: AnswerField  = 'ehr_q4';
export const EHR_Q5: AnswerField  = 'ehr_q5';
export const EHR_Q6A: AnswerField = 'ehr_q6a';
export const EHR_Q6B: AnswerField = 'ehr_q6b';
export const EHR_Q7: AnswerField  = 'ehr_q7';
export const EHR_Q8: AnswerField  = 'ehr_q8';
export const EHR_Q9: AnswerField  = 'ehr_q9';
export const EHR_Q10: AnswerField = 'ehr_q10';

export const ehrFields: AnswerField[] = [
    EHR_Q1, EHR_Q2, EHR_Q3, EHR_Q4, EHR_Q5,
    EHR_Q6A, EHR_Q6B, EHR_Q7, EHR_Q8, EHR_Q9, EHR_Q10
];
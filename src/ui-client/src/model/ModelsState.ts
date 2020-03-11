import { UserAnswers, AnswerField } from "./User"

export interface BaseModel {
    completeField: AnswerField;
    name: string;
    shortName: string;
    questions: ModelQuestion[];
    render: (dispatch: any, answers: UserAnswers) => JSX.Element;
    selected?: boolean;
}

export interface ModelQuestion {
    answerField: AnswerField;
    options: ModelQuestionOption[];
    text: string | JSX.Element;

    type: QuestionType; // If 
                        //    SingleAnswer:   Renders normally and the clicked value is assigned to this question
                        //    MultipleAnswer: Use can select multiple and a 'Next' button is shown in lower right.
                        //                    ALSO: Each clicked value updates the [UserAnswers] with the [ModelQuestion].[AnswerField] + "___" + [ModelQuestionOption].[value] = 1, to mimic REDCap.
                        //                    EXAMPLE: [ModelQuestion].[AnswerField] = 'ehr_q4_1'
                        //                             [ModelQuestionOption].[value] = '1'
                        //                             If a user clicks this option, [UserAnswers] is updated with: answers['ehr_q4_1___1'] = '1'
 
    // Optional. If present, called on load. Must return an array of ModelQuestionOptions.
    getOptions?: (answers: UserAnswers) => ModelQuestionOption[];

    // Optional. If present, called on load. If True, Question is shown, else skipped.
    shouldRender?: (answers: UserAnswers) => boolean;
}

export interface ModelQuestionOption {
    freeText?: boolean;
    text: string | JSX.Element | JSX.Element[];
    value: LikertStringOneToFive | LikertStringOneToEight;
    children?: ModelQuestionOption[];
}

export interface ModelsState {
    all: BaseModel[];
    current?: BaseModel;
}

export type LikertStringOneToFive = '' | '1' | '2' | '3' | '4' | '5'
export type LikertStringOneToEight = LikertStringOneToFive | '6' | '7' | '8'
export enum FormState { NotStarted = '0', Started = '1', Complete = '2' }
export enum QuestionType { SingleAnswer = 0, MultipleAnswer = 0 }
export type AnswerTypes = LikertStringOneToFive | LikertStringOneToEight | FormState
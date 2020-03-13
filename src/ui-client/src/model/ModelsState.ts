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
                        //    MultipleAnswer: Users can select multiple and a 'Next' button is shown in lower right.
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
    answerField?: AnswerField;
    freeText?: boolean;
    text: string | JSX.Element | JSX.Element[];
    value: LikertStringOneToSixty;
}

export interface ModelsState {
    all: BaseModel[];
    current?: BaseModel;
}

export type LikertStringOneToSixty = '' | '1'  | '2'  | '3'  | '4'  | '5'  | '6'  | '7'  | '8'  | '9'  | '10'
                                        | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20'
                                        | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30'
                                        | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40'
                                        | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '48' | '49' | '50'
                                        | '51' | '52' | '53' | '54' | '55' | '56' | '57' | '58' | '59' | '60'
export enum FormState { NotStarted = '0', Started = '1', Complete = '2' }
export enum QuestionType { SingleAnswer = 0, MultipleAnswer = 0 }
export type AnswerTypes = LikertStringOneToSixty | FormState
import React from 'react';
import ModelOption from '../../BaseForms/ModelOption/ModelOption';
import { userSetAnswers, userUpdateServerData } from '../../../actions/user';
import { UserAnswers } from '../../../model/User';
import ModelTransitionForm from '../../BaseForms/ModelTransitionForm/ModelTransitionForm';
import { BaseModel, FormState, ModelQuestionOption, ModelQuestion, QuestionType, AnswerTypes } from '../../../model/ModelsState';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import NextStepBox from '../NextStepBox/NextStepBox';
import { setCurrentView } from '../../../actions/general';
import { AppView } from '../../../model/GeneralState';
import './ModelForm.css';

interface Props {
    answers: UserAnswers;
    dispatch: any;
    model: BaseModel;
}

interface State {
    questionIndex: number;
}

export class ModelForm extends React.PureComponent<Props,State> {
    private className = 'model-form';
    private startingState = 0;
    private preventTransition = false;

    public constructor(props: Props) {
        super(props);
        this.state = {
            questionIndex: this.startingState
        };
    }

    public render() {
        const c = this.className;
        const { answers, model } = this.props;
        const { questionIndex } = this.state;
        const cornerInfo = `${questionIndex} / ${model.questions.length}`;

        /*
         * If in starting state, show the model description and 'Get Started' button.
         */
        if (questionIndex === this.startingState) {
            const completionState = answers[model.completeField];
            const buttonText = 
                completionState === FormState.NotStarted ? 'Start Survey' :
                completionState === FormState.Started ? 'Continue Survey' :
                'Retake Survey';

            return (
                <ModelTransitionForm 
                    header={model.name}
                    content={
                        <div>
                            <div className={`${c}-desc`}>
                                {/* <div className={`${c}-desc-inner`}>{model.description}</div> */}
                                <div className={`${c}-desc-inner`}>{model.completeField}</div>
                            </div>
                            <button className={`maturity-model-button primary-green shadow`} onClick={this.handleGetStartedClick}>
                                {buttonText}
                                <FiChevronRight />
                            </button>
                            <button className={`maturity-model-button secondary`} onClick={this.handleReturnHomeClick}>
                                <FiChevronLeft />   
                                Go Back
                            </button>
                            <button className={`maturity-model-button secondarynext`} onClick={this.handleNextClick}>
                                Next
                                <FiChevronRight />
                            </button>
                        </div>
                    }
                />
            );
        }

        /*
         * If in ending state OR question shouldRender is false, congratulate the user and allow them to move to next survey.
         */
        if (questionIndex > model.questions.length) {
            return (
                <ModelTransitionForm 
                    header={`You've completed the ${model.name} survey!`}
                    content={<NextStepBox />}
                    onGoBackClick={this.handleGoBackClick}
                    onNextClick={this.handleNextClick}
                />
            );
        }

        const q = model.questions[questionIndex-1];
        const currAnswer = answers[q.answerField];
        return (
            <ModelTransitionForm 
                header={q.text}
                content={this.getOptions(q, answers).map((o,i) => (
                    <ModelOption 
                        key={i} data={o}
                        // onClick={this.handleAnswerClick} 
                        onClick={this.getAnswerClickHandler(q)}
                        selected={this.setIsSelected(q, o, answers, currAnswer)} 
                    />)
                )}
                cornerInfo={cornerInfo}
                onGoBackClick={this.handleGoBackClick}
                onNextClick={q.type === QuestionType.MultipleAnswer ? this.handleNextClick : undefined}
            />
        );
    }

    private setIsSelected = (q: ModelQuestion, o: ModelQuestionOption, answers: UserAnswers, currAnswer: AnswerTypes): boolean => {
        if (q.type === QuestionType.SingleAnswer) {
            return o.value === currAnswer;
        }
        const checkboxAnswer = `${q.answerField}___${o.value}`;
        return answers[checkboxAnswer] === '1';
    }

    private getOptions = (q: ModelQuestion, a: UserAnswers): ModelQuestionOption[] => {
        if (q.getOptions) {
            return q.getOptions(a);
        }
        return q.options;
    }

    private handleGetStartedClick = () => {
        this.setState({ questionIndex: this.startingState + 1 })
    }

    private getPreviousRelevantQuestion = (): number => {
        const { answers, model } = this.props;
        const { questionIndex } = this.state;

        /*
         * Move to previous relevant question.
         */
        let i = questionIndex-1;
        while (i > 0) {
            const prev = model.questions[i];
            /* 
             * If has a shouldRender() function, run and return this question if true.
             */
            if (prev.shouldRender) {
                if (prev.shouldRender(answers)) {
                    return i;
                }
                i--;
                continue;
            }
            /*
             * Else this question.
             */
            return i;
        }
        return 0;
    }

    private getFollowingRelevantQuestion = (): number => {
        const { answers, model } = this.props;
        const { questionIndex } = this.state;

        /*
         * Move to next relevant question.
         */
        let i = questionIndex+1;
        while (i < model.questions.length) {
            const next = model.questions[i];
            /* 
             * If has a shouldRender() function, run and return this question if true.
             */
            if (next.shouldRender) {
                if (next.shouldRender(answers)) {
                    return i;
                }
                i++;
                continue;
            }
            /*
             * Else return next question.
             */
            return i;
        }
        return model.questions.length-1;
    }

    private handleGoBackClick = () => {
        this.setState({ questionIndex: this.getPreviousRelevantQuestion() })
    }

    private handleReturnHomeClick = () => {
        const { dispatch } = this.props;
        dispatch(setCurrentView(AppView.Greeting))
    }

    private handleNextClick = () => {
        this.setState({ questionIndex: this.getFollowingRelevantQuestion() });
    }


    private getAnswerClickHandler = (q: ModelQuestion) => {
        const { dispatch, answers, model } = this.props;
        const { questionIndex } = this.state;
        const total = model.questions.length;
        const isFirst = questionIndex === 1;
        const isLast = questionIndex === total;
        const alreadyCompleted = answers[model.completeField] === FormState.Complete;

        const question = model.questions[questionIndex-1];
        if (q.type === QuestionType.MultipleAnswer) {
            return this.handleMultipleAnswerClick(value, isLast, alreadyCompleted);
        }
    }

    private handleAnswerClick = (value: ModelQuestionOption) => {
        const { dispatch, answers, model } = this.props;
        const { questionIndex } = this.state;
        const total = model.questions.length;
        const isFirst = questionIndex === 1;
        const isLast = questionIndex === total;
        const alreadyCompleted = answers[model.completeField] === FormState.Complete;

        const question = model.questions[questionIndex-1];
        /*
         * 
         */

        /* 
         * Update store with the answer.
         */
        // const question = model.questions[questionIndex-1];
        // const cpy = Object.assign({}, answers, {
        //     [question.answerField]: value,
        //     [model.completeField]: alreadyCompleted || isLast ? FormState.Complete : FormState.Started
        // }) as UserAnswers;
        // dispatch(userSetAnswers(cpy));
        /*
         * If this question accepts a single answer only, check what to render next.
         */
        if (question.type === QuestionType.SingleAnswer) {
            
            this.handleSingleAnswerClick(isFirst, isLast, total);
            return;
        }

        // this.handleMultipleAnswerClick(value, isLast, alreadyCompleted);
    }

    private handleMultipleAnswerClick = (value: ModelQuestionOption, isLast: boolean, alreadyCompleted: boolean) => {
        const { dispatch, answers, model } = this.props;

        if (value.freeText && value.answerField) {
            const cpy = Object.assign({}, answers, { 
                [value.answerField]: value.text,
                [model.completeField]: alreadyCompleted || isLast ? FormState.Complete : FormState.Started
            }) as UserAnswers;
            dispatch(userSetAnswers(cpy));
            return;
        }

        if (value.answerField) {
            const cpy = Object.assign({}, answers, { 
                [value.answerField]: '1',
                [model.completeField]: alreadyCompleted || isLast ? FormState.Complete : FormState.Started
            }) as UserAnswers;
            dispatch(userSetAnswers(cpy));
        }
        // return;
    }

    private handleSingleAnswerClick = (isFirst: boolean, isLast: boolean, total: number) => {
        const { dispatch, answers, model } = this.props;
        const { questionIndex } = this.state;
        const alreadyCompleted = answers[model.completeField] === FormState.Complete;

        const question = model.questions[questionIndex-1];

        const cpy = Object.assign({}, answers, {
            [question.answerField]: value,
            [model.completeField]: alreadyCompleted || isLast ? FormState.Complete : FormState.Started
        }) as UserAnswers;
        dispatch(userSetAnswers(cpy));
        /*
         * If the form is complete or started and there is more than one question, 
         * update data on the server.
         */
        if (isLast || (isFirst && total > 1)) {
            dispatch(userUpdateServerData());
        }
        
        this.setState({ questionIndex: this.getFollowingRelevantQuestion() });
    }
}
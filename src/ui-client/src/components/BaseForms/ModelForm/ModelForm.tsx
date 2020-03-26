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
    private startingQuestionIndex = -1;
    private enableTransition = true;

    public constructor(props: Props) {
        super(props);
        this.state = {
            questionIndex: this.startingQuestionIndex
        };
    }

    public render() {
        const c = this.className;
        const { answers, model } = this.props;
        const { questionIndex } = this.state;
        const cornerInfo = ((questionIndex/model.questions.length)*100).toFixed(0).toString() + '%';

        /*
         * If in starting state, show the model description and 'Get Started' button.
         */
        if (questionIndex === this.startingQuestionIndex) {
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
                                <div className={`${c}-desc-inner`}>{model.description}</div>
                            </div>
                            <button className={`maturity-model-button primary-green shadow`} onClick={this.handleGetStartedClick}>
                                {buttonText}
                                <FiChevronRight />
                            </button>
                            <button className={`maturity-model-button secondary prev`} onClick={this.handleReturnHomeClick}>
                                <FiChevronLeft />   
                                Go Back
                            </button>
                        </div>
                    }
                    enableTransition={this.enableTransition}
                />
            );
        }

        /*
         * If in ending state OR question shouldRender is false, congratulate the user and allow them to move to next survey.
         */
        if (questionIndex === model.questions.length) {
            return (
                <ModelTransitionForm 
                    header={`You've completed the ${model.name} survey!`}
                    content={<NextStepBox />}
                    onGoBackClick={this.handleGoBackClick}
                />
            );
        }

        const q = model.questions[questionIndex];
        const currAnswer = answers[q.answerField];
        return (
            <ModelTransitionForm 
                header={q.text}
                subheader={q.options.length > 9 ? 'Scroll down for more options' : undefined}
                content={this.getOptions(q, answers).map((o,i) => (
                    <ModelOption 
                        key={i} data={o}
                        changedHandler={this.getAnswerChangeHandler(o)}
                        clickHandler={this.getAnswerClickHandler(q, o)} 
                        selected={this.setIsSelected(q, o, answers, currAnswer)} 
                    />)
                )}
                cornerInfo={cornerInfo}
                onGoBackClick={this.handleGoBackClick}
                onNextClick={q.type === QuestionType.MultipleAnswer ? this.handleNextClick : undefined}
                enableTransition={this.enableTransition}
            />
        );
    }

    private setIsSelected = (q: ModelQuestion, o: ModelQuestionOption, answers: UserAnswers, currAnswer: AnswerTypes): boolean => {
        if (o.freeText) {
            return !!answers[o.answerField!];
        }
        if (q.type === QuestionType.SingleAnswer) {
            return o.value === currAnswer;
        }
        return answers[o.answerField!] === '1';
    }

    private getOptions = (q: ModelQuestion, a: UserAnswers): ModelQuestionOption[] => {
        if (q.getOptions) {
            return q.getOptions(a);
        }
        return q.options;
    }

    private handleGetStartedClick = () => {
        this.setState({ questionIndex: this.startingQuestionIndex + 1 })
    }

    private getPreviousRelevantQuestion = (answers: UserAnswers): number => {
        const { model } = this.props;
        const { questionIndex } = this.state;

        /*
         * Move to previous relevant question.
         */
        let i = questionIndex-1;
        while (i > this.startingQuestionIndex) {
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
        return this.startingQuestionIndex;
    }

    private getFollowingRelevantQuestion = (answers: UserAnswers): number => {
        const { model } = this.props;
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
        return model.questions.length;
    }

    private handleGoBackClick = () => {
        const { answers } = this.props;
        this.enableTransition = true;
        this.setState({ questionIndex: this.getPreviousRelevantQuestion(answers) })
    }

    private handleReturnHomeClick = () => {
        const { dispatch } = this.props;
        dispatch(setCurrentView(AppView.Greeting))
    }

    private handleNextClick = () => {
        const { answers } = this.props;
        this.enableTransition = true;
        this.setState({ questionIndex: this.getFollowingRelevantQuestion(answers) });
    }

    private noOpClickHandler = (value: any) => null;

    private getAnswerChangeHandler = (o: ModelQuestionOption) => {
        if (o.freeText) {
            return (value: any) => this.handleAnswerTextChange(o, value);
        }
        return undefined;
    }
    
    private getAnswerClickHandler = (q: ModelQuestion, o: ModelQuestionOption) => {
        if (o.freeText) {
            return this.noOpClickHandler;
        }
        if (q.type === QuestionType.SingleAnswer) {
            return this.handleSingleAnswerClick;
        }
        return (value: any) => this.handleMultipleAnswerClick(o);
    }
    
    private handleMultipleAnswerClick = (o: ModelQuestionOption) => {
        const { dispatch, answers, model } = this.props;
        const { questionIndex } = this.state;
        const total = model.questions.length;
        const isLast = questionIndex === total;
        const alreadyCompleted = answers[model.completeField] === FormState.Complete;
        
        const cpy = Object.assign({}, answers, { 
            [o.answerField!]: answers[o.answerField!] === '1' ? '0' : '1',
            [model.completeField]: alreadyCompleted || isLast ? FormState.Complete : FormState.Started
        }) as UserAnswers;
        this.enableTransition = false;
        dispatch(userSetAnswers(cpy));
    }

    private handleSingleAnswerClick = (value: any) => {
        const { dispatch, answers, model } = this.props;
        const { questionIndex } = this.state;
        const total = model.questions.length;
        const isFirst = questionIndex === 1;
        const isLast = questionIndex === total;
        const alreadyCompleted = answers[model.completeField] === FormState.Complete;
        const question = model.questions[questionIndex];

        this.enableTransition = true;
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
        
        this.setState({ questionIndex: this.getFollowingRelevantQuestion(cpy) });
    }

    private handleAnswerTextChange = (o: ModelQuestionOption, value: any) => {
        const { dispatch, answers } = this.props;
        this.enableTransition = false;
        const cpy = Object.assign({}, answers, { [o.answerField!]: value }) as UserAnswers;
        dispatch(userSetAnswers(cpy));
    }
}
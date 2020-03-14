import React from 'react';
import { UserState } from '../../model/UserState';
import BaseForm from '../BaseForms/BaseForm/BaseForm';
import { BaseModel, FormState } from '../../model/ModelsState';
import { FiChevronRight } from 'react-icons/fi';
import { modelSetCurrent } from '../../actions/model';
import { setCurrentView } from '../../actions/general';
import { AppView } from '../../model/GeneralState';
import { EHR } from '../../model/Models/EHR'
import { models } from '../../reducers/model';
import './Greeting.css';

interface Props {
    dispatch: any;
    models: BaseModel[];
    user: UserState;
}

export default class Greeting extends React.PureComponent<Props> {
    private className = 'greeting';

    public componentDidMount() {
        var mainInner = document.getElementsByClassName('main-inner');
        if (mainInner && mainInner[0]) {
            mainInner[0].scrollTop = 0;
        }
    }

    public render() {
        const c = this.className;
        const { user } = this.props;
        const newUser = this.isNewUser();
        let greetingText = `Hi ${user.answers.user_fname}! Welcome to the Research Resource Maturity Model survey tool!`;
        let buttonText = 'Get Started';
        let buttonFunc = this.handleGetStartedClick;

        if (!newUser) {
            greetingText = `Welcome back, ${user.answers.user_fname}!`;
            buttonText = 'Continue model surveys';
            buttonFunc = this.handleContinueSurveysClick;
        }

        return (
            <BaseForm
                header={greetingText}
                headerLarge={true}
                content={(
                    <div className={c}>

                        {/* Main text */}
                        <div className={`${c}-main-text`}>
                            <div>
                               <span>
                                </span>
                                <span> </span>
                               {/* <span 
                                    className={`${c}-selectable-text`} 
                                    onClick={this.handleSeeResultsClick}>
                                    view how your maturity scores compare to others
                                </span>
                               {!newUser &&
                               <span> or <span className={`${c}-selectable-text`} onClick={this.handleReselectModelsClick}>reselect your maturity models of interest</span> anytime</span>}
                               . */}
                            </div>

                            {/* Get started button */}
                            <button 
                                className={`maturity-model-button primary-green shadow ${c}-select-align`}
                                onClick={buttonFunc}>
                                {buttonText}
                                <FiChevronRight />
                            </button>
                        </div>
                    </div>
                )}
            />
        );
    }

    private handleSeeResultsClick = () => {
        const { dispatch } = this.props;
        dispatch(setCurrentView(AppView.Results));
    }

    private handleReselectModelsClick = () => {
        const { dispatch } = this.props;
        dispatch(setCurrentView(AppView.ModelSelection));
    } 

    private handleGetStartedClick = () => {
        const { dispatch } = this.props;
        // dispatch(setCurrentView(AppView.ModelSelection));
        dispatch(modelSetCurrent(EHR));
        dispatch(setCurrentView(AppView.ModelSurvey));
    }

    private handleContinueSurveysClick = () => {
        const { dispatch, models, user } = this.props;
        const selected = models.filter(m => m.selected);

        const remaining = selected.filter(m => user.answers[m.completeField] !== FormState.Complete);
        const next = remaining.length ? remaining[0] : selected[0];
        dispatch(modelSetCurrent(EHR));
        dispatch(setCurrentView(AppView.ModelSurvey));
    }

    private isNewUser = (): boolean => {
        const { models, user } = this.props;
        return !models.find(m => user.answers[m.completeField] !== FormState.NotStarted);
    }
}
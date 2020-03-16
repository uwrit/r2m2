import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../model/AppState';
import { ModelsState, FormState, BaseModel } from '../../../model/ModelsState';
import { UserState } from '../../../model/UserState';
import { modelSetCurrent } from '../../../actions/model';
import { setCurrentView } from '../../../actions/general';
import { userUpdateServerData, userSetAnswers } from '../../../actions/user';
import { AppView } from '../../../model/GeneralState';
import { FiChevronRight } from 'react-icons/fi';
import { EHR } from '../../../model/Models/EHR';
import { UserAnswers } from '../../../model/User';
import './NextStepBox.css';

interface OwnProps {
    
}
interface DispatchProps {
    dispatch: any;
}
interface StateProps {
    models: ModelsState;
    user: UserState;
}

type Props = StateProps & DispatchProps & OwnProps;

class NextStepBox extends React.PureComponent<Props> {
    private className = 'next-step-box';

    public render() {
        const { models, user } = this.props;
        const remaining = models.all.filter(m => m.selected && user.answers[m.completeField] !== FormState.Complete);
        const len = remaining.length;
        const c = this.className;

        return (
            <div className={c}>
                <div>Thank you for completing the survey.</div>
                <button className={'maturity-model-button primary-green shadow'} onClick={this.handleSurveyEndClick}>
                    Go Back Home
                    <FiChevronRight />
                </button>
            </div>
        );
    }

    public handleGoToNextSurveyClick = (model: BaseModel) => {
        const { dispatch } = this.props;
        dispatch(modelSetCurrent(model));
    }

    public handleSurveyEndClick = () => {
        const { dispatch, user } = this.props;
        const cpy = Object.assign({}, user.answers, {
            [EHR.completeField]: FormState.Complete
        }) as UserAnswers;
        dispatch(userSetAnswers(cpy));
        dispatch(setCurrentView(AppView.Greeting));
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        models: state.models,
        user: state.user
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        dispatch
    };
};

export default connect<StateProps, DispatchProps, OwnProps, AppState>
    (mapStateToProps, mapDispatchToProps)(NextStepBox);

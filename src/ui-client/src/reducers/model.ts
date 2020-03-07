import { MODEL_SET_CURRENT, ModelAction, MODEL_SET_SELECTED } from '../actions/model';
import { SET_CURRENT_VIEW, GeneralAction } from '../actions/general';
import { ModelsState } from '../model/ModelsState';
import { AppView } from '../model/GeneralState';
import { EHR } from '../model/Models/EHR';


export const defaultModelState = (): ModelsState => {
    return {
        all: [ EHR ]
    };
};

export const models = (state: ModelsState = defaultModelState(), action: ModelAction): ModelsState => {
    switch (action.type) {
        case MODEL_SET_CURRENT:
            return Object.assign({}, state, { current: action.model });
        case MODEL_SET_SELECTED:
            const mdls = state.all.slice();
            for (const index of action.indicies!) {
                mdls[index] = Object.assign({}, mdls[index], { selected: !mdls[index].selected });
            }
            return Object.assign({}, state, { all: mdls });
        case SET_CURRENT_VIEW:
            if ((action as GeneralAction).view! !== AppView.ModelSurvey) {
                return Object.assign({}, state, { current: undefined });
            }
    }
    return state;
};
import { 
    UserAction, 
    USER_SET_CREDENTIALS, 
    USER_SET_ANSWERS,
    USER_SET_ANSWER_SCORE,
    USER_SET_ANSWER_SCORES,
    USER_SET_ANSWER_SCORE_LOAD_STATE,
    USER_SET_IS_GUEST
} from "../actions/user";
import { UserState, AnswerScoreLoadState } from "../model/UserState";
import { BaseAnswerScore, AllAnswerScore } from "../model/Score";
import { FormState } from "../model/ModelsState";

export const defaultUserState = (): UserState => {
    return {
        answers: {

            // User name
            'user_fname': '',                     
            'user_lname': '',
            'email': '',
            'user_complete': FormState.NotStarted,

            // EHR
            'ehr_complete': FormState.NotStarted,
            'ehr_q1': '',
            'ehr_q2': '',
            'ehr_q3': '',
            'ehr_q4': '',
            'ehr_q5': '',
            'ehr_q6a': '',
            'ehr_q6b': '',
            'ehr_q7': '',
            'ehr_q8': '',
            'ehr_q9': '',
            'ehr_q10': ''
        },
        answersLoadState: AnswerScoreLoadState.NotLoaded,
        email: '',
        entryCode: '',
        guest: false,
        results: {
            all: allDefaultScore(),
            user: userDefaultScore(),
            n: 0
        }
    };
};

const userDefaultScore = (): BaseAnswerScore => {
    return {
        ehr: 0
    };
}

const allDefaultScore = (): AllAnswerScore => {
    return {
        ehr: 0,
        ehr_questions: {
            q1Stats: { mean: 0, min: 0, max: 0, median: 0 },
            q2Stats: { mean: 0, min: 0, max: 0, median: 0 },
            q3Stats: { mean: 0, min: 0, max: 0, median: 0 },
            q4Stats: { mean: 0, min: 0, max: 0, median: 0 },
            q5Stats: { mean: 0, min: 0, max: 0, median: 0 },
            q6AStats: { mean: 0, min: 0, max: 0, median: 0 },
            q6BStats: { mean: 0, min: 0, max: 0, median: 0 },
            q7Stats: { mean: 0, min: 0, max: 0, median: 0 },
            q8Stats: { mean: 0, min: 0, max: 0, median: 0 },
            q9Stats: { mean: 0, min: 0, max: 0, median: 0 },
            q10Stats: { mean: 0, min: 0, max: 0, median: 0 }
        }
    };
}

export const user = (state: UserState = defaultUserState(), action: UserAction): UserState => {
    switch (action.type) {
        case USER_SET_CREDENTIALS:
            return Object.assign({}, state, { email: action.email, entryCode: action.entryCode });
        case USER_SET_ANSWERS:
            return Object.assign({}, state, { 
                answers: {
                    ...state.answers,
                    ...action.answers 
                }
            });
        case USER_SET_ANSWER_SCORE:
            return Object.assign({}, state, { 
                results: { 
                        user: action.score,
                        all: state.results.all
                    } 
                } 
            );
        case USER_SET_ANSWER_SCORES:
            return Object.assign({}, state, { results: action.scores } );
        case USER_SET_ANSWER_SCORE_LOAD_STATE:
            return Object.assign({}, state, { answersLoadState: action.answerLoadState } );
        case USER_SET_IS_GUEST:
            return Object.assign({}, state, { guest: true });
    }
    return state;
};
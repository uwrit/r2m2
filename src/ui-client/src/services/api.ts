import Axios from 'axios';
import { UserAnswersDTO, UserUpdateDTO, UserAnswers } from '../model/User';
import { UserState } from '../model/UserState';
import { BaseAnswerScore, AnswerScores } from "../model/Score";
import { ehrFields } from "../model/User";

let serverState: UserAnswers = {};

/*
 * Request a login with email and entryCode. If successful,
 * returns data for user from REDCap.
 */
export const login = async (email: string, entryCode: string): Promise<UserAnswers> => {
    const resp = await Axios.get('/api/user', {
        params: {
            email,
            entry_code: entryCode
        }
    });
    const dto = resp.data.user as UserAnswersDTO;
    const user = dtoToUser(dto);
    serverState = user;
    return user;
};

/*
 * Request current scores for the user.
 */
export const getUserAndAggregateScores = async (user: UserState): Promise<AnswerScores> => {
    const resp = await Axios.get('/api/scores', {
        params: {
            email: user.email,
            entry_code: user.entryCode
        }
    });

    return {
        user: calculateUserScores(user.answers),
        ...resp.data
    };
};

/*
 * Given the current UI state, check whether there are 
 * any changes compared to what is believed to be on the server.
 */
export const changed = (user: UserState): boolean => {
    for (const key of Object.keys(user.answers)) {
        if (serverState[key] !== user.answers[key]) {
            return true;
        }
    }
    return false;
};

/*
 * Given the current user answers, update the server with
 * the latest values after diffing.
 */
export const update = async (user: UserState): Promise<UserUpdateDTO> => {

    /*
     * Include only values that have been updated since
     * the last sync with the server.
     */
    const diff: UserAnswers = {};
    for (const key of Object.keys(user.answers)) {
        if (serverState[key] !== user.answers[key]) {
            diff[key] = user.answers[key];
        }
    }
    
    /*
     * Update the server.
     */
    const resp = await Axios.post('/api/user/answers', {
        email: user.email,
        entry_code: user.entryCode,
        answers: diff
    });

    /*
     * If the call succeeded, update the serverState properties.
     */
    for (const key of Object.keys(diff)) {
        serverState[key] = diff[key];
    }

    return resp.data as UserUpdateDTO;
};

/*
 * Given a REDCap-based dictionary user object, return it back
 * as a [UserAnswers] object. The DTO and Model are currently identical, but 
 * in the future if they aren't use thus function to transform them.
 */
const dtoToUser = (dto: UserAnswersDTO): UserAnswers => {
    return dto;
};

export const calculateUserScores = (user: UserAnswers): BaseAnswerScore => {
    const maxFive  = 5.0;
    const maxSix   = 6.0;
    const maxSeven = 7.0;
    const valElseZero = (val:string) => val !== '' ? parseFloat(val) : 0;
    const ehrSum = sum(validate((ehrFields.map(f => user[f]))));
    
    return {
        ehr: ehrSum / (ehrFields.length * maxFive)
    };
};

const sum = (vals: number[]): number => vals.reduce((a,b) => a + b, 0);
const validate = (vals: string[]): number[] => vals.filter(v => v !== '').map(v => parseFloat(v));
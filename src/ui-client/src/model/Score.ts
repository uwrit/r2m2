export interface EHRQuestionScore {
    q1Stats : AnswerStats;
    q2Stats : AnswerStats;
    q3Stats : AnswerStats;
    q4Stats : AnswerStats;
    q5Stats : AnswerStats;
    q6AStats: AnswerStats;
    q6BStats: AnswerStats;
    q7Stats : AnswerStats;
    q8Stats : AnswerStats;
    q9Stats : AnswerStats;
    q10Stats: AnswerStats;
}

export interface BaseAnswerScore {
    ehr: number;
}

export interface AllAnswerScore extends BaseAnswerScore {
    ehr_questions: EHRQuestionScore;
}

export interface AnswerStats {
    mean: number;
    min: number;
    max: number;
    median: number;
}

export interface AnswerScoresDTO {
    all: AllAnswerScore;
    n: number;
}

export interface AnswerScores extends AnswerScoresDTO {
    user: BaseAnswerScore;
}
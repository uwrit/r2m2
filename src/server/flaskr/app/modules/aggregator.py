import os
import sys

from .fields import *
from statistics import median

# Models
ehr           = 'ehr'
ehr_questions = 'ehr_questions'

#EHR Questions
ehr_q1   = 'ehr_q1'
ehr_q2   = 'ehr_q2'
ehr_q3   = 'ehr_q3'
ehr_q4   = 'ehr_q4'
ehr_q5   = 'ehr_q5'
ehr_q6a  = 'ehr_q6a'
ehr_q6b  = 'ehr_q6b'
ehr_q7   = 'ehr_q7'
ehr_q8   = 'ehr_q8'
ehr_q9   = 'ehr_q9'
ehr_q10  = 'ehr_q10'

# Stats
q1Stats  = 'q1Stats'
q2Stats  = 'q2Stats'
q3Stats  = 'q3Stats'
q4Stats  = 'q4Stats'
q5Stats  = 'q5Stats'
q6AStats = 'q6AStats'
q6BStats = 'q6BStats'
q7Stats  = 'q7Stats'
q8Stats  = 'q8Stats'
q9Stats  = 'q9Stats'
q10Stats = 'q10Stats'

def get_user_score(user):

    score = {}
    max_five  = 5.0
    max_six   = 6.0
    max_seven = 7.0

    score[ehr] = sum([ float(user[field]) for field in ehr_fields if user[field].isdigit() ]) / (len(ehr_fields) * max_five) if user[EHR_COMPLETE] == '2' else None

    score[ehr_questions] = {}
    score[ehr_questions][ehr_q1]  = float(user[EHR_Q1]) / max_five if user[EHR_Q1].isdigit() else None if user[EHR_COMPLETE] == '2' else None
    score[ehr_questions][ehr_q2]  = float(user[EHR_Q2]) / max_five if user[EHR_Q2].isdigit() else None if user[EHR_COMPLETE] == '2' else None
    score[ehr_questions][ehr_q3]  = float(user[EHR_Q3]) / max_five if user[EHR_Q3].isdigit() else None if user[EHR_COMPLETE] == '2' else None
    score[ehr_questions][ehr_q4]  = float(user[EHR_Q4]) / max_five if user[EHR_Q4].isdigit() else None if user[EHR_COMPLETE] == '2' else None
    score[ehr_questions][ehr_q5]  = float(user[EHR_Q5]) / max_five if user[EHR_Q5].isdigit() else None if user[EHR_COMPLETE] == '2' else None
    score[ehr_questions][ehr_q6a] = float(user[EHR_Q6A]) / max_five if user[EHR_Q6A].isdigit() else None if user[EHR_COMPLETE] == '2' else None
    score[ehr_questions][ehr_q6b] = float(user[EHR_Q6B]) / max_five if user[EHR_Q6B].isdigit() else None if user[EHR_COMPLETE] == '2' else None
    score[ehr_questions][ehr_q7]  = float(user[EHR_Q7]) / max_five if user[EHR_Q7].isdigit() else None if user[EHR_COMPLETE] == '2' else None
    score[ehr_questions][ehr_q8]  = float(user[EHR_Q8]) / max_five if user[EHR_Q8].isdigit() else None if user[EHR_COMPLETE] == '2' else None
    score[ehr_questions][ehr_q9]  = float(user[EHR_Q9]) / max_five if user[EHR_Q9].isdigit() else None if user[EHR_COMPLETE] == '2' else None
    score[ehr_questions][ehr_q10] = float(user[EHR_Q10]) / max_five if user[EHR_Q10].isdigit() else None if user[EHR_COMPLETE] == '2' else None

    return score

def aggregate(all):

    agg_score  = {}
    all_scores = [ get_user_score(v) for k,v in all.items() if v != None ]
    ehr_question_scores = [ v[ehr_questions] for v in all_scores ]

    agg_score[ehr]  = __get_aggregate_score(all_scores, ehr)

    agg_score[ehr_questions] = {}
    agg_score[ehr_questions][q1Stats]   = __get_aggregate_stats(ehr_question_scores, ehr_q1)
    agg_score[ehr_questions][q2Stats]   = __get_aggregate_stats(ehr_question_scores, ehr_q2)
    agg_score[ehr_questions][q3Stats]   = __get_aggregate_stats(ehr_question_scores, ehr_q3)
    agg_score[ehr_questions][q4Stats]   = __get_aggregate_stats(ehr_question_scores, ehr_q4)
    agg_score[ehr_questions][q5Stats]   = __get_aggregate_stats(ehr_question_scores, ehr_q5)
    agg_score[ehr_questions][q6AStats]  = __get_aggregate_stats(ehr_question_scores, ehr_q6a)
    agg_score[ehr_questions][q6BStats]  = __get_aggregate_stats(ehr_question_scores, ehr_q6b)
    agg_score[ehr_questions][q7Stats]   = __get_aggregate_stats(ehr_question_scores, ehr_q7)
    agg_score[ehr_questions][q8Stats]   = __get_aggregate_stats(ehr_question_scores, ehr_q8)
    agg_score[ehr_questions][q9Stats]   = __get_aggregate_stats(ehr_question_scores, ehr_q9)
    agg_score[ehr_questions][q10Stats]  = __get_aggregate_stats(ehr_question_scores, ehr_q10)

    return agg_score, len(all_scores)

def __get_aggregate_score(scores, key):

    valid = [ score[key] for score in scores if score[key] != None ]
    len_valid = len(valid)
    if len_valid > 0:
        return sum(valid) / len_valid
    return 0.0

def __get_aggregate_stats(scores, key):

    stats = {}
    valid = [ score[key] for score in scores if score[key] != None ]
    len_valid = len(valid)
    if len_valid > 0:
        stats['mean']   = sum(valid) / len_valid
        stats['min']    = min(valid)
        stats['max']    = max(valid)
        stats['median'] = median(valid)
        return stats
    return 0.0
import { AnswerTypes } from "./ModelsState";

export type AnswerField =

    /* 
     * User
     */
    'user_fname'          |
    'user_lname'          |
    'email'               |
    'user_complete'       |

    /* 
     * EHR
     */
    'ehr_complete'        |

    // EHR Use
    'ehr_q1'              |

    // EHR System
    'ehr_q2'              |
    'ehr_q2___1'          |
    'ehr_q2___2'          |
    'ehr_q2___3'          |
    'ehr_q2___4'          |
    'ehr_q2___5'          |
    'ehr_q2___6'          |
    'ehr_q2___7'          |
    'ehr_q2_1'            |

    // Research Activity in EHR
    'ehr_q3'              |

    // Research Activities in EHR
    'ehr_q4'              |
    'ehr_q4___1'          |
    'ehr_q4___2'          |
    'ehr_q4___3'          |
    'ehr_q4___4'          |
    'ehr_q4___5'          |
    'ehr_q4___6'          |
    'ehr_q4___7'          |
    'ehr_q4___8'          |
    'ehr_q4_1'            |
    'ehr_q4_1___1'        |
    'ehr_q4_1___2'        |
    'ehr_q4_1___3'        |
    'ehr_q4_1___4'        |
    'ehr_q4_2'            |
    'ehr_q4_2___1'        |
    'ehr_q4_2___2'        |
    'ehr_q4_2___3'        |
    'ehr_q4_2___4'        |
    'ehr_q4_2___5'        |
    'ehr_q4_2___6'        |
    'ehr_q4_2___7'        |
    'ehr_q4_2___8'        |
    'ehr_q4_2___9'        |
    'ehr_q4_2___10'       |
    'ehr_q4_2___11'       |
    'ehr_q4_2___12'       |
    'ehr_q4_3'            |
    'ehr_q4_3___1'        |
    'ehr_q4_3___2'        |
    'ehr_q4_3___3'        |
    'ehr_q4_3___4'        |
    'ehr_q4_3___5'        |
    'ehr_q4_4'            |
    'ehr_q4_4___1'        |
    'ehr_q4_4___2'        |
    'ehr_q4_4___3'        |
    'ehr_q4_4___4'        |
    'ehr_q4_4___5'        |
    'ehr_q4_4___6'        |
    'ehr_q4_4___7'        |
    'ehr_q4_4___8'        |
    'ehr_q4_5'            |
    'ehr_q4_5___1'        |
    'ehr_q4_5___2'        |
    'ehr_q4_5___3'        |
    'ehr_q4_5___4'        |
    'ehr_q4_5_1___1'      |
    'ehr_q4_5_1___2'      |
    'ehr_q4_5_1___3'      |
    'ehr_q4_5_1___4'      |
    'ehr_q4_5_2___1'      |
    'ehr_q4_5_2___2'      |
    
    // Staffing Model
    'ehr_q5'              |

    // Individuals in IT that support Research
    'ehr_q6a'             |

    // Individuals in institution that support Research
    'ehr_q6b'             |

    // Avg % effort in EHR
    'ehr_q7'              |

    // Embedded Research EHR
    'ehr_q8'              |
    'ehr_q8___1'          |
    'ehr_q8___2'          |
    'ehr_q8___3'          |


    // Dedicated Research EHR
    'ehr_q9'              |
    'ehr_q9_1'            |
    'ehr_q9_2'            |
    'ehr_q9_3'            |

    // Epic Certifications
    'ehr_q10'             |
    'ehr_q10___1'         |
    'ehr_q10___2'         |
    'ehr_q10___3'         |
    'ehr_q10___4'         |
    'ehr_q10___5'         |
    'ehr_q10___6'         |
    'ehr_q10___7'         |
    'ehr_q10___8'         |
    'ehr_q10_1'           |
    'ehr_q10_1___1'       |
    'ehr_q10_1___2'       |
    'ehr_q10_1___3'       |
    'ehr_q10_1___4'       |
    'ehr_q10_1___5'       |
    'ehr_q10_1___6'       |
    'ehr_q10_1___7'       |
    'ehr_q10_2'           |
    'ehr_q10_2___1'       |
    'ehr_q10_2___2'       |
    'ehr_q10_2___3'       |
    'ehr_q10_2___4'       |
    'ehr_q10_2___5'       |
    'ehr_q10_3'           |
    'ehr_q10_3___1'       |
    'ehr_q10_3___2'       |
    'ehr_q10_3___3'       |
    'ehr_q10_3___4'


export interface BaseUserAnswers {
    [key: string]: AnswerTypes
}

export interface UserAnswersDTO extends BaseUserAnswers {}
export interface UserAnswers extends BaseUserAnswers {}

export interface UserDTOContainer {
    user: UserAnswersDTO;
}

export interface UserUpdateDTO {
    count: number;
}

// EHR
export const EHR_Q1: AnswerField  = 'ehr_q1';
// export const EHR_Q2: AnswerField  = 'ehr_q2';
// export const EHR_Q3: AnswerField  = 'ehr_q3';
// export const EHR_Q4: AnswerField  = 'ehr_q4';
// export const EHR_Q5: AnswerField  = 'ehr_q5';
// export const EHR_Q6A: AnswerField = 'ehr_q6a';
// export const EHR_Q6B: AnswerField = 'ehr_q6b';
// export const EHR_Q7: AnswerField  = 'ehr_q7';
// export const EHR_Q8: AnswerField  = 'ehr_q8';
// export const EHR_Q9: AnswerField  = 'ehr_q9';
// export const EHR_Q10: AnswerField = 'ehr_q10';

// export const ehrFields: AnswerField[] = [
//     EHR_Q1, EHR_Q2, EHR_Q3, EHR_Q4, EHR_Q5,
//     EHR_Q6A, EHR_Q6B, EHR_Q7, EHR_Q8, EHR_Q9, EHR_Q10
// ];
export const ehrFields: AnswerField[] = [ EHR_Q1 ];
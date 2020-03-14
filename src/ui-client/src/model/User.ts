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
    'ehr_q10_3___4'       |
    'ehr_q10_5'     |
    'ehr_q10_5___1'     |
    'ehr_q10_5___2'     |
    'ehr_q10_5___3'     |
    'ehr_q10_5___4'     |
    'ehr_q10_5___5'     |
    'ehr_q10_5___6'     |
    'ehr_q10_5___7'     |
    'ehr_q10_5___8'     |
    'ehr_q10_5___9'     |
    'ehr_q10_5___10'     |
    'ehr_q10_6'     |
    'ehr_q10_6___1'     |
    'ehr_q10_6___2'     |
    'ehr_q10_7'     |
    'ehr_q10_7___1'     |
    'ehr_q10_8'     |
    'ehr_q10_8___1'     |
    'ehr_q10_8___2'     |
    'ehr_q10_8___3'     |
    'ehr_q10_8___4'     |
    'ehr_q10_9'     |
    'ehr_q10_9___1'     |
    'ehr_q10_9___2'     |
    'ehr_q10_9___3'     |
    'ehr_q10_9___4'     |
    'ehr_q10_9___5'     |
    'ehr_q10_9___6'     |
    'ehr_q10_10'     |
    'ehr_q10_10___1'     |
    'ehr_q10_11'     |
    'ehr_q10_11___1'     |
    'ehr_q10_11___2'     |
    'ehr_q10_11___3'     |
    'ehr_q10_11___4'     |
    'ehr_q10_11___5'     |
    'ehr_q10_11___6'     |
    'ehr_q10_12'     |
    'ehr_q10_12___1'     |
    'ehr_q10_12___2'     |
    'ehr_q10_12___3'     |
    'ehr_q10_12___4'     |
    'ehr_q10_12___5'     |
    'ehr_q10_12___6'     |
    'ehr_q10_12___7'     |
    'ehr_q10_13'     |
    'ehr_q10_13___1'     |
    'ehr_q10_13___2'     |
    'ehr_q10_13___3'     |
    'ehr_q10_13___4'     |
    'ehr_q10_13___5'     |
    'ehr_q10_13___6'     |
    'ehr_q10_13___7'     |
    'ehr_q10_13___8'     |
    'ehr_q10_14'     |
    'ehr_q10_14___1'     |
    'ehr_q10_15'     |
    'ehr_q10_15___1'     |
    'ehr_q10_15___2'     |
    'ehr_q10_15___3'     |
    'ehr_q10_15___4'     |
    'ehr_q10_15___5'     |
    'ehr_q10_15___6'     |
    'ehr_q10_16'     |
    'ehr_q10_16___1'     |
    'ehr_q10_16___2'     |
    'ehr_q10_16___3'     |
    'ehr_q10_16___4'     |
    'ehr_q10_17'     |
    'ehr_q10_17___1'     |
    'ehr_q10_17___2'     |
    'ehr_q10_17___3'     |
    'ehr_q10_17___4'     |
    'ehr_q10_17___5'     |
    'ehr_q10_17___6'     |
    'ehr_q10_17___7'     |
    'ehr_q10_17___8'     |
    'ehr_q10_18'     |
    'ehr_q10_18___1'     |
    'ehr_q10_18___2'     |
    'ehr_q10_18___3'     |
    'ehr_q10_18___4'     |
    'ehr_q10_18___5'     |
    'ehr_q10_18___6'     |
    'ehr_q10_18___7'     |
    'ehr_q10_18___8'     |
    'ehr_q10_18___9'     |
    'ehr_q10_18___10'     |
    'ehr_q10_18___11'     |
    'ehr_q10_18___12'     |
    'ehr_q10_18___13'     |
    'ehr_q10_18___14'     |
    'ehr_q10_18___15'     |
    'ehr_q10_19'     |
    'ehr_q10_19___1'     |
    'ehr_q10_19___2'     |
    'ehr_q10_20'     |
    'ehr_q10_20___1'     |
    'ehr_q10_20___2'     |
    'ehr_q10_20___3'     |
    'ehr_q10_20___4'     |
    'ehr_q10_20___5'     |
    'ehr_q10_20___6'     |
    'ehr_q10_20___7'     |
    'ehr_q10_21'     |
    'ehr_q10_21___1'     |
    'ehr_q10_21___2'     |
    'ehr_q10_21___3'     |
    'ehr_q10_21___4'     |
    'ehr_q10_21___5'     |
    'ehr_q10_21___6'     |
    'ehr_q10_21___7'     |
    'ehr_q10_22'     |
    'ehr_q10_22___1'     |
    'ehr_q10_22___2'     |
    'ehr_q10_22___3'     |
    'ehr_q10_22___4'     |
    'ehr_q10_23'     |
    'ehr_q10_23___1'     |
    'ehr_q10_23___2'     |
    'ehr_q10_24'     |
    'ehr_q10_24___1'     |
    'ehr_q10_24___2'     |
    'ehr_q10_24___3'     |
    'ehr_q10_24___4'     |
    'ehr_q10_24___5'     |
    'ehr_q10_25'     |
    'ehr_q10_25___1'     |
    'ehr_q10_25___2'     |
    'ehr_q10_25___3'     |
    'ehr_q10_26'     |
    'ehr_q10_26___1'     |
    'ehr_q10_26___2'     |
    'ehr_q10_26___3'     |
    'ehr_q10_26___4'     |
    'ehr_q10_27'     |
    'ehr_q10_27___1'     |
    'ehr_q10_28'     |
    'ehr_q10_28___1'     |
    'ehr_q10_28___2'     |
    'ehr_q10_28___3'     |
    'ehr_q10_29'     |
    'ehr_q10_29___1'     |
    'ehr_q10_30'     |
    'ehr_q10_30___1'     |
    'ehr_q10_30___2'     |
    'ehr_q10_31'     |
    'ehr_q10_31___1'     |
    'ehr_q10_31___2'     |
    'ehr_q10_31___3'     |
    'ehr_q10_32'     |
    'ehr_q10_32___1'     |
    'ehr_q10_33'     |
    'ehr_q10_33___1'     |
    'ehr_q10_33___2'     |
    'ehr_q10_33___3'     |
    'ehr_q10_33___4'     |
    'ehr_q10_33___5'     |
    'ehr_q10_34'     |
    'ehr_q10_34___1'     |
    'ehr_q10_34___2'     |
    'ehr_q10_34___3'     |
    'ehr_q10_34___4'     |
    'ehr_q10_34___5'     |
    'ehr_q10_35'     |
    'ehr_q10_35___1'     |
    'ehr_q10_35___2'     |
    'ehr_q10_36'     |
    'ehr_q10_36___1'     |
    'ehr_q10_36___2'     |
    'ehr_q10_36___3'     |
    'ehr_q10_36___4'     |
    'ehr_q10_36___5'     |
    'ehr_q10_36___6'     |
    'ehr_q10_36___7'     |
    'ehr_q10_36___8'     |
    'ehr_q10_37'     |
    'ehr_q10_37___1'     |
    'ehr_q10_37___2'     |
    'ehr_q10_37___3'     |
    'ehr_q10_37___4'     |
    'ehr_q10_37___5'     |
    'ehr_q10_37___6'     |
    'ehr_q10_37___7'     |
    'ehr_q10_38'     |
    'ehr_q10_38___1'     |
    'ehr_q10_38___2'     |
    'ehr_q10_39'     |
    'ehr_q10_39___1'     |
    'ehr_q10_40'     |
    'ehr_q10_40___1'     |
    'ehr_q10_40___2'     |
    'ehr_q10_40___3'     |
    'ehr_q10_40___4'     |
    'ehr_q10_40___5'     |
    'ehr_q10_40___6'     |
    'ehr_q10_40___7'     |
    'ehr_q10_40___8'     |
    'ehr_q10_40___9'     |
    'ehr_q10_40___10'     |
    'ehr_q10_40___11'     |
    'ehr_q10_40___12'     |
    'ehr_q10_40___13'     |
    'ehr_q10_40___14'     |
    'ehr_q10_41'     |
    'ehr_q10_41___1'     |
    'ehr_q10_41___2'     |
    'ehr_q10_41___3'     |
    'ehr_q10_41___4'     |
    'ehr_q10_41___5'     |
    'ehr_q10_41___6'     |
    'ehr_q10_41___7'     |
    'ehr_q10_41___8'     |
    'ehr_q10_41___9'     |
    'ehr_q10_41___10'     |
    'ehr_q10_41___11'     |
    'ehr_q10_41___12'     |
    'ehr_q10_41___13'     |
    'ehr_q10_41___14'     |
    'ehr_q10_41___15'     |
    'ehr_q10_42'     |
    'ehr_q10_42___1'     |
    'ehr_q10_42___2'     |
    'ehr_q10_42___3'     |
    'ehr_q10_42___4'     |
    'ehr_q10_42___5'     |
    'ehr_q10_42___6'     |
    'ehr_q10_42___7'     |
    'ehr_q10_42___8'     |
    'ehr_q10_42___9'     |
    'ehr_q10_42___10'     |
    'ehr_q10_42___11'     |
    'ehr_q10_42___12'     |
    'ehr_q10_42___13'     |
    'ehr_q10_42___14'     |
    'ehr_q10_42___15'     |
    'ehr_q10_43'     |
    'ehr_q10_43___1'     |
    'ehr_q10_43___2'     |
    'ehr_q10_43___3'     |
    'ehr_q10_43___4'     |
    'ehr_q10_43___5'     |
    'ehr_q10_43___6'     |
    'ehr_q10_43___7'     |
    'ehr_q10_43___8'     |
    'ehr_q10_43___9'     |
    'ehr_q10_43___10'     |
    'ehr_q10_44'     |
    'ehr_q10_44___1'     |
    'ehr_q10_44___2'     |
    'ehr_q10_44___3'     |
    'ehr_q10_44___4'     |
    'ehr_q10_44___5'     |
    'ehr_q10_44___6'     |
    'ehr_q10_44___7'     |
    'ehr_q10_44___8'     |
    'ehr_q10_44___9'     |
    'ehr_q10_44___10'     |
    'ehr_q10_44___11'     |
    'ehr_q10_44___12'     |
    'ehr_q10_44___13'     |
    'ehr_q10_44___14'     |
    'ehr_q10_45'     |
    'ehr_q10_45___1'     |
    'ehr_q10_46'     |
    'ehr_q10_46___1'     |
    'ehr_q10_47'     |
    'ehr_q10_47___1'     |
    'ehr_q10_47___2'     |
    'ehr_q10_47___3'     |
    'ehr_q10_47___4'     |
    'ehr_q10_47___5'     |
    'ehr_q10_47___6'     |
    'ehr_q10_47___7'     |
    'ehr_q10_47___8'     |
    'ehr_q10_47___9'     |
    'ehr_q10_47___10'     |
    'ehr_q10_47___11'     |
    'ehr_q10_47___12'     |
    'ehr_q10_47___13'     |
    'ehr_q10_47___14'     |
    'ehr_q10_48'     |
    'ehr_q10_48___1'     |
    'ehr_q10_48___2'     |
    'ehr_q10_48___3'     |
    'ehr_q10_48___4'     |
    'ehr_q10_48___5'     |
    'ehr_q10_48___6'     |
    'ehr_q10_48___7'     |
    'ehr_q10_48___8'     |
    'ehr_q10_48___9'     |
    'ehr_q10_48___10'     |
    'ehr_q10_48___11'     |
    'ehr_q10_48___12'     |
    'ehr_q10_48___13'     |
    'ehr_q10_48___14'     |
    'ehr_q10_48___15'     |
    'ehr_q10_48___16'     |
    'ehr_q10_48___17'     |
    'ehr_q10_48___18'     |
    'ehr_q10_48___19'     |
    'ehr_q10_48___20'     |
    'ehr_q10_48___21'     |
    'ehr_q10_48___22'     |
    'ehr_q10_48___23'     |
    'ehr_q10_48___24'     |
    'ehr_q10_48___25'     |
    'ehr_q10_48___26'     |
    'ehr_q10_48___27'     |
    'ehr_q10_48___28'     |
    'ehr_q10_48___29'     |
    'ehr_q10_48___30'     |
    'ehr_q10_48___31'     |
    'ehr_q10_48___32'     |
    'ehr_q10_48___33'     |
    'ehr_q10_48___34'     |
    'ehr_q10_49'     |
    'ehr_q10_49___1'     |
    'ehr_q10_50'     |
    'ehr_q10_50___1'     |
    'ehr_q10_50___2'     |
    'ehr_q10_50___3'     |
    'ehr_q10_50___4'     |
    'ehr_q10_50___5'     |
    'ehr_q10_51'     |
    'ehr_q10_51___1'     |
    'ehr_q10_51___2'     |
    'ehr_q10_51___3'     |
    'ehr_q10_51___4'     |
    'ehr_q10_51___5'     |
    'ehr_q10_51___6'     |
    'ehr_q10_51___7'     |
    'ehr_q10_51___8'     |
    'ehr_q10_52'     |
    'ehr_q10_52___1'     |
    'ehr_q10_53'     |
    'ehr_q10_53___1'     |
    'ehr_q10_53___2'     |
    'ehr_q10_53___3'     |
    'ehr_q10_54'     |
    'ehr_q10_54___1'     |
    'ehr_q10_55'     |
    'ehr_q10_55___1'     



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
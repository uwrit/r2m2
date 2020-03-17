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
    'ehr_q4_5'            |
    'ehr_q4_5___1'        |
    'ehr_q4_5___2'        |
    'ehr_q4_5___3'        |
    'ehr_q4_5_1'          |
    'ehr_q4_5_1___1'      |
    'ehr_q4_5_1___2'      |
    'ehr_q4_5_1___3'      |
    'ehr_q4_5_1___4'      |
    'ehr_q4_5_1___5'      |
    'ehr_q4_5_1___6'      |
    'ehr_q4_6'            |
    'ehr_q4_6___1'        |
    'ehr_q4_6___2'        |
    'ehr_q4_6___3'        |
    'ehr_q4_6___4'        |
    'ehr_q4_6___5'        |
    'ehr_q4_7'            |
    'ehr_q4_7___1'        |
    'ehr_q4_8'            |
    'ehr_q4_8___1'        |
    'ehr_q4_8___2'        |
    'ehr_q4_8___3'        |
    'ehr_q4_8___4'        |

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
    'ehr_q10___9'         |
    'ehr_q10___10'        |
    'ehr_q10___11'        |
    'ehr_q10___12'        |
    'ehr_q10___13'        |
    'ehr_q10___14'        |
    'ehr_q10___15'        |
    'ehr_q10___16'        |
    'ehr_q10___17'        |
    'ehr_q10___18'        |
    'ehr_q10___19'        |
    'ehr_q10___20'        |
    'ehr_q10___21'        |
    'ehr_q10___22'        |
    'ehr_q10___23'        |
    'ehr_q10___24'        |
    'ehr_q10___25'        |
    'ehr_q10___26'        |
    'ehr_q10___27'        |
    'ehr_q10___28'        |
    'ehr_q10___29'        |
    'ehr_q10___30'        |
    'ehr_q10___31'        |
    'ehr_q10___32'        |
    'ehr_q10___33'        |
    'ehr_q10___34'        |
    'ehr_q10___35'        |
    'ehr_q10___36'        |
    'ehr_q10___37'        |
    'ehr_q10___38'        |
    'ehr_q10___39'        |
    'ehr_q10___40'        |
    'ehr_q10___41'        |
    'ehr_q10___42'        |
    'ehr_q10___43'        |
    'ehr_q10___44'        |
    'ehr_q10___45'        |
    'ehr_q10___46'        |
    'ehr_q10___47'        |
    'ehr_q10___48'        |
    'ehr_q10___49'        |
    'ehr_q10___50'        |
    'ehr_q10___51'        |
    'ehr_q10___52'        |
    'ehr_q10___53'        |
    'ehr_q10___54'        |
    'ehr_q10___55'        |
    'ehr_q10___56'        |
    'ehr_q10___57'        |
    'ehr_q10___58'        |
    'ehr_q10___59'        |
    'ehr_q10___60'        |
    'ehr_q10___61'        |
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
    'ehr_q10_4'           |
    'ehr_q10_4___1'       |
    'ehr_q10_4___2'       |
    'ehr_q10_4___3'       |
    'ehr_q10_4___4'       |
    'ehr_q10_4___5'       |
    'ehr_q10_4___6'       |
    'ehr_q10_4___7'       |
    'ehr_q10_4___8'       |  
    'ehr_q10_4___9'       |
    'ehr_q10_5'           |
    'ehr_q10_5___1'       |
    'ehr_q10_5___2'       |
    'ehr_q10_5___3'       |
    'ehr_q10_5___4'       |
    'ehr_q10_6'           |
    'ehr_q10_6___1'       |
    'ehr_q10_6___2'       |
    'ehr_q10_6___3'       |
    'ehr_q10_7'           |
    'ehr_q10_7___1'       |
    'ehr_q10_8'           |
    'ehr_q10_8___1'       |
    'ehr_q10_9'           | 
    'ehr_q10_9___1'       |
    'ehr_q10_9___2'       |
    'ehr_q10_10'          |
    'ehr_q10_10___1'      |
    'ehr_q10_10___2'      |
    'ehr_q10_10___3'      |
    'ehr_q10_10___4'      |
    'ehr_q10_10___5'      |
    'ehr_q10_10___6'      |
    'ehr_q10_10___7'      | 
    'ehr_q10_10___8'      |
    'ehr_q10_10___9'      |
    'ehr_q10_10___10'     |
    'ehr_q10_10___11'     |
    'ehr_q10_11'          |
    'ehr_q10_11___1'      |
    'ehr_q10_11___2'      |
    'ehr_q10_11___3'      |
    'ehr_q10_11___4'      |
    'ehr_q10_11___5'      |
    'ehr_q10_11___6'      |
    'ehr_q10_11___7'      |
    'ehr_q10_11___8'      | 
    'ehr_q10_11___9'      |
    'ehr_q10_11___10'     |
    'ehr_q10_12'          |
    'ehr_q10_12___1'      |
    'ehr_q10_12___2'      |
    'ehr_q10_13'          |
    'ehr_q10_13___1'      |
    'ehr_q10_14'          |
    'ehr_q10_14___1'      |
    'ehr_q10_14___2'      |
    'ehr_q10_14___3'      |
    'ehr_q10_14___4'      |
    'ehr_q10_15'          |
    'ehr_q10_15___1'      |
    'ehr_q10_15___2'      |
    'ehr_q10_15___3'      | 
    'ehr_q10_15___4'      |
    'ehr_q10_15___5'      |
    'ehr_q10_15___6'      |
    'ehr_q10_16'          |
    'ehr_q10_16___1'      |
    'ehr_q10_17'          |
    'ehr_q10_17___1'      |
    'ehr_q10_17___2'      |
    'ehr_q10_17___3'      |
    'ehr_q10_17___4'      |
    'ehr_q10_17___5'      |
    'ehr_q10_17___6'      |
    'ehr_q10_18'          |
    'ehr_q10_18___1'      |
    'ehr_q10_18___2'      |
    'ehr_q10_18___3'      |
    'ehr_q10_18___4'      |
    'ehr_q10_18___5'      |
    'ehr_q10_18___6'      |
    'ehr_q10_18___7'      |
    'ehr_q10_19'          |
    'ehr_q10_19___1'      |
    'ehr_q10_19___2'      |
    'ehr_q10_19___3'      |
    'ehr_q10_19___4'      |
    'ehr_q10_19___5'      |
    'ehr_q10_19___6'      |
    'ehr_q10_19___7'      |
    'ehr_q10_19___8'      |
    'ehr_q10_20'          |
    'ehr_q10_20___1'      |
    'ehr_q10_21'          |
    'ehr_q10_21___1'      |
    'ehr_q10_21___2'      |
    'ehr_q10_21___3'      |
    'ehr_q10_21___4'      |
    'ehr_q10_21___5'      |
    'ehr_q10_21___6'      |
    'ehr_q10_22'          |
    'ehr_q10_22___1'      |
    'ehr_q10_22___2'      |
    'ehr_q10_22___3'      |
    'ehr_q10_22___4'      |
    'ehr_q10_23'          |
    'ehr_q10_23___1'      |
    'ehr_q10_23___2'      |
    'ehr_q10_23___3'      |
    'ehr_q10_23___4'      |
    'ehr_q10_23___5'      |
    'ehr_q10_23___6'      |
    'ehr_q10_23___7'      |
    'ehr_q10_23___8'      |
    'ehr_q10_24'          |
    'ehr_q10_24___1'      |
    'ehr_q10_24___2'      | 
    'ehr_q10_24___3'      | 
    'ehr_q10_24___4'      |
    'ehr_q10_24___5'      | 
    'ehr_q10_24___6'      |
    'ehr_q10_24___7'      |
    'ehr_q10_24___8'      | 
    'ehr_q10_24___9'      |
    'ehr_q10_24___10'     |
    'ehr_q10_24___11'     |
    'ehr_q10_24___12'     |
    'ehr_q10_24___13'     |
    'ehr_q10_24___14'     |
    'ehr_q10_24___15'     |
    'ehr_q10_25'          |
    'ehr_q10_25___1'      |
    'ehr_q10_25___2'      |
    'ehr_q10_26'          |
    'ehr_q10_26___1'      |
    'ehr_q10_26___2'      |
    'ehr_q10_26___3'      |
    'ehr_q10_26___4'      |
    'ehr_q10_26___5'      |
    'ehr_q10_26___6'      |
    'ehr_q10_26___7'      |
    'ehr_q10_27'          |
    'ehr_q10_27___1'      |
    'ehr_q10_27___2'      |
    'ehr_q10_27___3'      |
    'ehr_q10_27___4'      | 
    'ehr_q10_27___5'      |
    'ehr_q10_27___6'      |
    'ehr_q10_27___7'      |
    'ehr_q10_28'          |
    'ehr_q10_28___1'      |
    'ehr_q10_28___2'      | 
    'ehr_q10_28___3'      |
    'ehr_q10_28___4'      |
    'ehr_q10_29'          |
    'ehr_q10_29___1'      |
    'ehr_q10_29___2'      |
    'ehr_q10_30'          |
    'ehr_q10_30___1'      |
    'ehr_q10_30___2'      |
    'ehr_q10_30___3'      |
    'ehr_q10_30___4'      |
    'ehr_q10_30___5'      |
    'ehr_q10_31'          |
    'ehr_q10_31___1'      |
    'ehr_q10_31___2'      | 
    'ehr_q10_31___3'      | 
    'ehr_q10_32'          |
    'ehr_q10_32___1'      |
    'ehr_q10_32___2'      |
    'ehr_q10_32___3'      |
    'ehr_q10_32___4'      |
    'ehr_q10_33'          |
    'ehr_q10_33___1'      |
    'ehr_q10_34'          |
    'ehr_q10_34___1'      |
    'ehr_q10_34___2'      |
    'ehr_q10_34___3'      |
    'ehr_q10_35'          |
    'ehr_q10_35___1'      |
    'ehr_q10_36'          |
    'ehr_q10_36___1'      |
    'ehr_q10_36___2'      |
    'ehr_q10_37'          |
    'ehr_q10_37___1'      |
    'ehr_q10_37___2'      |
    'ehr_q10_37___3'      |
    'ehr_q10_38'          |
    'ehr_q10_38___1'      |
    'ehr_q10_39'          |
    'ehr_q10_39___1'      |
    'ehr_q10_39___2'      |
    'ehr_q10_39___3'      |
    'ehr_q10_39___4'      |
    'ehr_q10_39___5'      |
    'ehr_q10_40'          |
    'ehr_q10_40___1'      |
    'ehr_q10_40___2'      |
    'ehr_q10_40___3'      |
    'ehr_q10_40___4'      |
    'ehr_q10_40___5'      |
    'ehr_q10_41'          |
    'ehr_q10_41___1'      |
    'ehr_q10_41___2'      |
    'ehr_q10_42'          |
    'ehr_q10_42___1'      |
    'ehr_q10_42___2'      |
    'ehr_q10_42___3'      |
    'ehr_q10_42___4'      |
    'ehr_q10_42___5'      |
    'ehr_q10_42___6'      |
    'ehr_q10_42___7'      |
    'ehr_q10_42___8'      |
    'ehr_q10_43'          |
    'ehr_q10_43___1'      |
    'ehr_q10_43___2'      | 
    'ehr_q10_43___3'      |
    'ehr_q10_43___4'      |
    'ehr_q10_43___5'      | 
    'ehr_q10_43___6'      |
    'ehr_q10_43___7'      |
    'ehr_q10_44'          |
    'ehr_q10_44___1'      |
    'ehr_q10_44___2'      |
    'ehr_q10_45'          |
    'ehr_q10_45___1'      |
    'ehr_q10_46'          |
    'ehr_q10_46___1'      |
    'ehr_q10_46___2'      |
    'ehr_q10_46___3'      |
    'ehr_q10_46___4'      |
    'ehr_q10_46___5'      |
    'ehr_q10_46___6'      |
    'ehr_q10_46___7'      |
    'ehr_q10_46___8'      |
    'ehr_q10_46___9'      |
    'ehr_q10_46___10'     |
    'ehr_q10_46___11'     |
    'ehr_q10_46___12'     |
    'ehr_q10_46___13'     |
    'ehr_q10_46___14'     |
    'ehr_q10_47'          |
    'ehr_q10_47___1'      |
    'ehr_q10_47___2'      |
    'ehr_q10_47___3'      |
    'ehr_q10_47___4'      |
    'ehr_q10_47___5'      |
    'ehr_q10_47___6'      |
    'ehr_q10_47___7'      |
    'ehr_q10_47___8'      |
    'ehr_q10_47___9'      |
    'ehr_q10_47___10'     |
    'ehr_q10_47___11'     |
    'ehr_q10_47___12'     |
    'ehr_q10_47___13'     |
    'ehr_q10_47___14'     |
    'ehr_q10_47___15'     |
    'ehr_q10_48'          |
    'ehr_q10_48___1'      |
    'ehr_q10_48___2'      |
    'ehr_q10_48___3'      |
    'ehr_q10_48___4'      |
    'ehr_q10_48___5'      |
    'ehr_q10_48___6'      |
    'ehr_q10_48___7'      |
    'ehr_q10_48___8'      |
    'ehr_q10_48___9'      |
    'ehr_q10_48___10'     |
    'ehr_q10_48___11'     |
    'ehr_q10_48___12'     |
    'ehr_q10_48___13'     |
    'ehr_q10_48___14'     |
    'ehr_q10_48___15'     |
    'ehr_q10_49'          |
    'ehr_q10_49___1'      |
    'ehr_q10_49___2'      |
    'ehr_q10_49___3'      |
    'ehr_q10_49___4'      |
    'ehr_q10_49___5'      |
    'ehr_q10_49___6'      |
    'ehr_q10_49___7'      |
    'ehr_q10_49___8'      |
    'ehr_q10_49___9'      |
    'ehr_q10_49___10'     |
    'ehr_q10_50'          |
    'ehr_q10_50___1'      |
    'ehr_q10_50___2'      |
    'ehr_q10_50___3'      |
    'ehr_q10_50___4'      |
    'ehr_q10_50___5'      |
    'ehr_q10_50___6'      |
    'ehr_q10_50___7'      |
    'ehr_q10_50___8'      |
    'ehr_q10_50___9'      |
    'ehr_q10_50___10'     |
    'ehr_q10_50___11'     |
    'ehr_q10_50___12'     |
    'ehr_q10_50___13'     |
    'ehr_q10_50___14'     |
    'ehr_q10_51'          |
    'ehr_q10_51___1'      |
    'ehr_q10_52'          |
    'ehr_q10_52___1'      |
    'ehr_q10_53'          |
    'ehr_q10_53___1'      |
    'ehr_q10_53___2'      |
    'ehr_q10_53___3'      |
    'ehr_q10_53___4'      |
    'ehr_q10_53___5'      |
    'ehr_q10_53___6'      |
    'ehr_q10_53___7'      |
    'ehr_q10_53___8'      |
    'ehr_q10_53___9'      |
    'ehr_q10_53___10'     |
    'ehr_q10_53___11'     |
    'ehr_q10_53___12'     |
    'ehr_q10_53___13'     |
    'ehr_q10_53___14'     |
    'ehr_q10_54'          |
    'ehr_q10_54___1'      |
    'ehr_q10_54___2'      |
    'ehr_q10_54___3'      |
    'ehr_q10_54___4'      |
    'ehr_q10_54___5'      |
    'ehr_q10_54___6'      |
    'ehr_q10_54___7'      |
    'ehr_q10_54___8'      |
    'ehr_q10_54___9'      |
    'ehr_q10_54___10'     |
    'ehr_q10_54___11'     |
    'ehr_q10_54___12'     |
    'ehr_q10_54___13'     |
    'ehr_q10_54___14'     |
    'ehr_q10_54___15'     |
    'ehr_q10_54___16'     |
    'ehr_q10_54___17'     |
    'ehr_q10_54___18'     |
    'ehr_q10_54___19'     |
    'ehr_q10_54___20'     |
    'ehr_q10_54___21'     |
    'ehr_q10_54___22'     |
    'ehr_q10_54___23'     |
    'ehr_q10_54___24'     |
    'ehr_q10_54___25'     |
    'ehr_q10_54___26'     |
    'ehr_q10_54___27'     |
    'ehr_q10_54___28'     |
    'ehr_q10_54___29'     |
    'ehr_q10_54___30'     |
    'ehr_q10_54___31'     |
    'ehr_q10_54___32'     |
    'ehr_q10_54___33'     |
    'ehr_q10_54___34'     |
    'ehr_q10_55'          |
    'ehr_q10_55___1'      |
    'ehr_q10_56'          |
    'ehr_q10_56___1'      | 
    'ehr_q10_56___2'      | 
    'ehr_q10_56___3'      | 
    'ehr_q10_56___4'      | 
    'ehr_q10_56___5'      | 
    'ehr_q10_57'          |
    'ehr_q10_57___1'      | 
    'ehr_q10_57___2'      | 
    'ehr_q10_57___3'      | 
    'ehr_q10_57___4'      | 
    'ehr_q10_57___5'      |
    'ehr_q10_57___6'      |
    'ehr_q10_57___7'      |
    'ehr_q10_57___8'      |
    'ehr_q10_58'          |
    'ehr_q10_58___1'      | 
    'ehr_q10_59'          |
    'ehr_q10_59___1'      | 
    'ehr_q10_59___2'      | 
    'ehr_q10_59___3'      | 
    'ehr_q10_60'          |
    'ehr_q10_60___1'      | 
    'ehr_q10_61'          |
    'ehr_q10_61___1'


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
export interface GrammarExample {
  sentence: string;
  sentence_hindi: string;
  explanation: string;
  explanation_hindi: string;
}

export interface CommonMistake {
  wrong: string;
  correct: string;
  reason: string;
  reason_hindi: string;
}

export interface PracticeQuestion {
  id: string;
  question_type: 'mcq' | 'fill_blank' | 'error_correction' | 'transformation' | 'reordering';
  question_text: string;
  question_text_hindi: string;
  options?: string[];
  correct_answer: string;
  explanation: string;
  explanation_hindi: string;
  difficulty: 'easy' | 'medium' | 'hard';
  marks: number;
}

export interface GrammarTopic {
  id: string;
  topic_name: string;
  topic_name_hindi: string;
  class_level: 9 | 10;
  explanation: {
    definition: string;
    definition_hindi: string;
    key_points: string[];
    key_points_hindi: string[];
    rules: string[];
    rules_hindi: string[];
    examples: GrammarExample[];
    common_mistakes: CommonMistake[];
  };
  practice_questions: PracticeQuestion[];
  difficulty: 'basic' | 'intermediate' | 'advanced';
  exam_weightage: 'high' | 'medium' | 'low';
  estimated_study_time: number;
  related_topics: string[];
}

export const class9GrammarTopics: GrammarTopic[] = [
  {
    id: 'present-tenses-9',
    topic_name: 'Present Tenses',
    topic_name_hindi: 'वर्तमान काल',
    class_level: 9,
    difficulty: 'basic',
    exam_weightage: 'high',
    estimated_study_time: 45,
    related_topics: ['past-tenses-9', 'future-tenses-9'],
    explanation: {
      definition: 'Present tenses are used to describe actions happening now, habitual actions, or universal truths.',
      definition_hindi: 'वर्तमान काल का उपयोग अभी हो रही क्रियाओं, नियमित क्रियाओं, या सार्वभौमिक सत्य को व्यक्त करने के लिए किया जाता है।',
      key_points: [
        'Simple Present: Habitual actions and universal truths',
        'Present Continuous: Actions happening now',
        'Present Perfect: Completed actions with present relevance',
        'Present Perfect Continuous: Continuing actions started in the past'
      ],
      key_points_hindi: [
        'सामान्य वर्तमान: नियमित क्रियाएं और सार्वभौमिक सत्य',
        'वर्तमान निरंतर: अभी हो रही क्रियाएं',
        'वर्तमान पूर्ण: पूर्ण हुई क्रियाएं जिनका वर्तमान से संबंध है',
        'वर्तमान पूर्ण निरंतर: अतीत में शुरू हुई और जारी क्रियाएं'
      ],
      rules: [
        'Simple Present: Subject + V1/V1+s/es (I play, He plays)',
        'Present Continuous: Subject + am/is/are + V1+ing (I am playing)',
        'Present Perfect: Subject + has/have + V3 (I have played)',
        'Present Perfect Continuous: Subject + has/have + been + V1+ing (I have been playing)'
      ],
      rules_hindi: [
        'सामान्य वर्तमान: कर्ता + V1/V1+s/es (मैं खेलता हूं, वह खेलता है)',
        'वर्तमान निरंतर: कर्ता + am/is/are + V1+ing (मैं खेल रहा हूं)',
        'वर्तमान पूर्ण: कर्ता + has/have + V3 (मैंने खेला है)',
        'वर्तमान पूर्ण निरंतर: कर्ता + has/have + been + V1+ing (मैं खेल रहा हूं)'
      ],
      examples: [
        {
          sentence: 'The sun rises in the east.',
          sentence_hindi: 'सूरज पूर्व में उगता है।',
          explanation: 'Simple Present for universal truth',
          explanation_hindi: 'सार्वभौमिक सत्य के लिए सामान्य वर्तमान'
        },
        {
          sentence: 'She is reading a book now.',
          sentence_hindi: 'वह अभी किताब पढ़ रही है।',
          explanation: 'Present Continuous for action happening now',
          explanation_hindi: 'अभी हो रही क्रिया के लिए वर्तमान निरंतर'
        },
        {
          sentence: 'I have finished my homework.',
          sentence_hindi: 'मैंने अपना होमवर्क पूरा कर लिया है।',
          explanation: 'Present Perfect for completed action with present result',
          explanation_hindi: 'वर्तमान परिणाम के साथ पूर्ण क्रिया के लिए वर्तमान पूर्ण'
        },
        {
          sentence: 'They have been waiting for an hour.',
          sentence_hindi: 'वे एक घंटे से इंतजार कर रहे हैं।',
          explanation: 'Present Perfect Continuous for ongoing action',
          explanation_hindi: 'जारी क्रिया के लिए वर्तमान पूर्ण निरंतर'
        }
      ],
      common_mistakes: [
        {
          wrong: 'He go to school daily.',
          correct: 'He goes to school daily.',
          reason: 'Add s/es with third person singular in Simple Present',
          reason_hindi: 'सामान्य वर्तमान में तृतीय पुरुष एकवचन के साथ s/es जोड़ें'
        },
        {
          wrong: 'I am knowing the answer.',
          correct: 'I know the answer.',
          reason: 'Stative verbs (know, love, like) are not used in continuous form',
          reason_hindi: 'स्थिर क्रियाओं (know, love, like) का निरंतर रूप में उपयोग नहीं होता'
        },
        {
          wrong: 'I have saw that movie.',
          correct: 'I have seen that movie.',
          reason: 'Use V3 (Past Participle) with have/has in Present Perfect',
          reason_hindi: 'वर्तमान पूर्ण में have/has के साथ V3 (Past Participle) का उपयोग करें'
        }
      ]
    },
    practice_questions: [
      {
        id: 'pt9-q1',
        question_type: 'mcq',
        question_text: 'He _____ to the gym every morning.',
        question_text_hindi: 'वह हर सुबह जिम _____ है।',
        options: ['go', 'goes', 'going', 'gone'],
        correct_answer: 'goes',
        explanation: 'Third person singular takes "goes" in Simple Present tense.',
        explanation_hindi: 'सामान्य वर्तमान काल में तृतीय पुरुष एकवचन "goes" लेता है।',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'pt9-q2',
        question_type: 'fill_blank',
        question_text: 'They _____ (play) cricket right now.',
        question_text_hindi: 'वे अभी क्रिकेट _____ (खेलना) हैं।',
        correct_answer: 'are playing',
        explanation: 'Use Present Continuous (are playing) for actions happening right now.',
        explanation_hindi: 'अभी हो रही क्रियाओं के लिए वर्तमान निरंतर (are playing) का उपयोग करें।',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'pt9-q3',
        question_type: 'error_correction',
        question_text: 'She have completed her assignment.',
        question_text_hindi: 'She have completed her assignment.',
        correct_answer: 'She has completed her assignment.',
        explanation: 'Use "has" with third person singular (she/he/it) in Present Perfect.',
        explanation_hindi: 'वर्तमान पूर्ण में तृतीय पुरुष एकवचन (she/he/it) के साथ "has" का उपयोग करें।',
        difficulty: 'medium',
        marks: 2
      },
      {
        id: 'pt9-q4',
        question_type: 'transformation',
        question_text: 'Transform to Present Continuous: I write a letter.',
        question_text_hindi: 'वर्तमान निरंतर में बदलें: I write a letter.',
        correct_answer: 'I am writing a letter.',
        explanation: 'Present Continuous = am/is/are + V1+ing',
        explanation_hindi: 'वर्तमान निरंतर = am/is/are + V1+ing',
        difficulty: 'medium',
        marks: 2
      },
      {
        id: 'pt9-q5',
        question_type: 'mcq',
        question_text: 'Water _____ at 100 degrees Celsius.',
        question_text_hindi: 'पानी 100 डिग्री सेल्सियस पर _____।',
        options: ['boil', 'boils', 'is boiling', 'has boiled'],
        correct_answer: 'boils',
        explanation: 'Simple Present is used for universal truths.',
        explanation_hindi: 'सार्वभौमिक सत्य के लिए सामान्य वर्तमान का उपयोग होता है।',
        difficulty: 'easy',
        marks: 1
      }
    ]
  },
  {
    id: 'modals-9',
    topic_name: 'Modals',
    topic_name_hindi: 'सहायक क्रियाएं',
    class_level: 9,
    difficulty: 'intermediate',
    exam_weightage: 'high',
    estimated_study_time: 40,
    related_topics: ['present-tenses-9', 'reported-speech-9'],
    explanation: {
      definition: 'Modals are auxiliary verbs that express ability, possibility, permission, obligation, or advice.',
      definition_hindi: 'सहायक क्रियाएं वे क्रियाएं हैं जो क्षमता, संभावना, अनुमति, दायित्व, या सलाह व्यक्त करती हैं।',
      key_points: [
        'Can/Could: Ability and permission',
        'May/Might: Possibility and permission',
        'Must/Should: Obligation and advice',
        'Will/Would: Future and polite requests',
        'Ought to: Moral obligation'
      ],
      key_points_hindi: [
        'Can/Could: क्षमता और अनुमति',
        'May/Might: संभावना और अनुमति',
        'Must/Should: दायित्व और सलाह',
        'Will/Would: भविष्य और विनम्र निवेदन',
        'Ought to: नैतिक दायित्व'
      ],
      rules: [
        'Modals are followed by base form of verb (V1)',
        'No s/es added with third person singular',
        'No do/does/did used in questions or negatives',
        'Can\'t is used for strong prohibition'
      ],
      rules_hindi: [
        'सहायक क्रियाओं के बाद क्रिया का मूल रूप (V1) आता है',
        'तृतीय पुरुष एकवचन के साथ s/es नहीं जुड़ता',
        'प्रश्न या नकारात्मक में do/does/did का उपयोग नहीं होता',
        'Can\'t मजबूत निषेध के लिए उपयोग होता है'
      ],
      examples: [
        {
          sentence: 'She can speak five languages.',
          sentence_hindi: 'वह पांच भाषाएं बोल सकती है।',
          explanation: 'Can expresses ability',
          explanation_hindi: 'Can क्षमता व्यक्त करता है'
        },
        {
          sentence: 'You must wear a helmet.',
          sentence_hindi: 'आपको हेलमेट पहनना ही होगा।',
          explanation: 'Must expresses strong obligation',
          explanation_hindi: 'Must मजबूत दायित्व व्यक्त करता है'
        },
        {
          sentence: 'May I come in?',
          sentence_hindi: 'क्या मैं अंदर आ सकता हूं?',
          explanation: 'May asks for formal permission',
          explanation_hindi: 'May औपचारिक अनुमति मांगता है'
        },
        {
          sentence: 'You should exercise daily.',
          sentence_hindi: 'आपको रोजाना व्यायाम करना चाहिए।',
          explanation: 'Should gives advice',
          explanation_hindi: 'Should सलाह देता है'
        }
      ],
      common_mistakes: [
        {
          wrong: 'He can speaks English.',
          correct: 'He can speak English.',
          reason: 'Modals are followed by base form (V1), not V1+s',
          reason_hindi: 'सहायक क्रियाओं के बाद मूल रूप (V1) आता है, V1+s नहीं'
        },
        {
          wrong: 'Does she can dance?',
          correct: 'Can she dance?',
          reason: 'Don\'t use do/does with modals',
          reason_hindi: 'सहायक क्रियाओं के साथ do/does का उपयोग न करें'
        },
        {
          wrong: 'I must to go now.',
          correct: 'I must go now.',
          reason: 'Modal + V1, no "to" after modals',
          reason_hindi: 'सहायक क्रिया + V1, सहायक क्रियाओं के बाद "to" नहीं'
        }
      ]
    },
    practice_questions: [
      {
        id: 'mod9-q1',
        question_type: 'mcq',
        question_text: 'Students _____ respect their teachers.',
        question_text_hindi: 'छात्रों को अपने शिक्षकों का सम्मान _____ चाहिए।',
        options: ['can', 'must', 'might', 'would'],
        correct_answer: 'must',
        explanation: 'Must expresses strong obligation.',
        explanation_hindi: 'Must मजबूत दायित्व व्यक्त करता है।',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'mod9-q2',
        question_type: 'fill_blank',
        question_text: '_____ you help me with this problem?',
        question_text_hindi: '_____ आप इस समस्या में मेरी मदद कर सकते हैं?',
        correct_answer: 'Can/Could/Will/Would',
        explanation: 'Can, Could, Will, or Would can be used to ask for help.',
        explanation_hindi: 'मदद मांगने के लिए Can, Could, Will, या Would का उपयोग किया जा सकता है।',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'mod9-q3',
        question_type: 'error_correction',
        question_text: 'She musts finish her work today.',
        question_text_hindi: 'She musts finish her work today.',
        correct_answer: 'She must finish her work today.',
        explanation: 'Modals don\'t take s/es, even with third person singular.',
        explanation_hindi: 'सहायक क्रियाएं तृतीय पुरुष एकवचन के साथ भी s/es नहीं लेतीं।',
        difficulty: 'medium',
        marks: 2
      },
      {
        id: 'mod9-q4',
        question_type: 'mcq',
        question_text: 'It _____ rain tomorrow. (50% chance)',
        question_text_hindi: 'कल बारिश _____ सकती है। (50% संभावना)',
        options: ['must', 'might', 'will', 'should'],
        correct_answer: 'might',
        explanation: 'Might expresses weak possibility.',
        explanation_hindi: 'Might कम संभावना व्यक्त करता है।',
        difficulty: 'medium',
        marks: 2
      },
      {
        id: 'mod9-q5',
        question_type: 'transformation',
        question_text: 'It is necessary for you to study hard. (Use: must)',
        question_text_hindi: 'आपके लिए कठिन अध्ययन करना आवश्यक है। (Use: must)',
        correct_answer: 'You must study hard.',
        explanation: 'Must expresses necessity or strong obligation.',
        explanation_hindi: 'Must आवश्यकता या मजबूत दायित्व व्यक्त करता है।',
        difficulty: 'hard',
        marks: 3
      }
    ]
  }
];

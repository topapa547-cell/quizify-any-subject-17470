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
    related_topics: ['Past Tenses', 'Future Tenses', 'Subject-Verb Agreement'],
    explanation: {
      definition: 'Present tenses are used to describe actions happening now, habitual actions, or general truths.',
      definition_hindi: 'वर्तमान काल का उपयोग वर्तमान में हो रही क्रियाओं, आदतन क्रियाओं या सामान्य सत्य को व्यक्त करने के लिए किया जाता है।',
      key_points: [
        'Simple Present: For habits and facts',
        'Present Continuous: For actions happening now',
        'Present Perfect: For completed actions with present relevance',
        'Present Perfect Continuous: For ongoing actions that started in past'
      ],
      key_points_hindi: [
        'Simple Present: आदतों और तथ्यों के लिए',
        'Present Continuous: अभी हो रही क्रियाओं के लिए',
        'Present Perfect: वर्तमान से संबंधित पूर्ण क्रियाओं के लिए',
        'Present Perfect Continuous: अतीत में शुरू हुई चल रही क्रियाओं के लिए'
      ],
      rules: [
        'Simple Present: Subject + V1 (+ s/es for he/she/it)',
        'Present Continuous: Subject + am/is/are + V1+ing',
        'Present Perfect: Subject + has/have + V3',
        'Present Perfect Continuous: Subject + has/have + been + V1+ing'
      ],
      rules_hindi: [
        'Simple Present: कर्ता + V1 (he/she/it के साथ s/es)',
        'Present Continuous: कर्ता + am/is/are + V1+ing',
        'Present Perfect: कर्ता + has/have + V3',
        'Present Perfect Continuous: कर्ता + has/have + been + V1+ing'
      ],
      examples: [
        { 
          sentence: 'She writes a letter.', 
          sentence_hindi: 'वह एक पत्र लिखती है।',
          explanation: 'Simple present tense for habitual action',
          explanation_hindi: 'आदतन क्रिया के लिए simple present tense'
        },
        { 
          sentence: 'They are playing cricket.', 
          sentence_hindi: 'वे क्रिकेट खेल रहे हैं।',
          explanation: 'Present continuous for ongoing action',
          explanation_hindi: 'चल रही क्रिया के लिए present continuous'
        },
        { 
          sentence: 'I have finished my work.', 
          sentence_hindi: 'मैंने अपना काम पूरा कर लिया है।',
          explanation: 'Present perfect for completed action with present result',
          explanation_hindi: 'वर्तमान परिणाम वाली पूर्ण क्रिया के लिए present perfect'
        }
      ],
      common_mistakes: [
        { 
          wrong: 'He go to school.', 
          correct: 'He goes to school.', 
          reason: 'Must add s/es with third person singular',
          reason_hindi: 'Third person singular में verb के साथ s/es जोड़ना आवश्यक है'
        },
        { 
          wrong: 'I am knowing the answer.', 
          correct: 'I know the answer.', 
          reason: 'Stative verbs are not used in continuous form',
          reason_hindi: 'Stative verbs को continuous form में नहीं लिखते'
        }
      ]
    },
    practice_questions: [
      {
        id: 'pt9-q1',
        question_type: 'mcq',
        question_text: 'She _____ to school every day.',
        question_text_hindi: 'वह हर दिन स्कूल _____ है।',
        options: ['go', 'goes', 'going', 'gone'],
        correct_answer: 'goes',
        explanation: 'Third person singular requires verb+s/es in simple present',
        explanation_hindi: 'Third person singular के साथ simple present में verb+s/es का प्रयोग होता है',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'pt9-q2',
        question_type: 'mcq',
        question_text: 'They _____ cricket right now.',
        question_text_hindi: 'वे अभी क्रिकेट _____ हैं।',
        options: ['play', 'plays', 'are playing', 'played'],
        correct_answer: 'are playing',
        explanation: '"Right now" indicates present continuous tense',
        explanation_hindi: '"Right now" से present continuous का प्रयोग होता है',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'pt9-q3',
        question_type: 'mcq',
        question_text: 'I _____ this book already.',
        question_text_hindi: 'मैं यह किताब पहले से _____ हूँ।',
        options: ['read', 'reads', 'have read', 'am reading'],
        correct_answer: 'have read',
        explanation: '"Already" is used with present perfect tense',
        explanation_hindi: '"Already" के साथ present perfect tense का प्रयोग होता है',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'pt9-q4',
        question_type: 'fill_blank',
        question_text: 'Water _____ at 100 degrees Celsius.',
        question_text_hindi: 'पानी 100 डिग्री सेल्सियस पर _____ है।',
        correct_answer: 'boils',
        explanation: 'Scientific facts use simple present tense',
        explanation_hindi: 'Scientific facts के लिए simple present tense का प्रयोग होता है',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'pt9-q5',
        question_type: 'error_correction',
        question_text: 'Find the error: He are going to market.',
        question_text_hindi: 'त्रुटि खोजें: He are going to market.',
        correct_answer: 'are → is',
        explanation: '"He" is singular, so "is" should be used',
        explanation_hindi: '"He" singular है, इसलिए "is" का प्रयोग होना चाहिए',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'pt9-q6',
        question_type: 'transformation',
        question_text: 'Transform to present continuous: Ram reads a book.',
        question_text_hindi: 'Present continuous में बदलें: Ram reads a book.',
        correct_answer: 'Ram is reading a book.',
        explanation: 'Present continuous: Subject + is/am/are + V1+ing',
        explanation_hindi: 'Present continuous: Subject + is/am/are + V1+ing',
        difficulty: 'medium',
        marks: 2
      },
      {
        id: 'pt9-q7',
        question_type: 'reordering',
        question_text: 'Rearrange: has / she / finished / work / her',
        question_text_hindi: 'पुनर्व्यवस्थित करें: has / she / finished / work / her',
        correct_answer: 'She has finished her work.',
        explanation: 'Present perfect structure: Subject + has/have + V3 + Object',
        explanation_hindi: 'Present perfect का structure: Subject + has/have + V3 + Object',
        difficulty: 'medium',
        marks: 2
      },
      {
        id: 'pt9-q8',
        question_type: 'mcq',
        question_text: 'The sun _____ in the east.',
        question_text_hindi: 'सूर्य पूर्व में _____ है।',
        options: ['rises', 'is rising', 'has risen', 'rose'],
        correct_answer: 'rises',
        explanation: 'Universal truths use simple present',
        explanation_hindi: 'Universal truth के लिए simple present का प्रयोग होता है',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'pt9-q9',
        question_type: 'fill_blank',
        question_text: 'We _____ (live) in this city since 2010.',
        question_text_hindi: 'हम 2010 से इस शहर में _____ हैं।',
        correct_answer: 'have been living',
        explanation: '"Since" with duration requires present perfect continuous',
        explanation_hindi: '"Since" के साथ duration के लिए present perfect continuous का प्रयोग होता है',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'pt9-q10',
        question_type: 'mcq',
        question_text: 'Look! The birds _____ in the sky.',
        question_text_hindi: 'देखो! पक्षी आकाश में _____ हैं।',
        options: ['fly', 'flies', 'are flying', 'have flown'],
        correct_answer: 'are flying',
        explanation: '"Look" indicates action happening now - present continuous',
        explanation_hindi: '"Look" से पता चलता है कि क्रिया अभी हो रही है - present continuous',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'pt9-q11',
        question_type: 'error_correction',
        question_text: 'Find the error: She have completed her homework.',
        question_text_hindi: 'त्रुटि खोजें: She have completed her homework.',
        correct_answer: 'have → has',
        explanation: 'Third person singular uses "has"',
        explanation_hindi: 'Third person singular के साथ "has" का प्रयोग होता है',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'pt9-q12',
        question_type: 'fill_blank',
        question_text: 'My brother _____ (study) in the library these days.',
        question_text_hindi: 'मेरा भाई इन दिनों लाइब्रेरी में _____ है।',
        correct_answer: 'is studying',
        explanation: '"These days" indicates temporary situation - present continuous',
        explanation_hindi: '"These days" temporary situation को दर्शाता है - present continuous',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'pt9-q13',
        question_type: 'transformation',
        question_text: 'Transform to present perfect: She writes a letter.',
        question_text_hindi: 'Present perfect में बदलें: She writes a letter.',
        correct_answer: 'She has written a letter.',
        explanation: 'Present perfect: Subject + has/have + V3',
        explanation_hindi: 'Present perfect: Subject + has/have + V3',
        difficulty: 'medium',
        marks: 2
      },
      {
        id: 'pt9-q14',
        question_type: 'mcq',
        question_text: 'He _____ here for two hours.',
        question_text_hindi: 'वह दो घंटे से यहाँ _____ है।',
        options: ['waits', 'is waiting', 'has been waiting', 'waited'],
        correct_answer: 'has been waiting',
        explanation: '"For" with time duration and ongoing action - present perfect continuous',
        explanation_hindi: '"For" के साथ time duration और चल रही क्रिया - present perfect continuous',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'pt9-q15',
        question_type: 'fill_blank',
        question_text: 'She _____ (visit) three countries so far.',
        question_text_hindi: 'उसने अब तक तीन देशों की _____ की है।',
        correct_answer: 'has visited',
        explanation: '"So far" is used with present perfect',
        explanation_hindi: '"So far" के साथ present perfect का प्रयोग होता है',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'pt9-q16',
        question_type: 'error_correction',
        question_text: 'Find the error: I am knowing the answer since yesterday.',
        question_text_hindi: 'त्रुटि खोजें: I am knowing the answer since yesterday.',
        correct_answer: 'am knowing → have known',
        explanation: '"Know" is stative and "since" requires present perfect',
        explanation_hindi: '"Know" stative verb है और "since" के साथ present perfect का प्रयोग होता है',
        difficulty: 'hard',
        marks: 2
      },
      {
        id: 'pt9-q17',
        question_type: 'reordering',
        question_text: 'Rearrange: playing / children / are / the / garden / in / the',
        question_text_hindi: 'पुनर्व्यवस्थित करें: playing / children / are / the / garden / in / the',
        correct_answer: 'The children are playing in the garden.',
        explanation: 'Present continuous: Subject + is/am/are + V1+ing + place',
        explanation_hindi: 'Present continuous: Subject + is/am/are + V1+ing + स्थान',
        difficulty: 'hard',
        marks: 2
      },
      {
        id: 'pt9-q18',
        question_type: 'mcq',
        question_text: 'My father _____ in this company for 10 years.',
        question_text_hindi: 'मेरे पिताजी इस कंपनी में 10 साल से _____ हैं।',
        options: ['works', 'is working', 'has been working', 'worked'],
        correct_answer: 'has been working',
        explanation: 'Duration with ongoing action - present perfect continuous',
        explanation_hindi: 'Duration के साथ चल रही क्रिया - present perfect continuous',
        difficulty: 'hard',
        marks: 1
      },
      {
        id: 'pt9-q19',
        question_type: 'error_correction',
        question_text: 'Find the error: They plays football every Sunday.',
        question_text_hindi: 'त्रुटि खोजें: They plays football every Sunday.',
        correct_answer: 'plays → play',
        explanation: 'Plural subject uses base form of verb',
        explanation_hindi: 'Plural subject के साथ verb की base form का प्रयोग होता है',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'pt9-q20',
        question_type: 'transformation',
        question_text: 'Transform to simple present: They are playing cricket.',
        question_text_hindi: 'Simple present में बदलें: They are playing cricket.',
        correct_answer: 'They play cricket.',
        explanation: 'Continuous to simple denotes habitual action',
        explanation_hindi: 'Continuous से simple में बदलने पर आदतन क्रिया को दर्शाता है',
        difficulty: 'medium',
        marks: 2
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
    related_topics: ['Present Tenses', 'Future Tenses'],
    explanation: {
      definition: 'Modal verbs are auxiliary verbs used to express ability, possibility, permission, obligation, etc.',
      definition_hindi: 'Modals क्षमता, संभावना, अनुमति, कर्तव्य आदि व्यक्त करने के लिए प्रयोग की जाने वाली सहायक क्रियाएं हैं।',
      key_points: [
        'Common modals: can, could, may, might, will, would, shall, should, must, ought to',
        'Modals are followed by base form of verb',
        'No s/es added to modals in third person',
        'Modals express different meanings like ability, permission, possibility, obligation'
      ],
      key_points_hindi: [
        'सामान्य modals: can, could, may, might, will, would, shall, should, must, ought to',
        'Modals के बाद verb की base form आती है',
        'Third person में modals के साथ s/es नहीं जोड़ते',
        'Modals विभिन्न अर्थ व्यक्त करती हैं जैसे क्षमता, अनुमति, संभावना, कर्तव्य'
      ],
      rules: [
        'Can/Could: Ability or permission',
        'May/Might: Possibility or permission',
        'Will/Would: Future or polite request',
        'Should/Ought to: Advice or moral obligation',
        'Must: Strong obligation or certainty'
      ],
      rules_hindi: [
        'Can/Could: क्षमता या अनुमति',
        'May/Might: संभावना या अनुमति',
        'Will/Would: भविष्य या विनम्र निवेदन',
        'Should/Ought to: सलाह या नैतिक कर्तव्य',
        'Must: दृढ़ कर्तव्य या निश्चितता'
      ],
      examples: [
        { 
          sentence: 'I can speak English.', 
          sentence_hindi: 'मैं अंग्रेजी बोल सकता हूँ।',
          explanation: 'Can expresses ability',
          explanation_hindi: 'Can क्षमता व्यक्त करता है'
        },
        { 
          sentence: 'May I come in?', 
          sentence_hindi: 'क्या मैं अंदर आ सकता हूँ?',
          explanation: 'May requests permission',
          explanation_hindi: 'May अनुमति मांगता है'
        },
        { 
          sentence: 'You should study hard.', 
          sentence_hindi: 'तुम्हें कड़ी मेहनत से पढ़ाई करनी चाहिए।',
          explanation: 'Should gives advice',
          explanation_hindi: 'Should सलाह देता है'
        }
      ],
      common_mistakes: [
        { 
          wrong: 'He cans swim.', 
          correct: 'He can swim.', 
          reason: 'Never add s/es to modals',
          reason_hindi: 'Modals में s/es नहीं जोड़ते'
        },
        { 
          wrong: 'You must to go.', 
          correct: 'You must go.', 
          reason: 'No "to" after modals (except ought to)',
          reason_hindi: 'Modal के बाद "to" नहीं आता (except ought to)'
        }
      ]
    },
    practice_questions: [
      {
        id: 'mod9-q1',
        question_type: 'mcq',
        question_text: 'I _____ speak three languages.',
        question_text_hindi: 'मैं तीन भाषाएँ बोल _____ हूँ।',
        options: ['can', 'must', 'should', 'may'],
        correct_answer: 'can',
        explanation: '"Can" expresses ability',
        explanation_hindi: '"Can" क्षमता को व्यक्त करता है',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'mod9-q2',
        question_type: 'mcq',
        question_text: '_____ I use your phone?',
        question_text_hindi: '_____ मैं आपका फोन इस्तेमाल कर सकता हूँ?',
        options: ['Can', 'Must', 'Should', 'Ought'],
        correct_answer: 'Can',
        explanation: '"Can" or "May" is used for requesting permission',
        explanation_hindi: 'अनुमति मांगने के लिए "Can" या "May" का प्रयोग होता है',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'mod9-q3',
        question_type: 'mcq',
        question_text: 'You _____ respect your teachers.',
        question_text_hindi: 'तुम्हें अपने शिक्षकों का सम्मान _____ चाहिए।',
        options: ['can', 'may', 'must', 'might'],
        correct_answer: 'must',
        explanation: '"Must" expresses strong obligation',
        explanation_hindi: '"Must" दृढ़ कर्तव्य को व्यक्त करता है',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'mod9-q4',
        question_type: 'mcq',
        question_text: 'It _____ rain tomorrow.',
        question_text_hindi: 'कल बारिश हो _____ है।',
        options: ['can', 'might', 'must', 'ought'],
        correct_answer: 'might',
        explanation: '"Might" or "may" expresses possibility',
        explanation_hindi: '"Might" या "may" संभावना व्यक्त करता है',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'mod9-q5',
        question_type: 'fill_blank',
        question_text: 'She _____ (can) dance very well when she was young.',
        question_text_hindi: 'जब वह युवा थी तब वह बहुत अच्छा नृत्य कर _____ थी।',
        correct_answer: 'could',
        explanation: '"Could" is past form of "can"',
        explanation_hindi: '"Could" can का past form है',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'mod9-q6',
        question_type: 'fill_blank',
        question_text: 'You _____ (should) complete your homework on time.',
        question_text_hindi: 'तुम्हें समय पर अपना गृहकार्य पूरा _____ चाहिए।',
        correct_answer: 'should',
        explanation: '"Should" gives advice',
        explanation_hindi: '"Should" सलाह देने के लिए प्रयोग होता है',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'mod9-q7',
        question_type: 'error_correction',
        question_text: 'Find the error: He cans play cricket.',
        question_text_hindi: 'त्रुटि खोजें: He cans play cricket.',
        correct_answer: 'cans → can',
        explanation: 'Never add s/es to modals',
        explanation_hindi: 'Modals में कभी s/es नहीं जोड़ते',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'mod9-q8',
        question_type: 'error_correction',
        question_text: 'Find the error: You must to obey the rules.',
        question_text_hindi: 'त्रुटि खोजें: You must to obey the rules.',
        correct_answer: 'must to → must',
        explanation: 'No "to" after modals except "ought to"',
        explanation_hindi: 'Modal के बाद "to" नहीं आता (except "ought to")',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'mod9-q9',
        question_type: 'transformation',
        question_text: 'Change to past: I can swim.',
        question_text_hindi: 'Past में बदलें: I can swim.',
        correct_answer: 'I could swim.',
        explanation: 'Past form of "can" is "could"',
        explanation_hindi: '"Can" का past form "could" है',
        difficulty: 'easy',
        marks: 2
      },
      {
        id: 'mod9-q10',
        question_type: 'transformation',
        question_text: 'Change to polite form: Will you close the door?',
        question_text_hindi: 'विनम्र रूप में बदलें: Will you close the door?',
        correct_answer: 'Would you close the door?',
        explanation: '"Would" is more polite than "will"',
        explanation_hindi: '"Would" अधिक विनम्र है "will" से',
        difficulty: 'medium',
        marks: 2
      },
      {
        id: 'mod9-q11',
        question_type: 'reordering',
        question_text: 'Rearrange: can / she / very / sing / well',
        question_text_hindi: 'पुनर्व्यवस्थित करें: can / she / very / sing / well',
        correct_answer: 'She can sing very well.',
        explanation: 'Structure: Subject + modal + verb + adverb',
        explanation_hindi: 'Structure: Subject + modal + verb + adverb',
        difficulty: 'easy',
        marks: 2
      },
      {
        id: 'mod9-q12',
        question_type: 'mcq',
        question_text: 'Students _____ wear uniform in school.',
        question_text_hindi: 'छात्रों को स्कूल में वर्दी पहननी _____ है।',
        options: ['can', 'may', 'must', 'might'],
        correct_answer: 'must',
        explanation: 'School rule - strong obligation',
        explanation_hindi: 'School rule - दृढ़ कर्तव्य',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'mod9-q13',
        question_type: 'fill_blank',
        question_text: 'We _____ (ought) to help the poor.',
        question_text_hindi: 'हमें गरीबों की मदद _____ चाहिए।',
        correct_answer: 'ought',
        explanation: '"Ought to" expresses moral duty',
        explanation_hindi: '"Ought to" नैतिक कर्तव्य को व्यक्त करता है',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'mod9-q14',
        question_type: 'fill_blank',
        question_text: '_____ (Will) you please help me?',
        question_text_hindi: '_____ आप कृपया मेरी मदद करेंगे?',
        correct_answer: 'Will',
        explanation: '"Will" or "Would" for polite requests',
        explanation_hindi: 'विनम्र निवेदन के लिए "Will" या "Would"',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'mod9-q15',
        question_type: 'error_correction',
        question_text: 'Find the error: She should helps her mother.',
        question_text_hindi: 'त्रुटि खोजें: She should helps her mother.',
        correct_answer: 'helps → help',
        explanation: 'Base form of verb after modal',
        explanation_hindi: 'Modal के बाद verb की base form आती है',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'mod9-q16',
        question_type: 'error_correction',
        question_text: 'Find the error: May I to come in?',
        question_text_hindi: 'त्रुटि खोजें: May I to come in?',
        correct_answer: 'to come → come',
        explanation: 'No "to" after modal, use base form directly',
        explanation_hindi: 'Modal के बाद सीधे base form, "to" नहीं',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'mod9-q17',
        question_type: 'transformation',
        question_text: 'Change modal: You must study. (use should)',
        question_text_hindi: 'Modal बदलें: You must study. (should का प्रयोग करें)',
        correct_answer: 'You should study.',
        explanation: 'Changing from strong to weaker obligation',
        explanation_hindi: 'Strong obligation से weak obligation में बदलना',
        difficulty: 'medium',
        marks: 2
      },
      {
        id: 'mod9-q18',
        question_type: 'reordering',
        question_text: 'Rearrange: the / might / meeting / tomorrow / be / cancelled',
        question_text_hindi: 'पुनर्व्यवस्थित करें: the / might / meeting / tomorrow / be / cancelled',
        correct_answer: 'The meeting might be cancelled tomorrow.',
        explanation: 'Subject + modal + be + past participle + time',
        explanation_hindi: 'Subject + modal + be + past participle + समय',
        difficulty: 'hard',
        marks: 2
      },
      {
        id: 'mod9-q19',
        question_type: 'mcq',
        question_text: 'He _____ be at home now. (uncertain)',
        question_text_hindi: 'वह अभी घर पर हो _____ है। (अनिश्चित)',
        options: ['can', 'may', 'must', 'should'],
        correct_answer: 'may',
        explanation: '"May" or "might" for uncertainty',
        explanation_hindi: 'अनिश्चितता के लिए "may" या "might"',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'mod9-q20',
        question_type: 'mcq',
        question_text: '_____ you lend me your book? (polite request)',
        question_text_hindi: '_____ आप मुझे अपनी किताब उधार देंगे? (विनम्र निवेदन)',
        options: ['Can', 'Could', 'May', 'Might'],
        correct_answer: 'Could',
        explanation: '"Could" or "Would" is most polite',
        explanation_hindi: '"Could" या "Would" सबसे अधिक विनम्र है',
        difficulty: 'medium',
        marks: 1
      }
    ]
  },
  {
    id: 'past-tenses-9',
    topic_name: 'Past Tenses',
    topic_name_hindi: 'भूत काल',
    class_level: 9,
    difficulty: 'basic',
    exam_weightage: 'high',
    estimated_study_time: 45,
    related_topics: ['Present Tenses', 'Future Tenses'],
    explanation: {
      definition: 'Past tenses describe actions that happened in the past.',
      definition_hindi: 'भूत काल का उपयोग बीते हुए समय में हुई क्रियाओं को व्यक्त करने के लिए किया जाता है।',
      key_points: [
        'Simple Past: Completed actions',
        'Past Continuous: Actions in progress in past',
        'Past Perfect: Actions completed before another past action',
        'Past Perfect Continuous: Duration before a past point'
      ],
      key_points_hindi: [
        'Simple Past: पूर्ण हो चुकी क्रियाएं',
        'Past Continuous: अतीत में जारी क्रियाएं',
        'Past Perfect: किसी अन्य भूतकालीन क्रिया से पहले पूर्ण क्रिया',
        'Past Perfect Continuous: भूतकालीन बिंदु से पहले की अवधि'
      ],
      rules: [
        'Simple Past: Subject + V2',
        'Past Continuous: Subject + was/were + V1+ing',
        'Past Perfect: Subject + had + V3',
        'Past Perfect Continuous: Subject + had been + V1+ing'
      ],
      rules_hindi: [
        'Simple Past: कर्ता + V2',
        'Past Continuous: कर्ता + was/were + V1+ing',
        'Past Perfect: कर्ता + had + V3',
        'Past Perfect Continuous: कर्ता + had been + V1+ing'
      ],
      examples: [
        { 
          sentence: 'I went to school yesterday.', 
          sentence_hindi: 'मैं कल स्कूल गया था।',
          explanation: 'Simple past for completed action',
          explanation_hindi: 'पूर्ण क्रिया के लिए simple past'
        },
        { 
          sentence: 'She was reading a book.', 
          sentence_hindi: 'वह किताब पढ़ रही थी।',
          explanation: 'Past continuous for ongoing action in past',
          explanation_hindi: 'अतीत में जारी क्रिया के लिए past continuous'
        },
        { 
          sentence: 'They had finished their work.', 
          sentence_hindi: 'उन्होंने अपना काम पूरा कर लिया था।',
          explanation: 'Past perfect for action before another past action',
          explanation_hindi: 'किसी अन्य भूतकालीन क्रिया से पहले की क्रिया के लिए past perfect'
        }
      ],
      common_mistakes: [
        { 
          wrong: 'I goed to market.', 
          correct: 'I went to market.', 
          reason: 'Past form of "go" is "went", not "goed"',
          reason_hindi: 'Go का past form "went" है, "goed" नहीं'
        },
        { 
          wrong: 'She was cook dinner.', 
          correct: 'She was cooking dinner.', 
          reason: 'Past continuous uses V1+ing',
          reason_hindi: 'Past continuous में V1+ing का प्रयोग होता है'
        }
      ]
    },
    practice_questions: [
      {
        id: 'pst9-q1',
        question_type: 'mcq',
        question_text: 'I _____ to Delhi last week.',
        question_text_hindi: 'मैं पिछले सप्ताह दिल्ली _____ था।',
        options: ['go', 'went', 'gone', 'going'],
        correct_answer: 'went',
        explanation: '"Last week" requires simple past tense',
        explanation_hindi: '"Last week" के साथ simple past का प्रयोग होता है',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'pst9-q2',
        question_type: 'mcq',
        question_text: 'She _____ a movie when I called.',
        question_text_hindi: 'जब मैंने फोन किया तब वह फिल्म _____ थी।',
        options: ['watched', 'was watching', 'had watched', 'watches'],
        correct_answer: 'was watching',
        explanation: 'Action in progress in past - past continuous',
        explanation_hindi: 'अतीत में जारी क्रिया - past continuous',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'pst9-q3',
        question_type: 'mcq',
        question_text: 'They _____ their homework before the teacher arrived.',
        question_text_hindi: 'शिक्षक के आने से पहले उन्होंने अपना गृहकार्य _____ था।',
        options: ['finished', 'were finishing', 'had finished', 'finish'],
        correct_answer: 'had finished',
        explanation: 'Action completed before another past action - past perfect',
        explanation_hindi: 'किसी अन्य past action से पहले पूर्ण क्रिया - past perfect',
        difficulty: 'hard',
        marks: 1
      },
      {
        id: 'pst9-q4',
        question_type: 'mcq',
        question_text: 'He _____ for three hours before the bus came.',
        question_text_hindi: 'बस आने से पहले वह तीन घंटे से _____ था।',
        options: ['waited', 'was waiting', 'had been waiting', 'waits'],
        correct_answer: 'had been waiting',
        explanation: 'Duration before past point - past perfect continuous',
        explanation_hindi: 'Past point से पहले की अवधि - past perfect continuous',
        difficulty: 'hard',
        marks: 1
      },
      {
        id: 'pst9-q5',
        question_type: 'fill_blank',
        question_text: 'The children _____ (play) in the park yesterday.',
        question_text_hindi: 'बच्चे कल पार्क में _____ थे।',
        correct_answer: 'played',
        explanation: '"Yesterday" indicates simple past',
        explanation_hindi: '"Yesterday" simple past को दर्शाता है',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'pst9-q6',
        question_type: 'fill_blank',
        question_text: 'I _____ (study) when the lights went out.',
        question_text_hindi: 'जब बत्तियाँ गईं तब मैं _____ था।',
        correct_answer: 'was studying',
        explanation: 'Interrupted action in past - past continuous',
        explanation_hindi: 'Past में interrupted action - past continuous',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'pst9-q7',
        question_type: 'error_correction',
        question_text: 'Find the error: I seen that movie last night.',
        question_text_hindi: 'त्रुटि खोजें: I seen that movie last night.',
        correct_answer: 'seen → saw',
        explanation: 'Simple past uses V2 (saw), not V3 (seen)',
        explanation_hindi: 'Simple past में V2 (saw) का प्रयोग होता है, V3 (seen) का नहीं',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'pst9-q8',
        question_type: 'error_correction',
        question_text: 'Find the error: She were cooking when I came.',
        question_text_hindi: 'त्रुटि खोजें: She were cooking when I came.',
        correct_answer: 'were → was',
        explanation: 'Singular subject uses "was"',
        explanation_hindi: 'Singular subject के साथ "was" का प्रयोग होता है',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'pst9-q9',
        question_type: 'transformation',
        question_text: 'Transform to past continuous: Ram wrote a letter.',
        question_text_hindi: 'Past continuous में बदलें: Ram wrote a letter.',
        correct_answer: 'Ram was writing a letter.',
        explanation: 'Simple to continuous shows ongoing action',
        explanation_hindi: 'Simple से continuous में बदलने पर चल रही क्रिया दर्शाता है',
        difficulty: 'medium',
        marks: 2
      },
      {
        id: 'pst9-q10',
        question_type: 'transformation',
        question_text: 'Transform to past perfect: She finished her work.',
        question_text_hindi: 'Past perfect में बदलें: She finished her work.',
        correct_answer: 'She had finished her work.',
        explanation: 'Past perfect: had + V3',
        explanation_hindi: 'Past perfect: had + V3',
        difficulty: 'easy',
        marks: 2
      },
      {
        id: 'pst9-q11',
        question_type: 'reordering',
        question_text: 'Rearrange: had / finished / I / work / my / already',
        question_text_hindi: 'पुनर्व्यवस्थित करें: had / finished / I / work / my / already',
        correct_answer: 'I had already finished my work.',
        explanation: 'Past perfect: Subject + had + adverb + V3 + object',
        explanation_hindi: 'Past perfect: Subject + had + adverb + V3 + object',
        difficulty: 'medium',
        marks: 2
      },
      {
        id: 'pst9-q12',
        question_type: 'fill_blank',
        question_text: 'She _____ (eat) dinner before I arrived.',
        question_text_hindi: 'मेरे आने से पहले उसने रात का खाना _____ था।',
        correct_answer: 'had eaten',
        explanation: 'Action before another past action - past perfect',
        explanation_hindi: 'किसी अन्य past action से पहले की क्रिया - past perfect',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'pst9-q13',
        question_type: 'fill_blank',
        question_text: 'They _____ (live) there for 5 years before they moved.',
        question_text_hindi: 'स्थानांतरित होने से पहले वे वहाँ 5 साल से _____ थे।',
        correct_answer: 'had been living',
        explanation: 'Duration before past point - past perfect continuous',
        explanation_hindi: 'Past point से पहले की अवधि - past perfect continuous',
        difficulty: 'hard',
        marks: 1
      },
      {
        id: 'pst9-q14',
        question_type: 'error_correction',
        question_text: 'Find the error: They has completed the work.',
        question_text_hindi: 'त्रुटि खोजें: They has completed the work.',
        correct_answer: 'has → had',
        explanation: 'Past perfect uses "had" with all subjects',
        explanation_hindi: 'Past perfect में सभी subjects के साथ "had" का प्रयोग होता है',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'pst9-q15',
        question_type: 'error_correction',
        question_text: 'Find the error: He had been wait for an hour.',
        question_text_hindi: 'त्रुटि खोजें: He had been wait for an hour.',
        correct_answer: 'wait → waiting',
        explanation: 'Past perfect continuous uses V1+ing',
        explanation_hindi: 'Past perfect continuous में V1+ing का प्रयोग होता है',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'pst9-q16',
        question_type: 'transformation',
        question_text: 'Transform to simple past: They were playing cricket.',
        question_text_hindi: 'Simple past में बदलें: They were playing cricket.',
        correct_answer: 'They played cricket.',
        explanation: 'Continuous to simple shows completed action',
        explanation_hindi: 'Continuous से simple में completed action दर्शाता है',
        difficulty: 'easy',
        marks: 2
      },
      {
        id: 'pst9-q17',
        question_type: 'reordering',
        question_text: 'Rearrange: the / garden / children / playing / were / in / the',
        question_text_hindi: 'पुनर्व्यवस्थित करें: the / garden / children / playing / were / in / the',
        correct_answer: 'The children were playing in the garden.',
        explanation: 'Past continuous: Subject + was/were + V1+ing + place',
        explanation_hindi: 'Past continuous: Subject + was/were + V1+ing + स्थान',
        difficulty: 'medium',
        marks: 2
      },
      {
        id: 'pst9-q18',
        question_type: 'mcq',
        question_text: 'The train _____ before we reached the station.',
        question_text_hindi: 'स्टेशन पहुंचने से पहले ट्रेन _____ गई थी।',
        options: ['left', 'was leaving', 'had left', 'leaves'],
        correct_answer: 'had left',
        explanation: 'Action before another past action - past perfect',
        explanation_hindi: 'किसी अन्य past action से पहले - past perfect',
        difficulty: 'hard',
        marks: 1
      },
      {
        id: 'pst9-q19',
        question_type: 'mcq',
        question_text: 'It _____ heavily last night.',
        question_text_hindi: 'कल रात बहुत _____ थी।',
        options: ['rains', 'rained', 'was raining', 'had rained'],
        correct_answer: 'rained',
        explanation: '"Last night" indicates simple past',
        explanation_hindi: '"Last night" simple past को दर्शाता है',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'pst9-q20',
        question_type: 'mcq',
        question_text: 'While I _____ in the park, I saw my friend.',
        question_text_hindi: 'जब मैं पार्क में _____ था, मैंने अपने दोस्त को देखा।',
        options: ['walked', 'was walking', 'had walked', 'walk'],
        correct_answer: 'was walking',
        explanation: '"While" with background action - past continuous',
        explanation_hindi: '"While" के साथ background action - past continuous',
        difficulty: 'medium',
        marks: 1
      }
    ]
  }
];

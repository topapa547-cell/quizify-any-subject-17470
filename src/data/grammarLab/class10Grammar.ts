import { GrammarTopic } from './class9Grammar';

export const class10GrammarTopics: GrammarTopic[] = [
  {
    id: 'active-passive-10',
    topic_name: 'Active and Passive Voice',
    topic_name_hindi: 'कर्तृवाच्य और कर्मवाच्य',
    class_level: 10,
    difficulty: 'intermediate',
    exam_weightage: 'high',
    estimated_study_time: 50,
    related_topics: ['tenses-revision-10', 'modals-10'],
    explanation: {
      definition: 'Active voice focuses on the doer of the action, while passive voice focuses on the action itself or the receiver of the action.',
      definition_hindi: 'कर्तृवाच्य में क्रिया करने वाले पर ध्यान होता है, जबकि कर्मवाच्य में क्रिया या क्रिया के प्राप्तकर्ता पर ध्यान होता है।',
      key_points: [
        'Active: Subject performs the action (I write a letter)',
        'Passive: Subject receives the action (A letter is written by me)',
        'Passive = Object + be verb + V3 + by + Subject',
        'Only transitive verbs can be changed to passive',
        'Tense of "be" verb matches the tense of active sentence'
      ],
      key_points_hindi: [
        'कर्तृवाच्य: कर्ता क्रिया करता है (मैं पत्र लिखता हूं)',
        'कर्मवाच्य: कर्ता क्रिया प्राप्त करता है (पत्र मेरे द्वारा लिखा जाता है)',
        'कर्मवाच्य = Object + be verb + V3 + by + Subject',
        'केवल सकर्मक क्रियाओं को कर्मवाच्य में बदला जा सकता है',
        '"be" क्रिया का काल सक्रिय वाक्य के काल से मेल खाता है'
      ],
      rules: [
        'Present Simple: is/am/are + V3 (The letter is written)',
        'Past Simple: was/were + V3 (The letter was written)',
        'Future Simple: will be + V3 (The letter will be written)',
        'Present Perfect: has/have been + V3 (The letter has been written)',
        'Past Perfect: had been + V3 (The letter had been written)',
        'Modals: modal + be + V3 (The letter can be written)'
      ],
      rules_hindi: [
        'सामान्य वर्तमान: is/am/are + V3 (पत्र लिखा जाता है)',
        'सामान्य भूत: was/were + V3 (पत्र लिखा गया था)',
        'सामान्य भविष्य: will be + V3 (पत्र लिखा जाएगा)',
        'वर्तमान पूर्ण: has/have been + V3 (पत्र लिखा गया है)',
        'भूत पूर्ण: had been + V3 (पत्र लिखा गया था)',
        'सहायक क्रिया: modal + be + V3 (पत्र लिखा जा सकता है)'
      ],
      examples: [
        {
          sentence: 'Active: She writes a novel. → Passive: A novel is written by her.',
          sentence_hindi: 'कर्तृवाच्य: वह उपन्यास लिखती है। → कर्मवाच्य: उपन्यास उसके द्वारा लिखा जाता है।',
          explanation: 'Present Simple passive transformation',
          explanation_hindi: 'सामान्य वर्तमान कर्मवाच्य परिवर्तन'
        },
        {
          sentence: 'Active: They built this house. → Passive: This house was built by them.',
          sentence_hindi: 'कर्तृवाच्य: उन्होंने यह घर बनाया। → कर्मवाच्य: यह घर उनके द्वारा बनाया गया था।',
          explanation: 'Past Simple passive transformation',
          explanation_hindi: 'सामान्य भूत कर्मवाच्य परिवर्तन'
        },
        {
          sentence: 'Active: He has completed the work. → Passive: The work has been completed by him.',
          sentence_hindi: 'कर्तृवाच्य: उसने काम पूरा किया है। → कर्मवाच्य: काम उसके द्वारा पूरा किया गया है।',
          explanation: 'Present Perfect passive transformation',
          explanation_hindi: 'वर्तमान पूर्ण कर्मवाच्य परिवर्तन'
        },
        {
          sentence: 'Active: We should help the poor. → Passive: The poor should be helped by us.',
          sentence_hindi: 'कर्तृवाच्य: हमें गरीबों की मदद करनी चाहिए। → कर्मवाच्य: गरीबों की मदद हमारे द्वारा की जानी चाहिए।',
          explanation: 'Modal passive transformation',
          explanation_hindi: 'सहायक क्रिया कर्मवाच्य परिवर्तन'
        }
      ],
      common_mistakes: [
        {
          wrong: 'The book is wrote by him.',
          correct: 'The book is written by him.',
          reason: 'Always use V3 (Past Participle) in passive, not V2',
          reason_hindi: 'कर्मवाच्य में हमेशा V3 (Past Participle) का उपयोग करें, V2 का नहीं'
        },
        {
          wrong: 'He is laughed. (Intransitive verb)',
          correct: 'Active: He laughs. (Cannot be passive)',
          reason: 'Intransitive verbs (laugh, cry, sleep) cannot be made passive',
          reason_hindi: 'अकर्मक क्रियाओं (laugh, cry, sleep) को कर्मवाच्य में नहीं बदला जा सकता'
        },
        {
          wrong: 'The house built by them.',
          correct: 'The house was built by them.',
          reason: 'Don\'t forget the "be" verb in passive voice',
          reason_hindi: 'कर्मवाच्य में "be" क्रिया न भूलें'
        }
      ]
    },
    practice_questions: [
      {
        id: 'ap10-q1',
        question_type: 'transformation',
        question_text: 'Active to Passive: The teacher teaches us English.',
        question_text_hindi: 'कर्तृवाच्य से कर्मवाच्य: The teacher teaches us English.',
        correct_answer: 'We are taught English by the teacher. / English is taught to us by the teacher.',
        explanation: 'Present Simple: Object + am/is/are + V3 + by + Subject',
        explanation_hindi: 'सामान्य वर्तमान: Object + am/is/are + V3 + by + Subject',
        difficulty: 'medium',
        marks: 2
      },
      {
        id: 'ap10-q2',
        question_type: 'mcq',
        question_text: 'Choose the correct passive form: They will complete the project.',
        question_text_hindi: 'सही कर्मवाच्य रूप चुनें: They will complete the project.',
        options: [
          'The project will completed by them.',
          'The project will be completed by them.',
          'The project is completed by them.',
          'The project was completed by them.'
        ],
        correct_answer: 'The project will be completed by them.',
        explanation: 'Future Simple Passive: will be + V3',
        explanation_hindi: 'सामान्य भविष्य कर्मवाच्य: will be + V3',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'ap10-q3',
        question_type: 'error_correction',
        question_text: 'The letter is wrote by me yesterday.',
        question_text_hindi: 'The letter is wrote by me yesterday.',
        correct_answer: 'The letter was written by me yesterday.',
        explanation: 'Use "was" for past tense and V3 "written", not V2 "wrote"',
        explanation_hindi: 'भूत काल के लिए "was" और V3 "written" का उपयोग करें, V2 "wrote" का नहीं',
        difficulty: 'medium',
        marks: 2
      },
      {
        id: 'ap10-q4',
        question_type: 'transformation',
        question_text: 'Passive to Active: The cake was baked by my mother.',
        question_text_hindi: 'कर्मवाच्य से कर्तृवाच्य: The cake was baked by my mother.',
        correct_answer: 'My mother baked the cake.',
        explanation: 'Convert passive to active by making the doer (by + object) the subject',
        explanation_hindi: 'कर्ता (by + object) को कर्ता बनाकर कर्मवाच्य को कर्तृवाच्य में बदलें',
        difficulty: 'medium',
        marks: 2
      },
      {
        id: 'ap10-q5',
        question_type: 'fill_blank',
        question_text: 'The thief _____ (catch) by the police last night.',
        question_text_hindi: 'चोर को कल रात पुलिस द्वारा _____ (पकड़ना) गया।',
        correct_answer: 'was caught',
        explanation: 'Past Simple Passive: was/were + V3 (caught)',
        explanation_hindi: 'सामान्य भूत कर्मवाच्य: was/were + V3 (caught)',
        difficulty: 'easy',
        marks: 1
      }
    ]
  },
  {
    id: 'reported-speech-10',
    topic_name: 'Reported Speech (Indirect Speech)',
    topic_name_hindi: 'अप्रत्यक्ष कथन',
    class_level: 10,
    difficulty: 'advanced',
    exam_weightage: 'high',
    estimated_study_time: 55,
    related_topics: ['modals-10', 'tenses-revision-10'],
    explanation: {
      definition: 'Reported speech (indirect speech) is used to report what someone said without using their exact words.',
      definition_hindi: 'अप्रत्यक्ष कथन का उपयोग किसी के कहे गए शब्दों को उनके सटीक शब्दों के बिना रिपोर्ट करने के लिए किया जाता है।',
      key_points: [
        'Direct Speech: Uses exact words in quotation marks',
        'Indirect Speech: Reports the message without quotation marks',
        'Reporting verbs: said, told, asked, replied, etc.',
        'Tense changes: Present → Past, Past → Past Perfect',
        'Pronoun changes: I → he/she, you → I/we',
        'Time/place words change: today → that day, here → there'
      ],
      key_points_hindi: [
        'प्रत्यक्ष कथन: उद्धरण चिह्नों में सटीक शब्दों का उपयोग',
        'अप्रत्यक्ष कथन: उद्धरण चिह्नों के बिना संदेश रिपोर्ट करना',
        'रिपोर्टिंग क्रियाएं: said, told, asked, replied, आदि',
        'काल परिवर्तन: वर्तमान → भूत, भूत → भूत पूर्ण',
        'सर्वनाम परिवर्तन: I → he/she, you → I/we',
        'समय/स्थान शब्द बदलते हैं: today → that day, here → there'
      ],
      rules: [
        'Statements: said/told + that + changed sentence',
        'Questions: asked + if/whether (Yes/No) or Wh-word + changed sentence',
        'Commands: ordered/requested/advised + object + to + V1',
        'Present Simple → Past Simple (is → was, go → went)',
        'Present Continuous → Past Continuous (am going → was going)',
        'Present Perfect → Past Perfect (have gone → had gone)',
        'will → would, can → could, may → might',
        'this → that, these → those, now → then, today → that day'
      ],
      rules_hindi: [
        'कथन: said/told + that + बदला हुआ वाक्य',
        'प्रश्न: asked + if/whether (Yes/No) या Wh-word + बदला हुआ वाक्य',
        'आदेश: ordered/requested/advised + object + to + V1',
        'सामान्य वर्तमान → सामान्य भूत (is → was, go → went)',
        'वर्तमान निरंतर → भूत निरंतर (am going → was going)',
        'वर्तमान पूर्ण → भूत पूर्ण (have gone → had gone)',
        'will → would, can → could, may → might',
        'this → that, these → those, now → then, today → that day'
      ],
      examples: [
        {
          sentence: 'Direct: She said, "I am happy." → Indirect: She said that she was happy.',
          sentence_hindi: 'प्रत्यक्ष: उसने कहा, "मैं खुश हूं।" → अप्रत्यक्ष: उसने कहा कि वह खुश थी।',
          explanation: 'Statement conversion with tense and pronoun change',
          explanation_hindi: 'काल और सर्वनाम परिवर्तन के साथ कथन रूपांतरण'
        },
        {
          sentence: 'Direct: He said, "Where are you going?" → Indirect: He asked where I was going.',
          sentence_hindi: 'प्रत्यक्ष: उसने कहा, "तुम कहां जा रहे हो?" → अप्रत्यक्ष: उसने पूछा कि मैं कहां जा रहा था।',
          explanation: 'Wh-question conversion',
          explanation_hindi: 'Wh-प्रश्न रूपांतरण'
        },
        {
          sentence: 'Direct: Teacher said, "Be quiet." → Indirect: Teacher ordered us to be quiet.',
          sentence_hindi: 'प्रत्यक्ष: शिक्षक ने कहा, "शांत रहो।" → अप्रत्यक्ष: शिक्षक ने हमें शांत रहने का आदेश दिया।',
          explanation: 'Command conversion',
          explanation_hindi: 'आदेश रूपांतरण'
        }
      ],
      common_mistakes: [
        {
          wrong: 'He said that I am busy. (Present tense)',
          correct: 'He said that he was busy. (Past tense)',
          reason: 'Change tense from present to past in reported speech',
          reason_hindi: 'अप्रत्यक्ष कथन में काल को वर्तमान से भूत में बदलें'
        },
        {
          wrong: 'She told that she is coming.',
          correct: 'She said that she was coming.',
          reason: 'Use "said" for statements without object, "told" needs object',
          reason_hindi: 'कथनों के लिए "said" का उपयोग करें, "told" को object चाहिए'
        },
        {
          wrong: 'He asked me where was I going.',
          correct: 'He asked me where I was going.',
          reason: 'In indirect questions, use statement word order (subject + verb)',
          reason_hindi: 'अप्रत्यक्ष प्रश्नों में, कथन शब्द क्रम का उपयोग करें (subject + verb)'
        }
      ]
    },
    practice_questions: [
      {
        id: 'rs10-q1',
        question_type: 'transformation',
        question_text: 'Direct to Indirect: She said, "I am learning English."',
        question_text_hindi: 'प्रत्यक्ष से अप्रत्यक्ष: She said, "I am learning English."',
        correct_answer: 'She said that she was learning English.',
        explanation: 'Present Continuous → Past Continuous, I → she',
        explanation_hindi: 'वर्तमान निरंतर → भूत निरंतर, I → she',
        difficulty: 'easy',
        marks: 2
      },
      {
        id: 'rs10-q2',
        question_type: 'mcq',
        question_text: 'Choose correct indirect speech: He said, "I will help you."',
        question_text_hindi: 'सही अप्रत्यक्ष कथन चुनें: He said, "I will help you."',
        options: [
          'He said that he will help me.',
          'He said that he would help me.',
          'He said that he helped me.',
          'He told that he would help me.'
        ],
        correct_answer: 'He said that he would help me.',
        explanation: 'will → would, you → me',
        explanation_hindi: 'will → would, you → me',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'rs10-q3',
        question_type: 'transformation',
        question_text: 'Direct to Indirect: Mother said to me, "Do your homework."',
        question_text_hindi: 'प्रत्यक्ष से अप्रत्यक्ष: Mother said to me, "Do your homework."',
        correct_answer: 'Mother ordered/told me to do my homework.',
        explanation: 'Command: told/ordered + object + to + V1',
        explanation_hindi: 'आदेश: told/ordered + object + to + V1',
        difficulty: 'medium',
        marks: 2
      },
      {
        id: 'rs10-q4',
        question_type: 'error_correction',
        question_text: 'He asked me where do I live.',
        question_text_hindi: 'He asked me where do I live.',
        correct_answer: 'He asked me where I lived.',
        explanation: 'Indirect question uses statement word order and past tense',
        explanation_hindi: 'अप्रत्यक्ष प्रश्न में कथन शब्द क्रम और भूत काल का उपयोग होता है',
        difficulty: 'medium',
        marks: 2
      },
      {
        id: 'rs10-q5',
        question_type: 'transformation',
        question_text: 'Direct to Indirect: She said, "Are you coming to the party?"',
        question_text_hindi: 'प्रत्यक्ष से अप्रत्यक्ष: She said, "Are you coming to the party?"',
        correct_answer: 'She asked if/whether I was coming to the party.',
        explanation: 'Yes/No question: asked + if/whether + statement order',
        explanation_hindi: 'Yes/No प्रश्न: asked + if/whether + कथन क्रम',
        difficulty: 'hard',
        marks: 3
      }
    ]
  }
];

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
    identification_marks: {
      signal_words: ['by', 'by whom', 'was/were', 'is/am/are', 'has been', 'had been', 'will be', 'being', 'been'],
      signal_words_hindi: ['द्वारा', 'के द्वारा', 'से', 'किसके द्वारा'],
      sentence_endings: ['is/am/are + V3 (Present)', 'was/were + V3 (Past)', 'will be + V3 (Future)', 'has/have been + V3 (Perfect)'],
      sentence_endings_hindi: ['जाता है, जाती है (Present)', 'गया था, गई थी (Past)', 'जाएगा, जाएगी (Future)', 'गया है, गई है (Perfect)']
    },
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
    identification_marks: {
      signal_words: ['said', 'told', 'asked', 'replied', 'answered', 'exclaimed', 'ordered', 'requested', 'advised', 'suggested', 'wondered', 'enquired'],
      signal_words_hindi: ['कहा कि', 'बताया कि', 'पूछा कि', 'उत्तर दिया कि', 'आदेश दिया कि', 'अनुरोध किया कि'],
      sentence_endings: ['that + clause (statements)', 'if/whether + clause (yes/no questions)', 'wh-word + clause (wh-questions)', 'to + V1 (commands)'],
      sentence_endings_hindi: ['कि + वाक्य (कथन)', 'कि क्या + वाक्य (हाँ/नहीं प्रश्न)', 'कहाँ/क्या/कब + वाक्य (प्रश्न)', 'को + V1 (आदेश)']
    },
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
  },
  {
    id: 'tenses-revision-10',
    topic_name: 'Tenses Revision (All 12 Tenses)',
    topic_name_hindi: 'काल संशोधन (सभी 12 काल)',
    class_level: 10,
    difficulty: 'advanced',
    exam_weightage: 'high',
    estimated_study_time: 90,
    related_topics: ['active-passive-10', 'reported-speech-10'],
    identification_marks: {
      signal_words: ['always', 'usually', 'now', 'at present', 'yesterday', 'ago', 'last', 'already', 'just', 'yet', 'since', 'for', 'tomorrow', 'next', 'by', 'before', 'while', 'when'],
      signal_words_hindi: ['हमेशा', 'आमतौर पर', 'अभी', 'कल', 'पिछले', 'पहले से', 'अभी तक', 'से (since)', 'के लिए (for)', 'कल (future)', 'अगले'],
      sentence_endings: ['V1/V1+s (Simple Present)', 'V2 (Simple Past)', 'will+V1 (Simple Future)', 'is/am/are+V-ing (Present Continuous)', 'was/were+V-ing (Past Continuous)', 'has/have+V3 (Present Perfect)', 'had+V3 (Past Perfect)'],
      sentence_endings_hindi: ['ता है, ते हैं (Present)', 'या, ई, ए (Past Simple)', 'गा, गी, गे (Future)', 'रहा है (Continuous)', 'रहा था (Past Continuous)', 'चुका है (Perfect)', 'चुका था (Past Perfect)']
    },
    explanation: {
      definition: 'Tenses indicate the time of action or state. English has 12 tenses divided into Present, Past, and Future categories.',
      definition_hindi: 'काल क्रिया या स्थिति के समय को दर्शाते हैं। अंग्रेजी में 12 काल हैं जो वर्तमान, भूत और भविष्य में विभाजित हैं।',
      key_points: [
        'Present: Simple, Continuous, Perfect, Perfect Continuous',
        'Past: Simple, Continuous, Perfect, Perfect Continuous',
        'Future: Simple, Continuous, Perfect, Perfect Continuous',
        'Simple tenses: Regular/habitual actions',
        'Continuous tenses: Ongoing actions (verb+ing)',
        'Perfect tenses: Completed actions (have/has/had + V3)',
        'Perfect Continuous: Duration of action (have/has/had been + V-ing)'
      ],
      key_points_hindi: [
        'वर्तमान: सामान्य, निरंतर, पूर्ण, पूर्ण निरंतर',
        'भूत: सामान्य, निरंतर, पूर्ण, पूर्ण निरंतर',
        'भविष्य: सामान्य, निरंतर, पूर्ण, पूर्ण निरंतर',
        'सामान्य काल: नियमित/आदतन क्रियाएं',
        'निरंतर काल: चल रही क्रियाएं (verb+ing)',
        'पूर्ण काल: पूर्ण क्रियाएं (have/has/had + V3)',
        'पूर्ण निरंतर: क्रिया की अवधि (have/has/had been + V-ing)'
      ],
      rules: [
        'Present Simple: S + V1/V1+s/es (I go, He goes)',
        'Present Continuous: S + am/is/are + V-ing (I am going)',
        'Present Perfect: S + has/have + V3 (I have gone)',
        'Present Perfect Continuous: S + has/have been + V-ing (I have been going)',
        'Past Simple: S + V2 (I went)',
        'Past Continuous: S + was/were + V-ing (I was going)',
        'Past Perfect: S + had + V3 (I had gone)',
        'Past Perfect Continuous: S + had been + V-ing (I had been going)',
        'Future Simple: S + will + V1 (I will go)',
        'Future Continuous: S + will be + V-ing (I will be going)',
        'Future Perfect: S + will have + V3 (I will have gone)',
        'Future Perfect Continuous: S + will have been + V-ing (I will have been going)'
      ],
      rules_hindi: [
        'सामान्य वर्तमान: S + V1/V1+s/es (मैं जाता हूं, वह जाता है)',
        'वर्तमान निरंतर: S + am/is/are + V-ing (मैं जा रहा हूं)',
        'वर्तमान पूर्ण: S + has/have + V3 (मैं गया हूं)',
        'वर्तमान पूर्ण निरंतर: S + has/have been + V-ing (मैं जा रहा हूं)',
        'सामान्य भूत: S + V2 (मैं गया)',
        'भूत निरंतर: S + was/were + V-ing (मैं जा रहा था)',
        'भूत पूर्ण: S + had + V3 (मैं गया था)',
        'भूत पूर्ण निरंतर: S + had been + V-ing (मैं जा रहा था)',
        'सामान्य भविष्य: S + will + V1 (मैं जाऊंगा)',
        'भविष्य निरंतर: S + will be + V-ing (मैं जा रहा होऊंगा)',
        'भविष्य पूर्ण: S + will have + V3 (मैं गया होऊंगा)',
        'भविष्य पूर्ण निरंतर: S + will have been + V-ing (मैं जा रहा होऊंगा)'
      ],
      examples: [
        {
          sentence: 'Present Simple: I play cricket every day.',
          sentence_hindi: 'सामान्य वर्तमान: मैं रोज क्रिकेट खेलता हूं।',
          explanation: 'Used for habitual actions',
          explanation_hindi: 'आदतन क्रियाओं के लिए उपयोग किया जाता है'
        },
        {
          sentence: 'Past Continuous: He was reading when I called.',
          sentence_hindi: 'भूत निरंतर: जब मैंने फोन किया तो वह पढ़ रहा था।',
          explanation: 'Ongoing action in the past interrupted by another action',
          explanation_hindi: 'भूत में चल रही क्रिया जो दूसरी क्रिया से बाधित हुई'
        },
        {
          sentence: 'Present Perfect: She has finished her homework.',
          sentence_hindi: 'वर्तमान पूर्ण: उसने अपना होमवर्क खत्म कर लिया है।',
          explanation: 'Action completed in the past with present result',
          explanation_hindi: 'भूत में पूर्ण क्रिया जिसका वर्तमान परिणाम है'
        },
        {
          sentence: 'Future Perfect Continuous: By 2025, I will have been working here for 10 years.',
          sentence_hindi: 'भविष्य पूर्ण निरंतर: 2025 तक, मैं यहां 10 साल से काम कर रहा होऊंगा।',
          explanation: 'Duration of action up to a point in the future',
          explanation_hindi: 'भविष्य में एक बिंदु तक क्रिया की अवधि'
        }
      ],
      common_mistakes: [
        {
          wrong: 'He is knowing the answer.',
          correct: 'He knows the answer.',
          reason: 'Stative verbs (know, believe, love) don\'t take continuous form',
          reason_hindi: 'स्थिति क्रियाएं (know, believe, love) निरंतर रूप नहीं लेतीं'
        },
        {
          wrong: 'I have saw that movie.',
          correct: 'I have seen that movie.',
          reason: 'Use V3 (seen) with has/have, not V2 (saw)',
          reason_hindi: 'has/have के साथ V3 (seen) का उपयोग करें, V2 (saw) का नहीं'
        },
        {
          wrong: 'She will goes to Delhi.',
          correct: 'She will go to Delhi.',
          reason: 'Use V1 (base form) after will, not V1+s',
          reason_hindi: 'will के बाद V1 (मूल रूप) का उपयोग करें, V1+s का नहीं'
        },
        {
          wrong: 'I am living here since 2010.',
          correct: 'I have been living here since 2010.',
          reason: 'Use Present Perfect Continuous with "since" for duration',
          reason_hindi: 'अवधि के लिए "since" के साथ वर्तमान पूर्ण निरंतर का उपयोग करें'
        }
      ]
    },
    practice_questions: [
      {
        id: 'tense10-q1',
        question_type: 'fill_blank',
        question_text: 'I _____ (study) English for five years.',
        question_text_hindi: 'मैं पांच साल से अंग्रेजी _____ (पढ़ना) हूं।',
        correct_answer: 'have been studying',
        explanation: 'Present Perfect Continuous with "for" duration',
        explanation_hindi: '"for" अवधि के साथ वर्तमान पूर्ण निरंतर',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'tense10-q2',
        question_type: 'mcq',
        question_text: 'Choose the correct tense: When I reached the station, the train _____.',
        question_text_hindi: 'सही काल चुनें: जब मैं स्टेशन पहुंचा, तो ट्रेन _____।',
        options: [
          'has left',
          'had left',
          'was leaving',
          'left'
        ],
        correct_answer: 'had left',
        explanation: 'Past Perfect: Action completed before another past action',
        explanation_hindi: 'भूत पूर्ण: एक भूत क्रिया से पहले पूर्ण क्रिया',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'tense10-q3',
        question_type: 'error_correction',
        question_text: 'She is knowing me since childhood.',
        question_text_hindi: 'She is knowing me since childhood.',
        correct_answer: 'She has known me since childhood.',
        explanation: '"Know" is a stative verb (no continuous) + use Present Perfect with "since"',
        explanation_hindi: '"Know" स्थिति क्रिया है (निरंतर नहीं) + "since" के साथ वर्तमान पूर्ण',
        difficulty: 'medium',
        marks: 2
      },
      {
        id: 'tense10-q4',
        question_type: 'fill_blank',
        question_text: 'By next month, we _____ (complete) this project.',
        question_text_hindi: 'अगले महीने तक, हम यह परियोजना _____ (पूरा करना)।',
        correct_answer: 'will have completed',
        explanation: 'Future Perfect: Action to be completed before a future time',
        explanation_hindi: 'भविष्य पूर्ण: भविष्य के समय से पहले पूर्ण होने वाली क्रिया',
        difficulty: 'hard',
        marks: 2
      },
      {
        id: 'tense10-q5',
        question_type: 'mcq',
        question_text: 'The sun _____ in the east.',
        question_text_hindi: 'सूरज पूर्व में _____।',
        options: [
          'is rising',
          'rises',
          'has risen',
          'will rise'
        ],
        correct_answer: 'rises',
        explanation: 'Present Simple for universal truths and facts',
        explanation_hindi: 'सार्वभौमिक सत्य और तथ्यों के लिए सामान्य वर्तमान',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'tense10-q6',
        question_type: 'transformation',
        question_text: 'Change to Past Continuous: I eat breakfast at 8 AM.',
        question_text_hindi: 'भूत निरंतर में बदलें: I eat breakfast at 8 AM.',
        correct_answer: 'I was eating breakfast at 8 AM.',
        explanation: 'Past Continuous: was/were + V-ing',
        explanation_hindi: 'भूत निरंतर: was/were + V-ing',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'tense10-q7',
        question_type: 'fill_blank',
        question_text: 'He _____ (work) in this company since 2015.',
        question_text_hindi: 'वह 2015 से इस कंपनी में _____ (काम करना)।',
        correct_answer: 'has been working',
        explanation: 'Present Perfect Continuous with "since" for starting point',
        explanation_hindi: 'शुरुआती बिंदु के लिए "since" के साथ वर्तमान पूर्ण निरंतर',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'tense10-q8',
        question_type: 'mcq',
        question_text: 'They _____ cricket when it started raining.',
        question_text_hindi: 'जब बारिश शुरू हुई तो वे क्रिकेट _____ थे।',
        options: [
          'played',
          'were playing',
          'are playing',
          'have played'
        ],
        correct_answer: 'were playing',
        explanation: 'Past Continuous: Ongoing action interrupted by another action',
        explanation_hindi: 'भूत निरंतर: दूसरी क्रिया से बाधित चल रही क्रिया',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'tense10-q9',
        question_type: 'error_correction',
        question_text: 'I will going to school tomorrow.',
        question_text_hindi: 'I will going to school tomorrow.',
        correct_answer: 'I will go to school tomorrow. / I will be going to school tomorrow.',
        explanation: 'Use V1 after will OR will be + V-ing for Future Continuous',
        explanation_hindi: 'will के बाद V1 या भविष्य निरंतर के लिए will be + V-ing',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'tense10-q10',
        question_type: 'fill_blank',
        question_text: 'She _____ (finish) her work before you arrive.',
        question_text_hindi: 'तुम्हारे आने से पहले वह अपना काम _____ (खत्म करना)।',
        correct_answer: 'will have finished',
        explanation: 'Future Perfect: Action to be completed before another future action',
        explanation_hindi: 'भविष्य पूर्ण: दूसरी भविष्य क्रिया से पहले पूर्ण होने वाली क्रिया',
        difficulty: 'hard',
        marks: 2
      },
      {
        id: 'tense10-q11',
        question_type: 'transformation',
        question_text: 'Change to Present Perfect: I live in Delhi.',
        question_text_hindi: 'वर्तमान पूर्ण में बदलें: I live in Delhi.',
        correct_answer: 'I have lived in Delhi.',
        explanation: 'Present Perfect: has/have + V3',
        explanation_hindi: 'वर्तमान पूर्ण: has/have + V3',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'tense10-q12',
        question_type: 'mcq',
        question_text: 'I _____ three books this month.',
        question_text_hindi: 'मैंने इस महीने तीन किताबें _____।',
        options: [
          'read',
          'am reading',
          'have read',
          'was reading'
        ],
        correct_answer: 'have read',
        explanation: 'Present Perfect: Action completed in a time period still continuing (this month)',
        explanation_hindi: 'वर्तमान पूर्ण: अभी भी जारी समय अवधि में पूर्ण क्रिया (इस महीने)',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'tense10-q13',
        question_type: 'fill_blank',
        question_text: 'At 10 PM tonight, I _____ (watch) a movie.',
        question_text_hindi: 'आज रात 10 बजे, मैं एक फिल्म _____ (देखना) रहा होऊंगा।',
        correct_answer: 'will be watching',
        explanation: 'Future Continuous: Action in progress at a specific future time',
        explanation_hindi: 'भविष्य निरंतर: भविष्य के विशिष्ट समय पर चल रही क्रिया',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'tense10-q14',
        question_type: 'error_correction',
        question_text: 'He has went to the market.',
        question_text_hindi: 'He has went to the market.',
        correct_answer: 'He has gone to the market.',
        explanation: 'Use V3 (gone) with has/have, not V2 (went)',
        explanation_hindi: 'has/have के साथ V3 (gone) का उपयोग करें, V2 (went) का नहीं',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'tense10-q15',
        question_type: 'mcq',
        question_text: 'When I was young, I _____ play cricket every day.',
        question_text_hindi: 'जब मैं छोटा था, मैं रोज क्रिकेट _____ था।',
        options: [
          'am playing',
          'played',
          'used to play',
          'have played'
        ],
        correct_answer: 'used to play',
        explanation: '"Used to" for past habits (no longer true)',
        explanation_hindi: 'भूत की आदतों के लिए "Used to" (अब सत्य नहीं)',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'tense10-q16',
        question_type: 'fill_blank',
        question_text: 'If it rains, we _____ (not go) out.',
        question_text_hindi: 'अगर बारिश होगी, तो हम बाहर नहीं _____ (जाना)।',
        correct_answer: 'will not go',
        explanation: 'First Conditional: if + Present Simple, will + V1',
        explanation_hindi: 'प्रथम शर्त: if + सामान्य वर्तमान, will + V1',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'tense10-q17',
        question_type: 'transformation',
        question_text: 'Change to Past Perfect: He finished his work.',
        question_text_hindi: 'भूत पूर्ण में बदलें: He finished his work.',
        correct_answer: 'He had finished his work.',
        explanation: 'Past Perfect: had + V3',
        explanation_hindi: 'भूत पूर्ण: had + V3',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'tense10-q18',
        question_type: 'mcq',
        question_text: 'She _____ for two hours when I called.',
        question_text_hindi: 'जब मैंने फोन किया तो वह दो घंटे से _____ थी।',
        options: [
          'was studying',
          'studied',
          'had been studying',
          'has been studying'
        ],
        correct_answer: 'had been studying',
        explanation: 'Past Perfect Continuous: Duration before a past action',
        explanation_hindi: 'भूत पूर्ण निरंतर: भूत क्रिया से पहले की अवधि',
        difficulty: 'hard',
        marks: 2
      },
      {
        id: 'tense10-q19',
        question_type: 'error_correction',
        question_text: 'I am believing in God.',
        question_text_hindi: 'I am believing in God.',
        correct_answer: 'I believe in God.',
        explanation: '"Believe" is a stative verb, no continuous form',
        explanation_hindi: '"Believe" स्थिति क्रिया है, निरंतर रूप नहीं',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'tense10-q20',
        question_type: 'fill_blank',
        question_text: 'The train _____ (leave) before we reached the station.',
        question_text_hindi: 'हमारे स्टेशन पहुंचने से पहले ट्रेन _____ (निकलना)।',
        correct_answer: 'had left',
        explanation: 'Past Perfect: First action completed before second past action',
        explanation_hindi: 'भूत पूर्ण: दूसरी भूत क्रिया से पहले पहली क्रिया पूर्ण',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'tense10-q21',
        question_type: 'mcq',
        question_text: 'Water _____ at 100 degrees Celsius.',
        question_text_hindi: 'पानी 100 डिग्री सेल्सियस पर _____।',
        options: [
          'is boiling',
          'boils',
          'has boiled',
          'will boil'
        ],
        correct_answer: 'boils',
        explanation: 'Present Simple for scientific facts',
        explanation_hindi: 'वैज्ञानिक तथ्यों के लिए सामान्य वर्तमान',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'tense10-q22',
        question_type: 'transformation',
        question_text: 'Change to Future Perfect Continuous: I am working here for 5 years.',
        question_text_hindi: 'भविष्य पूर्ण निरंतर में बदलें: I am working here for 5 years.',
        correct_answer: 'I will have been working here for 5 years.',
        explanation: 'Future Perfect Continuous: will have been + V-ing',
        explanation_hindi: 'भविष्य पूर्ण निरंतर: will have been + V-ing',
        difficulty: 'hard',
        marks: 2
      },
      {
        id: 'tense10-q23',
        question_type: 'fill_blank',
        question_text: 'Look! The children _____ (play) in the park.',
        question_text_hindi: 'देखो! बच्चे पार्क में _____ (खेलना) हैं।',
        correct_answer: 'are playing',
        explanation: 'Present Continuous: Action happening now (Look!)',
        explanation_hindi: 'वर्तमान निरंतर: अभी हो रही क्रिया (देखो!)',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'tense10-q24',
        question_type: 'error_correction',
        question_text: 'By tomorrow, I will finish my project.',
        question_text_hindi: 'By tomorrow, I will finish my project.',
        correct_answer: 'By tomorrow, I will have finished my project.',
        explanation: 'Use Future Perfect with "by" for completion before a future time',
        explanation_hindi: 'भविष्य के समय से पहले पूर्णता के लिए "by" के साथ भविष्य पूर्ण',
        difficulty: 'medium',
        marks: 2
      },
      {
        id: 'tense10-q25',
        question_type: 'mcq',
        question_text: 'I _____ my friend yesterday.',
        question_text_hindi: 'मैंने कल अपने दोस्त को _____।',
        options: [
          'meet',
          'met',
          'have met',
          'am meeting'
        ],
        correct_answer: 'met',
        explanation: 'Past Simple: Completed action at a specific past time (yesterday)',
        explanation_hindi: 'सामान्य भूत: विशिष्ट भूत समय पर पूर्ण क्रिया (कल)',
        difficulty: 'easy',
        marks: 1
      }
    ]
  },
  {
    id: 'conditionals-10',
    topic_name: 'Conditionals (If Clauses)',
    topic_name_hindi: 'शर्तवाचक वाक्य (If Clauses)',
    class_level: 10,
    difficulty: 'intermediate',
    exam_weightage: 'high',
    estimated_study_time: 60,
    related_topics: ['tenses-revision-10', 'modals-10'],
    identification_marks: {
      signal_words: ['if', 'unless', 'provided that', 'as long as', 'in case', 'suppose', 'what if', 'even if', 'only if', 'whether or not'],
      signal_words_hindi: ['अगर', 'यदि', 'जब तक नहीं (unless)', 'बशर्ते कि', 'जब तक', 'मान लो कि'],
      sentence_endings: ['If + Present, Present (Zero)', 'If + Present, will (First)', 'If + Past, would (Second)', 'If + had V3, would have V3 (Third)'],
      sentence_endings_hindi: ['अगर...तो...है (Zero)', 'अगर...होगा तो...गा (First)', 'अगर...होता तो...ता (Second)', 'अगर...होता तो...होता (Third)']
    },
    explanation: {
      definition: 'Conditionals express hypothetical situations and their consequences. They describe what happens, will happen, or would happen under certain conditions.',
      definition_hindi: 'शर्तवाचक वाक्य काल्पनिक स्थितियों और उनके परिणामों को व्यक्त करते हैं। ये बताते हैं कि कुछ शर्तों के तहत क्या होता है, होगा या होता।',
      key_points: [
        'Zero Conditional: General truths (If + Present, Present)',
        'First Conditional: Real future possibilities (If + Present, will)',
        'Second Conditional: Unreal present situations (If + Past, would)',
        'Third Conditional: Unreal past situations (If + Past Perfect, would have)',
        'Mixed Conditionals: Combine different time frames',
        'Can use "unless" (if not), "provided that", "as long as"'
      ],
      key_points_hindi: [
        'शून्य शर्त: सामान्य सत्य (If + वर्तमान, वर्तमान)',
        'प्रथम शर्त: वास्तविक भविष्य संभावनाएं (If + वर्तमान, will)',
        'द्वितीय शर्त: अवास्तविक वर्तमान स्थितियां (If + भूत, would)',
        'तृतीय शर्त: अवास्तविक भूत स्थितियां (If + भूत पूर्ण, would have)',
        'मिश्रित शर्त: विभिन्न समय सीमाओं को मिलाना',
        '"unless" (यदि नहीं), "provided that", "as long as" का उपयोग कर सकते हैं'
      ],
      rules: [
        'Zero Conditional: If + Present Simple, Present Simple (If you heat water, it boils)',
        'First Conditional: If + Present Simple, will + V1 (If it rains, I will stay home)',
        'Second Conditional: If + Past Simple, would + V1 (If I were rich, I would travel)',
        'Third Conditional: If + Past Perfect, would have + V3 (If I had studied, I would have passed)',
        'Mixed: If + Past Perfect, would + V1 (If I had studied harder, I would be successful now)',
        'Unless = If not (Unless you study, you will fail = If you don\'t study, you will fail)'
      ],
      rules_hindi: [
        'शून्य शर्त: If + सामान्य वर्तमान, सामान्य वर्तमान (अगर पानी गर्म करें, तो उबलता है)',
        'प्रथम शर्त: If + सामान्य वर्तमान, will + V1 (अगर बारिश होगी, तो मैं घर रहूंगा)',
        'द्वितीय शर्त: If + सामान्य भूत, would + V1 (अगर मैं अमीर होता, तो यात्रा करता)',
        'तृतीय शर्त: If + भूत पूर्ण, would have + V3 (अगर मैंने पढ़ा होता, तो पास हो गया होता)',
        'मिश्रित: If + भूत पूर्ण, would + V1 (अगर मैंने अधिक पढ़ा होता, तो अब सफल होता)',
        'Unless = If not (Unless you study = If you don\'t study)'
      ],
      examples: [
        {
          sentence: 'Zero: If you press this button, the machine starts.',
          sentence_hindi: 'शून्य: अगर आप यह बटन दबाते हैं, तो मशीन शुरू हो जाती है।',
          explanation: 'Scientific fact or general truth',
          explanation_hindi: 'वैज्ञानिक तथ्य या सामान्य सत्य'
        },
        {
          sentence: 'First: If I have time, I will visit you.',
          sentence_hindi: 'प्रथम: अगर मेरे पास समय होगा, तो मैं तुमसे मिलूंगा।',
          explanation: 'Real future possibility',
          explanation_hindi: 'वास्तविक भविष्य संभावना'
        },
        {
          sentence: 'Second: If I were the president, I would change the law.',
          sentence_hindi: 'द्वितीय: अगर मैं राष्ट्रपति होता, तो मैं कानून बदलता।',
          explanation: 'Unreal present (I am not the president)',
          explanation_hindi: 'अवास्तविक वर्तमान (मैं राष्ट्रपति नहीं हूं)'
        },
        {
          sentence: 'Third: If I had known, I would have helped you.',
          sentence_hindi: 'तृतीय: अगर मुझे पता होता, तो मैंने तुम्हारी मदद की होती।',
          explanation: 'Unreal past (I didn\'t know)',
          explanation_hindi: 'अवास्तविक भूत (मुझे पता नहीं था)'
        }
      ],
      common_mistakes: [
        {
          wrong: 'If I will have time, I will come.',
          correct: 'If I have time, I will come.',
          reason: 'Don\'t use "will" in the if-clause of First Conditional',
          reason_hindi: 'प्रथम शर्त के if-clause में "will" का उपयोग न करें'
        },
        {
          wrong: 'If I was you, I would go.',
          correct: 'If I were you, I would go.',
          reason: 'Use "were" (not "was") for all subjects in Second Conditional',
          reason_hindi: 'द्वितीय शर्त में सभी subjects के लिए "were" (not "was") का उपयोग करें'
        },
        {
          wrong: 'If I would have known, I would have come.',
          correct: 'If I had known, I would have come.',
          reason: 'Don\'t use "would" in the if-clause of Third Conditional',
          reason_hindi: 'तृतीय शर्त के if-clause में "would" का उपयोग न करें'
        }
      ]
    },
    practice_questions: [
      {
        id: 'cond10-q1',
        question_type: 'fill_blank',
        question_text: 'If it _____ (rain) tomorrow, we will cancel the picnic.',
        question_text_hindi: 'अगर कल बारिश _____ (होना), तो हम पिकनिक रद्द कर देंगे।',
        correct_answer: 'rains',
        explanation: 'First Conditional: If + Present Simple, will',
        explanation_hindi: 'प्रथम शर्त: If + सामान्य वर्तमान, will',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'cond10-q2',
        question_type: 'mcq',
        question_text: 'If I _____ a bird, I would fly in the sky.',
        question_text_hindi: 'अगर मैं एक पक्षी _____, तो मैं आकाश में उड़ता।',
        options: [
          'am',
          'was',
          'were',
          'will be'
        ],
        correct_answer: 'were',
        explanation: 'Second Conditional: If + were (for all subjects), would',
        explanation_hindi: 'द्वितीय शर्त: If + were (सभी subjects के लिए), would',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'cond10-q3',
        question_type: 'error_correction',
        question_text: 'If you will work hard, you will succeed.',
        question_text_hindi: 'If you will work hard, you will succeed.',
        correct_answer: 'If you work hard, you will succeed.',
        explanation: 'Don\'t use "will" in if-clause of First Conditional',
        explanation_hindi: 'प्रथम शर्त के if-clause में "will" का उपयोग न करें',
        difficulty: 'medium',
        marks: 2
      },
      {
        id: 'cond10-q4',
        question_type: 'fill_blank',
        question_text: 'If I had studied harder, I _____ (pass) the exam.',
        question_text_hindi: 'अगर मैंने अधिक पढ़ा होता, तो मैं परीक्षा _____ (पास करना) होता।',
        correct_answer: 'would have passed',
        explanation: 'Third Conditional: If + Past Perfect, would have + V3',
        explanation_hindi: 'तृतीय शर्त: If + भूत पूर्ण, would have + V3',
        difficulty: 'hard',
        marks: 2
      },
      {
        id: 'cond10-q5',
        question_type: 'mcq',
        question_text: 'If you heat ice, it _____.',
        question_text_hindi: 'अगर आप बर्फ को गर्म करें, तो यह _____।',
        options: [
          'will melt',
          'melts',
          'would melt',
          'melted'
        ],
        correct_answer: 'melts',
        explanation: 'Zero Conditional: If + Present, Present (general truth)',
        explanation_hindi: 'शून्य शर्त: If + वर्तमान, वर्तमान (सामान्य सत्य)',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'cond10-q6',
        question_type: 'transformation',
        question_text: 'Rewrite using "unless": If you don\'t hurry, you will miss the bus.',
        question_text_hindi: '"unless" का उपयोग करके फिर से लिखें: If you don\'t hurry, you will miss the bus.',
        correct_answer: 'Unless you hurry, you will miss the bus.',
        explanation: 'Unless = If not',
        explanation_hindi: 'Unless = If not',
        difficulty: 'medium',
        marks: 2
      },
      {
        id: 'cond10-q7',
        question_type: 'fill_blank',
        question_text: 'If she _____ (call) me, I would have answered.',
        question_text_hindi: 'अगर उसने मुझे _____ (फोन करना), तो मैंने उत्तर दिया होता।',
        correct_answer: 'had called',
        explanation: 'Third Conditional: If + Past Perfect (had called)',
        explanation_hindi: 'तृतीय शर्त: If + भूत पूर्ण (had called)',
        difficulty: 'hard',
        marks: 2
      },
      {
        id: 'cond10-q8',
        question_type: 'mcq',
        question_text: 'If I _____ you, I would apologize.',
        question_text_hindi: 'अगर मैं तुम _____, तो मैं माफी मांगता।',
        options: [
          'am',
          'was',
          'were',
          'will be'
        ],
        correct_answer: 'were',
        explanation: 'Second Conditional: "were" for all subjects',
        explanation_hindi: 'द्वितीय शर्त: सभी subjects के लिए "were"',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'cond10-q9',
        question_type: 'error_correction',
        question_text: 'If I would have known, I would have told you.',
        question_text_hindi: 'If I would have known, I would have told you.',
        correct_answer: 'If I had known, I would have told you.',
        explanation: 'Don\'t use "would" in if-clause of Third Conditional',
        explanation_hindi: 'तृतीय शर्त के if-clause में "would" का उपयोग न करें',
        difficulty: 'hard',
        marks: 2
      },
      {
        id: 'cond10-q10',
        question_type: 'fill_blank',
        question_text: 'If he _____ (be) more careful, he wouldn\'t make mistakes.',
        question_text_hindi: 'अगर वह अधिक सावधान _____ (होना), तो वह गलतियां नहीं करता।',
        correct_answer: 'were',
        explanation: 'Second Conditional: If + were, would',
        explanation_hindi: 'द्वितीय शर्त: If + were, would',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'cond10-q11',
        question_type: 'transformation',
        question_text: 'Change to Second Conditional: If I have money, I will buy a car.',
        question_text_hindi: 'द्वितीय शर्त में बदलें: If I have money, I will buy a car.',
        correct_answer: 'If I had money, I would buy a car.',
        explanation: 'Second Conditional: If + Past Simple, would + V1',
        explanation_hindi: 'द्वितीय शर्त: If + सामान्य भूत, would + V1',
        difficulty: 'medium',
        marks: 2
      },
      {
        id: 'cond10-q12',
        question_type: 'mcq',
        question_text: 'If plants don\'t get water, they _____.',
        question_text_hindi: 'अगर पौधों को पानी नहीं मिलता, तो वे _____।',
        options: [
          'will die',
          'die',
          'would die',
          'died'
        ],
        correct_answer: 'die',
        explanation: 'Zero Conditional: If + Present, Present (general truth)',
        explanation_hindi: 'शून्य शर्त: If + वर्तमान, वर्तमान (सामान्य सत्य)',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'cond10-q13',
        question_type: 'fill_blank',
        question_text: 'Unless you _____ (study), you will fail.',
        question_text_hindi: 'जब तक तुम _____ (पढ़ना) नहीं, तुम फेल हो जाओगे।',
        correct_answer: 'study',
        explanation: 'Unless + Present Simple (Unless = If not)',
        explanation_hindi: 'Unless + सामान्य वर्तमान (Unless = If not)',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'cond10-q14',
        question_type: 'error_correction',
        question_text: 'If I was rich, I would donate to charity.',
        question_text_hindi: 'If I was rich, I would donate to charity.',
        correct_answer: 'If I were rich, I would donate to charity.',
        explanation: 'Use "were" for all subjects in Second Conditional',
        explanation_hindi: 'द्वितीय शर्त में सभी subjects के लिए "were" का उपयोग करें',
        difficulty: 'medium',
        marks: 2
      },
      {
        id: 'cond10-q15',
        question_type: 'fill_blank',
        question_text: 'If the weather _____ (be) good tomorrow, we will go for a walk.',
        question_text_hindi: 'अगर कल मौसम अच्छा _____ (होना), तो हम टहलने जाएंगे।',
        correct_answer: 'is',
        explanation: 'First Conditional: If + Present Simple, will',
        explanation_hindi: 'प्रथम शर्त: If + सामान्य वर्तमान, will',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'cond10-q16',
        question_type: 'mcq',
        question_text: 'If she had left earlier, she _____ the train.',
        question_text_hindi: 'अगर वह पहले निकली होती, तो वह ट्रेन _____।',
        options: [
          'catches',
          'would catch',
          'will catch',
          'would have caught'
        ],
        correct_answer: 'would have caught',
        explanation: 'Third Conditional: would have + V3',
        explanation_hindi: 'तृतीय शर्त: would have + V3',
        difficulty: 'hard',
        marks: 2
      },
      {
        id: 'cond10-q17',
        question_type: 'transformation',
        question_text: 'Change to Third Conditional: If I know the answer, I will tell you.',
        question_text_hindi: 'तृतीय शर्त में बदलें: If I know the answer, I will tell you.',
        correct_answer: 'If I had known the answer, I would have told you.',
        explanation: 'Third Conditional: If + Past Perfect, would have + V3',
        explanation_hindi: 'तृतीय शर्त: If + भूत पूर्ण, would have + V3',
        difficulty: 'hard',
        marks: 2
      },
      {
        id: 'cond10-q18',
        question_type: 'fill_blank',
        question_text: 'If I _____ (win) the lottery, I would travel the world.',
        question_text_hindi: 'अगर मैं लॉटरी _____ (जीतना), तो मैं दुनिया की यात्रा करता।',
        correct_answer: 'won',
        explanation: 'Second Conditional: If + Past Simple, would',
        explanation_hindi: 'द्वितीय शर्त: If + सामान्य भूत, would',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'cond10-q19',
        question_type: 'mcq',
        question_text: 'Provided that you _____ hard, you will succeed.',
        question_text_hindi: 'बशर्ते कि आप मेहनत _____, आप सफल होंगे।',
        options: [
          'will work',
          'work',
          'worked',
          'would work'
        ],
        correct_answer: 'work',
        explanation: '"Provided that" = "if", use Present Simple',
        explanation_hindi: '"Provided that" = "if", सामान्य वर्तमान का उपयोग करें',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'cond10-q20',
        question_type: 'error_correction',
        question_text: 'If it will rain, we won\'t go out.',
        question_text_hindi: 'If it will rain, we won\'t go out.',
        correct_answer: 'If it rains, we won\'t go out.',
        explanation: 'Don\'t use "will" in if-clause of First Conditional',
        explanation_hindi: 'प्रथम शर्त के if-clause में "will" का उपयोग न करें',
        difficulty: 'easy',
        marks: 1
      }
    ]
  },
  {
    id: 'modals-advanced-10',
    topic_name: 'Modals (Advanced)',
    topic_name_hindi: 'सहायक क्रियाएं (उन्नत)',
    class_level: 10,
    difficulty: 'advanced',
    exam_weightage: 'high',
    estimated_study_time: 45,
    related_topics: ['conditionals-10', 'tenses-revision-10'],
    identification_marks: {
      signal_words: ['can', 'could', 'may', 'might', 'must', 'shall', 'should', 'will', 'would', 'ought to', 'need', 'dare', 'used to'],
      signal_words_hindi: ['सकता है', 'चाहिए', 'होगा', 'करता था', 'हिम्मत करना'],
      sentence_endings: ['Modal + V1', 'Modal + have + V3', 'Modal + be + V4'],
      sentence_endings_hindi: ['सकता/सकती है', 'चाहिए था', 'होना चाहिए']
    },
    explanation: {
      definition: 'Modals are auxiliary verbs that express ability, possibility, permission, obligation, advice, or necessity. They are followed by the base form of the main verb.',
      definition_hindi: 'मोडल्स सहायक क्रियाएं हैं जो क्षमता, संभावना, अनुमति, दायित्व, सलाह या आवश्यकता व्यक्त करती हैं।',
      key_points: [
        'Modals do not change form (no -s, -ed, -ing)',
        'Modal + V1 for present/future',
        'Modal + have + V3 for past',
        'Each modal has multiple meanings based on context',
        'Semi-modals: ought to, need to, dare to, used to'
      ],
      key_points_hindi: [
        'मोडल्स का रूप नहीं बदलता',
        'Modal + V1 वर्तमान/भविष्य के लिए',
        'Modal + have + V3 भूत के लिए',
        'प्रत्येक मोडल के संदर्भ के अनुसार कई अर्थ होते हैं',
        'अर्ध-मोडल: ought to, need to, dare to, used to'
      ],
      rules: [
        'Can: ability, permission, possibility',
        'Could: past ability, polite request',
        'May: permission (formal), possibility',
        'Might: weak possibility',
        'Must: strong obligation, logical certainty',
        'Should/Ought to: advice, expectation',
        'Will: future, determination',
        'Would: polite request, past habit'
      ],
      rules_hindi: [
        'Can: क्षमता, अनुमति, संभावना',
        'Could: भूत क्षमता, विनम्र अनुरोध',
        'May: अनुमति (औपचारिक), संभावना',
        'Might: कमजोर संभावना',
        'Must: कड़ा दायित्व, तार्किक निश्चितता',
        'Should/Ought to: सलाह, अपेक्षा',
        'Will: भविष्य, दृढ़ संकल्प',
        'Would: विनम्र अनुरोध, भूत आदत'
      ],
      examples: [
        {
          sentence: 'You must complete the work today.',
          sentence_hindi: 'तुम्हें आज काम पूरा करना होगा।',
          explanation: '"Must" expresses strong obligation.',
          explanation_hindi: '"Must" कड़ा दायित्व व्यक्त करता है।'
        },
        {
          sentence: 'You should have studied harder.',
          sentence_hindi: 'तुम्हें और मेहनत से पढ़ना चाहिए था।',
          explanation: '"Should have + V3" for past advice.',
          explanation_hindi: '"Should have + V3" भूत सलाह के लिए।'
        }
      ],
      common_mistakes: [
        {
          wrong: 'He must to go now.',
          correct: 'He must go now.',
          reason: 'Do not use "to" after modals.',
          reason_hindi: 'मोडल्स के बाद "to" न लगाएं।'
        }
      ]
    },
    practice_questions: [
      {
        id: 'ma10-q1',
        question_type: 'mcq',
        question_text: 'Fill in: You _____ see a doctor. (strong advice)',
        question_text_hindi: 'भरें: तुम्हें डॉक्टर को _____ (कड़ी सलाह)',
        options: ['should', 'might', 'can', 'would'],
        correct_answer: 'should',
        explanation: '"Should" is used for strong advice.',
        explanation_hindi: '"Should" कड़ी सलाह के लिए प्रयोग होता है।',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'ma10-q2',
        question_type: 'mcq',
        question_text: 'Fill in: He _____ be at home now. He always arrives by 6 PM. (logical certainty)',
        question_text_hindi: 'भरें: वह अभी घर पर _____ (तार्किक निश्चितता)',
        options: ['must', 'may', 'can', 'should'],
        correct_answer: 'must',
        explanation: '"Must" expresses logical certainty.',
        explanation_hindi: '"Must" तार्किक निश्चितता व्यक्त करता है।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'ma10-q3',
        question_type: 'fill_blank',
        question_text: 'She _____ (play) piano when she was five. (past ability)',
        question_text_hindi: 'वह पाँच साल की थी तब पियानो _____ (भूत क्षमता)',
        correct_answer: 'could',
        explanation: '"Could" is used for past ability.',
        explanation_hindi: '"Could" भूत क्षमता के लिए प्रयोग होता है।',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'ma10-q4',
        question_type: 'fill_blank',
        question_text: 'You _____ have called me earlier. (past criticism)',
        question_text_hindi: 'तुम्हें मुझे पहले _____ (भूत आलोचना)',
        correct_answer: 'should',
        explanation: '"Should have + V3" for criticism about past.',
        explanation_hindi: '"Should have + V3" भूत आलोचना के लिए।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'ma10-q5',
        question_type: 'error_correction',
        question_text: 'He must to finish his homework.',
        question_text_hindi: 'He must to finish his homework.',
        correct_answer: 'He must finish his homework.',
        explanation: 'Do not use "to" after must.',
        explanation_hindi: 'must के बाद "to" प्रयोग न करें।',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'ma10-q6',
        question_type: 'error_correction',
        question_text: 'She cans swim very well.',
        question_text_hindi: 'She cans swim very well.',
        correct_answer: 'She can swim very well.',
        explanation: 'Modals do not change form.',
        explanation_hindi: 'मोडल्स का रूप नहीं बदलता।',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'ma10-q7',
        question_type: 'transformation',
        question_text: 'Rewrite expressing obligation: "It is necessary for you to attend."',
        question_text_hindi: 'दायित्व व्यक्त करते हुए लिखें',
        correct_answer: 'You must attend.',
        explanation: '"Must" expresses necessity/obligation.',
        explanation_hindi: '"Must" आवश्यकता/दायित्व व्यक्त करता है।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'ma10-q8',
        question_type: 'mcq',
        question_text: '"You needn\'t come tomorrow" means:',
        question_text_hindi: '"You needn\'t come tomorrow" का अर्थ है:',
        options: ['It is not necessary for you to come.', 'You are not allowed to come.', 'You must come.', 'You should come.'],
        correct_answer: 'It is not necessary for you to come.',
        explanation: '"Needn\'t" means no necessity.',
        explanation_hindi: '"Needn\'t" का अर्थ है कोई आवश्यकता नहीं।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'ma10-q9',
        question_type: 'mcq',
        question_text: '_____ you please pass the salt? (polite request)',
        question_text_hindi: '_____ आप नमक दे सकते हैं? (विनम्र अनुरोध)',
        options: ['Could', 'Must', 'Need', 'Shall'],
        correct_answer: 'Could',
        explanation: '"Could" is used for polite requests.',
        explanation_hindi: '"Could" विनम्र अनुरोधों के लिए।',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'ma10-q10',
        question_type: 'fill_blank',
        question_text: 'He _____ be the thief. He was with me. (impossibility)',
        question_text_hindi: 'वह चोर _____ है। वह मेरे साथ था। (असंभवता)',
        correct_answer: "can't",
        explanation: '"Can\'t" expresses impossibility.',
        explanation_hindi: '"Can\'t" असंभवता व्यक्त करता है।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'ma10-q11',
        question_type: 'error_correction',
        question_text: 'We used to playing cricket every evening.',
        question_text_hindi: 'We used to playing cricket every evening.',
        correct_answer: 'We used to play cricket every evening.',
        explanation: '"Used to" is followed by V1.',
        explanation_hindi: '"Used to" के बाद V1 आता है।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'ma10-q12',
        question_type: 'mcq',
        question_text: '"May I come in?" expresses:',
        question_text_hindi: '"May I come in?" व्यक्त करता है:',
        options: ['Permission (formal)', 'Ability', 'Obligation', 'Possibility'],
        correct_answer: 'Permission (formal)',
        explanation: '"May I...?" asks formal permission.',
        explanation_hindi: '"May I...?" औपचारिक अनुमति।',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'ma10-q13',
        question_type: 'transformation',
        question_text: 'Express past regret: "I didn\'t help him."',
        question_text_hindi: 'भूत का पछतावा व्यक्त करें',
        correct_answer: 'I should have helped him.',
        explanation: '"Should have + V3" for regret.',
        explanation_hindi: '"Should have + V3" पछतावे के लिए।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'ma10-q14',
        question_type: 'fill_blank',
        question_text: 'You _____ to respect your elders. (moral obligation)',
        question_text_hindi: 'तुम्हें बड़ों का सम्मान _____ (नैतिक दायित्व)',
        correct_answer: 'ought',
        explanation: '"Ought to" for moral obligation.',
        explanation_hindi: '"Ought to" नैतिक दायित्व के लिए।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'ma10-q15',
        question_type: 'mcq',
        question_text: 'She _____ speak three languages. (ability)',
        question_text_hindi: 'वह तीन भाषाएं _____ है। (क्षमता)',
        options: ['can', 'must', 'should', 'may'],
        correct_answer: 'can',
        explanation: '"Can" expresses ability.',
        explanation_hindi: '"Can" क्षमता व्यक्त करता है।',
        difficulty: 'easy',
        marks: 1
      }
    ]
  },
  {
    id: 'clauses-10',
    topic_name: 'Clauses (Noun, Adjective, Adverb)',
    topic_name_hindi: 'उपवाक्य (संज्ञा, विशेषण, क्रिया विशेषण)',
    class_level: 10,
    difficulty: 'advanced',
    exam_weightage: 'high',
    estimated_study_time: 50,
    related_topics: ['reported-speech-10', 'conditionals-10'],
    identification_marks: {
      signal_words: ['that', 'which', 'who', 'whom', 'whose', 'where', 'when', 'why', 'if', 'whether', 'because', 'although'],
      signal_words_hindi: ['जो', 'कि', 'जहाँ', 'जब', 'क्योंकि', 'हालांकि'],
      sentence_endings: ['Subject + Verb in clause', 'relative pronoun + clause'],
      sentence_endings_hindi: ['कर्ता + क्रिया उपवाक्य में']
    },
    explanation: {
      definition: 'A clause is a group of words with a subject and verb. Three types: Noun clauses (act as nouns), Adjective/Relative clauses (modify nouns), and Adverb clauses (modify verbs).',
      definition_hindi: 'उपवाक्य शब्दों का समूह है जिसमें कर्ता और क्रिया होती है। तीन प्रकार: संज्ञा, विशेषण और क्रिया विशेषण उपवाक्य।',
      key_points: [
        'Noun Clause: Functions as subject, object, or complement',
        'Adjective Clause: Begins with who, which, that, whose',
        'Adverb Clause: Shows time, place, reason, condition',
        'Defining clause: Essential information, no commas',
        'Non-defining clause: Extra information, uses commas'
      ],
      key_points_hindi: [
        'संज्ञा उपवाक्य: कर्ता, कर्म या पूरक के रूप में',
        'विशेषण उपवाक्य: who, which, that, whose से शुरू',
        'क्रिया विशेषण उपवाक्य: समय, स्थान, कारण, शर्त दर्शाता है',
        'परिभाषित उपवाक्य: आवश्यक जानकारी, अल्पविराम नहीं',
        'गैर-परिभाषित उपवाक्य: अतिरिक्त जानकारी, अल्पविराम के साथ'
      ],
      rules: [
        'Noun Clause starters: that, what, whether, if, how, why',
        'Adjective Clause for people: who, whom, whose',
        'Adjective Clause for things: which, that',
        'Adverb Clause of time: when, while, after, before',
        'Adverb Clause of reason: because, since, as',
        'Adverb Clause of condition: if, unless'
      ],
      rules_hindi: [
        'संज्ञा उपवाक्य शुरुआत: that, what, whether, if, how, why',
        'व्यक्तियों के लिए: who, whom, whose',
        'वस्तुओं के लिए: which, that',
        'समय का: when, while, after, before',
        'कारण का: because, since, as',
        'शर्त का: if, unless'
      ],
      examples: [
        {
          sentence: 'I know that he is honest. (Noun clause)',
          sentence_hindi: 'मुझे पता है कि वह ईमानदार है।',
          explanation: '"that he is honest" is object of "know".',
          explanation_hindi: '"that he is honest" "know" का कर्म है।'
        },
        {
          sentence: 'The book which I bought is interesting. (Adjective clause)',
          sentence_hindi: 'जो किताब मैंने खरीदी वह रोचक है।',
          explanation: '"which I bought" modifies "book".',
          explanation_hindi: '"which I bought" "book" को विशेषित करता है।'
        }
      ],
      common_mistakes: [
        {
          wrong: 'The man which came is my uncle.',
          correct: 'The man who came is my uncle.',
          reason: 'Use "who" for people, "which" for things.',
          reason_hindi: 'व्यक्तियों के लिए "who", वस्तुओं के लिए "which"।'
        }
      ]
    },
    practice_questions: [
      {
        id: 'cl10-q1',
        question_type: 'mcq',
        question_text: 'Identify: "What he said was true."',
        question_text_hindi: 'पहचानें: "What he said was true."',
        options: ['Noun Clause', 'Adjective Clause', 'Adverb Clause', 'Independent Clause'],
        correct_answer: 'Noun Clause',
        explanation: '"What he said" acts as subject.',
        explanation_hindi: '"What he said" कर्ता के रूप में।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'cl10-q2',
        question_type: 'mcq',
        question_text: 'Identify: "The girl who won is my sister."',
        question_text_hindi: 'पहचानें: "The girl who won is my sister."',
        options: ['Adjective Clause', 'Noun Clause', 'Adverb Clause', 'Independent Clause'],
        correct_answer: 'Adjective Clause',
        explanation: '"who won" modifies "girl".',
        explanation_hindi: '"who won" "girl" को विशेषित करता है।',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'cl10-q3',
        question_type: 'fill_blank',
        question_text: 'This is the house _____ I was born.',
        question_text_hindi: 'यह वह घर है _____ मैं पैदा हुआ था।',
        correct_answer: 'where',
        explanation: '"Where" for place in adjective clauses.',
        explanation_hindi: 'स्थान के लिए "where"।',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'cl10-q4',
        question_type: 'fill_blank',
        question_text: 'I don\'t know _____ she will come.',
        question_text_hindi: 'मुझे नहीं पता _____ वह आएगी।',
        correct_answer: 'whether/if',
        explanation: '"Whether/if" for doubt in noun clauses.',
        explanation_hindi: '"Whether/if" संदेह के लिए।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'cl10-q5',
        question_type: 'error_correction',
        question_text: 'The man which is standing is my father.',
        question_text_hindi: 'The man which is standing is my father.',
        correct_answer: 'The man who is standing is my father.',
        explanation: 'Use "who" for people.',
        explanation_hindi: 'व्यक्तियों के लिए "who"।',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'cl10-q6',
        question_type: 'error_correction',
        question_text: 'Tell me where does he work.',
        question_text_hindi: 'Tell me where does he work.',
        correct_answer: 'Tell me where he works.',
        explanation: 'Noun clauses use normal word order.',
        explanation_hindi: 'संज्ञा उपवाक्यों में सामान्य शब्द क्रम।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'cl10-q7',
        question_type: 'transformation',
        question_text: 'Combine: "I met a man. His son is a doctor."',
        question_text_hindi: 'जोड़ें: "I met a man. His son is a doctor."',
        correct_answer: 'I met a man whose son is a doctor.',
        explanation: '"Whose" shows possession.',
        explanation_hindi: '"Whose" संबंध दर्शाता है।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'cl10-q8',
        question_type: 'transformation',
        question_text: 'Combine using adverb clause: "She studied hard. She wanted to pass."',
        question_text_hindi: 'जोड़ें: "She studied hard. She wanted to pass."',
        correct_answer: 'She studied hard because she wanted to pass.',
        explanation: '"Because" introduces reason clause.',
        explanation_hindi: '"Because" कारण उपवाक्य।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'cl10-q9',
        question_type: 'mcq',
        question_text: '"Although he was tired, he continued." - Type of adverb clause:',
        question_text_hindi: 'क्रिया विशेषण उपवाक्य का प्रकार:',
        options: ['Clause of contrast', 'Clause of time', 'Clause of reason', 'Clause of condition'],
        correct_answer: 'Clause of contrast',
        explanation: '"Although" shows contrast.',
        explanation_hindi: '"Although" विपरीत दर्शाता है।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'cl10-q10',
        question_type: 'mcq',
        question_text: 'Fill in: "_____ he comes, tell him to wait."',
        question_text_hindi: 'भरें: "_____ वह आए, उसे इंतजार करने को कहो।"',
        options: ['When', 'Which', 'Who', 'Whose'],
        correct_answer: 'When',
        explanation: '"When" introduces time clause.',
        explanation_hindi: '"When" समय उपवाक्य।',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'cl10-q11',
        question_type: 'fill_blank',
        question_text: 'I believe _____ honesty is the best policy.',
        question_text_hindi: 'मुझे विश्वास है _____ ईमानदारी सर्वोत्तम है।',
        correct_answer: 'that',
        explanation: '"That" introduces noun clause.',
        explanation_hindi: '"That" संज्ञा उपवाक्य।',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'cl10-q12',
        question_type: 'error_correction',
        question_text: 'The book whom I read was interesting.',
        question_text_hindi: 'The book whom I read was interesting.',
        correct_answer: 'The book which I read was interesting.',
        explanation: '"Which" for things, "whom" for people.',
        explanation_hindi: 'वस्तुओं के लिए "which"।',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'cl10-q13',
        question_type: 'transformation',
        question_text: 'Combine: "He is a teacher. He teaches math."',
        question_text_hindi: 'जोड़ें: "He is a teacher. He teaches math."',
        correct_answer: 'He is a teacher who teaches math.',
        explanation: '"Who" for people in adjective clause.',
        explanation_hindi: '"Who" व्यक्तियों के लिए।',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'cl10-q14',
        question_type: 'mcq',
        question_text: '"I don\'t know why he left" - The underlined is:',
        question_text_hindi: 'रेखांकित उपवाक्य है:',
        options: ['Noun Clause', 'Adjective Clause', 'Adverb Clause', 'Independent Clause'],
        correct_answer: 'Noun Clause',
        explanation: '"why he left" is object of "know".',
        explanation_hindi: '"why he left" "know" का कर्म।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'cl10-q15',
        question_type: 'fill_blank',
        question_text: '_____ you work hard, you will succeed. (condition)',
        question_text_hindi: '_____ तुम मेहनत करोगे, सफल होगे। (शर्त)',
        correct_answer: 'If',
        explanation: '"If" introduces condition clause.',
        explanation_hindi: '"If" शर्त उपवाक्य।',
        difficulty: 'easy',
        marks: 1
      }
    ]
  },
  {
    id: 'error-correction-10',
    topic_name: 'Error Correction / Editing',
    topic_name_hindi: 'त्रुटि सुधार / संपादन',
    class_level: 10,
    difficulty: 'advanced',
    exam_weightage: 'high',
    estimated_study_time: 40,
    related_topics: ['tenses-revision-10', 'active-passive-10'],
    identification_marks: {
      signal_words: ['incorrect word', 'wrong form', 'missing word', 'extra word'],
      signal_words_hindi: ['गलत शब्द', 'गलत रूप', 'लुप्त शब्द', 'अतिरिक्त शब्द'],
      sentence_endings: ['Check verb forms', 'Check articles', 'Check prepositions'],
      sentence_endings_hindi: ['क्रिया रूप जांचें', 'आर्टिकल्स जांचें', 'पूर्वसर्ग जांचें']
    },
    explanation: {
      definition: 'Error correction involves identifying and fixing grammatical, spelling, or usage errors in sentences.',
      definition_hindi: 'त्रुटि सुधार में वाक्यों में व्याकरणिक, वर्तनी या प्रयोग की त्रुटियों को पहचानना और ठीक करना शामिल है।',
      key_points: [
        'Common errors: verb forms, articles, prepositions, pronouns',
        'Check tense consistency',
        'Look for missing or extra words',
        'Verify subject-verb agreement',
        'Check proper noun/pronoun agreement'
      ],
      key_points_hindi: [
        'सामान्य त्रुटियां: क्रिया रूप, आर्टिकल्स, पूर्वसर्ग, सर्वनाम',
        'काल संगति जांचें',
        'लुप्त या अतिरिक्त शब्द खोजें',
        'कर्ता-क्रिया सहमति सत्यापित करें',
        'संज्ञा/सर्वनाम सहमति जांचें'
      ],
      rules: [
        'Articles: a (consonant sounds), an (vowel sounds), the (specific)',
        'Subject-verb agreement: Singular subject = singular verb',
        'Tense consistency: Maintain same tense unless time changes',
        'Preposition usage: at (time/place), in (enclosed), on (surfaces)'
      ],
      rules_hindi: [
        'आर्टिकल्स: a (व्यंजन), an (स्वर), the (विशिष्ट)',
        'कर्ता-क्रिया सहमति: एकवचन कर्ता = एकवचन क्रिया',
        'काल संगति: समय न बदले तो काल समान रखें',
        'पूर्वसर्ग: at (समय/स्थान), in (बंद), on (सतह)'
      ],
      examples: [
        {
          sentence: 'Error: He go to school everyday. Correct: He goes to school every day.',
          sentence_hindi: 'त्रुटि: He go to school everyday. सही: He goes to school every day.',
          explanation: 'Third person singular needs "goes".',
          explanation_hindi: 'तीसरे पुरुष एकवचन के लिए "goes"।'
        }
      ],
      common_mistakes: [
        {
          wrong: 'Each of the boys have finished.',
          correct: 'Each of the boys has finished.',
          reason: '"Each" is singular.',
          reason_hindi: '"Each" एकवचन है।'
        }
      ]
    },
    practice_questions: [
      {
        id: 'ec10-q1',
        question_type: 'error_correction',
        question_text: 'The news are very shocking today.',
        question_text_hindi: 'The news are very shocking today.',
        correct_answer: 'The news is very shocking today.',
        explanation: '"News" is uncountable - singular verb.',
        explanation_hindi: '"News" अगणनीय - एकवचन क्रिया।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'ec10-q2',
        question_type: 'error_correction',
        question_text: 'Neither of the students were present.',
        question_text_hindi: 'Neither of the students were present.',
        correct_answer: 'Neither of the students was present.',
        explanation: '"Neither" is singular.',
        explanation_hindi: '"Neither" एकवचन है।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'ec10-q3',
        question_type: 'error_correction',
        question_text: 'I have been living here since five years.',
        question_text_hindi: 'I have been living here since five years.',
        correct_answer: 'I have been living here for five years.',
        explanation: 'Use "for" with duration.',
        explanation_hindi: 'अवधि के साथ "for"।',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'ec10-q4',
        question_type: 'error_correction',
        question_text: 'He gave me a useful advice.',
        question_text_hindi: 'He gave me a useful advice.',
        correct_answer: 'He gave me useful advice.',
        explanation: '"Advice" is uncountable.',
        explanation_hindi: '"Advice" अगणनीय है।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'ec10-q5',
        question_type: 'error_correction',
        question_text: 'She is more smarter than her brother.',
        question_text_hindi: 'She is more smarter than her brother.',
        correct_answer: 'She is smarter than her brother.',
        explanation: 'Don\'t use "more" with -er forms.',
        explanation_hindi: '-er रूपों के साथ "more" नहीं।',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'ec10-q6',
        question_type: 'error_correction',
        question_text: 'The furnitures in this room is new.',
        question_text_hindi: 'The furnitures in this room is new.',
        correct_answer: 'The furniture in this room is new.',
        explanation: '"Furniture" has no plural.',
        explanation_hindi: '"Furniture" का बहुवचन नहीं।',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'ec10-q7',
        question_type: 'error_correction',
        question_text: 'One of my friend is a doctor.',
        question_text_hindi: 'One of my friend is a doctor.',
        correct_answer: 'One of my friends is a doctor.',
        explanation: '"One of" + plural noun.',
        explanation_hindi: '"One of" + बहुवचन संज्ञा।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'ec10-q8',
        question_type: 'error_correction',
        question_text: 'I prefer tea than coffee.',
        question_text_hindi: 'I prefer tea than coffee.',
        correct_answer: 'I prefer tea to coffee.',
        explanation: '"Prefer" uses "to", not "than".',
        explanation_hindi: '"Prefer" के साथ "to"।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'ec10-q9',
        question_type: 'error_correction',
        question_text: 'He is suffering from fever since Monday.',
        question_text_hindi: 'He is suffering from fever since Monday.',
        correct_answer: 'He has been suffering from fever since Monday.',
        explanation: '"Since" needs Present Perfect Continuous.',
        explanation_hindi: '"Since" के साथ वर्तमान पूर्ण अपूर्ण।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'ec10-q10',
        question_type: 'error_correction',
        question_text: 'The teacher along with students were present.',
        question_text_hindi: 'The teacher along with students were present.',
        correct_answer: 'The teacher along with students was present.',
        explanation: 'Verb agrees with "teacher".',
        explanation_hindi: 'क्रिया "teacher" से मिलती है।',
        difficulty: 'hard',
        marks: 1
      },
      {
        id: 'ec10-q11',
        question_type: 'error_correction',
        question_text: 'I am agree with you.',
        question_text_hindi: 'I am agree with you.',
        correct_answer: 'I agree with you.',
        explanation: '"Agree" is a verb, not adjective.',
        explanation_hindi: '"Agree" क्रिया है।',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'ec10-q12',
        question_type: 'error_correction',
        question_text: 'She is elder than me.',
        question_text_hindi: 'She is elder than me.',
        correct_answer: 'She is elder to me.',
        explanation: '"Elder" uses "to".',
        explanation_hindi: '"Elder" के साथ "to"।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'ec10-q13',
        question_type: 'error_correction',
        question_text: 'Mathematics are my favourite subject.',
        question_text_hindi: 'Mathematics are my favourite subject.',
        correct_answer: 'Mathematics is my favourite subject.',
        explanation: 'Subject names in -ics are singular.',
        explanation_hindi: '-ics वाले विषय एकवचन।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'ec10-q14',
        question_type: 'error_correction',
        question_text: 'I reached at the station on time.',
        question_text_hindi: 'I reached at the station on time.',
        correct_answer: 'I reached the station on time.',
        explanation: '"Reach" doesn\'t need preposition.',
        explanation_hindi: '"Reach" के साथ पूर्वसर्ग नहीं।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'ec10-q15',
        question_type: 'error_correction',
        question_text: 'She is a honest girl.',
        question_text_hindi: 'She is a honest girl.',
        correct_answer: 'She is an honest girl.',
        explanation: '"Honest" has silent h - vowel sound.',
        explanation_hindi: '"Honest" में मूक h - स्वर ध्वनि।',
        difficulty: 'easy',
        marks: 1
      }
    ]
  },
  {
    id: 'sentence-rearrangement-10',
    topic_name: 'Sentence Rearrangement',
    topic_name_hindi: 'वाक्य पुनर्व्यवस्था',
    class_level: 10,
    difficulty: 'intermediate',
    exam_weightage: 'high',
    estimated_study_time: 35,
    related_topics: ['clauses-10'],
    identification_marks: {
      signal_words: ['First', 'Then', 'Next', 'After', 'Finally', 'However', 'Therefore'],
      signal_words_hindi: ['पहले', 'फिर', 'उसके बाद', 'अंत में', 'हालांकि', 'इसलिए'],
      sentence_endings: ['Logical sequence', 'Time order', 'Cause-effect'],
      sentence_endings_hindi: ['तार्किक क्रम', 'समय क्रम', 'कारण-प्रभाव']
    },
    explanation: {
      definition: 'Sentence rearrangement involves arranging jumbled sentences in logical order to form a meaningful passage.',
      definition_hindi: 'वाक्य पुनर्व्यवस्था में उलटे-पुलटे वाक्यों को तार्किक क्रम में व्यवस्थित करना शामिल है।',
      key_points: [
        'Find opening sentence (topic introduction)',
        'Look for connecting words and pronouns',
        'Identify chronological sequence',
        'Find concluding sentence',
        'Check pronoun references'
      ],
      key_points_hindi: [
        'आरंभिक वाक्य खोजें (विषय परिचय)',
        'जोड़ने वाले शब्द और सर्वनाम खोजें',
        'कालानुक्रमिक क्रम पहचानें',
        'समापन वाक्य खोजें',
        'सर्वनाम संदर्भ जांचें'
      ],
      rules: [
        'Introduction first: Name/topic mentioned first',
        'Pronouns after nouns: "He" after person named',
        'Cause before effect',
        'General to specific',
        'Earlier events before later'
      ],
      rules_hindi: [
        'परिचय पहले: नाम/विषय पहले',
        'संज्ञा के बाद सर्वनाम',
        'प्रभाव से पहले कारण',
        'सामान्य से विशिष्ट',
        'बाद की से पहले पहले की घटनाएं'
      ],
      examples: [
        {
          sentence: 'P: He was a great leader. Q: Mahatma Gandhi was born in 1869. R: He led India to freedom. → QPRS',
          sentence_hindi: 'Q (परिचय) → P (वर्णन) → R (क्रिया)',
          explanation: 'Q introduces, P describes, R gives action.',
          explanation_hindi: 'Q परिचय, P वर्णन, R क्रिया।'
        }
      ],
      common_mistakes: [
        {
          wrong: 'Starting with "He" when person not introduced.',
          correct: 'First introduce person by name.',
          reason: 'Pronouns need antecedents.',
          reason_hindi: 'सर्वनाम को पूर्ववर्ती चाहिए।'
        }
      ]
    },
    practice_questions: [
      {
        id: 'sr10-q1',
        question_type: 'reordering',
        question_text: 'P-He is known for relativity. Q-Albert Einstein was a genius. R-He won Nobel Prize. S-He was born in Germany.',
        question_text_hindi: 'पुनर्व्यवस्थित करें',
        correct_answer: 'QSPR',
        explanation: 'Q (intro) → S (birth) → P (famous) → R (achievement).',
        explanation_hindi: 'Q (परिचय) → S (जन्म) → P (प्रसिद्धि) → R (उपलब्धि)।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'sr10-q2',
        question_type: 'reordering',
        question_text: 'P-Finally, they reached summit. Q-The climbers started early. R-They faced difficulties. S-But they didn\'t give up.',
        question_text_hindi: 'पुनर्व्यवस्थित करें',
        correct_answer: 'QRSP',
        explanation: 'Q (start) → R (problems) → S (perseverance) → P (conclusion).',
        explanation_hindi: 'Q (शुरुआत) → R (समस्या) → S (दृढ़ता) → P (निष्कर्ष)।',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'sr10-q3',
        question_type: 'reordering',
        question_text: 'P-This leads to health problems. Q-People eat junk food. R-Therefore, eat healthy. S-Junk food has harmful substances.',
        question_text_hindi: 'पुनर्व्यवस्थित करें',
        correct_answer: 'QSPR',
        explanation: 'Q (topic) → S (reason) → P (effect) → R (conclusion).',
        explanation_hindi: 'Q (विषय) → S (कारण) → P (प्रभाव) → R (निष्कर्ष)।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'sr10-q4',
        question_type: 'reordering',
        question_text: 'Rearrange words: playing / children / in / the / are / garden / the',
        question_text_hindi: 'शब्द पुनर्व्यवस्थित करें',
        correct_answer: 'The children are playing in the garden.',
        explanation: 'Subject + verb + place.',
        explanation_hindi: 'कर्ता + क्रिया + स्थान।',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'sr10-q5',
        question_type: 'reordering',
        question_text: 'Rearrange: always / she / early / gets / up / morning / in / the',
        question_text_hindi: 'पुनर्व्यवस्थित करें',
        correct_answer: 'She always gets up early in the morning.',
        explanation: 'Subject + adverb + verb + time.',
        explanation_hindi: 'कर्ता + क्रिया विशेषण + क्रिया + समय।',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'sr10-q6',
        question_type: 'reordering',
        question_text: 'P-He studied medicine. Q-Kalam was born in Rameswaram. R-Later he became scientist. S-His father was boat owner.',
        question_text_hindi: 'पुनर्व्यवस्थित करें',
        correct_answer: 'QSPR',
        explanation: 'Q (birth) → S (family) → P (education) → R (career).',
        explanation_hindi: 'Q (जन्म) → S (परिवार) → P (शिक्षा) → R (करियर)।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'sr10-q7',
        question_type: 'reordering',
        question_text: 'Rearrange: to / wants / be / she / a / doctor / when / grows / she / up',
        question_text_hindi: 'पुनर्व्यवस्थित करें',
        correct_answer: 'She wants to be a doctor when she grows up.',
        explanation: 'Main clause + subordinate clause.',
        explanation_hindi: 'मुख्य उपवाक्य + अधीन उपवाक्य।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'sr10-q8',
        question_type: 'reordering',
        question_text: 'P-We should conserve it. Q-Water is essential. R-But water is becoming scarce. S-Every drop counts.',
        question_text_hindi: 'पुनर्व्यवस्थित करें',
        correct_answer: 'QRPS',
        explanation: 'Q (truth) → R (problem) → P (solution) → S (conclusion).',
        explanation_hindi: 'Q (सत्य) → R (समस्या) → P (समाधान) → S (निष्कर्ष)।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'sr10-q9',
        question_type: 'reordering',
        question_text: 'Rearrange: interesting / book / I / an / yesterday / read',
        question_text_hindi: 'पुनर्व्यवस्थित करें',
        correct_answer: 'I read an interesting book yesterday.',
        explanation: 'Subject + verb + object + time.',
        explanation_hindi: 'कर्ता + क्रिया + कर्म + समय।',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'sr10-q10',
        question_type: 'reordering',
        question_text: 'P-This made him famous. Q-Newton saw apple fall. R-He discovered gravity. S-He wondered why it fell.',
        question_text_hindi: 'पुनर्व्यवस्थित करें',
        correct_answer: 'QSRP',
        explanation: 'Q (observation) → S (question) → R (discovery) → P (result).',
        explanation_hindi: 'Q (अवलोकन) → S (प्रश्न) → R (खोज) → P (परिणाम)।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'sr10-q11',
        question_type: 'reordering',
        question_text: 'Rearrange: for / waiting / I / been / have / hour / an / you',
        question_text_hindi: 'पुनर्व्यवस्थित करें',
        correct_answer: 'I have been waiting for you for an hour.',
        explanation: 'Subject + has/have been + V4 + object + duration.',
        explanation_hindi: 'कर्ता + has/have been + V4 + कर्म + अवधि।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'sr10-q12',
        question_type: 'reordering',
        question_text: 'P-Hence, plant more trees. Q-Trees give oxygen. R-They provide shade too. S-But trees are cut.',
        question_text_hindi: 'पुनर्व्यवस्थित करें',
        correct_answer: 'QRSP',
        explanation: 'Q (benefit) → R (more) → S (problem) → P (conclusion).',
        explanation_hindi: 'Q (लाभ) → R (अधिक) → S (समस्या) → P (निष्कर्ष)।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'sr10-q13',
        question_type: 'reordering',
        question_text: 'Rearrange: beautiful / how / is / rose / this / red',
        question_text_hindi: 'पुनर्व्यवस्थित करें',
        correct_answer: 'How beautiful this red rose is!',
        explanation: 'Exclamatory: How + adjective + subject + verb!',
        explanation_hindi: 'विस्मयादिबोधक: How + विशेषण + कर्ता + क्रिया!',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'sr10-q14',
        question_type: 'reordering',
        question_text: 'P-She taught herself languages. Q-Helen Keller was blind. R-She became inspiration. S-But she never gave up.',
        question_text_hindi: 'पुनर्व्यवस्थित करें',
        correct_answer: 'QSPR',
        explanation: 'Q (challenge) → S (overcoming) → P (achievement) → R (result).',
        explanation_hindi: 'Q (चुनौती) → S (जीत) → P (उपलब्धि) → R (परिणाम)।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'sr10-q15',
        question_type: 'reordering',
        question_text: 'Rearrange: teacher / the / explaining / is / lesson / the / students / to / the',
        question_text_hindi: 'पुनर्व्यवस्थित करें',
        correct_answer: 'The teacher is explaining the lesson to the students.',
        explanation: 'Subject + is + V4 + object + to + indirect object.',
        explanation_hindi: 'कर्ता + is + V4 + कर्म + to + अप्रत्यक्ष कर्म।',
        difficulty: 'easy',
        marks: 1
      }
    ]
  },
  {
    id: 'gap-filling-10',
    topic_name: 'Gap Filling (Integrated Grammar)',
    topic_name_hindi: 'रिक्त स्थान भरें (एकीकृत व्याकरण)',
    class_level: 10,
    difficulty: 'intermediate',
    exam_weightage: 'high',
    estimated_study_time: 35,
    related_topics: ['tenses-revision-10', 'modals-advanced-10'],
    identification_marks: {
      signal_words: ['context clues', 'verb forms', 'articles', 'prepositions'],
      signal_words_hindi: ['संदर्भ संकेत', 'क्रिया रूप', 'आर्टिकल्स', 'पूर्वसर्ग'],
      sentence_endings: ['Blank with options', 'Blank with hints'],
      sentence_endings_hindi: ['विकल्पों के साथ रिक्त', 'संकेत के साथ रिक्त']
    },
    explanation: {
      definition: 'Gap filling tests grammar knowledge by requiring students to fill blanks with appropriate words based on context.',
      definition_hindi: 'रिक्त स्थान भरना व्याकरण ज्ञान का परीक्षण करता है।',
      key_points: [
        'Read entire sentence for context',
        'Identify word type needed',
        'Check subject-verb agreement',
        'Look for time expressions for tense',
        'Consider collocations'
      ],
      key_points_hindi: [
        'संदर्भ के लिए पूरा वाक्य पढ़ें',
        'आवश्यक शब्द प्रकार पहचानें',
        'कर्ता-क्रिया सहमति जांचें',
        'काल के लिए समय अभिव्यक्तियां देखें',
        'संयोजनों पर विचार करें'
      ],
      rules: [
        'Articles: a/an (indefinite), the (definite)',
        'Prepositions: at (point), in (enclosed), on (surface)',
        'Conjunctions: and (addition), but (contrast), because (reason)',
        'Verb forms: Match tense with time expressions'
      ],
      rules_hindi: [
        'आर्टिकल्स: a/an (अनिश्चित), the (निश्चित)',
        'पूर्वसर्ग: at (बिंदु), in (बंद), on (सतह)',
        'संयोजक: and (जोड़), but (विपरीत), because (कारण)',
        'क्रिया रूप: समय के साथ काल मिलाएं'
      ],
      examples: [
        {
          sentence: 'I have been waiting _____ you _____ two hours. (for, for)',
          sentence_hindi: 'मैं दो घंटे _____ तुम्हारा इंतजार कर रहा हूं।',
          explanation: '"for" before object, "for" before duration.',
          explanation_hindi: 'कर्म से पहले "for", अवधि से पहले "for"।'
        }
      ],
      common_mistakes: [
        {
          wrong: 'I went to market in Sunday.',
          correct: 'I went to market on Sunday.',
          reason: 'Use "on" with days.',
          reason_hindi: 'दिनों के साथ "on"।'
        }
      ]
    },
    practice_questions: [
      {
        id: 'gf10-q1',
        question_type: 'fill_blank',
        question_text: 'She is _____ best student in class.',
        question_text_hindi: 'वह कक्षा में _____ सबसे अच्छी छात्रा है।',
        correct_answer: 'the',
        explanation: 'Superlatives take "the".',
        explanation_hindi: 'उच्चतम से पहले "the"।',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'gf10-q2',
        question_type: 'fill_blank',
        question_text: 'I have been living here _____ 2010.',
        question_text_hindi: 'मैं 2010 _____ यहाँ रह रहा हूं।',
        correct_answer: 'since',
        explanation: '"Since" with point of time.',
        explanation_hindi: 'समय बिंदु के साथ "since"।',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'gf10-q3',
        question_type: 'fill_blank',
        question_text: 'He works _____ a bank.',
        question_text_hindi: 'वह _____ बैंक में काम करता है।',
        correct_answer: 'in',
        explanation: '"In" for enclosed spaces.',
        explanation_hindi: '"In" बंद स्थानों के लिए।',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'gf10-q4',
        question_type: 'fill_blank',
        question_text: 'My father is _____ engineer.',
        question_text_hindi: 'मेरे पिता _____ इंजीनियर हैं।',
        correct_answer: 'an',
        explanation: 'Vowel sound - "an".',
        explanation_hindi: 'स्वर ध्वनि - "an"।',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'gf10-q5',
        question_type: 'fill_blank',
        question_text: 'She goes to school _____ bus.',
        question_text_hindi: 'वह _____ बस से स्कूल जाती है।',
        correct_answer: 'by',
        explanation: '"By" with transport.',
        explanation_hindi: 'परिवहन के साथ "by"।',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'gf10-q6',
        question_type: 'fill_blank',
        question_text: 'He _____ (go) to school yesterday.',
        question_text_hindi: 'वह कल स्कूल _____ (जाना)।',
        correct_answer: 'went',
        explanation: '"Yesterday" = Simple Past.',
        explanation_hindi: '"Yesterday" = सामान्य भूत।',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'gf10-q7',
        question_type: 'fill_blank',
        question_text: 'There isn\'t _____ milk in the fridge.',
        question_text_hindi: 'फ्रिज में _____ दूध नहीं है।',
        correct_answer: 'any',
        explanation: '"Any" in negative sentences.',
        explanation_hindi: 'नकारात्मक में "any"।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'gf10-q8',
        question_type: 'fill_blank',
        question_text: 'He is interested _____ music.',
        question_text_hindi: 'उसे संगीत _____ रुचि है।',
        correct_answer: 'in',
        explanation: '"Interested in".',
        explanation_hindi: '"Interested in"।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'gf10-q9',
        question_type: 'fill_blank',
        question_text: 'She has been waiting _____ two hours.',
        question_text_hindi: 'वह दो घंटे _____ इंतजार कर रही है।',
        correct_answer: 'for',
        explanation: '"For" with duration.',
        explanation_hindi: 'अवधि के साथ "for"।',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'gf10-q10',
        question_type: 'fill_blank',
        question_text: 'I met him _____ Monday.',
        question_text_hindi: 'मैं उससे _____ सोमवार को मिला।',
        correct_answer: 'on',
        explanation: '"On" with days.',
        explanation_hindi: 'दिनों के साथ "on"।',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'gf10-q11',
        question_type: 'fill_blank',
        question_text: 'She is good _____ mathematics.',
        question_text_hindi: 'वह गणित _____ अच्छी है।',
        correct_answer: 'at',
        explanation: '"Good at" for skills.',
        explanation_hindi: 'कौशल के लिए "Good at"।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'gf10-q12',
        question_type: 'fill_blank',
        question_text: '_____ you help me? (polite request)',
        question_text_hindi: '_____ आप मेरी मदद कर सकते हैं?',
        correct_answer: 'Could',
        explanation: '"Could" for polite requests.',
        explanation_hindi: '"Could" विनम्र अनुरोध।',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'gf10-q13',
        question_type: 'fill_blank',
        question_text: 'He apologized _____ being late.',
        question_text_hindi: 'उसने देर से आने _____ माफी मांगी।',
        correct_answer: 'for',
        explanation: '"Apologize for".',
        explanation_hindi: '"Apologize for"।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'gf10-q14',
        question_type: 'fill_blank',
        question_text: 'I have _____ friends in this city.',
        question_text_hindi: 'इस शहर में मेरे _____ दोस्त हैं।',
        correct_answer: 'few/some/many',
        explanation: 'Countable plural nouns.',
        explanation_hindi: 'गणनीय बहुवचन संज्ञा।',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'gf10-q15',
        question_type: 'fill_blank',
        question_text: 'The train arrives _____ 9:00 AM.',
        question_text_hindi: 'ट्रेन _____ 9:00 बजे आती है।',
        correct_answer: 'at',
        explanation: '"At" with specific time.',
        explanation_hindi: 'विशिष्ट समय के साथ "at"।',
        difficulty: 'easy',
        marks: 1
      }
    ]
  },
  {
    id: 'transformation-sentences-10',
    topic_name: 'Transformation of Sentences',
    topic_name_hindi: 'वाक्य परिवर्तन',
    class_level: 10,
    difficulty: 'advanced',
    exam_weightage: 'high',
    estimated_study_time: 45,
    related_topics: ['active-passive-10', 'reported-speech-10'],
    identification_marks: {
      signal_words: ['change to', 'transform', 'rewrite', 'convert'],
      signal_words_hindi: ['बदलें', 'परिवर्तित करें', 'फिर से लिखें'],
      sentence_endings: ['Different sentence types', 'Voice change', 'Degree change'],
      sentence_endings_hindi: ['विभिन्न वाक्य प्रकार', 'वाच्य परिवर्तन', 'डिग्री परिवर्तन']
    },
    explanation: {
      definition: 'Sentence transformation involves changing a sentence form while keeping meaning intact.',
      definition_hindi: 'वाक्य परिवर्तन में अर्थ बनाए रखते हुए वाक्य का रूप बदलना शामिल है।',
      key_points: [
        'Affirmative ↔ Negative',
        'Assertive ↔ Interrogative ↔ Exclamatory',
        'Simple ↔ Compound ↔ Complex',
        'Positive ↔ Comparative ↔ Superlative',
        'Active ↔ Passive'
      ],
      key_points_hindi: [
        'सकारात्मक ↔ नकारात्मक',
        'कथनात्मक ↔ प्रश्नवाचक ↔ विस्मयादिबोधक',
        'सरल ↔ संयुक्त ↔ मिश्र',
        'सकारात्मक ↔ तुलनात्मक ↔ उच्चतम',
        'कर्तृवाच्य ↔ कर्मवाच्य'
      ],
      rules: [
        'Affirmative to Negative: Add "not" or negative words',
        'Assertive to Exclamatory: What/How + adjective!',
        'Positive to Comparative: "No other...as" → "...er than any"',
        'Comparative to Superlative: "...er than any" → "the ...est"'
      ],
      rules_hindi: [
        'सकारात्मक से नकारात्मक: "not" या नकारात्मक शब्द जोड़ें',
        'कथनात्मक से विस्मयादिबोधक: What/How + विशेषण!',
        'सकारात्मक से तुलनात्मक: "No other...as" → "...er than any"',
        'तुलनात्मक से उच्चतम: "...er than any" → "the ...est"'
      ],
      examples: [
        {
          sentence: 'He is very intelligent. → How intelligent he is!',
          sentence_hindi: 'वह बहुत बुद्धिमान है। → वह कितना बुद्धिमान है!',
          explanation: 'Assertive to Exclamatory.',
          explanation_hindi: 'कथनात्मक से विस्मयादिबोधक।'
        }
      ],
      common_mistakes: [
        {
          wrong: 'He is intelligent. → He is not unintelligent.',
          correct: 'He is intelligent. → He is not foolish.',
          reason: 'Avoid double negatives.',
          reason_hindi: 'दोहरे नकारात्मक से बचें।'
        }
      ]
    },
    practice_questions: [
      {
        id: 'ts10-q1',
        question_type: 'transformation',
        question_text: 'Change to Negative: "Everyone praised her."',
        question_text_hindi: 'नकारात्मक में बदलें',
        correct_answer: 'No one criticized her.',
        explanation: 'Negative word + positive meaning.',
        explanation_hindi: 'नकारात्मक शब्द + सकारात्मक अर्थ।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'ts10-q2',
        question_type: 'transformation',
        question_text: 'Change to Exclamatory: "She is a very beautiful girl."',
        question_text_hindi: 'विस्मयादिबोधक में बदलें',
        correct_answer: 'What a beautiful girl she is!',
        explanation: 'What + a/an + adjective + noun!',
        explanation_hindi: 'What + a/an + विशेषण + संज्ञा!',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'ts10-q3',
        question_type: 'transformation',
        question_text: 'Change to Interrogative: "He can speak English."',
        question_text_hindi: 'प्रश्नवाचक में बदलें',
        correct_answer: "Can't he speak English?",
        explanation: 'Move modal before subject.',
        explanation_hindi: 'मोडल कर्ता से पहले।',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'ts10-q4',
        question_type: 'transformation',
        question_text: 'Change to Superlative: "No other city is as big as Mumbai."',
        question_text_hindi: 'उच्चतम में बदलें',
        correct_answer: 'Mumbai is the biggest city.',
        explanation: '"No other X as...as Y" → "Y is the ...est X"',
        explanation_hindi: '"No other X as...as Y" → "Y is the ...est X"',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'ts10-q5',
        question_type: 'transformation',
        question_text: 'Change to Comparative: "Sachin is the greatest batsman."',
        question_text_hindi: 'तुलनात्मक में बदलें',
        correct_answer: 'Sachin is greater than any other batsman.',
        explanation: '"the ...est" → "...er than any other"',
        explanation_hindi: '"the ...est" → "...er than any other"',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'ts10-q6',
        question_type: 'transformation',
        question_text: 'Change to Complex: "Being tired, he went to bed."',
        question_text_hindi: 'मिश्र में बदलें',
        correct_answer: 'As he was tired, he went to bed.',
        explanation: 'Simple (participle) → Complex (clause).',
        explanation_hindi: 'सरल (कृदंत) → मिश्र (उपवाक्य)।',
        difficulty: 'hard',
        marks: 1
      },
      {
        id: 'ts10-q7',
        question_type: 'transformation',
        question_text: 'Change to Affirmative: "Nobody can deny this."',
        question_text_hindi: 'सकारात्मक में बदलें',
        correct_answer: 'Everybody must accept this.',
        explanation: '"Nobody can deny" → "Everybody must accept"',
        explanation_hindi: '"Nobody can deny" → "Everybody must accept"',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'ts10-q8',
        question_type: 'transformation',
        question_text: 'Change to Positive: "Akbar was greater than most emperors."',
        question_text_hindi: 'सकारात्मक में बदलें',
        correct_answer: 'Very few emperors were as great as Akbar.',
        explanation: '"...er than most" → "Very few...as...as"',
        explanation_hindi: '"...er than most" → "Very few...as...as"',
        difficulty: 'hard',
        marks: 1
      },
      {
        id: 'ts10-q9',
        question_type: 'transformation',
        question_text: 'Change to Compound: "Though poor, he is honest."',
        question_text_hindi: 'संयुक्त में बदलें',
        correct_answer: 'He is poor but honest.',
        explanation: 'Complex (though) → Compound (but).',
        explanation_hindi: 'मिश्र (though) → संयुक्त (but)।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'ts10-q10',
        question_type: 'transformation',
        question_text: 'Change to Assertive: "How beautiful the sunset is!"',
        question_text_hindi: 'कथनात्मक में बदलें',
        correct_answer: 'The sunset is very beautiful.',
        explanation: 'Remove "How", add "very".',
        explanation_hindi: '"How" हटाएं, "very" जोड़ें।',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'ts10-q11',
        question_type: 'transformation',
        question_text: 'Change to Negative: "He always comes on time."',
        question_text_hindi: 'नकारात्मक में बदलें',
        correct_answer: 'He never comes late.',
        explanation: '"always" → "never" with opposite meaning.',
        explanation_hindi: '"always" → "never" विपरीत अर्थ के साथ।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'ts10-q12',
        question_type: 'transformation',
        question_text: 'Change to Interrogative: "Nothing can stop him."',
        question_text_hindi: 'प्रश्नवाचक में बदलें',
        correct_answer: 'Can anything stop him?',
        explanation: 'Negative → Interrogative positive.',
        explanation_hindi: 'नकारात्मक → प्रश्नवाचक सकारात्मक।',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'ts10-q13',
        question_type: 'transformation',
        question_text: 'Change: "He is too weak to walk." (to Complex)',
        question_text_hindi: 'मिश्र में बदलें',
        correct_answer: 'He is so weak that he cannot walk.',
        explanation: '"too...to" → "so...that cannot"',
        explanation_hindi: '"too...to" → "so...that cannot"',
        difficulty: 'medium',
        marks: 1
      },
      {
        id: 'ts10-q14',
        question_type: 'transformation',
        question_text: 'Change degree: "Iron is more useful than any other metal." (Superlative)',
        question_text_hindi: 'डिग्री बदलें (उच्चतम)',
        correct_answer: 'Iron is the most useful metal.',
        explanation: '"more...than any" → "the most..."',
        explanation_hindi: '"more...than any" → "the most..."',
        difficulty: 'easy',
        marks: 1
      },
      {
        id: 'ts10-q15',
        question_type: 'transformation',
        question_text: 'Change to Simple: "If you work hard, you will succeed."',
        question_text_hindi: 'सरल में बदलें',
        correct_answer: 'Working hard leads to success.',
        explanation: 'Complex (if-clause) → Simple (gerund).',
        explanation_hindi: 'मिश्र (if-उपवाक्य) → सरल (क्रियावाचक संज्ञा)।',
        difficulty: 'hard',
        marks: 1
      }
    ]
  }
];

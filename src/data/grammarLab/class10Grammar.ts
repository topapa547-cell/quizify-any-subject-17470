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
  }
];

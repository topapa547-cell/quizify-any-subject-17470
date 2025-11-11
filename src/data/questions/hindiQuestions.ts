import { QuizQuestion } from '../quizData';

export const hindiQuestions: QuizQuestion[] = [
  // Class 9 - Easy
  {
    question_id: 401,
    text: "'मीठा' शब्द में कौन सा गुण है?",
    options: [
      { option_id: 40101, option_text: "विशेषण" },
      { option_id: 40102, option_text: "संज्ञा" },
      { option_id: 40103, option_text: "सर्वनाम" },
      { option_id: 40104, option_text: "क्रिया" }
    ],
    correct_option_id: 40101,
    class_level: 9,
    difficulty: "easy",
    explanation: "'मीठा' एक विशेषण है जो संज्ञा की विशेषता बताता है"
  },
  {
    question_id: 402,
    text: "हिंदी में कितने स्वर होते हैं?",
    options: [
      { option_id: 40201, option_text: "11" },
      { option_id: 40202, option_text: "10" },
      { option_id: 40203, option_text: "13" },
      { option_id: 40204, option_text: "12" }
    ],
    correct_option_id: 40201,
    class_level: 9,
    difficulty: "easy",
    explanation: "हिंदी वर्णमाला में 11 स्वर होते हैं: अ, आ, इ, ई, उ, ऊ, ऋ, ए, ऐ, ओ, औ"
  },
  {
    question_id: 403,
    text: "'राम ने फल खाया।' इस वाक्य में कर्ता कौन है?",
    options: [
      { option_id: 40301, option_text: "राम" },
      { option_id: 40302, option_text: "फल" },
      { option_id: 40303, option_text: "खाया" },
      { option_id: 40304, option_text: "ने" }
    ],
    correct_option_id: 40301,
    class_level: 9,
    difficulty: "easy",
    explanation: "वाक्य में क्रिया करने वाला 'राम' कर्ता है"
  },
  // Class 9 - Medium
  {
    question_id: 404,
    text: "'पुस्तकालय' में कौन सा समास है?",
    options: [
      { option_id: 40401, option_text: "तत्पुरुष समास" },
      { option_id: 40402, option_text: "कर्मधारय समास" },
      { option_id: 40403, option_text: "द्वंद्व समास" },
      { option_id: 40404, option_text: "बहुव्रीहि समास" }
    ],
    correct_option_id: 40401,
    class_level: 9,
    difficulty: "medium",
    explanation: "'पुस्तकों का आलय' = तत्पुरुष समास (संज्ञा + संज्ञा)"
  },
  {
    question_id: 405,
    text: "'बूढ़ा चंदा' किस विधा की रचना है?",
    options: [
      { option_id: 40501, option_text: "कविता" },
      { option_id: 40502, option_text: "कहानी" },
      { option_id: 40503, option_text: "निबंध" },
      { option_id: 40504, option_text: "नाटक" }
    ],
    correct_option_id: 40501,
    class_level: 9,
    difficulty: "medium",
    explanation: "'बूढ़ा चंदा' प्रसिद्ध हिंदी कविता है"
  },
  // Class 9 - Hard
  {
    question_id: 406,
    text: "'अनुप्रास' अलंकार का उदाहरण कौन सा है?",
    options: [
      { option_id: 40601, option_text: "चारु चंद्र की चंचल किरणें" },
      { option_id: 40602, option_text: "पीपर पात सरिस मन डोला" },
      { option_id: 40603, option_text: "मुख चंद्र के समान है" },
      { option_id: 40604, option_text: "हाथ कंगन को आरसी क्या" }
    ],
    correct_option_id: 40601,
    class_level: 9,
    difficulty: "hard",
    explanation: "अनुप्रास में वर्णों की आवृत्ति होती है। यहाँ 'च' वर्ण बार-बार आया है"
  },
  // Class 10 - Easy
  {
    question_id: 407,
    text: "'रामचरितमानस' के रचयिता कौन हैं?",
    options: [
      { option_id: 40701, option_text: "तुलसीदास" },
      { option_id: 40702, option_text: "कबीर" },
      { option_id: 40703, option_text: "सूरदास" },
      { option_id: 40704, option_text: "मीराबाई" }
    ],
    correct_option_id: 40701,
    class_level: 10,
    difficulty: "easy",
    explanation: "गोस्वामी तुलसीदास ने रामचरितमानस की रचना की"
  },
  {
    question_id: 408,
    text: "हिंदी की मूल लिपि क्या है?",
    options: [
      { option_id: 40801, option_text: "देवनागरी" },
      { option_id: 40802, option_text: "ब्राह्मी" },
      { option_id: 40803, option_text: "खरोष्ठी" },
      { option_id: 40804, option_text: "गुरुमुखी" }
    ],
    correct_option_id: 40801,
    class_level: 10,
    difficulty: "easy",
    explanation: "हिंदी भाषा देवनागरी लिपि में लिखी जाती है"
  },
  // Class 10 - Medium
  {
    question_id: 409,
    text: "'उपमा' अलंकार किसमें होता है?",
    options: [
      { option_id: 40901, option_text: "उपमेय और उपमान की तुलना" },
      { option_id: 40902, option_text: "वर्णों की आवृत्ति" },
      { option_id: 40903, option_text: "विरोधाभास" },
      { option_id: 40904, option_text: "अतिशयोक्ति" }
    ],
    correct_option_id: 40901,
    class_level: 10,
    difficulty: "medium",
    explanation: "उपमा अलंकार में एक वस्तु की तुलना दूसरी वस्तु से की जाती है"
  },
  {
    question_id: 410,
    text: "'कर्मवाच्य' में क्या प्रधान होता है?",
    options: [
      { option_id: 41001, option_text: "कर्म" },
      { option_id: 41002, option_text: "कर्ता" },
      { option_id: 41003, option_text: "क्रिया" },
      { option_id: 41004, option_text: "भाव" }
    ],
    correct_option_id: 41001,
    class_level: 10,
    difficulty: "medium",
    explanation: "कर्मवाच्य में कर्म प्रधान होता है, जैसे 'राम द्वारा फल खाया जाता है'"
  },
  // Class 10 - Hard
  {
    question_id: 411,
    text: "'प्रेमचंद' की किस कहानी में ईदगाह का वर्णन है?",
    options: [
      { option_id: 41101, option_text: "ईदगाह" },
      { option_id: 41102, option_text: "पंच परमेश्वर" },
      { option_id: 41103, option_text: "कफन" },
      { option_id: 41104, option_text: "बूढ़ी काकी" }
    ],
    correct_option_id: 41101,
    class_level: 10,
    difficulty: "hard",
    explanation: "'ईदगाह' प्रेमचंद की प्रसिद्ध कहानी है जो बच्चे हामिद पर आधारित है"
  },
  // Class 11 - Easy
  {
    question_id: 412,
    text: "हिंदी को राजभाषा का दर्जा कब मिला?",
    options: [
      { option_id: 41201, option_text: "14 सितंबर 1949" },
      { option_id: 41202, option_text: "26 जनवरी 1950" },
      { option_id: 41203, option_text: "15 अगस्त 1947" },
      { option_id: 41204, option_text: "2 अक्टूबर 1947" }
    ],
    correct_option_id: 41201,
    class_level: 11,
    difficulty: "easy",
    explanation: "14 सितंबर 1949 को हिंदी को राजभाषा का दर्जा मिला, इसलिए यह दिन हिंदी दिवस मनाया जाता है"
  },
  // Class 11 - Medium
  {
    question_id: 413,
    text: "'आदिकाल' को किस नाम से भी जाना जाता है?",
    options: [
      { option_id: 41301, option_text: "वीरगाथा काल" },
      { option_id: 41302, option_text: "भक्ति काल" },
      { option_id: 41303, option_text: "रीति काल" },
      { option_id: 41304, option_text: "आधुनिक काल" }
    ],
    correct_option_id: 41301,
    class_level: 11,
    difficulty: "medium",
    explanation: "आदिकाल को 'वीरगाथा काल' भी कहा जाता है"
  },
  // Class 11 - Hard
  {
    question_id: 414,
    text: "'निर्गुण भक्ति धारा' के प्रमुख कवि कौन थे?",
    options: [
      { option_id: 41401, option_text: "कबीरदास" },
      { option_id: 41402, option_text: "सूरदास" },
      { option_id: 41403, option_text: "तुलसीदास" },
      { option_id: 41404, option_text: "मीराबाई" }
    ],
    correct_option_id: 41401,
    class_level: 11,
    difficulty: "hard",
    explanation: "कबीरदास निर्गुण भक्ति धारा के प्रमुख कवि थे"
  },
  // Class 12 - Easy
  {
    question_id: 415,
    text: "'गद्य की प्रमुख विधाएँ' कौन सी हैं?",
    options: [
      { option_id: 41501, option_text: "कहानी, उपन्यास, निबंध, नाटक" },
      { option_id: 41502, option_text: "कविता, गीत, गजल" },
      { option_id: 41503, option_text: "दोहा, चौपाई" },
      { option_id: 41504, option_text: "महाकाव्य, खंडकाव्य" }
    ],
    correct_option_id: 41501,
    class_level: 12,
    difficulty: "easy",
    explanation: "कहानी, उपन्यास, निबंध, नाटक गद्य की प्रमुख विधाएँ हैं"
  },
  // Class 12 - Medium
  {
    question_id: 416,
    text: "'छायावाद' के प्रमुख स्तंभ किन्हें माना जाता है?",
    options: [
      { option_id: 41601, option_text: "जयशंकर प्रसाद, सूर्यकांत त्रिपाठी 'निराला', सुमित्रानंदन पंत, महादेवी वर्मा" },
      { option_id: 41602, option_text: "प्रेमचंद, निराला, प्रसाद" },
      { option_id: 41603, option_text: "तुलसी, कबीर, सूर" },
      { option_id: 41604, option_text: "हरिवंश राय बच्चन, रामधारी सिंह दिनकर" }
    ],
    correct_option_id: 41601,
    class_level: 12,
    difficulty: "medium",
    explanation: "छायावाद के चार प्रमुख स्तंभ: प्रसाद, निराला, पंत और महादेवी"
  },
  // Class 12 - Hard
  {
    question_id: 417,
    text: "'कामायनी' किस छंद में लिखी गई है?",
    options: [
      { option_id: 41701, option_text: "मुक्तक छंद" },
      { option_id: 41702, option_text: "दोहा" },
      { option_id: 41703, option_text: "चौपाई" },
      { option_id: 41704, option_text: "सवैया" }
    ],
    correct_option_id: 41701,
    class_level: 12,
    difficulty: "hard",
    explanation: "'कामायनी' जयशंकर प्रसाद की प्रसिद्ध रचना है जो मुक्तक छंद में लिखी गई है"
  },
  {
    question_id: 418,
    text: "'गोदान' उपन्यास के लेखक कौन हैं?",
    options: [
      { option_id: 41801, option_text: "प्रेमचंद" },
      { option_id: 41802, option_text: "जयशंकर प्रसाद" },
      { option_id: 41803, option_text: "यशपाल" },
      { option_id: 41804, option_text: "भीष्म साहनी" }
    ],
    correct_option_id: 41801,
    class_level: 10,
    difficulty: "easy",
    explanation: "'गोदान' मुंशी प्रेमचंद का प्रसिद्ध उपन्यास है"
  }
];

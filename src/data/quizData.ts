export interface QuizOption {
  option_id: number;
  option_text: string;
}

export interface QuizQuestion {
  question_id: number;
  text: string;
  options: QuizOption[];
  correct_option_id: number;
}

export interface QuizData {
  quiz_title: string;
  total_questions: number;
  questions: QuizQuestion[];
}

// Complete question bank with 25 meaningful questions
export const questionBank: QuizQuestion[] = [
  {
    question_id: 1,
    text: "द्विघात समीकरण ax² + bx + c = 0 के दो बराबर मूल होने की शर्त क्या है?",
    options: [
      { option_id: 101, option_text: "D > 0" },
      { option_id: 102, option_text: "D < 0" },
      { option_id: 103, option_text: "D = 0" },
      { option_id: 104, option_text: "D ≠ 0" }
    ],
    correct_option_id: 103
  },
  {
    question_id: 2,
    text: "बिंदु (3, 4) की मूल बिंदु से दूरी क्या है?",
    options: [
      { option_id: 201, option_text: "3 इकाई" },
      { option_id: 202, option_text: "4 इकाई" },
      { option_id: 203, option_text: "5 इकाई" },
      { option_id: 204, option_text: "7 इकाई" }
    ],
    correct_option_id: 203
  },
  {
    question_id: 3,
    text: "tan(90° - A) किसके बराबर है?",
    options: [
      { option_id: 301, option_text: "sin A" },
      { option_id: 302, option_text: "cot A" },
      { option_id: 303, option_text: "sec A" },
      { option_id: 304, option_text: "tan A" }
    ],
    correct_option_id: 302
  },
  {
    question_id: 4,
    text: "एक पासे को फेंकने पर विषम संख्या आने की प्रायिकता है:",
    options: [
      { option_id: 401, option_text: "1/6" },
      { option_id: 402, option_text: "1/3" },
      { option_id: 403, option_text: "1/2" },
      { option_id: 404, option_text: "2/3" }
    ],
    correct_option_id: 403
  },
  {
    question_id: 5,
    text: "A.P. 2, 7, 12, ... का सार्व अंतर क्या है?",
    options: [
      { option_id: 501, option_text: "2" },
      { option_id: 502, option_text: "5" },
      { option_id: 503, option_text: "7" },
      { option_id: 504, option_text: "10" }
    ],
    correct_option_id: 502
  },
  {
    question_id: 6,
    text: "sin²θ + cos²θ का मान क्या है?",
    options: [
      { option_id: 601, option_text: "0" },
      { option_id: 602, option_text: "1" },
      { option_id: 603, option_text: "2" },
      { option_id: 604, option_text: "1/2" }
    ],
    correct_option_id: 602
  },
  {
    question_id: 7,
    text: "वृत्त की परिधि का सूत्र क्या है?",
    options: [
      { option_id: 701, option_text: "πr" },
      { option_id: 702, option_text: "2πr" },
      { option_id: 703, option_text: "πr²" },
      { option_id: 704, option_text: "2πr²" }
    ],
    correct_option_id: 702
  },
  {
    question_id: 8,
    text: "समीकरण 2x + 3 = 11 में x का मान क्या है?",
    options: [
      { option_id: 801, option_text: "2" },
      { option_id: 802, option_text: "4" },
      { option_id: 803, option_text: "6" },
      { option_id: 804, option_text: "8" }
    ],
    correct_option_id: 802
  },
  {
    question_id: 9,
    text: "√144 का मान क्या है?",
    options: [
      { option_id: 901, option_text: "10" },
      { option_id: 902, option_text: "11" },
      { option_id: 903, option_text: "12" },
      { option_id: 904, option_text: "13" }
    ],
    correct_option_id: 903
  },
  {
    question_id: 10,
    text: "समकोण त्रिभुज में कर्ण² = लम्ब² + आधार² को क्या कहते हैं?",
    options: [
      { option_id: 1001, option_text: "थेल्स प्रमेय" },
      { option_id: 1002, option_text: "पाइथागोरस प्रमेय" },
      { option_id: 1003, option_text: "आर्किमिडीज प्रमेय" },
      { option_id: 1004, option_text: "यूक्लिड प्रमेय" }
    ],
    correct_option_id: 1002
  },
  {
    question_id: 11,
    text: "घनाभ का आयतन का सूत्र क्या है?",
    options: [
      { option_id: 1101, option_text: "l × b" },
      { option_id: 1102, option_text: "l × b × h" },
      { option_id: 1103, option_text: "2(l + b)" },
      { option_id: 1104, option_text: "l + b + h" }
    ],
    correct_option_id: 1102
  },
  {
    question_id: 12,
    text: "यदि A और B दो परस्पर स्वतंत्र घटनाएं हैं, तो P(A ∩ B) = ?",
    options: [
      { option_id: 1201, option_text: "P(A) + P(B)" },
      { option_id: 1202, option_text: "P(A) × P(B)" },
      { option_id: 1203, option_text: "P(A) - P(B)" },
      { option_id: 1204, option_text: "P(A) / P(B)" }
    ],
    correct_option_id: 1202
  },
  {
    question_id: 13,
    text: "समांतर श्रेणी का nवां पद का सूत्र क्या है?",
    options: [
      { option_id: 1301, option_text: "a + (n-1)d" },
      { option_id: 1302, option_text: "a + nd" },
      { option_id: 1303, option_text: "an + d" },
      { option_id: 1304, option_text: "a - (n-1)d" }
    ],
    correct_option_id: 1301
  },
  {
    question_id: 14,
    text: "cos 60° का मान क्या है?",
    options: [
      { option_id: 1401, option_text: "0" },
      { option_id: 1402, option_text: "1/2" },
      { option_id: 1403, option_text: "√3/2" },
      { option_id: 1404, option_text: "1" }
    ],
    correct_option_id: 1402
  },
  {
    question_id: 15,
    text: "एक रेखीय समीकरण युग्म के कितने अधिकतम हल हो सकते हैं?",
    options: [
      { option_id: 1501, option_text: "0" },
      { option_id: 1502, option_text: "1" },
      { option_id: 1503, option_text: "2" },
      { option_id: 1504, option_text: "अनंत" }
    ],
    correct_option_id: 1504
  },
  {
    question_id: 16,
    text: "वर्ग का क्षेत्रफल कितना होता है?",
    options: [
      { option_id: 1601, option_text: "4a" },
      { option_id: 1602, option_text: "a²" },
      { option_id: 1603, option_text: "2a" },
      { option_id: 1604, option_text: "a³" }
    ],
    correct_option_id: 1602
  },
  {
    question_id: 17,
    text: "शंकु के आयतन का सूत्र क्या है?",
    options: [
      { option_id: 1701, option_text: "πr²h" },
      { option_id: 1702, option_text: "(1/3)πr²h" },
      { option_id: 1703, option_text: "2πrh" },
      { option_id: 1704, option_text: "(2/3)πr²h" }
    ],
    correct_option_id: 1702
  },
  {
    question_id: 18,
    text: "यदि बहुपद x² - 5x + 6 के गुणनखंड क्या हैं?",
    options: [
      { option_id: 1801, option_text: "(x-2)(x-3)" },
      { option_id: 1802, option_text: "(x-1)(x-6)" },
      { option_id: 1803, option_text: "(x+2)(x+3)" },
      { option_id: 1804, option_text: "(x-5)(x-1)" }
    ],
    correct_option_id: 1801
  },
  {
    question_id: 19,
    text: "तीन सिक्कों को एक साथ उछालने पर सभी चित आने की प्रायिकता है:",
    options: [
      { option_id: 1901, option_text: "1/2" },
      { option_id: 1902, option_text: "1/4" },
      { option_id: 1903, option_text: "1/8" },
      { option_id: 1904, option_text: "3/8" }
    ],
    correct_option_id: 1903
  },
  {
    question_id: 20,
    text: "बिंदु (0, 0) किस अक्ष पर स्थित है?",
    options: [
      { option_id: 2001, option_text: "x-अक्ष पर" },
      { option_id: 2002, option_text: "y-अक्ष पर" },
      { option_id: 2003, option_text: "मूल बिंदु पर" },
      { option_id: 2004, option_text: "कहीं नहीं" }
    ],
    correct_option_id: 2003
  },
  {
    question_id: 21,
    text: "गोले का पृष्ठीय क्षेत्रफल का सूत्र क्या है?",
    options: [
      { option_id: 2101, option_text: "2πr²" },
      { option_id: 2102, option_text: "3πr²" },
      { option_id: 2103, option_text: "4πr²" },
      { option_id: 2104, option_text: "πr²" }
    ],
    correct_option_id: 2103
  },
  {
    question_id: 22,
    text: "tan 45° का मान क्या है?",
    options: [
      { option_id: 2201, option_text: "0" },
      { option_id: 2202, option_text: "1/√2" },
      { option_id: 2203, option_text: "1" },
      { option_id: 2204, option_text: "√3" }
    ],
    correct_option_id: 2203
  },
  {
    question_id: 23,
    text: "समचतुर्भुज के विकर्ण एक दूसरे को किस कोण पर काटते हैं?",
    options: [
      { option_id: 2301, option_text: "45°" },
      { option_id: 2302, option_text: "60°" },
      { option_id: 2303, option_text: "90°" },
      { option_id: 2304, option_text: "120°" }
    ],
    correct_option_id: 2303
  },
  {
    question_id: 24,
    text: "यदि किसी संख्या का 20% = 40 है, तो संख्या क्या है?",
    options: [
      { option_id: 2401, option_text: "100" },
      { option_id: 2402, option_text: "200" },
      { option_id: 2403, option_text: "300" },
      { option_id: 2404, option_text: "400" }
    ],
    correct_option_id: 2402
  },
  {
    question_id: 25,
    text: "बेलन का वक्र पृष्ठीय क्षेत्रफल का सूत्र क्या है?",
    options: [
      { option_id: 2501, option_text: "πr²h" },
      { option_id: 2502, option_text: "2πr²" },
      { option_id: 2503, option_text: "2πrh" },
      { option_id: 2504, option_text: "πrh" }
    ],
    correct_option_id: 2503
  }
];

export const generateQuiz = (numQuestions: number): QuizData => {
  // Shuffle and pick random questions
  const shuffled = [...questionBank].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, Math.min(numQuestions, questionBank.length));
  
  return {
    quiz_title: "गणित अभ्यास प्रश्न",
    total_questions: selected.length,
    questions: selected
  };
};

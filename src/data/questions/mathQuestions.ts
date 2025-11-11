import { QuizQuestion } from '../quizData';

export const mathQuestions: QuizQuestion[] = [
  // Class 9 - Easy
  {
    question_id: 1,
    text: "√144 का मान क्या है?",
    options: [
      { option_id: 101, option_text: "10" },
      { option_id: 102, option_text: "11" },
      { option_id: 103, option_text: "12" },
      { option_id: 104, option_text: "13" }
    ],
    correct_option_id: 103,
    class_level: 9,
    difficulty: "easy",
    explanation: "√144 = 12, क्योंकि 12 × 12 = 144"
  },
  {
    question_id: 2,
    text: "समीकरण 2x + 3 = 11 में x का मान क्या है?",
    options: [
      { option_id: 201, option_text: "2" },
      { option_id: 202, option_text: "4" },
      { option_id: 203, option_text: "6" },
      { option_id: 204, option_text: "8" }
    ],
    correct_option_id: 202,
    class_level: 9,
    difficulty: "easy",
    explanation: "2x + 3 = 11 → 2x = 8 → x = 4"
  },
  {
    question_id: 3,
    text: "वर्ग का क्षेत्रफल कितना होता है?",
    options: [
      { option_id: 301, option_text: "4a" },
      { option_id: 302, option_text: "a²" },
      { option_id: 303, option_text: "2a" },
      { option_id: 304, option_text: "a³" }
    ],
    correct_option_id: 302,
    class_level: 9,
    difficulty: "easy",
    explanation: "वर्ग का क्षेत्रफल = भुजा × भुजा = a²"
  },
  // Class 9 - Medium
  {
    question_id: 4,
    text: "त्रिभुज का क्षेत्रफल = ?",
    options: [
      { option_id: 401, option_text: "1/2 × आधार × ऊँचाई" },
      { option_id: 402, option_text: "आधार × ऊँचाई" },
      { option_id: 403, option_text: "1/3 × आधार × ऊँचाई" },
      { option_id: 404, option_text: "2 × आधार × ऊँचाई" }
    ],
    correct_option_id: 401,
    class_level: 9,
    difficulty: "medium",
    explanation: "किसी भी त्रिभुज का क्षेत्रफल = 1/2 × आधार × ऊँचाई"
  },
  {
    question_id: 5,
    text: "समबाहु त्रिभुज का प्रत्येक कोण कितना होता है?",
    options: [
      { option_id: 501, option_text: "45°" },
      { option_id: 502, option_text: "60°" },
      { option_id: 503, option_text: "90°" },
      { option_id: 504, option_text: "120°" }
    ],
    correct_option_id: 502,
    class_level: 9,
    difficulty: "medium",
    explanation: "समबाहु त्रिभुज में तीनों कोण बराबर होते हैं: 180°/3 = 60°"
  },
  // Class 10 - Easy
  {
    question_id: 6,
    text: "द्विघात समीकरण ax² + bx + c = 0 के दो बराबर मूल होने की शर्त क्या है?",
    options: [
      { option_id: 601, option_text: "D > 0" },
      { option_id: 602, option_text: "D < 0" },
      { option_id: 603, option_text: "D = 0" },
      { option_id: 604, option_text: "D ≠ 0" }
    ],
    correct_option_id: 603,
    class_level: 10,
    difficulty: "easy",
    explanation: "जब विविक्तकर D = b² - 4ac = 0 होता है, तो दोनों मूल बराबर होते हैं"
  },
  {
    question_id: 7,
    text: "sin²θ + cos²θ का मान क्या है?",
    options: [
      { option_id: 701, option_text: "0" },
      { option_id: 702, option_text: "1" },
      { option_id: 703, option_text: "2" },
      { option_id: 704, option_text: "1/2" }
    ],
    correct_option_id: 702,
    class_level: 10,
    difficulty: "easy",
    explanation: "यह त्रिकोणमितीय सर्वसमिका है: sin²θ + cos²θ = 1 (सभी θ के लिए)"
  },
  {
    question_id: 8,
    text: "वृत्त की परिधि का सूत्र क्या है?",
    options: [
      { option_id: 801, option_text: "πr" },
      { option_id: 802, option_text: "2πr" },
      { option_id: 803, option_text: "πr²" },
      { option_id: 804, option_text: "2πr²" }
    ],
    correct_option_id: 802,
    class_level: 10,
    difficulty: "easy",
    explanation: "वृत्त की परिधि = 2πr, जहाँ r त्रिज्या है"
  },
  // Class 10 - Medium
  {
    question_id: 9,
    text: "बिंदु (3, 4) की मूल बिंदु से दूरी क्या है?",
    options: [
      { option_id: 901, option_text: "3 इकाई" },
      { option_id: 902, option_text: "4 इकाई" },
      { option_id: 903, option_text: "5 इकाई" },
      { option_id: 904, option_text: "7 इकाई" }
    ],
    correct_option_id: 903,
    class_level: 10,
    difficulty: "medium",
    explanation: "दूरी = √(3² + 4²) = √(9 + 16) = √25 = 5 इकाई"
  },
  {
    question_id: 10,
    text: "tan(90° - A) किसके बराबर है?",
    options: [
      { option_id: 1001, option_text: "sin A" },
      { option_id: 1002, option_text: "cot A" },
      { option_id: 1003, option_text: "sec A" },
      { option_id: 1004, option_text: "tan A" }
    ],
    correct_option_id: 1002,
    class_level: 10,
    difficulty: "medium",
    explanation: "पूरक कोणों का त्रिकोणमितीय अनुपात: tan(90° - A) = cot A"
  },
  {
    question_id: 11,
    text: "समकोण त्रिभुज में कर्ण² = लम्ब² + आधार² को क्या कहते हैं?",
    options: [
      { option_id: 1101, option_text: "थेल्स प्रमेय" },
      { option_id: 1102, option_text: "पाइथागोरस प्रमेय" },
      { option_id: 1103, option_text: "आर्किमिडीज प्रमेय" },
      { option_id: 1104, option_text: "यूक्लिड प्रमेय" }
    ],
    correct_option_id: 1102,
    class_level: 10,
    difficulty: "medium",
    explanation: "यह पाइथागोरस प्रमेय है, जो समकोण त्रिभुज में लागू होता है"
  },
  // Class 10 - Hard
  {
    question_id: 12,
    text: "यदि α और β द्विघात समीकरण ax² + bx + c = 0 के मूल हैं, तो α + β = ?",
    options: [
      { option_id: 1201, option_text: "-b/a" },
      { option_id: 1202, option_text: "b/a" },
      { option_id: 1203, option_text: "c/a" },
      { option_id: 1204, option_text: "-c/a" }
    ],
    correct_option_id: 1201,
    class_level: 10,
    difficulty: "hard",
    explanation: "मूलों का योग = -b/a (वियतस सूत्र)"
  },
  {
    question_id: 13,
    text: "दो बिंदुओं (x₁, y₁) और (x₂, y₂) के बीच की दूरी का सूत्र क्या है?",
    options: [
      { option_id: 1301, option_text: "√[(x₂-x₁)² + (y₂-y₁)²]" },
      { option_id: 1302, option_text: "(x₂-x₁)² + (y₂-y₁)²" },
      { option_id: 1303, option_text: "√[(x₂+x₁)² + (y₂+y₁)²]" },
      { option_id: 1304, option_text: "(x₂-x₁) + (y₂-y₁)" }
    ],
    correct_option_id: 1301,
    class_level: 10,
    difficulty: "hard",
    explanation: "दूरी सूत्र: d = √[(x₂-x₁)² + (y₂-y₁)²] (पाइथागोरस प्रमेय से व्युत्पन्न)"
  },
  // Class 11 - Easy  
  {
    question_id: 14,
    text: "यदि n(A) = 5 और n(B) = 3, तो n(A × B) क्या होगा?",
    options: [
      { option_id: 1401, option_text: "8" },
      { option_id: 1402, option_text: "15" },
      { option_id: 1403, option_text: "2" },
      { option_id: 1404, option_text: "5/3" }
    ],
    correct_option_id: 1402,
    class_level: 11,
    difficulty: "easy",
    explanation: "कार्तीय गुणनफल में: n(A × B) = n(A) × n(B) = 5 × 3 = 15"
  },
  {
    question_id: 15,
    text: "sin 30° का मान क्या है?",
    options: [
      { option_id: 1501, option_text: "1/2" },
      { option_id: 1502, option_text: "√3/2" },
      { option_id: 1503, option_text: "1" },
      { option_id: 1504, option_text: "0" }
    ],
    correct_option_id: 1501,
    class_level: 11,
    difficulty: "easy",
    explanation: "त्रिकोणमितीय मानक मान: sin 30° = 1/2"
  },
  // Class 11 - Medium
  {
    question_id: 16,
    text: "यदि ⁿCᵣ = ⁿCₛ, तो r और s में क्या संबंध है?",
    options: [
      { option_id: 1601, option_text: "r = s या r + s = n" },
      { option_id: 1602, option_text: "r = s" },
      { option_id: 1603, option_text: "r + s = 0" },
      { option_id: 1604, option_text: "r - s = n" }
    ],
    correct_option_id: 1601,
    class_level: 11,
    difficulty: "medium",
    explanation: "संचय के गुण से: ⁿCᵣ = ⁿCₛ तब r = s या r + s = n"
  },
  {
    question_id: 17,
    text: "किसी समांतर श्रेणी के प्रथम n पदों का योग Sₙ = n/2[2a + (n-1)d] है। यहाँ 'a' क्या है?",
    options: [
      { option_id: 1701, option_text: "प्रथम पद" },
      { option_id: 1702, option_text: "अंतिम पद" },
      { option_id: 1703, option_text: "सार्व अंतर" },
      { option_id: 1704, option_text: "मध्य पद" }
    ],
    correct_option_id: 1701,
    class_level: 11,
    difficulty: "medium",
    explanation: "समांतर श्रेणी में 'a' प्रथम पद को दर्शाता है"
  },
  // Class 11 - Hard
  {
    question_id: 18,
    text: "lim(x→0) (sin x)/x का मान क्या है?",
    options: [
      { option_id: 1801, option_text: "0" },
      { option_id: 1802, option_text: "1" },
      { option_id: 1803, option_text: "∞" },
      { option_id: 1804, option_text: "अपरिभाषित" }
    ],
    correct_option_id: 1802,
    class_level: 11,
    difficulty: "hard",
    explanation: "यह एक महत्वपूर्ण सीमा है: lim(x→0) (sin x)/x = 1"
  },
  {
    question_id: 19,
    text: "यदि A और B दो स्वतंत्र घटनाएं हैं, तो P(A ∩ B) = ?",
    options: [
      { option_id: 1901, option_text: "P(A) + P(B)" },
      { option_id: 1902, option_text: "P(A) × P(B)" },
      { option_id: 1903, option_text: "P(A) - P(B)" },
      { option_id: 1904, option_text: "P(A) / P(B)" }
    ],
    correct_option_id: 1902,
    class_level: 11,
    difficulty: "hard",
    explanation: "स्वतंत्र घटनाओं के लिए: P(A ∩ B) = P(A) × P(B)"
  },
  // Class 12 - Easy
  {
    question_id: 20,
    text: "यदि f(x) = x², तो f'(x) क्या है?",
    options: [
      { option_id: 2001, option_text: "x" },
      { option_id: 2002, option_text: "2x" },
      { option_id: 2003, option_text: "x²" },
      { option_id: 2004, option_text: "2" }
    ],
    correct_option_id: 2002,
    class_level: 12,
    difficulty: "easy",
    explanation: "अवकलन का मूल नियम: d/dx(xⁿ) = nxⁿ⁻¹, इसलिए d/dx(x²) = 2x"
  },
  {
    question_id: 21,
    text: "∫x dx का मान क्या है?",
    options: [
      { option_id: 2101, option_text: "x + C" },
      { option_id: 2102, option_text: "x²/2 + C" },
      { option_id: 2103, option_text: "x³/3 + C" },
      { option_id: 2104, option_text: "1 + C" }
    ],
    correct_option_id: 2102,
    class_level: 12,
    difficulty: "easy",
    explanation: "समाकलन: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C, इसलिए ∫x dx = x²/2 + C"
  },
  // Class 12 - Medium
  {
    question_id: 22,
    text: "यदि |A| एक आव्यूह की सारणिक है और |A| = 0, तो आव्यूह कैसा है?",
    options: [
      { option_id: 2201, option_text: "व्युत्क्रमणीय" },
      { option_id: 2202, option_text: "एकल (Singular)" },
      { option_id: 2203, option_text: "इकाई आव्यूह" },
      { option_id: 2204, option_text: "शून्य आव्यूह" }
    ],
    correct_option_id: 2202,
    class_level: 12,
    difficulty: "medium",
    explanation: "जब सारणिक शून्य होता है, तो आव्यूह एकल (Singular) होता है और इसका व्युत्क्रम नहीं होता"
  },
  {
    question_id: 23,
    text: "d/dx(eˣ) का मान क्या है?",
    options: [
      { option_id: 2301, option_text: "eˣ" },
      { option_id: 2302, option_text: "xeˣ⁻¹" },
      { option_id: 2303, option_text: "eˣ⁻¹" },
      { option_id: 2304, option_text: "ln x" }
    ],
    correct_option_id: 2301,
    class_level: 12,
    difficulty: "medium",
    explanation: "e की घात के अवकलन का विशेष गुण: d/dx(eˣ) = eˣ"
  },
  // Class 12 - Hard
  {
    question_id: 24,
    text: "∫₀^π sin x dx का मान क्या है?",
    options: [
      { option_id: 2401, option_text: "0" },
      { option_id: 2402, option_text: "1" },
      { option_id: 2403, option_text: "2" },
      { option_id: 2404, option_text: "π" }
    ],
    correct_option_id: 2403,
    class_level: 12,
    difficulty: "hard",
    explanation: "∫sin x dx = -cos x, इसलिए ∫₀^π sin x dx = [-cos x]₀^π = -cos π - (-cos 0) = 1 + 1 = 2"
  },
  {
    question_id: 25,
    text: "यदि dy/dx = y, तो y = ?",
    options: [
      { option_id: 2501, option_text: "y = Ceˣ" },
      { option_id: 2502, option_text: "y = Cx" },
      { option_id: 2503, option_text: "y = C + x" },
      { option_id: 2504, option_text: "y = C/x" }
    ],
    correct_option_id: 2501,
    class_level: 12,
    difficulty: "hard",
    explanation: "यह प्रथम कोटि का रैखिक अवकल समीकरण है जिसका हल y = Ceˣ है"
  }
];

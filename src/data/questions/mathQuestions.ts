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
  },
  
  // CSV Questions - Class 9
  {
    question_id: 9001,
    text: "2 और 3 का योग क्या है?",
    options: [
      { option_id: 90011, option_text: "5" },
      { option_id: 90012, option_text: "6" },
      { option_id: 90013, option_text: "1" },
      { option_id: 90014, option_text: "4" }
    ],
    correct_option_id: 90011,
    class_level: 9,
    difficulty: "easy",
    explanation: "सही उत्तर 5 है क्योंकि 2 + 3 = 5 होता है।"
  },
  {
    question_id: 9002,
    text: "त्रिभुज के तीनों कोणों का योग कितना होता है?",
    options: [
      { option_id: 90021, option_text: "90°" },
      { option_id: 90022, option_text: "180°" },
      { option_id: 90023, option_text: "360°" },
      { option_id: 90024, option_text: "270°" }
    ],
    correct_option_id: 90022,
    class_level: 9,
    difficulty: "easy",
    explanation: "सही उत्तर 180° है क्योंकि यह त्रिभुज का मूल गुण है।"
  },
  {
    question_id: 9003,
    text: "पायथागोरस प्रमेय किस प्रकार के त्रिभुज में लागू होता है?",
    options: [
      { option_id: 90031, option_text: "समकोण त्रिभुज" },
      { option_id: 90032, option_text: "समद्विबाहु त्रिभुज" },
      { option_id: 90033, option_text: "समद्विभुज" },
      { option_id: 90034, option_text: "किसी भी त्रिभुज में" }
    ],
    correct_option_id: 90031,
    class_level: 9,
    difficulty: "medium",
    explanation: "सही उत्तर समकोण त्रिभुज है क्योंकि पायथागोरस प्रमेय केवल समकोण त्रिभुज पर लागू होता है।"
  },
  
  // CSV Questions - Class 10
  {
    question_id: 10001,
    text: "पायथागोरस प्रमेय किस प्रकार के त्रिभुज में लागू होता है?",
    options: [
      { option_id: 100011, option_text: "समकोण त्रिभुज" },
      { option_id: 100012, option_text: "समद्विबाहु त्रिभुज" },
      { option_id: 100013, option_text: "समद्विभुज" },
      { option_id: 100014, option_text: "किसी भी त्रिभुज में" }
    ],
    correct_option_id: 100011,
    class_level: 10,
    difficulty: "medium",
    explanation: "सही उत्तर समकोण त्रिभुज है क्योंकि a² + b² = c² केवल समकोण त्रिभुज में लागू होता है।"
  },
  // ============= NEW Class 9 Mathematics Questions (70 questions) =============
  
  // Number Systems (10 questions)
  {
    question_id: 9001,
    text: "निम्नलिखित में से कौन सी संख्या अपरिमेय है?",
    options: [
      { option_id: 90011, option_text: "√16" },
      { option_id: 90012, option_text: "√2" },
      { option_id: 90013, option_text: "22/7" },
      { option_id: 90014, option_text: "0.333..." }
    ],
    correct_option_id: 90012,
    class_level: 9,
    difficulty: "easy",
    explanation: "√2 एक अपरिमेय संख्या है क्योंकि इसे p/q के रूप में नहीं लिखा जा सकता।"
  },
  {
    question_id: 9002,
    text: "√3 और √5 के बीच कितनी अपरिमेय संख्याएँ हैं?",
    options: [
      { option_id: 90021, option_text: "0" },
      { option_id: 90022, option_text: "10" },
      { option_id: 90023, option_text: "100" },
      { option_id: 90024, option_text: "अनगिनत" }
    ],
    correct_option_id: 90024,
    class_level: 9,
    difficulty: "medium",
    explanation: "किन्हीं दो वास्तविक संख्याओं के बीच अनगिनत अपरिमेय संख्याएँ होती हैं।"
  },
  {
    question_id: 9003,
    text: "यदि x = 0.3̄ हो, तो x को p/q के रूप में लिखें।",
    options: [
      { option_id: 90031, option_text: "1/3" },
      { option_id: 90032, option_text: "3/10" },
      { option_id: 90033, option_text: "3/9" },
      { option_id: 90034, option_text: "33/100" }
    ],
    correct_option_id: 90031,
    class_level: 9,
    difficulty: "medium",
    explanation: "0.333... = 1/3। यह एक आवर्ती दशमलव है जो परिमेय संख्या है।"
  },
  {
    question_id: 9004,
    text: "√12 को सरलतम रूप में लिखें।",
    options: [
      { option_id: 90041, option_text: "2√3" },
      { option_id: 90042, option_text: "3√2" },
      { option_id: 90043, option_text: "4√3" },
      { option_id: 90044, option_text: "6√2" }
    ],
    correct_option_id: 90041,
    class_level: 9,
    difficulty: "easy",
    explanation: "√12 = √(4×3) = √4 × √3 = 2√3"
  },
  {
    question_id: 9005,
    text: "(√5 + √3)(√5 - √3) का मान क्या है?",
    options: [
      { option_id: 90051, option_text: "2" },
      { option_id: 90052, option_text: "8" },
      { option_id: 90053, option_text: "√15" },
      { option_id: 90054, option_text: "√8" }
    ],
    correct_option_id: 90051,
    class_level: 9,
    difficulty: "medium",
    explanation: "(a+b)(a-b) = a² - b² के अनुसार: (√5)² - (√3)² = 5 - 3 = 2"
  },
  {
    question_id: 9006,
    text: "संख्या रेखा पर √7 को दर्शाया जा सकता है:",
    options: [
      { option_id: 90061, option_text: "हाँ" },
      { option_id: 90062, option_text: "नहीं" },
      { option_id: 90063, option_text: "केवल पूर्णांक के रूप में" },
      { option_id: 90064, option_text: "केवल भिन्न के रूप में" }
    ],
    correct_option_id: 90061,
    class_level: 9,
    difficulty: "easy",
    explanation: "सभी वास्तविक संख्याओं को संख्या रेखा पर दर्शाया जा सकता है। √7 एक वास्तविक संख्या है।"
  },
  {
    question_id: 9007,
    text: "1/(√7 - √6) को परिमेयकरण करने पर हर क्या होगा?",
    options: [
      { option_id: 90071, option_text: "1" },
      { option_id: 90072, option_text: "13" },
      { option_id: 90073, option_text: "√13" },
      { option_id: 90074, option_text: "7-6" }
    ],
    correct_option_id: 90071,
    class_level: 9,
    difficulty: "hard",
    explanation: "हर और अंश में (√7 + √6) से गुणा करने पर: हर = (√7)² - (√6)² = 7 - 6 = 1"
  },
  {
    question_id: 9008,
    text: "यदि √2 = 1.414 है, तो 1/√2 का मान क्या होगा?",
    options: [
      { option_id: 90081, option_text: "0.707" },
      { option_id: 90082, option_text: "1.414" },
      { option_id: 90083, option_text: "2.828" },
      { option_id: 90084, option_text: "0.5" }
    ],
    correct_option_id: 90081,
    class_level: 9,
    difficulty: "medium",
    explanation: "1/√2 = √2/2 = 1.414/2 = 0.707"
  },
  {
    question_id: 9009,
    text: "निम्न में से कौन परिमेय संख्या है?",
    options: [
      { option_id: 90091, option_text: "π" },
      { option_id: 90092, option_text: "√5" },
      { option_id: 90093, option_text: "0.142857142857..." },
      { option_id: 90094, option_text: "e" }
    ],
    correct_option_id: 90093,
    class_level: 9,
    difficulty: "easy",
    explanation: "आवर्ती दशमलव परिमेय होते हैं। 0.142857... = 1/7"
  },
  {
    question_id: 9010,
    text: "यदि a और b परिमेय संख्याएँ हैं, तो (a+b) है:",
    options: [
      { option_id: 90101, option_text: "सदैव परिमेय" },
      { option_id: 90102, option_text: "सदैव अपरिमेय" },
      { option_id: 90103, option_text: "कभी परिमेय, कभी अपरिमेय" },
      { option_id: 90104, option_text: "कुछ नहीं कह सकते" }
    ],
    correct_option_id: 90101,
    class_level: 9,
    difficulty: "medium",
    explanation: "दो परिमेय संख्याओं का योग सदैव परिमेय होता है।"
  },

  // Polynomials (10 questions)
  {
    question_id: 9011,
    text: "बहुपद 2x³ + 5x² - 3x + 7 की घात क्या है?",
    options: [
      { option_id: 90111, option_text: "1" },
      { option_id: 90112, option_text: "2" },
      { option_id: 90113, option_text: "3" },
      { option_id: 90114, option_text: "7" }
    ],
    correct_option_id: 90113,
    class_level: 9,
    difficulty: "easy",
    explanation: "बहुपद की घात उसके चर की उच्चतम घात होती है, यहाँ 3 है।"
  },
  {
    question_id: 9012,
    text: "यदि p(x) = x² - 5x + 6 हो, तो p(2) का मान क्या है?",
    options: [
      { option_id: 90121, option_text: "0" },
      { option_id: 90122, option_text: "2" },
      { option_id: 90123, option_text: "-2" },
      { option_id: 90124, option_text: "6" }
    ],
    correct_option_id: 90121,
    class_level: 9,
    difficulty: "medium",
    explanation: "p(2) = (2)² - 5(2) + 6 = 4 - 10 + 6 = 0"
  },
  {
    question_id: 9013,
    text: "बहुपद x² - 4 के शून्यक क्या हैं?",
    options: [
      { option_id: 90131, option_text: "±2" },
      { option_id: 90132, option_text: "±4" },
      { option_id: 90133, option_text: "0, 4" },
      { option_id: 90134, option_text: "2, 4" }
    ],
    correct_option_id: 90131,
    class_level: 9,
    difficulty: "easy",
    explanation: "x² - 4 = 0 → x² = 4 → x = ±2"
  },
  {
    question_id: 9014,
    text: "शेषफल प्रमेय के अनुसार, p(x) को (x - a) से भाग देने पर शेषफल क्या होगा?",
    options: [
      { option_id: 90141, option_text: "p(a)" },
      { option_id: 90142, option_text: "p(-a)" },
      { option_id: 90143, option_text: "a" },
      { option_id: 90144, option_text: "0" }
    ],
    correct_option_id: 90141,
    class_level: 9,
    difficulty: "medium",
    explanation: "शेषफल प्रमेय के अनुसार, शेषफल p(a) होता है।"
  },
  {
    question_id: 9015,
    text: "(x + y)² का विस्तार क्या है?",
    options: [
      { option_id: 90151, option_text: "x² + y²" },
      { option_id: 90152, option_text: "x² + 2xy + y²" },
      { option_id: 90153, option_text: "x² - 2xy + y²" },
      { option_id: 90154, option_text: "x² + xy + y²" }
    ],
    correct_option_id: 90152,
    class_level: 9,
    difficulty: "easy",
    explanation: "(x + y)² = x² + 2xy + y² (सर्वसमिका)"
  },
  {
    question_id: 9016,
    text: "x³ + y³ का गुणनखंड रूप क्या है?",
    options: [
      { option_id: 90161, option_text: "(x + y)(x² - xy + y²)" },
      { option_id: 90162, option_text: "(x + y)(x² + xy + y²)" },
      { option_id: 90163, option_text: "(x - y)(x² + xy + y²)" },
      { option_id: 90164, option_text: "(x + y)³" }
    ],
    correct_option_id: 90161,
    class_level: 9,
    difficulty: "medium",
    explanation: "x³ + y³ = (x + y)(x² - xy + y²) यह एक महत्वपूर्ण सर्वसमिका है।"
  },
  {
    question_id: 9017,
    text: "यदि x + 1/x = 5 हो, तो x² + 1/x² का मान क्या है?",
    options: [
      { option_id: 90171, option_text: "23" },
      { option_id: 90172, option_text: "25" },
      { option_id: 90173, option_text: "27" },
      { option_id: 90174, option_text: "21" }
    ],
    correct_option_id: 90171,
    class_level: 9,
    difficulty: "hard",
    explanation: "x² + 1/x² = (x + 1/x)² - 2 = 5² - 2 = 25 - 2 = 23"
  },
  {
    question_id: 9018,
    text: "(x - y)(x + y) का मान क्या है?",
    options: [
      { option_id: 90181, option_text: "x² - y²" },
      { option_id: 90182, option_text: "x² + y²" },
      { option_id: 90183, option_text: "x² - 2xy + y²" },
      { option_id: 90184, option_text: "x² + 2xy + y²" }
    ],
    correct_option_id: 90181,
    class_level: 9,
    difficulty: "easy",
    explanation: "(x - y)(x + y) = x² - y² (वर्गों का अंतर सूत्र)"
  },
  {
    question_id: 9019,
    text: "बहुपद p(x) = x² + 3x + 2 का शून्यक क्या है?",
    options: [
      { option_id: 90191, option_text: "-1, -2" },
      { option_id: 90192, option_text: "1, 2" },
      { option_id: 90193, option_text: "-1, 2" },
      { option_id: 90194, option_text: "1, -2" }
    ],
    correct_option_id: 90191,
    class_level: 9,
    difficulty: "medium",
    explanation: "x² + 3x + 2 = (x + 1)(x + 2) = 0, इसलिए x = -1 या x = -2"
  },
  {
    question_id: 9020,
    text: "यदि p(x) को (x - 2) से भाग देने पर शेषफल 5 है, तो p(2) का मान क्या है?",
    options: [
      { option_id: 90201, option_text: "2" },
      { option_id: 90202, option_text: "5" },
      { option_id: 90203, option_text: "0" },
      { option_id: 90204, option_text: "-5" }
    ],
    correct_option_id: 90202,
    class_level: 9,
    difficulty: "medium",
    explanation: "शेषफल प्रमेय के अनुसार, p(2) = शेषफल = 5"
  },

  // Coordinate Geometry (8 questions)
  {
    question_id: 9021,
    text: "बिंदु (3, -4) किस चतुर्थांश में स्थित है?",
    options: [
      { option_id: 90211, option_text: "प्रथम चतुर्थांश" },
      { option_id: 90212, option_text: "द्वितीय चतुर्थांश" },
      { option_id: 90213, option_text: "तृतीय चतुर्थांश" },
      { option_id: 90214, option_text: "चतुर्थ चतुर्थांश" }
    ],
    correct_option_id: 90214,
    class_level: 9,
    difficulty: "easy",
    explanation: "चतुर्थ चतुर्थांश में x धनात्मक और y ऋणात्मक होता है।"
  },
  {
    question_id: 9022,
    text: "मूल बिंदु के निर्देशांक क्या हैं?",
    options: [
      { option_id: 90221, option_text: "(1, 1)" },
      { option_id: 90222, option_text: "(0, 0)" },
      { option_id: 90223, option_text: "(1, 0)" },
      { option_id: 90224, option_text: "(0, 1)" }
    ],
    correct_option_id: 90222,
    class_level: 9,
    difficulty: "easy",
    explanation: "मूल बिंदु (Origin) के निर्देशांक (0, 0) होते हैं।"
  },
  {
    question_id: 9023,
    text: "x-अक्ष पर किसी बिंदु की y-निर्देशांक क्या होती है?",
    options: [
      { option_id: 90231, option_text: "0" },
      { option_id: 90232, option_text: "1" },
      { option_id: 90233, option_text: "x के बराबर" },
      { option_id: 90234, option_text: "अनंत" }
    ],
    correct_option_id: 90231,
    class_level: 9,
    difficulty: "easy",
    explanation: "x-अक्ष पर सभी बिंदुओं की y-निर्देशांक 0 होती है।"
  },
  {
    question_id: 9024,
    text: "बिंदु (-2, 5) का x-निर्देशांक क्या है?",
    options: [
      { option_id: 90241, option_text: "-2" },
      { option_id: 90242, option_text: "5" },
      { option_id: 90243, option_text: "2" },
      { option_id: 90244, option_text: "-5" }
    ],
    correct_option_id: 90241,
    class_level: 9,
    difficulty: "easy",
    explanation: "बिंदु (x, y) में पहली संख्या x-निर्देशांक होती है।"
  },
  {
    question_id: 9025,
    text: "द्वितीय चतुर्थांश में:",
    options: [
      { option_id: 90251, option_text: "x > 0, y > 0" },
      { option_id: 90252, option_text: "x < 0, y > 0" },
      { option_id: 90253, option_text: "x < 0, y < 0" },
      { option_id: 90254, option_text: "x > 0, y < 0" }
    ],
    correct_option_id: 90252,
    class_level: 9,
    difficulty: "medium",
    explanation: "द्वितीय चतुर्थांश में x ऋणात्मक और y धनात्मक होता है।"
  },
  {
    question_id: 9026,
    text: "y-अक्ष पर किसी बिंदु के निर्देशांक का रूप क्या होगा?",
    options: [
      { option_id: 90261, option_text: "(x, 0)" },
      { option_id: 90262, option_text: "(0, y)" },
      { option_id: 90263, option_text: "(x, y)" },
      { option_id: 90264, option_text: "(0, 0)" }
    ],
    correct_option_id: 90262,
    class_level: 9,
    difficulty: "medium",
    explanation: "y-अक्ष पर सभी बिंदुओं की x-निर्देशांक 0 होती है, इसलिए रूप (0, y) होता है।"
  },
  {
    question_id: 9027,
    text: "यदि बिंदु (a, b) x-अक्ष के दर्पण प्रतिबिम्ब है, तो प्रतिबिम्ब बिंदु क्या होगा?",
    options: [
      { option_id: 90271, option_text: "(a, -b)" },
      { option_id: 90272, option_text: "(-a, b)" },
      { option_id: 90273, option_text: "(-a, -b)" },
      { option_id: 90274, option_text: "(b, a)" }
    ],
    correct_option_id: 90271,
    class_level: 9,
    difficulty: "hard",
    explanation: "x-अक्ष में दर्पण प्रतिबिम्ब के लिए x समान रहता है और y का चिन्ह बदल जाता है।"
  },
  {
    question_id: 9028,
    text: "बिंदु (0, -3) किस अक्ष पर स्थित है?",
    options: [
      { option_id: 90281, option_text: "x-अक्ष" },
      { option_id: 90282, option_text: "y-अक्ष" },
      { option_id: 90283, option_text: "दोनों अक्षों पर" },
      { option_id: 90284, option_text: "किसी अक्ष पर नहीं" }
    ],
    correct_option_id: 90282,
    class_level: 9,
    difficulty: "easy",
    explanation: "x-निर्देशांक 0 है, इसलिए बिंदु y-अक्ष पर स्थित है।"
  },

  // Linear Equations in Two Variables (8 questions)
  {
    question_id: 9029,
    text: "समीकरण 2x + 3y = 6 में, यदि x = 0 हो तो y का मान क्या है?",
    options: [
      { option_id: 90291, option_text: "2" },
      { option_id: 90292, option_text: "3" },
      { option_id: 90293, option_text: "6" },
      { option_id: 90294, option_text: "0" }
    ],
    correct_option_id: 90291,
    class_level: 9,
    difficulty: "easy",
    explanation: "2(0) + 3y = 6 → 3y = 6 → y = 2"
  },
  {
    question_id: 9030,
    text: "रैखिक समीकरण ax + by + c = 0 का आलेख क्या होता है?",
    options: [
      { option_id: 90301, option_text: "एक सरल रेखा" },
      { option_id: 90302, option_text: "एक वृत्त" },
      { option_id: 90303, option_text: "एक परवलय" },
      { option_id: 90304, option_text: "एक बिंदु" }
    ],
    correct_option_id: 90301,
    class_level: 9,
    difficulty: "easy",
    explanation: "दो चरों में रैखिक समीकरण का आलेख हमेशा एक सरल रेखा होता है।"
  },
  {
    question_id: 9031,
    text: "समीकरण y = 3 किस अक्ष के समानांतर रेखा को दर्शाता है?",
    options: [
      { option_id: 90311, option_text: "x-अक्ष" },
      { option_id: 90312, option_text: "y-अक्ष" },
      { option_id: 90313, option_text: "दोनों" },
      { option_id: 90314, option_text: "किसी के भी नहीं" }
    ],
    correct_option_id: 90311,
    class_level: 9,
    difficulty: "medium",
    explanation: "y = 3 एक x-अक्ष के समानांतर क्षैतिज रेखा है।"
  },
  {
    question_id: 9032,
    text: "समीकरण x + y = 0 का एक हल क्या है?",
    options: [
      { option_id: 90321, option_text: "(1, 1)" },
      { option_id: 90322, option_text: "(2, -2)" },
      { option_id: 90323, option_text: "(1, 2)" },
      { option_id: 90324, option_text: "(0, 1)" }
    ],
    correct_option_id: 90322,
    class_level: 9,
    difficulty: "medium",
    explanation: "x + y = 0 के लिए, 2 + (-2) = 0, इसलिए (2, -2) एक हल है।"
  },
  {
    question_id: 9033,
    text: "रेखा y = 2x + 1 की प्रवणता (slope) क्या है?",
    options: [
      { option_id: 90331, option_text: "1" },
      { option_id: 90332, option_text: "2" },
      { option_id: 90333, option_text: "-1" },
      { option_id: 90334, option_text: "0" }
    ],
    correct_option_id: 90332,
    class_level: 9,
    difficulty: "medium",
    explanation: "y = mx + c के रूप में, m प्रवणता है। यहाँ m = 2"
  },
  {
    question_id: 9034,
    text: "समीकरण x = 5 किस प्रकार की रेखा को दर्शाता है?",
    options: [
      { option_id: 90341, option_text: "क्षैतिज रेखा" },
      { option_id: 90342, option_text: "ऊर्ध्वाधर रेखा" },
      { option_id: 90343, option_text: "तिरछी रेखा" },
      { option_id: 90344, option_text: "वक्र रेखा" }
    ],
    correct_option_id: 90342,
    class_level: 9,
    difficulty: "easy",
    explanation: "x = constant एक y-अक्ष के समानांतर ऊर्ध्वाधर रेखा होती है।"
  },
  {
    question_id: 9035,
    text: "यदि (2, k) समीकरण 3x + 2y = 12 का हल है, तो k का मान क्या है?",
    options: [
      { option_id: 90351, option_text: "2" },
      { option_id: 90352, option_text: "3" },
      { option_id: 90353, option_text: "4" },
      { option_id: 90354, option_text: "6" }
    ],
    correct_option_id: 90352,
    class_level: 9,
    difficulty: "medium",
    explanation: "3(2) + 2k = 12 → 6 + 2k = 12 → 2k = 6 → k = 3"
  },
  {
    question_id: 9036,
    text: "समीकरण 2x - 3y = 0 मूल बिंदु से गुजरती है?",
    options: [
      { option_id: 90361, option_text: "हाँ" },
      { option_id: 90362, option_text: "नहीं" },
      { option_id: 90363, option_text: "कभी-कभी" },
      { option_id: 90364, option_text: "निर्धारित नहीं किया जा सकता" }
    ],
    correct_option_id: 90361,
    class_level: 9,
    difficulty: "hard",
    explanation: "(0, 0) को समीकरण में रखने पर: 2(0) - 3(0) = 0, जो सत्य है।"
  },

  // Euclid's Geometry (6 questions)
  {
    question_id: 9037,
    text: "यूक्लिड की पहली अभिधारणा क्या है?",
    options: [
      { option_id: 90371, option_text: "दो बिंदुओं से एक रेखा खींची जा सकती है" },
      { option_id: 90372, option_text: "सभी समकोण बराबर होते हैं" },
      { option_id: 90373, option_text: "वृत्त खींचा जा सकता है" },
      { option_id: 90374, option_text: "रेखा को दोनों ओर बढ़ाया जा सकता है" }
    ],
    correct_option_id: 90371,
    class_level: 9,
    difficulty: "easy",
    explanation: "यूक्लिड की पहली अभिधारणा: किन्हीं दो भिन्न बिंदुओं से होकर एक और केवल एक रेखा खींची जा सकती है।"
  },
  {
    question_id: 9038,
    text: "यूक्लिड के अनुसार, यदि a = b और b = c हो, तो:",
    options: [
      { option_id: 90381, option_text: "a = c" },
      { option_id: 90382, option_text: "a > c" },
      { option_id: 90383, option_text: "a < c" },
      { option_id: 90384, option_text: "कुछ नहीं कह सकते" }
    ],
    correct_option_id: 90381,
    class_level: 9,
    difficulty: "easy",
    explanation: "यह यूक्लिड का स्वयंसिद्ध है: जो वस्तुएँ समान वस्तु के बराबर हों, वे परस्पर बराबर होती हैं।"
  },
  {
    question_id: 9039,
    text: "यूक्लिड की पाँचवीं अभिगृहीत किससे संबंधित है?",
    options: [
      { option_id: 90391, option_text: "समांतर रेखाओं" },
      { option_id: 90392, option_text: "वृत्तों" },
      { option_id: 90393, option_text: "कोणों" },
      { option_id: 90394, option_text: "त्रिभुजों" }
    ],
    correct_option_id: 90391,
    class_level: 9,
    difficulty: "medium",
    explanation: "यूक्लिड की पाँचवीं अभिगृहीत समांतर रेखाओं से संबंधित है।"
  },
  {
    question_id: 9040,
    text: "बिंदु की कितनी विमाएँ होती हैं?",
    options: [
      { option_id: 90401, option_text: "0" },
      { option_id: 90402, option_text: "1" },
      { option_id: 90403, option_text: "2" },
      { option_id: 90404, option_text: "3" }
    ],
    correct_option_id: 90401,
    class_level: 9,
    difficulty: "easy",
    explanation: "बिंदु की कोई विमा नहीं होती (0 विमीय)।"
  },
  {
    question_id: 9041,
    text: "रेखा की कितनी विमाएँ होती हैं?",
    options: [
      { option_id: 90411, option_text: "0" },
      { option_id: 90412, option_text: "1" },
      { option_id: 90413, option_text: "2" },
      { option_id: 90414, option_text: "3" }
    ],
    correct_option_id: 90412,
    class_level: 9,
    difficulty: "easy",
    explanation: "रेखा एक विमीय होती है (केवल लंबाई होती है)।"
  },
  {
    question_id: 9042,
    text: "यदि बराबर राशियों में बराबर राशियाँ जोड़ी जाएँ, तो:",
    options: [
      { option_id: 90421, option_text: "योगफल बराबर होते हैं" },
      { option_id: 90422, option_text: "योगफल असमान होते हैं" },
      { option_id: 90423, option_text: "कुछ नहीं कह सकते" },
      { option_id: 90424, option_text: "योगफल शून्य होता है" }
    ],
    correct_option_id: 90421,
    class_level: 9,
    difficulty: "medium",
    explanation: "यह यूक्लिड का दूसरा स्वयंसिद्ध है।"
  },

  // Lines and Angles (8 questions)
  {
    question_id: 9043,
    text: "दो समांतर रेखाओं को एक तिर्यक रेखा काटती है, तो एकांतर कोण:",
    options: [
      { option_id: 90431, option_text: "बराबर होते हैं" },
      { option_id: 90432, option_text: "पूरक होते हैं" },
      { option_id: 90433, option_text: "संपूरक होते हैं" },
      { option_id: 90434, option_text: "असमान होते हैं" }
    ],
    correct_option_id: 90431,
    class_level: 9,
    difficulty: "medium",
    explanation: "जब समांतर रेखाओं को तिर्यक रेखा काटती है, तो एकांतर अंतः कोण बराबर होते हैं।"
  },
  {
    question_id: 9044,
    text: "रैखिक युग्म के कोणों का योग कितना होता है?",
    options: [
      { option_id: 90441, option_text: "90°" },
      { option_id: 90442, option_text: "180°" },
      { option_id: 90443, option_text: "270°" },
      { option_id: 90444, option_text: "360°" }
    ],
    correct_option_id: 90442,
    class_level: 9,
    difficulty: "easy",
    explanation: "रैखिक युग्म के कोणों का योग सदैव 180° होता है।"
  },
  {
    question_id: 9045,
    text: "शीर्षाभिमुख कोण होते हैं:",
    options: [
      { option_id: 90451, option_text: "बराबर" },
      { option_id: 90452, option_text: "पूरक" },
      { option_id: 90453, option_text: "संपूरक" },
      { option_id: 90454, option_text: "असमान" }
    ],
    correct_option_id: 90451,
    class_level: 9,
    difficulty: "easy",
    explanation: "शीर्षाभिमुख कोण सदैव बराबर होते हैं।"
  },
  {
    question_id: 9046,
    text: "यदि दो कोण संपूरक हों, तो उनका योग क्या होगा?",
    options: [
      { option_id: 90461, option_text: "90°" },
      { option_id: 90462, option_text: "180°" },
      { option_id: 90463, option_text: "270°" },
      { option_id: 90464, option_text: "360°" }
    ],
    correct_option_id: 90462,
    class_level: 9,
    difficulty: "easy",
    explanation: "संपूरक कोणों का योग 180° होता है।"
  },
  {
    question_id: 9047,
    text: "समांतर रेखाओं को काटने वाली तिर्यक रेखा के संगत कोण:",
    options: [
      { option_id: 90471, option_text: "बराबर होते हैं" },
      { option_id: 90472, option_text: "पूरक होते हैं" },
      { option_id: 90473, option_text: "संपूरक होते हैं" },
      { option_id: 90474, option_text: "असमान होते हैं" }
    ],
    correct_option_id: 90471,
    class_level: 9,
    difficulty: "medium",
    explanation: "समांतर रेखाओं के संगत कोण बराबर होते हैं।"
  },
  {
    question_id: 9048,
    text: "यदि दो रेखाएँ प्रतिच्छेद करती हैं, तो कितने युग्म शीर्षाभिमुख कोण बनते हैं?",
    options: [
      { option_id: 90481, option_text: "1" },
      { option_id: 90482, option_text: "2" },
      { option_id: 90483, option_text: "3" },
      { option_id: 90484, option_text: "4" }
    ],
    correct_option_id: 90482,
    class_level: 9,
    difficulty: "medium",
    explanation: "दो प्रतिच्छेदी रेखाएँ 2 युग्म शीर्षाभिमुख कोण बनाती हैं।"
  },
  {
    question_id: 9049,
    text: "यदि दो समांतर रेखाओं को तिर्यक रेखा काटे, तो सह-अंतः कोणों का योग:",
    options: [
      { option_id: 90491, option_text: "90°" },
      { option_id: 90492, option_text: "180°" },
      { option_id: 90493, option_text: "0°" },
      { option_id: 90494, option_text: "360°" }
    ],
    correct_option_id: 90492,
    class_level: 9,
    difficulty: "hard",
    explanation: "समांतर रेखाओं के सह-अंतः कोण संपूरक होते हैं, अर्थात् योग 180° होता है।"
  },
  {
    question_id: 9050,
    text: "न्यून कोण की माप होती है:",
    options: [
      { option_id: 90501, option_text: "90° से कम" },
      { option_id: 90502, option_text: "90° से अधिक" },
      { option_id: 90503, option_text: "90° के बराबर" },
      { option_id: 90504, option_text: "180°" }
    ],
    correct_option_id: 90501,
    class_level: 9,
    difficulty: "easy",
    explanation: "न्यून कोण 0° से अधिक और 90° से कम होता है।"
  },

  // Triangles (8 questions)
  {
    question_id: 9051,
    text: "त्रिभुज के तीनों कोणों का योग कितना होता है?",
    options: [
      { option_id: 90511, option_text: "90°" },
      { option_id: 90512, option_text: "180°" },
      { option_id: 90513, option_text: "270°" },
      { option_id: 90514, option_text: "360°" }
    ],
    correct_option_id: 90512,
    class_level: 9,
    difficulty: "easy",
    explanation: "किसी भी त्रिभुज के तीनों अंतः कोणों का योग 180° होता है।"
  },
  {
    question_id: 9052,
    text: "समद्विबाहु त्रिभुज में:",
    options: [
      { option_id: 90521, option_text: "दो भुजाएँ बराबर होती हैं" },
      { option_id: 90522, option_text: "तीनों भुजाएँ बराबर होती हैं" },
      { option_id: 90523, option_text: "सभी भुजाएँ असमान होती हैं" },
      { option_id: 90524, option_text: "एक समकोण होता है" }
    ],
    correct_option_id: 90521,
    class_level: 9,
    difficulty: "easy",
    explanation: "समद्विबाहु त्रिभुज में दो भुजाएँ और दो कोण बराबर होते हैं।"
  },
  {
    question_id: 9053,
    text: "त्रिभुज की माध्यिका क्या होती है?",
    options: [
      { option_id: 90531, option_text: "शीर्ष से सामने की भुजा के मध्य बिंदु को मिलाने वाली रेखा" },
      { option_id: 90532, option_text: "शीर्ष से सामने की भुजा पर लंब" },
      { option_id: 90533, option_text: "कोण को समद्विभाजित करने वाली रेखा" },
      { option_id: 90534, option_text: "भुजाओं का मध्य बिंदु" }
    ],
    correct_option_id: 90531,
    class_level: 9,
    difficulty: "medium",
    explanation: "माध्यिका शीर्ष से सामने की भुजा के मध्य बिंदु को मिलाती है।"
  },
  {
    question_id: 9054,
    text: "समकोण त्रिभुज में सबसे बड़ी भुजा को क्या कहते हैं?",
    options: [
      { option_id: 90541, option_text: "आधार" },
      { option_id: 90542, option_text: "लंब" },
      { option_id: 90543, option_text: "कर्ण" },
      { option_id: 90544, option_text: "माध्यिका" }
    ],
    correct_option_id: 90543,
    class_level: 9,
    difficulty: "easy",
    explanation: "समकोण त्रिभुज में समकोण के सामने की सबसे बड़ी भुजा कर्ण कहलाती है।"
  },
  {
    question_id: 9055,
    text: "दो त्रिभुज सर्वांगसम होते हैं यदि:",
    options: [
      { option_id: 90551, option_text: "उनकी संगत भुजाएँ और कोण बराबर हों" },
      { option_id: 90552, option_text: "केवल कोण बराबर हों" },
      { option_id: 90553, option_text: "केवल भुजाएँ बराबर हों" },
      { option_id: 90554, option_text: "क्षेत्रफल बराबर हो" }
    ],
    correct_option_id: 90551,
    class_level: 9,
    difficulty: "medium",
    explanation: "सर्वांगसम त्रिभुजों की संगत भुजाएँ और संगत कोण बराबर होते हैं।"
  },
  {
    question_id: 9056,
    text: "SSS सर्वांगसमता नियम का अर्थ है:",
    options: [
      { option_id: 90561, option_text: "तीनों भुजाएँ बराबर" },
      { option_id: 90562, option_text: "तीनों कोण बराबर" },
      { option_id: 90563, option_text: "दो भुजा और एक कोण बराबर" },
      { option_id: 90564, option_text: "दो कोण और एक भुजा बराबर" }
    ],
    correct_option_id: 90561,
    class_level: 9,
    difficulty: "medium",
    explanation: "SSS (Side-Side-Side): यदि तीनों भुजाएँ बराबर हों तो त्रिभुज सर्वांगसम होते हैं।"
  },
  {
    question_id: 9057,
    text: "त्रिभुज का बाह्य कोण किसके बराबर होता है?",
    options: [
      { option_id: 90571, option_text: "दो अंतः कोणों के योग के बराबर" },
      { option_id: 90572, option_text: "दो असन्निकट अंतः कोणों के योग के बराबर" },
      { option_id: 90573, option_text: "सभी अंतः कोणों के योग के बराबर" },
      { option_id: 90574, option_text: "एक अंतः कोण के बराबर" }
    ],
    correct_option_id: 90572,
    class_level: 9,
    difficulty: "hard",
    explanation: "त्रिभुज का बाह्य कोण दो असन्निकट अंतः कोणों के योग के बराबर होता है।"
  },
  {
    question_id: 9058,
    text: "समबाहु त्रिभुज का परिमाप 18 cm है, तो एक भुजा की लंबाई क्या होगी?",
    options: [
      { option_id: 90581, option_text: "3 cm" },
      { option_id: 90582, option_text: "6 cm" },
      { option_id: 90583, option_text: "9 cm" },
      { option_id: 90584, option_text: "18 cm" }
    ],
    correct_option_id: 90582,
    class_level: 9,
    difficulty: "medium",
    explanation: "समबाहु त्रिभुज में तीनों भुजाएँ बराबर होती हैं: 18/3 = 6 cm"
  },

  // Quadrilaterals (6 questions)
  {
    question_id: 9059,
    text: "चतुर्भुज के चारों अंतः कोणों का योग कितना होता है?",
    options: [
      { option_id: 90591, option_text: "180°" },
      { option_id: 90592, option_text: "270°" },
      { option_id: 90593, option_text: "360°" },
      { option_id: 90594, option_text: "450°" }
    ],
    correct_option_id: 90593,
    class_level: 9,
    difficulty: "easy",
    explanation: "किसी भी चतुर्भुज के चारों अंतः कोणों का योग 360° होता है।"
  },
  {
    question_id: 9060,
    text: "समांतर चतुर्भुज की सम्मुख भुजाएँ होती हैं:",
    options: [
      { option_id: 90601, option_text: "बराबर और समांतर" },
      { option_id: 90602, option_text: "केवल बराबर" },
      { option_id: 90603, option_text: "केवल समांतर" },
      { option_id: 90604, option_text: "असमान" }
    ],
    correct_option_id: 90601,
    class_level: 9,
    difficulty: "easy",
    explanation: "समांतर चतुर्भुज की सम्मुख भुजाएँ बराबर और समांतर होती हैं।"
  },
  {
    question_id: 9061,
    text: "आयत के विकर्ण:",
    options: [
      { option_id: 90611, option_text: "बराबर होते हैं" },
      { option_id: 90612, option_text: "असमान होते हैं" },
      { option_id: 90613, option_text: "लंबवत होते हैं" },
      { option_id: 90614, option_text: "समांतर होते हैं" }
    ],
    correct_option_id: 90611,
    class_level: 9,
    difficulty: "easy",
    explanation: "आयत के दोनों विकर्ण बराबर होते हैं और एक दूसरे को समद्विभाजित करते हैं।"
  },
  {
    question_id: 9062,
    text: "वर्ग के विकर्ण:",
    options: [
      { option_id: 90621, option_text: "बराबर और लंबवत होते हैं" },
      { option_id: 90622, option_text: "केवल बराबर होते हैं" },
      { option_id: 90623, option_text: "केवल लंबवत होते हैं" },
      { option_id: 90624, option_text: "असमान होते हैं" }
    ],
    correct_option_id: 90621,
    class_level: 9,
    difficulty: "medium",
    explanation: "वर्ग के विकर्ण बराबर, लंबवत और एक दूसरे को समद्विभाजित करते हैं।"
  },
  {
    question_id: 9063,
    text: "समचतुर्भुज में:",
    options: [
      { option_id: 90631, option_text: "चारों भुजाएँ बराबर होती हैं" },
      { option_id: 90632, option_text: "चारों कोण बराबर होते हैं" },
      { option_id: 90633, option_text: "विकर्ण बराबर होते हैं" },
      { option_id: 90634, option_text: "कोई भी नहीं" }
    ],
    correct_option_id: 90631,
    class_level: 9,
    difficulty: "medium",
    explanation: "समचतुर्भुज की चारों भुजाएँ बराबर होती हैं लेकिन कोण बराबर नहीं होते।"
  },
  {
    question_id: 9064,
    text: "समलंब में:",
    options: [
      { option_id: 90641, option_text: "एक जोड़ी भुजाएँ समांतर होती हैं" },
      { option_id: 90642, option_text: "दो जोड़ी भुजाएँ समांतर होती हैं" },
      { option_id: 90643, option_text: "कोई भुजा समांतर नहीं होती" },
      { option_id: 90644, option_text: "चारों भुजाएँ बराबर होती हैं" }
    ],
    correct_option_id: 90641,
    class_level: 9,
    difficulty: "medium",
    explanation: "समलंब में एक जोड़ी सम्मुख भुजाएँ समांतर होती हैं।"
  },

  // Circles (4 questions)
  {
    question_id: 9065,
    text: "वृत्त की जीवा क्या होती है?",
    options: [
      { option_id: 90651, option_text: "वृत्त के दो बिंदुओं को मिलाने वाली रेखाखंड" },
      { option_id: 90652, option_text: "केंद्र से परिधि तक की दूरी" },
      { option_id: 90653, option_text: "वृत्त की परिधि" },
      { option_id: 90654, option_text: "वृत्त का व्यास" }
    ],
    correct_option_id: 90651,
    class_level: 9,
    difficulty: "easy",
    explanation: "जीवा वृत्त के किन्हीं दो बिंदुओं को मिलाने वाला रेखाखंड होता है।"
  },
  {
    question_id: 9066,
    text: "वृत्त का व्यास त्रिज्या से कितना बड़ा होता है?",
    options: [
      { option_id: 90661, option_text: "दोगुना" },
      { option_id: 90662, option_text: "तीन गुना" },
      { option_id: 90663, option_text: "बराबर" },
      { option_id: 90664, option_text: "आधा" }
    ],
    correct_option_id: 90661,
    class_level: 9,
    difficulty: "easy",
    explanation: "व्यास = 2 × त्रिज्या। व्यास त्रिज्या का दोगुना होता है।"
  },
  {
    question_id: 9067,
    text: "वृत्त के केंद्र से जीवा पर डाला गया लंब:",
    options: [
      { option_id: 90671, option_text: "जीवा को समद्विभाजित करता है" },
      { option_id: 90672, option_text: "जीवा को तीन बराबर भागों में बाँटता है" },
      { option_id: 90673, option_text: "जीवा को असमान भागों में बाँटता है" },
      { option_id: 90674, option_text: "जीवा को नहीं काटता" }
    ],
    correct_option_id: 90671,
    class_level: 9,
    difficulty: "medium",
    explanation: "वृत्त के केंद्र से जीवा पर डाला गया लंब जीवा को समद्विभाजित करता है।"
  },
  {
    question_id: 9068,
    text: "बराबर जीवाएँ केंद्र से:",
    options: [
      { option_id: 90681, option_text: "समान दूरी पर होती हैं" },
      { option_id: 90682, option_text: "असमान दूरी पर होती हैं" },
      { option_id: 90683, option_text: "शून्य दूरी पर होती हैं" },
      { option_id: 90684, option_text: "दोगुनी दूरी पर होती हैं" }
    ],
    correct_option_id: 90681,
    class_level: 9,
    difficulty: "hard",
    explanation: "वृत्त की बराबर जीवाएँ केंद्र से समान दूरी पर होती हैं।"
  },

  // Mensuration (2 questions)
  {
    question_id: 9069,
    text: "घन का आयतन सूत्र क्या है?",
    options: [
      { option_id: 90691, option_text: "a³" },
      { option_id: 90692, option_text: "a²" },
      { option_id: 90693, option_text: "6a²" },
      { option_id: 90694, option_text: "4a³" }
    ],
    correct_option_id: 90691,
    class_level: 9,
    difficulty: "easy",
    explanation: "घन का आयतन = (भुजा)³ = a³"
  },
  {
    question_id: 9070,
    text: "बेलन का पृष्ठीय क्षेत्रफल क्या है?",
    options: [
      { option_id: 90701, option_text: "2πr(r + h)" },
      { option_id: 90702, option_text: "2πrh" },
      { option_id: 90703, option_text: "πr²h" },
      { option_id: 90704, option_text: "πr²" }
    ],
    correct_option_id: 90701,
    class_level: 9,
    difficulty: "medium",
    explanation: "बेलन का कुल पृष्ठीय क्षेत्रफल = 2πr(r + h), जहाँ r त्रिज्या और h ऊँचाई है।"
  },

  // ============= NEW Class 10 Mathematics Questions (70 questions) =============
  
  // Real Numbers (10 questions)
  {
    question_id: 10001,
    text: "यूक्लिड विभाजन प्रमेयिका के अनुसार, a = bq + r में r का मान होता है:",
    options: [
      { option_id: 100011, option_text: "0 ≤ r < b" },
      { option_id: 100012, option_text: "0 < r ≤ b" },
      { option_id: 100013, option_text: "r ≥ b" },
      { option_id: 100014, option_text: "r = b" }
    ],
    correct_option_id: 100011,
    class_level: 10,
    difficulty: "medium",
    explanation: "यूक्लिड विभाजन प्रमेयिका में, शेषफल r सदैव 0 से अधिक या बराबर तथा भाजक b से कम होता है।"
  },
  {
    question_id: 10002,
    text: "HCF(a, b) × LCM(a, b) का मान क्या है?",
    options: [
      { option_id: 100021, option_text: "a × b" },
      { option_id: 100022, option_text: "a + b" },
      { option_id: 100023, option_text: "a - b" },
      { option_id: 100024, option_text: "a / b" }
    ],
    correct_option_id: 100021,
    class_level: 10,
    difficulty: "easy",
    explanation: "दो संख्याओं का HCF × LCM = संख्याओं का गुणनफल"
  },
  {
    question_id: 10003,
    text: "यदि किसी संख्या का अभाज्य गुणनखंडन 2² × 3³ × 5 है, तो यह संख्या है:",
    options: [
      { option_id: 100031, option_text: "परिमेय" },
      { option_id: 100032, option_text: "अपरिमेय" },
      { option_id: 100033, option_text: "अभाज्य" },
      { option_id: 100034, option_text: "काल्पनिक" }
    ],
    correct_option_id: 100031,
    class_level: 10,
    difficulty: "easy",
    explanation: "अभाज्य गुणनखंडन वाली सभी संख्याएँ परिमेय होती हैं।"
  },
  {
    question_id: 10004,
    text: "180 और 252 का HCF क्या है?",
    options: [
      { option_id: 100041, option_text: "36" },
      { option_id: 100042, option_text: "18" },
      { option_id: 100043, option_text: "12" },
      { option_id: 100044, option_text: "6" }
    ],
    correct_option_id: 100041,
    class_level: 10,
    difficulty: "medium",
    explanation: "180 = 2² × 3² × 5, 252 = 2² × 3² × 7, इसलिए HCF = 2² × 3² = 36"
  },
  {
    question_id: 10005,
    text: "यदि HCF(a, b) = 12 और a × b = 1800 हो, तो LCM(a, b) क्या होगा?",
    options: [
      { option_id: 100051, option_text: "150" },
      { option_id: 100052, option_text: "120" },
      { option_id: 100053, option_text: "180" },
      { option_id: 100054, option_text: "200" }
    ],
    correct_option_id: 100051,
    class_level: 10,
    difficulty: "hard",
    explanation: "HCF × LCM = a × b, इसलिए 12 × LCM = 1800, LCM = 150"
  },
  {
    question_id: 10006,
    text: "7/8 का दशमलव प्रसार है:",
    options: [
      { option_id: 100061, option_text: "सांत" },
      { option_id: 100062, option_text: "असांत आवर्ती" },
      { option_id: 100063, option_text: "असांत अनावर्ती" },
      { option_id: 100064, option_text: "पूर्णांक" }
    ],
    correct_option_id: 100061,
    class_level: 10,
    difficulty: "medium",
    explanation: "8 = 2³, केवल 2 और 5 के गुणनखंड हैं, इसलिए सांत दशमलव होगा।"
  },
  {
    question_id: 10007,
    text: "यूक्लिड विभाजन एल्गोरिथ्म किसे ज्ञात करने के लिए प्रयोग होता है?",
    options: [
      { option_id: 100071, option_text: "HCF" },
      { option_id: 100072, option_text: "LCM" },
      { option_id: 100073, option_text: "वर्गमूल" },
      { option_id: 100074, option_text: "घनमूल" }
    ],
    correct_option_id: 100071,
    class_level: 10,
    difficulty: "easy",
    explanation: "यूक्लिड विभाजन एल्गोरिथ्म दो संख्याओं का HCF ज्ञात करने के लिए प्रयोग होता है।"
  },
  {
    question_id: 10008,
    text: "सबसे छोटी अभाज्य संख्या कौन सी है?",
    options: [
      { option_id: 100081, option_text: "1" },
      { option_id: 100082, option_text: "2" },
      { option_id: 100083, option_text: "3" },
      { option_id: 100084, option_text: "5" }
    ],
    correct_option_id: 100082,
    class_level: 10,
    difficulty: "easy",
    explanation: "2 सबसे छोटी अभाज्य संख्या है और एकमात्र सम अभाज्य संख्या भी है।"
  },
  {
    question_id: 10009,
    text: "यदि p/q के रूप में q का अभाज्य गुणनखंडन 2ⁿ × 5ᵐ है, तो दशमलव प्रसार होगा:",
    options: [
      { option_id: 100091, option_text: "सांत" },
      { option_id: 100092, option_text: "असांत आवर्ती" },
      { option_id: 100093, option_text: "असांत अनावर्ती" },
      { option_id: 100094, option_text: "कुछ नहीं कह सकते" }
    ],
    correct_option_id: 100091,
    class_level: 10,
    difficulty: "hard",
    explanation: "यदि हर में केवल 2 और 5 के गुणनखंड हों, तो दशमलव प्रसार सांत होता है।"
  },
  {
    question_id: 10010,
    text: "96 और 404 का HCF क्या है?",
    options: [
      { option_id: 100101, option_text: "4" },
      { option_id: 100102, option_text: "8" },
      { option_id: 100103, option_text: "12" },
      { option_id: 100104, option_text: "2" }
    ],
    correct_option_id: 100101,
    class_level: 10,
    difficulty: "medium",
    explanation: "यूक्लिड विभाजन एल्गोरिथ्म से: HCF(96, 404) = 4"
  },

  // Polynomials (8 questions)
  {
    question_id: 10011,
    text: "यदि α और β द्विघात बहुपद ax² + bx + c के शून्यक हों, तो α + β का मान क्या है?",
    options: [
      { option_id: 100111, option_text: "-b/a" },
      { option_id: 100112, option_text: "c/a" },
      { option_id: 100113, option_text: "b/a" },
      { option_id: 100114, option_text: "-c/a" }
    ],
    correct_option_id: 100111,
    class_level: 10,
    difficulty: "medium",
    explanation: "शून्यकों का योग = -b/a (गुणांकों का अनुपात)"
  },
  {
    question_id: 10012,
    text: "यदि α और β द्विघात बहुपद के शून्यक हों, तो αβ का मान क्या है?",
    options: [
      { option_id: 100121, option_text: "c/a" },
      { option_id: 100122, option_text: "-b/a" },
      { option_id: 100123, option_text: "b/a" },
      { option_id: 100124, option_text: "-c/a" }
    ],
    correct_option_id: 100121,
    class_level: 10,
    difficulty: "medium",
    explanation: "शून्यकों का गुणनफल = c/a (गुणांकों का अनुपात)"
  },
  {
    question_id: 10013,
    text: "यदि बहुपद के शून्यक 2 और -3 हों, तो बहुपद क्या होगा?",
    options: [
      { option_id: 100131, option_text: "x² + x - 6" },
      { option_id: 100132, option_text: "x² - x - 6" },
      { option_id: 100133, option_text: "x² + x + 6" },
      { option_id: 100134, option_text: "x² - x + 6" }
    ],
    correct_option_id: 100131,
    class_level: 10,
    difficulty: "hard",
    explanation: "बहुपद = x² - (शून्यकों का योग)x + (शून्यकों का गुणनफल) = x² - (-1)x + (-6) = x² + x - 6"
  },
  {
    question_id: 10014,
    text: "यदि x² + 5x + 6 को x + 2 से भाग दिया जाए, तो शेषफल क्या होगा?",
    options: [
      { option_id: 100141, option_text: "0" },
      { option_id: 100142, option_text: "2" },
      { option_id: 100143, option_text: "-2" },
      { option_id: 100144, option_text: "6" }
    ],
    correct_option_id: 100141,
    class_level: 10,
    difficulty: "medium",
    explanation: "p(-2) = (-2)² + 5(-2) + 6 = 4 - 10 + 6 = 0"
  },
  {
    question_id: 10015,
    text: "यदि द्विघात बहुपद के शून्यकों का योग 5 और गुणनफल 6 हो, तो बहुपद है:",
    options: [
      { option_id: 100151, option_text: "x² - 5x + 6" },
      { option_id: 100152, option_text: "x² + 5x + 6" },
      { option_id: 100153, option_text: "x² - 5x - 6" },
      { option_id: 100154, option_text: "x² + 5x - 6" }
    ],
    correct_option_id: 100151,
    class_level: 10,
    difficulty: "medium",
    explanation: "बहुपद = x² - (योग)x + (गुणनफल) = x² - 5x + 6"
  },
  {
    question_id: 10016,
    text: "त्रिघात बहुपद में अधिकतम कितने शून्यक हो सकते हैं?",
    options: [
      { option_id: 100161, option_text: "1" },
      { option_id: 100162, option_text: "2" },
      { option_id: 100163, option_text: "3" },
      { option_id: 100164, option_text: "4" }
    ],
    correct_option_id: 100163,
    class_level: 10,
    difficulty: "easy",
    explanation: "त्रिघात बहुपद (घात 3) में अधिकतम 3 शून्यक हो सकते हैं।"
  },
  {
    question_id: 10017,
    text: "यदि p(x) = x³ - 3x² + 5x - 3 हो, तो p(1) का मान क्या है?",
    options: [
      { option_id: 100171, option_text: "0" },
      { option_id: 100172, option_text: "1" },
      { option_id: 100173, option_text: "-3" },
      { option_id: 100174, option_text: "5" }
    ],
    correct_option_id: 100171,
    class_level: 10,
    difficulty: "easy",
    explanation: "p(1) = (1)³ - 3(1)² + 5(1) - 3 = 1 - 3 + 5 - 3 = 0"
  },
  {
    question_id: 10018,
    text: "विभाजन एल्गोरिथ्म के अनुसार: भाज्य = ?",
    options: [
      { option_id: 100181, option_text: "भाजक × भागफल + शेषफल" },
      { option_id: 100182, option_text: "भाजक + भागफल + शेषफल" },
      { option_id: 100183, option_text: "भाजक - भागफल + शेषफल" },
      { option_id: 100184, option_text: "भाजक × भागफल - शेषफल" }
    ],
    correct_option_id: 100181,
    class_level: 10,
    difficulty: "easy",
    explanation: "विभाजन एल्गोरिथ्म: भाज्य = भाजक × भागफल + शेषफल"
  },

  // Pair of Linear Equations (8 questions)
  {
    question_id: 10019,
    text: "रैखिक समीकरण युग्म का आलेखीय हल कब अद्वितीय होता है?",
    options: [
      { option_id: 100191, option_text: "जब रेखाएँ प्रतिच्छेद करती हों" },
      { option_id: 100192, option_text: "जब रेखाएँ समांतर हों" },
      { option_id: 100193, option_text: "जब रेखाएँ संपाती हों" },
      { option_id: 100194, option_text: "कभी नहीं" }
    ],
    correct_option_id: 100191,
    class_level: 10,
    difficulty: "medium",
    explanation: "जब दोनों रेखाएँ एक बिंदु पर प्रतिच्छेद करती हैं, तो अद्वितीय हल होता है।"
  },
  {
    question_id: 10020,
    text: "यदि a₁/a₂ = b₁/b₂ ≠ c₁/c₂ हो, तो समीकरण युग्म के:",
    options: [
      { option_id: 100201, option_text: "कोई हल नहीं" },
      { option_id: 100202, option_text: "अद्वितीय हल" },
      { option_id: 100203, option_text: "अनंत हल" },
      { option_id: 100204, option_text: "दो हल" }
    ],
    correct_option_id: 100201,
    class_level: 10,
    difficulty: "hard",
    explanation: "जब रेखाएँ समांतर हों (a₁/a₂ = b₁/b₂ ≠ c₁/c₂), तो कोई हल नहीं होता।"
  },
  {
    question_id: 10021,
    text: "प्रतिस्थापन विधि में क्या किया जाता है?",
    options: [
      { option_id: 100211, option_text: "एक चर को दूसरे के पदों में व्यक्त करते हैं" },
      { option_id: 100212, option_text: "दोनों समीकरणों को जोड़ते हैं" },
      { option_id: 100213, option_text: "दोनों समीकरणों को गुणा करते हैं" },
      { option_id: 100214, option_text: "आलेख खींचते हैं" }
    ],
    correct_option_id: 100211,
    class_level: 10,
    difficulty: "easy",
    explanation: "प्रतिस्थापन विधि में एक चर को दूसरे चर के पदों में व्यक्त करके हल ज्ञात करते हैं।"
  },
  {
    question_id: 10022,
    text: "समीकरण युग्म 2x + 3y = 7 और 4x + 6y = 14 के:",
    options: [
      { option_id: 100221, option_text: "अनंत हल हैं" },
      { option_id: 100222, option_text: "कोई हल नहीं" },
      { option_id: 100223, option_text: "अद्वितीय हल" },
      { option_id: 100224, option_text: "दो हल" }
    ],
    correct_option_id: 100221,
    class_level: 10,
    difficulty: "medium",
    explanation: "दूसरा समीकरण पहले का दोगुना है (संपाती रेखाएँ), इसलिए अनंत हल हैं।"
  },
  {
    question_id: 10023,
    text: "विलोपन विधि में क्या किया जाता है?",
    options: [
      { option_id: 100231, option_text: "एक चर को विलोपित करते हैं" },
      { option_id: 100232, option_text: "दोनों चरों को जोड़ते हैं" },
      { option_id: 100233, option_text: "आलेख खींचते हैं" },
      { option_id: 100234, option_text: "एक चर को प्रतिस्थापित करते हैं" }
    ],
    correct_option_id: 100231,
    class_level: 10,
    difficulty: "easy",
    explanation: "विलोपन विधि में समीकरणों को जोड़ या घटाकर एक चर को विलोपित करते हैं।"
  },
  {
    question_id: 10024,
    text: "x + y = 5 और x - y = 1 को हल करने पर x का मान क्या होगा?",
    options: [
      { option_id: 100241, option_text: "3" },
      { option_id: 100242, option_text: "2" },
      { option_id: 100243, option_text: "4" },
      { option_id: 100244, option_text: "1" }
    ],
    correct_option_id: 100241,
    class_level: 10,
    difficulty: "medium",
    explanation: "जोड़ने पर: 2x = 6, इसलिए x = 3"
  },
  {
    question_id: 10025,
    text: "यदि a₁/a₂ ≠ b₁/b₂ हो, तो समीकरण युग्म के:",
    options: [
      { option_id: 100251, option_text: "अद्वितीय हल" },
      { option_id: 100252, option_text: "कोई हल नहीं" },
      { option_id: 100253, option_text: "अनंत हल" },
      { option_id: 100254, option_text: "दो हल" }
    ],
    correct_option_id: 100251,
    class_level: 10,
    difficulty: "medium",
    explanation: "जब रेखाएँ प्रतिच्छेद करती हैं (a₁/a₂ ≠ b₁/b₂), तो अद्वितीय हल होता है।"
  },
  {
    question_id: 10026,
    text: "क्रॉस गुणन विधि किस पर आधारित है?",
    options: [
      { option_id: 100261, option_text: "डिटर्मिनेंट" },
      { option_id: 100262, option_text: "आलेख" },
      { option_id: 100263, option_text: "प्रतिस्थापन" },
      { option_id: 100264, option_text: "विलोपन" }
    ],
    correct_option_id: 100261,
    class_level: 10,
    difficulty: "hard",
    explanation: "क्रॉस गुणन विधि डिटर्मिनेंट (सारणिक) पर आधारित है।"
  },

  // Quadratic Equations (10 questions)
  {
    question_id: 10027,
    text: "द्विघात समीकरण का मानक रूप क्या है?",
    options: [
      { option_id: 100271, option_text: "ax² + bx + c = 0, a ≠ 0" },
      { option_id: 100272, option_text: "ax + b = 0" },
      { option_id: 100273, option_text: "ax³ + bx² + c = 0" },
      { option_id: 100274, option_text: "ax² + bx = 0" }
    ],
    correct_option_id: 100271,
    class_level: 10,
    difficulty: "easy",
    explanation: "द्विघात समीकरण का मानक रूप ax² + bx + c = 0 है, जहाँ a ≠ 0"
  },
  {
    question_id: 10028,
    text: "विविक्तकर (Discriminant) D का मान क्या है?",
    options: [
      { option_id: 100281, option_text: "b² - 4ac" },
      { option_id: 100282, option_text: "b² + 4ac" },
      { option_id: 100283, option_text: "4ac - b²" },
      { option_id: 100284, option_text: "-b ± √(b² - 4ac)" }
    ],
    correct_option_id: 100281,
    class_level: 10,
    difficulty: "easy",
    explanation: "विविक्तकर D = b² - 4ac"
  },
  {
    question_id: 10029,
    text: "यदि D > 0 हो, तो द्विघात समीकरण के:",
    options: [
      { option_id: 100291, option_text: "दो भिन्न वास्तविक मूल" },
      { option_id: 100292, option_text: "दो बराबर वास्तविक मूल" },
      { option_id: 100293, option_text: "कोई वास्तविक मूल नहीं" },
      { option_id: 100294, option_text: "एक मूल" }
    ],
    correct_option_id: 100291,
    class_level: 10,
    difficulty: "medium",
    explanation: "D > 0 होने पर समीकरण के दो भिन्न वास्तविक मूल होते हैं।"
  },
  {
    question_id: 10030,
    text: "यदि D = 0 हो, तो द्विघात समीकरण के:",
    options: [
      { option_id: 100301, option_text: "दो बराबर वास्तविक मूल" },
      { option_id: 100302, option_text: "दो भिन्न वास्तविक मूल" },
      { option_id: 100303, option_text: "कोई वास्तविक मूल नहीं" },
      { option_id: 100304, option_text: "तीन मूल" }
    ],
    correct_option_id: 100301,
    class_level: 10,
    difficulty: "medium",
    explanation: "D = 0 होने पर समीकरण के दो बराबर वास्तविक मूल होते हैं।"
  },
  {
    question_id: 10031,
    text: "द्विघात सूत्र (Quadratic Formula) क्या है?",
    options: [
      { option_id: 100311, option_text: "x = [-b ± √(b² - 4ac)] / 2a" },
      { option_id: 100312, option_text: "x = [b ± √(b² - 4ac)] / 2a" },
      { option_id: 100313, option_text: "x = [-b ± √(b² + 4ac)] / 2a" },
      { option_id: 100314, option_text: "x = [-b - √(b² - 4ac)] / 2a" }
    ],
    correct_option_id: 100311,
    class_level: 10,
    difficulty: "medium",
    explanation: "द्विघात सूत्र: x = [-b ± √(b² - 4ac)] / 2a"
  },
  {
    question_id: 10032,
    text: "समीकरण x² - 5x + 6 = 0 के मूल क्या हैं?",
    options: [
      { option_id: 100321, option_text: "2, 3" },
      { option_id: 100322, option_text: "-2, -3" },
      { option_id: 100323, option_text: "1, 6" },
      { option_id: 100324, option_text: "-1, -6" }
    ],
    correct_option_id: 100321,
    class_level: 10,
    difficulty: "medium",
    explanation: "x² - 5x + 6 = (x - 2)(x - 3) = 0, इसलिए x = 2 या x = 3"
  },
  {
    question_id: 10033,
    text: "यदि D < 0 हो, तो द्विघात समीकरण के:",
    options: [
      { option_id: 100331, option_text: "कोई वास्तविक मूल नहीं" },
      { option_id: 100332, option_text: "दो वास्तविक मूल" },
      { option_id: 100333, option_text: "एक वास्तविक मूल" },
      { option_id: 100334, option_text: "तीन वास्तविक मूल" }
    ],
    correct_option_id: 100331,
    class_level: 10,
    difficulty: "medium",
    explanation: "D < 0 होने पर समीकरण के कोई वास्तविक मूल नहीं होते (काल्पनिक मूल होते हैं)।"
  },
  {
    question_id: 10034,
    text: "समीकरण 2x² - 8 = 0 के मूल क्या हैं?",
    options: [
      { option_id: 100341, option_text: "±2" },
      { option_id: 100342, option_text: "±4" },
      { option_id: 100343, option_text: "±√8" },
      { option_id: 100344, option_text: "0, 4" }
    ],
    correct_option_id: 100341,
    class_level: 10,
    difficulty: "easy",
    explanation: "2x² = 8 → x² = 4 → x = ±2"
  },
  {
    question_id: 10035,
    text: "गुणनखंड विधि से x² + 7x + 12 = 0 को हल करने पर:",
    options: [
      { option_id: 100351, option_text: "x = -3, -4" },
      { option_id: 100352, option_text: "x = 3, 4" },
      { option_id: 100353, option_text: "x = -3, 4" },
      { option_id: 100354, option_text: "x = 3, -4" }
    ],
    correct_option_id: 100351,
    class_level: 10,
    difficulty: "medium",
    explanation: "x² + 7x + 12 = (x + 3)(x + 4) = 0, इसलिए x = -3 या x = -4"
  },
  {
    question_id: 10036,
    text: "पूर्ण वर्ग बनाने की विधि किस समीकरण के लिए उपयुक्त है?",
    options: [
      { option_id: 100361, option_text: "द्विघात समीकरण" },
      { option_id: 100362, option_text: "रैखिक समीकरण" },
      { option_id: 100363, option_text: "त्रिघात समीकरण" },
      { option_id: 100364, option_text: "चतुर्घात समीकरण" }
    ],
    correct_option_id: 100361,
    class_level: 10,
    difficulty: "easy",
    explanation: "पूर्ण वर्ग बनाने की विधि द्विघात समीकरणों को हल करने के लिए उपयुक्त है।"
  },

  // Arithmetic Progressions (8 questions)
  {
    question_id: 10037,
    text: "समांतर श्रेढ़ी (AP) का nवाँ पद का सूत्र क्या है?",
    options: [
      { option_id: 100371, option_text: "aₙ = a + (n - 1)d" },
      { option_id: 100372, option_text: "aₙ = a + nd" },
      { option_id: 100373, option_text: "aₙ = a - (n - 1)d" },
      { option_id: 100374, option_text: "aₙ = n(a + d)" }
    ],
    correct_option_id: 100371,
    class_level: 10,
    difficulty: "easy",
    explanation: "AP का nवाँ पद: aₙ = a + (n - 1)d, जहाँ a प्रथम पद और d सार्वअंतर है।"
  },
  {
    question_id: 10038,
    text: "AP के प्रथम n पदों का योग का सूत्र क्या है?",
    options: [
      { option_id: 100381, option_text: "Sₙ = n/2 [2a + (n - 1)d]" },
      { option_id: 100382, option_text: "Sₙ = n [2a + (n - 1)d]" },
      { option_id: 100383, option_text: "Sₙ = n/2 [a + (n - 1)d]" },
      { option_id: 100384, option_text: "Sₙ = 2n [a + (n - 1)d]" }
    ],
    correct_option_id: 100381,
    class_level: 10,
    difficulty: "medium",
    explanation: "AP के प्रथम n पदों का योग: Sₙ = n/2 [2a + (n - 1)d]"
  },
  {
    question_id: 10039,
    text: "AP: 2, 5, 8, 11, ... का सार्वअंतर क्या है?",
    options: [
      { option_id: 100391, option_text: "3" },
      { option_id: 100392, option_text: "2" },
      { option_id: 100393, option_text: "5" },
      { option_id: 100394, option_text: "1" }
    ],
    correct_option_id: 100391,
    class_level: 10,
    difficulty: "easy",
    explanation: "सार्वअंतर d = 5 - 2 = 3"
  },
  {
    question_id: 10040,
    text: "यदि AP का प्रथम पद 5 और सार्वअंतर 3 हो, तो 10वाँ पद क्या होगा?",
    options: [
      { option_id: 100401, option_text: "32" },
      { option_id: 100402, option_text: "35" },
      { option_id: 100403, option_text: "29" },
      { option_id: 100404, option_text: "38" }
    ],
    correct_option_id: 100401,
    class_level: 10,
    difficulty: "medium",
    explanation: "a₁₀ = 5 + (10 - 1) × 3 = 5 + 27 = 32"
  },
  {
    question_id: 10041,
    text: "AP के प्रथम n पदों के योग का वैकल्पिक सूत्र क्या है?",
    options: [
      { option_id: 100411, option_text: "Sₙ = n/2 (a + l)" },
      { option_id: 100412, option_text: "Sₙ = n (a + l)" },
      { option_id: 100413, option_text: "Sₙ = n/2 (a - l)" },
      { option_id: 100414, option_text: "Sₙ = 2n (a + l)" }
    ],
    correct_option_id: 100411,
    class_level: 10,
    difficulty: "medium",
    explanation: "जहाँ l अंतिम पद है: Sₙ = n/2 (प्रथम पद + अंतिम पद)"
  },
  {
    question_id: 10042,
    text: "AP: 3, 7, 11, 15, ... के प्रथम 20 पदों का योग क्या है?",
    options: [
      { option_id: 100421, option_text: "820" },
      { option_id: 100422, option_text: "800" },
      { option_id: 100423, option_text: "780" },
      { option_id: 100424, option_text: "840" }
    ],
    correct_option_id: 100421,
    class_level: 10,
    difficulty: "hard",
    explanation: "S₂₀ = 20/2 [2(3) + (20 - 1)(4)] = 10 [6 + 76] = 10 × 82 = 820"
  },
  {
    question_id: 10043,
    text: "यदि किसी AP का nवाँ पद 2n + 3 हो, तो सार्वअंतर क्या है?",
    options: [
      { option_id: 100431, option_text: "2" },
      { option_id: 100432, option_text: "3" },
      { option_id: 100433, option_text: "5" },
      { option_id: 100434, option_text: "1" }
    ],
    correct_option_id: 100431,
    class_level: 10,
    difficulty: "hard",
    explanation: "aₙ - aₙ₋₁ = (2n + 3) - [2(n-1) + 3] = 2n + 3 - 2n - 1 = 2"
  },
  {
    question_id: 10044,
    text: "पहले 10 प्राकृतिक संख्याओं का योग क्या है?",
    options: [
      { option_id: 100441, option_text: "55" },
      { option_id: 100442, option_text: "45" },
      { option_id: 100443, option_text: "50" },
      { option_id: 100444, option_text: "60" }
    ],
    correct_option_id: 100441,
    class_level: 10,
    difficulty: "medium",
    explanation: "S₁₀ = 10/2 (1 + 10) = 5 × 11 = 55 या n(n+1)/2 = 10×11/2 = 55"
  },

  // Triangles (8 questions)
  {
    question_id: 10045,
    text: "दो त्रिभुज समरूप होते हैं यदि उनके:",
    options: [
      { option_id: 100451, option_text: "संगत कोण बराबर हों" },
      { option_id: 100452, option_text: "संगत भुजाएँ बराबर हों" },
      { option_id: 100453, option_text: "क्षेत्रफल बराबर हो" },
      { option_id: 100454, option_text: "परिमाप बराबर हो" }
    ],
    correct_option_id: 100451,
    class_level: 10,
    difficulty: "easy",
    explanation: "समरूप त्रिभुजों के संगत कोण बराबर और संगत भुजाओं में एक ही अनुपात होता है।"
  },
  {
    question_id: 10046,
    text: "AAA समरूपता कसौटी का पूरा नाम क्या है?",
    options: [
      { option_id: 100461, option_text: "कोण-कोण-कोण" },
      { option_id: 100462, option_text: "भुजा-भुजा-भुजा" },
      { option_id: 100463, option_text: "भुजा-कोण-भुजा" },
      { option_id: 100464, option_text: "कोण-भुजा-कोण" }
    ],
    correct_option_id: 100461,
    class_level: 10,
    difficulty: "easy",
    explanation: "AAA = Angle-Angle-Angle (कोण-कोण-कोण)"
  },
  {
    question_id: 10047,
    text: "यदि दो त्रिभुज समरूप हों, तो उनके क्षेत्रफलों का अनुपात क्या होगा?",
    options: [
      { option_id: 100471, option_text: "संगत भुजाओं के अनुपात का वर्ग" },
      { option_id: 100472, option_text: "संगत भुजाओं के अनुपात के बराबर" },
      { option_id: 100473, option_text: "संगत भुजाओं के अनुपात का घन" },
      { option_id: 100474, option_text: "1:1" }
    ],
    correct_option_id: 100471,
    class_level: 10,
    difficulty: "medium",
    explanation: "समरूप त्रिभुजों के क्षेत्रफलों का अनुपात = (संगत भुजाओं के अनुपात)²"
  },
  {
    question_id: 10048,
    text: "आधार आनुपातिकता प्रमेय (BPT) किसके बारे में है?",
    options: [
      { option_id: 100481, option_text: "त्रिभुज की भुजाओं को समानुपात में विभाजित करना" },
      { option_id: 100482, option_text: "त्रिभुज का क्षेत्रफल" },
      { option_id: 100483, option_text: "त्रिभुज की ऊँचाई" },
      { option_id: 100484, option_text: "त्रिभुज का परिमाप" }
    ],
    correct_option_id: 100481,
    class_level: 10,
    difficulty: "medium",
    explanation: "BPT: यदि त्रिभुज की एक भुजा के समांतर रेखा अन्य दो भुजाओं को काटे, तो वह उन्हें समानुपात में विभाजित करती है।"
  },
  {
    question_id: 10049,
    text: "पाइथागोरस प्रमेय क्या है?",
    options: [
      { option_id: 100491, option_text: "कर्ण² = लंब² + आधार²" },
      { option_id: 100492, option_text: "कर्ण = लंब + आधार" },
      { option_id: 100493, option_text: "लंब² = कर्ण² + आधार²" },
      { option_id: 100494, option_text: "आधार² = कर्ण² + लंब²" }
    ],
    correct_option_id: 100491,
    class_level: 10,
    difficulty: "easy",
    explanation: "समकोण त्रिभुज में: (कर्ण)² = (लंब)² + (आधार)²"
  },
  {
    question_id: 10050,
    text: "यदि एक समकोण त्रिभुज में लंब = 3 cm और आधार = 4 cm हो, तो कर्ण क्या होगा?",
    options: [
      { option_id: 100501, option_text: "5 cm" },
      { option_id: 100502, option_text: "7 cm" },
      { option_id: 100503, option_text: "6 cm" },
      { option_id: 100504, option_text: "25 cm" }
    ],
    correct_option_id: 100501,
    class_level: 10,
    difficulty: "medium",
    explanation: "कर्ण² = 3² + 4² = 9 + 16 = 25, इसलिए कर्ण = 5 cm"
  },
  {
    question_id: 10051,
    text: "SAS समरूपता कसौटी में क्या बराबर होना चाहिए?",
    options: [
      { option_id: 100511, option_text: "दो भुजाओं का अनुपात और उनके बीच का कोण" },
      { option_id: 100512, option_text: "तीनों भुजाएँ" },
      { option_id: 100513, option_text: "तीनों कोण" },
      { option_id: 100514, option_text: "दो कोण और एक भुजा" }
    ],
    correct_option_id: 100511,
    class_level: 10,
    difficulty: "medium",
    explanation: "SAS: यदि दो भुजाओं का अनुपात बराबर हो और उनके बीच के कोण बराबर हों।"
  },
  {
    question_id: 10052,
    text: "त्रिभुज की माध्यिका त्रिभुज को कितने बराबर भागों में बाँटती है?",
    options: [
      { option_id: 100521, option_text: "2 (क्षेत्रफल के आधार पर)" },
      { option_id: 100522, option_text: "3" },
      { option_id: 100523, option_text: "4" },
      { option_id: 100524, option_text: "बाँटती नहीं" }
    ],
    correct_option_id: 100521,
    class_level: 10,
    difficulty: "hard",
    explanation: "माध्यिका त्रिभुज को दो बराबर क्षेत्रफलों में बाँटती है।"
  },

  // Coordinate Geometry (6 questions)
  {
    question_id: 10053,
    text: "दो बिंदुओं (x₁, y₁) और (x₂, y₂) के बीच की दूरी का सूत्र क्या है?",
    options: [
      { option_id: 100531, option_text: "√[(x₂-x₁)² + (y₂-y₁)²]" },
      { option_id: 100532, option_text: "(x₂-x₁)² + (y₂-y₁)²" },
      { option_id: 100533, option_text: "(x₂-x₁) + (y₂-y₁)" },
      { option_id: 100534, option_text: "√[(x₂+x₁)² + (y₂+y₁)²]" }
    ],
    correct_option_id: 100531,
    class_level: 10,
    difficulty: "easy",
    explanation: "दूरी सूत्र: d = √[(x₂-x₁)² + (y₂-y₁)²]"
  },
  {
    question_id: 10054,
    text: "बिंदु (3, 4) की मूल बिंदु से दूरी क्या है?",
    options: [
      { option_id: 100541, option_text: "5" },
      { option_id: 100542, option_text: "7" },
      { option_id: 100543, option_text: "4" },
      { option_id: 100544, option_text: "3" }
    ],
    correct_option_id: 100541,
    class_level: 10,
    difficulty: "medium",
    explanation: "d = √(3² + 4²) = √(9 + 16) = √25 = 5"
  },
  {
    question_id: 10055,
    text: "विभाजन सूत्र (Section Formula) क्या है जब m:n अनुपात में विभाजन हो?",
    options: [
      { option_id: 100551, option_text: "[(mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n)]" },
      { option_id: 100552, option_text: "[(mx₁+nx₂)/(m+n), (my₁+ny₂)/(m+n)]" },
      { option_id: 100553, option_text: "[(x₁+x₂)/2, (y₁+y₂)/2]" },
      { option_id: 100554, option_text: "[(mx₂-nx₁)/(m-n), (my₂-ny₁)/(m-n)]" }
    ],
    correct_option_id: 100551,
    class_level: 10,
    difficulty: "hard",
    explanation: "आंतरिक विभाजन सूत्र: x = (mx₂+nx₁)/(m+n), y = (my₂+ny₁)/(m+n)"
  },
  {
    question_id: 10056,
    text: "मध्य बिंदु का सूत्र क्या है?",
    options: [
      { option_id: 100561, option_text: "[(x₁+x₂)/2, (y₁+y₂)/2]" },
      { option_id: 100562, option_text: "[(x₁-x₂)/2, (y₁-y₂)/2]" },
      { option_id: 100563, option_text: "[(2x₁+x₂)/3, (2y₁+y₂)/3]" },
      { option_id: 100564, option_text: "[(x₁×x₂)/2, (y₁×y₂)/2]" }
    ],
    correct_option_id: 100561,
    class_level: 10,
    difficulty: "easy",
    explanation: "मध्य बिंदु = [(x₁+x₂)/2, (y₁+y₂)/2]"
  },
  {
    question_id: 10057,
    text: "त्रिभुज का क्षेत्रफल सूत्र (निर्देशांक ज्यामिति में) क्या है?",
    options: [
      { option_id: 100571, option_text: "½|x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|" },
      { option_id: 100572, option_text: "|x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|" },
      { option_id: 100573, option_text: "x₁y₁ + x₂y₂ + x₃y₃" },
      { option_id: 100574, option_text: "½(x₁+x₂+x₃)(y₁+y₂+y₃)" }
    ],
    correct_option_id: 100571,
    class_level: 10,
    difficulty: "hard",
    explanation: "त्रिभुज का क्षेत्रफल = ½|x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|"
  },
  {
    question_id: 10058,
    text: "यदि तीन बिंदु संरेखीय हों, तो उनसे बने त्रिभुज का क्षेत्रफल क्या होगा?",
    options: [
      { option_id: 100581, option_text: "0" },
      { option_id: 100582, option_text: "1" },
      { option_id: 100583, option_text: "∞" },
      { option_id: 100584, option_text: "ऋणात्मक" }
    ],
    correct_option_id: 100581,
    class_level: 10,
    difficulty: "medium",
    explanation: "संरेखीय बिंदुओं से बने त्रिभुज का क्षेत्रफल शून्य होता है।"
  },

  // Trigonometry (8 questions)
  {
    question_id: 10059,
    text: "sin θ और cos θ का मौलिक संबंध क्या है?",
    options: [
      { option_id: 100591, option_text: "sin²θ + cos²θ = 1" },
      { option_id: 100592, option_text: "sin θ + cos θ = 1" },
      { option_id: 100593, option_text: "sin θ × cos θ = 1" },
      { option_id: 100594, option_text: "sin²θ - cos²θ = 1" }
    ],
    correct_option_id: 100591,
    class_level: 10,
    difficulty: "easy",
    explanation: "त्रिकोणमितीय सर्वसमिका: sin²θ + cos²θ = 1"
  },
  {
    question_id: 10060,
    text: "tan θ का मान क्या है?",
    options: [
      { option_id: 100601, option_text: "sin θ / cos θ" },
      { option_id: 100602, option_text: "cos θ / sin θ" },
      { option_id: 100603, option_text: "1 / sin θ" },
      { option_id: 100604, option_text: "1 / cos θ" }
    ],
    correct_option_id: 100601,
    class_level: 10,
    difficulty: "easy",
    explanation: "tan θ = sin θ / cos θ = लंब/आधार"
  },
  {
    question_id: 10061,
    text: "sin 90° का मान क्या है?",
    options: [
      { option_id: 100611, option_text: "1" },
      { option_id: 100612, option_text: "0" },
      { option_id: 100613, option_text: "√3/2" },
      { option_id: 100614, option_text: "1/2" }
    ],
    correct_option_id: 100611,
    class_level: 10,
    difficulty: "easy",
    explanation: "sin 90° = 1"
  },
  {
    question_id: 10062,
    text: "cos 0° का मान क्या है?",
    options: [
      { option_id: 100621, option_text: "1" },
      { option_id: 100622, option_text: "0" },
      { option_id: 100623, option_text: "√3/2" },
      { option_id: 100624, option_text: "1/2" }
    ],
    correct_option_id: 100621,
    class_level: 10,
    difficulty: "easy",
    explanation: "cos 0° = 1"
  },
  {
    question_id: 10063,
    text: "tan 45° का मान क्या है?",
    options: [
      { option_id: 100631, option_text: "1" },
      { option_id: 100632, option_text: "0" },
      { option_id: 100633, option_text: "√3" },
      { option_id: 100634, option_text: "1/√3" }
    ],
    correct_option_id: 100631,
    class_level: 10,
    difficulty: "easy",
    explanation: "tan 45° = 1"
  },
  {
    question_id: 10064,
    text: "sin 30° का मान क्या है?",
    options: [
      { option_id: 100641, option_text: "1/2" },
      { option_id: 100642, option_text: "√3/2" },
      { option_id: 100643, option_text: "1" },
      { option_id: 100644, option_text: "0" }
    ],
    correct_option_id: 100641,
    class_level: 10,
    difficulty: "medium",
    explanation: "sin 30° = 1/2"
  },
  {
    question_id: 10065,
    text: "1 + tan²θ का मान क्या है?",
    options: [
      { option_id: 100651, option_text: "sec²θ" },
      { option_id: 100652, option_text: "cosec²θ" },
      { option_id: 100653, option_text: "cot²θ" },
      { option_id: 100654, option_text: "tan²θ" }
    ],
    correct_option_id: 100651,
    class_level: 10,
    difficulty: "medium",
    explanation: "त्रिकोणमितीय सर्वसमिका: 1 + tan²θ = sec²θ"
  },
  {
    question_id: 10066,
    text: "यदि sin θ = 3/5 हो, तो cos θ का मान क्या होगा? (θ न्यून कोण है)",
    options: [
      { option_id: 100661, option_text: "4/5" },
      { option_id: 100662, option_text: "3/4" },
      { option_id: 100663, option_text: "5/3" },
      { option_id: 100664, option_text: "5/4" }
    ],
    correct_option_id: 100661,
    class_level: 10,
    difficulty: "hard",
    explanation: "sin²θ + cos²θ = 1 से: (3/5)² + cos²θ = 1 → cos²θ = 16/25 → cos θ = 4/5"
  },

  // Circles (2 questions)
  {
    question_id: 10067,
    text: "वृत्त की स्पर्श रेखा त्रिज्या से कैसे होती है?",
    options: [
      { option_id: 100671, option_text: "लंबवत" },
      { option_id: 100672, option_text: "समांतर" },
      { option_id: 100673, option_text: "60° पर" },
      { option_id: 100674, option_text: "45° पर" }
    ],
    correct_option_id: 100671,
    class_level: 10,
    difficulty: "easy",
    explanation: "वृत्त की स्पर्श रेखा स्पर्श बिंदु पर त्रिज्या के लंबवत होती है।"
  },
  {
    question_id: 10068,
    text: "किसी बाह्य बिंदु से वृत्त पर कितनी स्पर्श रेखाएँ खींची जा सकती हैं?",
    options: [
      { option_id: 100681, option_text: "2" },
      { option_id: 100682, option_text: "1" },
      { option_id: 100683, option_text: "3" },
      { option_id: 100684, option_text: "अनंत" }
    ],
    correct_option_id: 100681,
    class_level: 10,
    difficulty: "medium",
    explanation: "किसी बाह्य बिंदु से वृत्त पर दो स्पर्श रेखाएँ खींची जा सकती हैं।"
  },

  // Mensuration (2 questions)
  {
    question_id: 10069,
    text: "शंकु का आयतन सूत्र क्या है?",
    options: [
      { option_id: 100691, option_text: "⅓πr²h" },
      { option_id: 100692, option_text: "πr²h" },
      { option_id: 100693, option_text: "⅔πr²h" },
      { option_id: 100694, option_text: "2πr²h" }
    ],
    correct_option_id: 100691,
    class_level: 10,
    difficulty: "easy",
    explanation: "शंकु का आयतन = ⅓πr²h, जहाँ r त्रिज्या और h ऊँचाई है।"
  },
  {
    question_id: 10070,
    text: "गोले का पृष्ठीय क्षेत्रफल क्या है?",
    options: [
      { option_id: 100701, option_text: "4πr²" },
      { option_id: 100702, option_text: "πr²" },
      { option_id: 100703, option_text: "2πr²" },
      { option_id: 100704, option_text: "⅔πr²" }
    ],
    correct_option_id: 100701,
    class_level: 10,
    difficulty: "easy",
    explanation: "गोले का पृष्ठीय क्षेत्रफल = 4πr², जहाँ r त्रिज्या है।"
  }
];

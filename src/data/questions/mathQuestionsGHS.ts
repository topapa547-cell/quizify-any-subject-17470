import { QuizQuestion } from '../quizData';

// GHS Barodiya Class 10 Math MCQ Questions extracted from study material
export const mathQuestionsGHS: QuizQuestion[] = [
  // Chapter 1: वास्तविक संख्याएं (Real Numbers)
  {
    question_id: 5001,
    text: "दो संख्याओं का HCF × LCM बराबर होता है:",
    options: [
      { option_id: 50011, option_text: "दोनों संख्याओं के योग के" },
      { option_id: 50012, option_text: "दोनों संख्याओं के अंतर के" },
      { option_id: 50013, option_text: "दोनों संख्याओं के गुणनफल के" },
      { option_id: 50014, option_text: "दोनों संख्याओं के भागफल के" }
    ],
    correct_option_id: 50013,
    class_level: 10,
    difficulty: "easy",
    explanation: "किन्हीं दो संख्याओं a और b के लिए: HCF(a,b) × LCM(a,b) = a × b"
  },
  {
    question_id: 5002,
    text: "12 और 18 का HCF क्या है?",
    options: [
      { option_id: 50021, option_text: "2" },
      { option_id: 50022, option_text: "4" },
      { option_id: 50023, option_text: "6" },
      { option_id: 50024, option_text: "36" }
    ],
    correct_option_id: 50023,
    class_level: 10,
    difficulty: "easy",
    explanation: "12 = 2² × 3 और 18 = 2 × 3², अतः HCF = 2 × 3 = 6"
  },
  {
    question_id: 5003,
    text: "15 और 20 का LCM क्या है?",
    options: [
      { option_id: 50031, option_text: "5" },
      { option_id: 50032, option_text: "30" },
      { option_id: 50033, option_text: "60" },
      { option_id: 50034, option_text: "300" }
    ],
    correct_option_id: 50033,
    class_level: 10,
    difficulty: "easy",
    explanation: "15 = 3 × 5 और 20 = 2² × 5, अतः LCM = 2² × 3 × 5 = 60"
  },
  {
    question_id: 5004,
    text: "√2 एक ______ संख्या है।",
    options: [
      { option_id: 50041, option_text: "परिमेय" },
      { option_id: 50042, option_text: "अपरिमेय" },
      { option_id: 50043, option_text: "पूर्णांक" },
      { option_id: 50044, option_text: "प्राकृत" }
    ],
    correct_option_id: 50042,
    class_level: 10,
    difficulty: "easy",
    explanation: "√2 को p/q के रूप में व्यक्त नहीं किया जा सकता, अतः यह अपरिमेय संख्या है।"
  },
  {
    question_id: 5005,
    text: "यूक्लिड विभाजन एल्गोरिथ्म के अनुसार a = bq + r में r की सीमा क्या है?",
    options: [
      { option_id: 50051, option_text: "0 ≤ r < b" },
      { option_id: 50052, option_text: "0 < r < b" },
      { option_id: 50053, option_text: "0 ≤ r ≤ b" },
      { option_id: 50054, option_text: "r < b" }
    ],
    correct_option_id: 50051,
    class_level: 10,
    difficulty: "medium",
    explanation: "यूक्लिड विभाजन प्रमेयिका में शेषफल r की सीमा 0 ≤ r < b होती है।"
  },
  {
    question_id: 5006,
    text: "किसी भी धनात्मक पूर्णांक का अभाज्य गुणनखंडन ______ होता है।",
    options: [
      { option_id: 50061, option_text: "अनंत" },
      { option_id: 50062, option_text: "अद्वितीय" },
      { option_id: 50063, option_text: "शून्य" },
      { option_id: 50064, option_text: "ऋणात्मक" }
    ],
    correct_option_id: 50062,
    class_level: 10,
    difficulty: "medium",
    explanation: "अंकगणित की आधारभूत प्रमेय के अनुसार, प्रत्येक धनात्मक पूर्णांक का अभाज्य गुणनखंडन अद्वितीय होता है।"
  },
  {
    question_id: 5007,
    text: "0.3333... को p/q के रूप में लिखने पर प्राप्त होता है:",
    options: [
      { option_id: 50071, option_text: "1/3" },
      { option_id: 50072, option_text: "3/10" },
      { option_id: 50073, option_text: "33/100" },
      { option_id: 50074, option_text: "1/9" }
    ],
    correct_option_id: 50071,
    class_level: 10,
    difficulty: "easy",
    explanation: "0.3333... = 0.3̄ = 3/9 = 1/3"
  },
  {
    question_id: 5008,
    text: "96 और 404 का HCF ज्ञात कीजिए।",
    options: [
      { option_id: 50081, option_text: "2" },
      { option_id: 50082, option_text: "4" },
      { option_id: 50083, option_text: "8" },
      { option_id: 50084, option_text: "12" }
    ],
    correct_option_id: 50082,
    class_level: 10,
    difficulty: "medium",
    explanation: "यूक्लिड विभाजन एल्गोरिथ्म से: 404 = 96 × 4 + 20, 96 = 20 × 4 + 16, 20 = 16 × 1 + 4, 16 = 4 × 4 + 0, अतः HCF = 4"
  },
  // Chapter 2: बहुपद (Polynomials)
  {
    question_id: 5009,
    text: "बहुपद x² - 5x + 6 के शून्यक हैं:",
    options: [
      { option_id: 50091, option_text: "2, 3" },
      { option_id: 50092, option_text: "-2, -3" },
      { option_id: 50093, option_text: "2, -3" },
      { option_id: 50094, option_text: "-2, 3" }
    ],
    correct_option_id: 50091,
    class_level: 10,
    difficulty: "easy",
    explanation: "x² - 5x + 6 = (x-2)(x-3), अतः शून्यक x = 2 और x = 3 हैं।"
  },
  {
    question_id: 5010,
    text: "यदि बहुपद के शून्यकों का योग 5 और गुणनफल 6 हो, तो बहुपद है:",
    options: [
      { option_id: 50101, option_text: "x² - 5x + 6" },
      { option_id: 50102, option_text: "x² + 5x + 6" },
      { option_id: 50103, option_text: "x² - 5x - 6" },
      { option_id: 50104, option_text: "x² + 5x - 6" }
    ],
    correct_option_id: 50101,
    class_level: 10,
    difficulty: "medium",
    explanation: "बहुपद = x² - (शून्यकों का योग)x + (शून्यकों का गुणनफल) = x² - 5x + 6"
  },
  {
    question_id: 5011,
    text: "द्विघात बहुपद के अधिकतम कितने शून्यक हो सकते हैं?",
    options: [
      { option_id: 50111, option_text: "1" },
      { option_id: 50112, option_text: "2" },
      { option_id: 50113, option_text: "3" },
      { option_id: 50114, option_text: "0" }
    ],
    correct_option_id: 50112,
    class_level: 10,
    difficulty: "easy",
    explanation: "n घात के बहुपद के अधिकतम n शून्यक होते हैं। द्विघात बहुपद की घात 2 है, अतः अधिकतम 2 शून्यक।"
  },
  {
    question_id: 5012,
    text: "बहुपद 2x³ + 3x² - 11x + 6 का एक शून्यक 1 है। अन्य शून्यक ज्ञात कीजिए।",
    options: [
      { option_id: 50121, option_text: "2 और -3" },
      { option_id: 50122, option_text: "-2 और 3" },
      { option_id: 50123, option_text: "1/2 और -3" },
      { option_id: 50124, option_text: "-1/2 और 3" }
    ],
    correct_option_id: 50123,
    class_level: 10,
    difficulty: "hard",
    explanation: "x = 1 से भाग देने पर 2x² + 5x - 6 = 0, जिसके मूल 1/2 और -3 हैं।"
  },
  // Chapter 3: दो चर वाले रैखिक समीकरण
  {
    question_id: 5013,
    text: "समीकरण युग्म x + y = 5 और 2x + 2y = 10 का क्या हल है?",
    options: [
      { option_id: 50131, option_text: "अद्वितीय हल" },
      { option_id: 50132, option_text: "कोई हल नहीं" },
      { option_id: 50133, option_text: "अनंत हल" },
      { option_id: 50134, option_text: "दो हल" }
    ],
    correct_option_id: 50133,
    class_level: 10,
    difficulty: "medium",
    explanation: "दोनों समीकरण समतुल्य हैं (दूसरा पहले का 2 गुना है), अतः अनंत हल हैं।"
  },
  {
    question_id: 5014,
    text: "यदि a₁/a₂ = b₁/b₂ ≠ c₁/c₂ हो, तो समीकरण युग्म है:",
    options: [
      { option_id: 50141, option_text: "संगत" },
      { option_id: 50142, option_text: "असंगत" },
      { option_id: 50143, option_text: "आश्रित" },
      { option_id: 50144, option_text: "अद्वितीय" }
    ],
    correct_option_id: 50142,
    class_level: 10,
    difficulty: "medium",
    explanation: "जब a₁/a₂ = b₁/b₂ ≠ c₁/c₂ हो, तो रेखाएं समांतर होती हैं और समीकरण युग्म असंगत होता है।"
  },
  {
    question_id: 5015,
    text: "x + 2y = 8 और 2x + 4y = 10 का हल है:",
    options: [
      { option_id: 50151, option_text: "x = 2, y = 3" },
      { option_id: 50152, option_text: "x = 4, y = 2" },
      { option_id: 50153, option_text: "कोई हल नहीं" },
      { option_id: 50154, option_text: "अनंत हल" }
    ],
    correct_option_id: 50153,
    class_level: 10,
    difficulty: "medium",
    explanation: "1/2 = 2/4 ≠ 8/10, अर्थात् a₁/a₂ = b₁/b₂ ≠ c₁/c₂, अतः कोई हल नहीं।"
  },
  // Chapter 4: द्विघात समीकरण
  {
    question_id: 5016,
    text: "द्विघात समीकरण ax² + bx + c = 0 के मूलों का योग है:",
    options: [
      { option_id: 50161, option_text: "b/a" },
      { option_id: 50162, option_text: "-b/a" },
      { option_id: 50163, option_text: "c/a" },
      { option_id: 50164, option_text: "-c/a" }
    ],
    correct_option_id: 50162,
    class_level: 10,
    difficulty: "easy",
    explanation: "यदि α और β मूल हैं, तो α + β = -b/a"
  },
  {
    question_id: 5017,
    text: "द्विघात समीकरण ax² + bx + c = 0 के मूलों का गुणनफल है:",
    options: [
      { option_id: 50171, option_text: "b/a" },
      { option_id: 50172, option_text: "-b/a" },
      { option_id: 50173, option_text: "c/a" },
      { option_id: 50174, option_text: "-c/a" }
    ],
    correct_option_id: 50173,
    class_level: 10,
    difficulty: "easy",
    explanation: "यदि α और β मूल हैं, तो α × β = c/a"
  },
  {
    question_id: 5018,
    text: "समीकरण x² - 7x + 12 = 0 के मूल हैं:",
    options: [
      { option_id: 50181, option_text: "3 और 4" },
      { option_id: 50182, option_text: "-3 और -4" },
      { option_id: 50183, option_text: "2 और 6" },
      { option_id: 50184, option_text: "-2 और -6" }
    ],
    correct_option_id: 50181,
    class_level: 10,
    difficulty: "easy",
    explanation: "x² - 7x + 12 = (x-3)(x-4) = 0, अतः x = 3, 4"
  },
  {
    question_id: 5019,
    text: "विविक्तकर D = b² - 4ac का मान 0 हो, तो मूल होंगे:",
    options: [
      { option_id: 50191, option_text: "वास्तविक और भिन्न" },
      { option_id: 50192, option_text: "वास्तविक और समान" },
      { option_id: 50193, option_text: "काल्पनिक" },
      { option_id: 50194, option_text: "कोई मूल नहीं" }
    ],
    correct_option_id: 50192,
    class_level: 10,
    difficulty: "medium",
    explanation: "जब D = 0 हो, तो दोनों मूल वास्तविक और समान होते हैं।"
  },
  {
    question_id: 5020,
    text: "2x² + kx + 3 = 0 के मूल समान हों तो k का मान है:",
    options: [
      { option_id: 50201, option_text: "±√24" },
      { option_id: 50202, option_text: "±√12" },
      { option_id: 50203, option_text: "±6" },
      { option_id: 50204, option_text: "±3" }
    ],
    correct_option_id: 50201,
    class_level: 10,
    difficulty: "medium",
    explanation: "समान मूलों के लिए D = 0, k² - 4(2)(3) = 0, k² = 24, k = ±√24"
  },
  // Chapter 5: समांतर श्रेढ़ी (AP)
  {
    question_id: 5021,
    text: "समांतर श्रेढ़ी 2, 5, 8, 11, ... का सार्व अंतर है:",
    options: [
      { option_id: 50211, option_text: "2" },
      { option_id: 50212, option_text: "3" },
      { option_id: 50213, option_text: "5" },
      { option_id: 50214, option_text: "8" }
    ],
    correct_option_id: 50212,
    class_level: 10,
    difficulty: "easy",
    explanation: "d = a₂ - a₁ = 5 - 2 = 3"
  },
  {
    question_id: 5022,
    text: "A.P. का nवाँ पद का सूत्र है:",
    options: [
      { option_id: 50221, option_text: "a + nd" },
      { option_id: 50222, option_text: "a + (n-1)d" },
      { option_id: 50223, option_text: "a - (n-1)d" },
      { option_id: 50224, option_text: "a × n × d" }
    ],
    correct_option_id: 50222,
    class_level: 10,
    difficulty: "easy",
    explanation: "समांतर श्रेढ़ी का nवाँ पद aₙ = a + (n-1)d"
  },
  {
    question_id: 5023,
    text: "A.P. 7, 13, 19, ... का 10वाँ पद है:",
    options: [
      { option_id: 50231, option_text: "55" },
      { option_id: 50232, option_text: "61" },
      { option_id: 50233, option_text: "67" },
      { option_id: 50234, option_text: "73" }
    ],
    correct_option_id: 50232,
    class_level: 10,
    difficulty: "medium",
    explanation: "a = 7, d = 6, a₁₀ = 7 + 9 × 6 = 7 + 54 = 61"
  },
  {
    question_id: 5024,
    text: "प्रथम n प्राकृत संख्याओं का योग है:",
    options: [
      { option_id: 50241, option_text: "n(n-1)/2" },
      { option_id: 50242, option_text: "n(n+1)/2" },
      { option_id: 50243, option_text: "n²" },
      { option_id: 50244, option_text: "n(n+1)" }
    ],
    correct_option_id: 50242,
    class_level: 10,
    difficulty: "easy",
    explanation: "प्रथम n प्राकृत संख्याओं का योग = n(n+1)/2"
  },
  // Chapter 6: त्रिकोणमिति
  {
    question_id: 5025,
    text: "sin 30° का मान है:",
    options: [
      { option_id: 50251, option_text: "0" },
      { option_id: 50252, option_text: "1/2" },
      { option_id: 50253, option_text: "1" },
      { option_id: 50254, option_text: "√3/2" }
    ],
    correct_option_id: 50252,
    class_level: 10,
    difficulty: "easy",
    explanation: "sin 30° = 1/2"
  },
  {
    question_id: 5026,
    text: "cos 60° का मान है:",
    options: [
      { option_id: 50261, option_text: "0" },
      { option_id: 50262, option_text: "1/2" },
      { option_id: 50263, option_text: "1" },
      { option_id: 50264, option_text: "√3/2" }
    ],
    correct_option_id: 50262,
    class_level: 10,
    difficulty: "easy",
    explanation: "cos 60° = 1/2"
  },
  {
    question_id: 5027,
    text: "tan 45° का मान है:",
    options: [
      { option_id: 50271, option_text: "0" },
      { option_id: 50272, option_text: "1/√2" },
      { option_id: 50273, option_text: "1" },
      { option_id: 50274, option_text: "√3" }
    ],
    correct_option_id: 50273,
    class_level: 10,
    difficulty: "easy",
    explanation: "tan 45° = 1"
  },
  {
    question_id: 5028,
    text: "sec²θ - tan²θ = ?",
    options: [
      { option_id: 50281, option_text: "0" },
      { option_id: 50282, option_text: "1" },
      { option_id: 50283, option_text: "2" },
      { option_id: 50284, option_text: "-1" }
    ],
    correct_option_id: 50282,
    class_level: 10,
    difficulty: "easy",
    explanation: "त्रिकोणमितीय सर्वसमिका: sec²θ - tan²θ = 1"
  },
  {
    question_id: 5029,
    text: "cosec²θ - cot²θ = ?",
    options: [
      { option_id: 50291, option_text: "0" },
      { option_id: 50292, option_text: "1" },
      { option_id: 50293, option_text: "2" },
      { option_id: 50294, option_text: "-1" }
    ],
    correct_option_id: 50292,
    class_level: 10,
    difficulty: "easy",
    explanation: "त्रिकोणमितीय सर्वसमिका: cosec²θ - cot²θ = 1"
  },
  {
    question_id: 5030,
    text: "sin(90° - θ) = ?",
    options: [
      { option_id: 50301, option_text: "sin θ" },
      { option_id: 50302, option_text: "cos θ" },
      { option_id: 50303, option_text: "tan θ" },
      { option_id: 50304, option_text: "cot θ" }
    ],
    correct_option_id: 50302,
    class_level: 10,
    difficulty: "medium",
    explanation: "पूरक कोणों का संबंध: sin(90° - θ) = cos θ"
  },
  // Chapter 7: वृत्त
  {
    question_id: 5031,
    text: "वृत्त की स्पर्श रेखा त्रिज्या के साथ कितने अंश का कोण बनाती है?",
    options: [
      { option_id: 50311, option_text: "0°" },
      { option_id: 50312, option_text: "45°" },
      { option_id: 50313, option_text: "90°" },
      { option_id: 50314, option_text: "180°" }
    ],
    correct_option_id: 50313,
    class_level: 10,
    difficulty: "easy",
    explanation: "स्पर्श रेखा स्पर्श बिंदु पर त्रिज्या के लंबवत होती है, अतः कोण 90° होता है।"
  },
  {
    question_id: 5032,
    text: "बाह्य बिंदु से वृत्त पर खींची गई दोनों स्पर्श रेखाओं की लंबाई:",
    options: [
      { option_id: 50321, option_text: "असमान होती है" },
      { option_id: 50322, option_text: "समान होती है" },
      { option_id: 50323, option_text: "शून्य होती है" },
      { option_id: 50324, option_text: "अनंत होती है" }
    ],
    correct_option_id: 50322,
    class_level: 10,
    difficulty: "easy",
    explanation: "बाह्य बिंदु से वृत्त पर खींची गई दोनों स्पर्श रेखाओं की लंबाई समान होती है।"
  },
  // Chapter 8: क्षेत्रफल
  {
    question_id: 5033,
    text: "त्रिज्या r वाले वृत्त का क्षेत्रफल है:",
    options: [
      { option_id: 50331, option_text: "2πr" },
      { option_id: 50332, option_text: "πr" },
      { option_id: 50333, option_text: "πr²" },
      { option_id: 50334, option_text: "2πr²" }
    ],
    correct_option_id: 50333,
    class_level: 10,
    difficulty: "easy",
    explanation: "वृत्त का क्षेत्रफल = πr²"
  },
  {
    question_id: 5034,
    text: "वृत्त की परिधि का सूत्र है:",
    options: [
      { option_id: 50341, option_text: "πr" },
      { option_id: 50342, option_text: "2πr" },
      { option_id: 50343, option_text: "πr²" },
      { option_id: 50344, option_text: "2πr²" }
    ],
    correct_option_id: 50342,
    class_level: 10,
    difficulty: "easy",
    explanation: "वृत्त की परिधि = 2πr"
  },
  {
    question_id: 5035,
    text: "त्रिज्यखंड के चाप की लंबाई का सूत्र है:",
    options: [
      { option_id: 50351, option_text: "θ/360° × 2πr" },
      { option_id: 50352, option_text: "θ/180° × πr" },
      { option_id: 50353, option_text: "θ × πr" },
      { option_id: 50354, option_text: "θ/360° × πr²" }
    ],
    correct_option_id: 50351,
    class_level: 10,
    difficulty: "medium",
    explanation: "त्रिज्यखंड के चाप की लंबाई = (θ/360°) × 2πr"
  },
  // Additional Math Questions
  {
    question_id: 5036,
    text: "sin²θ + cos²θ का मान है:",
    options: [
      { option_id: 50361, option_text: "0" },
      { option_id: 50362, option_text: "1" },
      { option_id: 50363, option_text: "2" },
      { option_id: 50364, option_text: "-1" }
    ],
    correct_option_id: 50362,
    class_level: 10,
    difficulty: "easy",
    explanation: "मूल त्रिकोणमितीय सर्वसमिका: sin²θ + cos²θ = 1"
  },
  {
    question_id: 5037,
    text: "tan θ = sin θ / cos θ है, तो cot θ = ?",
    options: [
      { option_id: 50371, option_text: "sin θ / cos θ" },
      { option_id: 50372, option_text: "cos θ / sin θ" },
      { option_id: 50373, option_text: "1 / sin θ" },
      { option_id: 50374, option_text: "1 / cos θ" }
    ],
    correct_option_id: 50372,
    class_level: 10,
    difficulty: "easy",
    explanation: "cot θ = 1/tan θ = cos θ / sin θ"
  },
  {
    question_id: 5038,
    text: "यदि 3x + 2y = 13 और 2x + 3y = 12 हो, तो x का मान है:",
    options: [
      { option_id: 50381, option_text: "2" },
      { option_id: 50382, option_text: "3" },
      { option_id: 50383, option_text: "4" },
      { option_id: 50384, option_text: "5" }
    ],
    correct_option_id: 50382,
    class_level: 10,
    difficulty: "medium",
    explanation: "दोनों समीकरणों को हल करने पर x = 3, y = 2"
  },
  {
    question_id: 5039,
    text: "द्विघात सूत्र x = (-b ± √(b²-4ac))/2a किस समीकरण के लिए है?",
    options: [
      { option_id: 50391, option_text: "ax + b = 0" },
      { option_id: 50392, option_text: "ax² + bx + c = 0" },
      { option_id: 50393, option_text: "ax³ + bx² + cx = 0" },
      { option_id: 50394, option_text: "a + bx + cx² = 0" }
    ],
    correct_option_id: 50392,
    class_level: 10,
    difficulty: "easy",
    explanation: "द्विघात सूत्र ax² + bx + c = 0 के मूल ज्ञात करने के लिए प्रयोग होता है।"
  },
  {
    question_id: 5040,
    text: "A.P. में प्रथम n पदों का योग Sₙ = n/2[2a + (n-1)d] है। यदि a = 5, d = 3, n = 10 हो, तो S₁₀ = ?",
    options: [
      { option_id: 50401, option_text: "175" },
      { option_id: 50402, option_text: "185" },
      { option_id: 50403, option_text: "195" },
      { option_id: 50404, option_text: "165" }
    ],
    correct_option_id: 50402,
    class_level: 10,
    difficulty: "medium",
    explanation: "S₁₀ = 10/2[2×5 + 9×3] = 5[10 + 27] = 5 × 37 = 185"
  },
  // More questions...
  {
    question_id: 5041,
    text: "7 सेमी त्रिज्या वाले वृत्त का क्षेत्रफल है (π = 22/7):",
    options: [
      { option_id: 50411, option_text: "154 वर्ग सेमी" },
      { option_id: 50412, option_text: "144 वर्ग सेमी" },
      { option_id: 50413, option_text: "164 वर्ग सेमी" },
      { option_id: 50414, option_text: "176 वर्ग सेमी" }
    ],
    correct_option_id: 50411,
    class_level: 10,
    difficulty: "easy",
    explanation: "क्षेत्रफल = πr² = 22/7 × 7 × 7 = 154 वर्ग सेमी"
  },
  {
    question_id: 5042,
    text: "दो समरूप त्रिभुजों के क्षेत्रफलों का अनुपात उनकी संगत भुजाओं के अनुपात के वर्ग के बराबर होता है। यदि भुजाओं का अनुपात 3:4 हो तो क्षेत्रफलों का अनुपात है:",
    options: [
      { option_id: 50421, option_text: "3:4" },
      { option_id: 50422, option_text: "9:16" },
      { option_id: 50423, option_text: "4:3" },
      { option_id: 50424, option_text: "16:9" }
    ],
    correct_option_id: 50422,
    class_level: 10,
    difficulty: "medium",
    explanation: "क्षेत्रफलों का अनुपात = (3)²:(4)² = 9:16"
  },
  {
    question_id: 5043,
    text: "sin 0° का मान है:",
    options: [
      { option_id: 50431, option_text: "0" },
      { option_id: 50432, option_text: "1" },
      { option_id: 50433, option_text: "1/2" },
      { option_id: 50434, option_text: "अपरिभाषित" }
    ],
    correct_option_id: 50431,
    class_level: 10,
    difficulty: "easy",
    explanation: "sin 0° = 0"
  },
  {
    question_id: 5044,
    text: "cos 0° का मान है:",
    options: [
      { option_id: 50441, option_text: "0" },
      { option_id: 50442, option_text: "1" },
      { option_id: 50443, option_text: "1/2" },
      { option_id: 50444, option_text: "अपरिभाषित" }
    ],
    correct_option_id: 50442,
    class_level: 10,
    difficulty: "easy",
    explanation: "cos 0° = 1"
  },
  {
    question_id: 5045,
    text: "tan 90° का मान है:",
    options: [
      { option_id: 50451, option_text: "0" },
      { option_id: 50452, option_text: "1" },
      { option_id: 50453, option_text: "∞" },
      { option_id: 50454, option_text: "अपरिभाषित" }
    ],
    correct_option_id: 50454,
    class_level: 10,
    difficulty: "medium",
    explanation: "tan 90° = sin 90°/cos 90° = 1/0, जो अपरिभाषित है।"
  }
];

export default mathQuestionsGHS;

import { QuizQuestion } from "../quizData";

export const olympiadMathQuestions: QuizQuestion[] = [
  {
    question_id: 50001,
    text: "यदि एक घड़ी में 3:15 बजे हैं, तो घंटे और मिनट की सुई के बीच का कोण क्या होगा?",
    options: [
      { option_id: 500011, option_text: "0°" },
      { option_id: 500012, option_text: "7.5°" },
      { option_id: 500013, option_text: "15°" },
      { option_id: 500014, option_text: "22.5°" }
    ],
    correct_option_id: 500012,
    subject: "olympiad_math",
    class_level: 10,
    difficulty: "hard",
    explanation: "3:15 पर: मिनट की सुई 90° पर होती है। घंटे की सुई 3 से थोड़ा आगे (15 मिनट का 1/2 डिग्री प्रति मिनट = 7.5°) बढ़ चुकी होती है। कोण = 97.5° - 90° = 7.5°."
  },
  {
    question_id: 50002,
    text: "दी गई श्रृंखला में लुप्त संख्या ज्ञात कीजिए: 6, 13, 25, 51, 101, ?",
    options: [
      { option_id: 500021, option_text: "201" },
      { option_id: 500022, option_text: "202" },
      { option_id: 500023, option_text: "203" },
      { option_id: 500024, option_text: "205" }
    ],
    correct_option_id: 500023,
    subject: "olympiad_math",
    class_level: 10,
    difficulty: "medium",
    explanation: "पैटर्न है: (x * 2) + 1, (x * 2) - 1, (x * 2) + 1...। 6*2+1=13, 13*2-1=25, 25*2+1=51, 51*2-1=101. अगला होगा 101*2+1 = 203."
  },
  {
    question_id: 50003,
    text: "यदि 1 जनवरी 2006 को रविवार था, तो 1 जनवरी 2010 को सप्ताह का कौन सा दिन था?",
    options: [
      { option_id: 500031, option_text: "रविवार" },
      { option_id: 500032, option_text: "सोमवार" },
      { option_id: 500033, option_text: "शुक्रवार" },
      { option_id: 500034, option_text: "मंगलवार" }
    ],
    correct_option_id: 500033,
    subject: "olympiad_math",
    class_level: 10,
    difficulty: "medium",
    explanation: "2006, 2007, 2009 साधारण वर्ष हैं (1 विषम दिन)। 2008 लीप वर्ष है (2 विषम दिन)। कुल विषम दिन = 1+1+2+1 = 5 दिन। रविवार + 5 = शुक्रवार।"
  },
  {
    question_id: 50004,
    text: "एक व्यक्ति दक्षिण की ओर 5 किमी चलता है और फिर दाईं ओर मुड़ता है। 3 किमी चलने के बाद, वह बाईं ओर मुड़ता है और 5 किमी चलता है। अब वह अपने प्रारंभिक स्थान से किस दिशा में है?",
    options: [
      { option_id: 500041, option_text: "दक्षिण" },
      { option_id: 500042, option_text: "दक्षिण-पश्चिम" },
      { option_id: 500043, option_text: "उत्तर-पूर्व" },
      { option_id: 500044, option_text: "पश्चिम" }
    ],
    correct_option_id: 500042,
    subject: "olympiad_math",
    class_level: 10,
    difficulty: "medium",
    explanation: "व्यक्ति दक्षिण गया, फिर दाएँ (पश्चिम) गया, फिर बाएँ (दक्षिण) गया। अंततः वह दक्षिण और पश्चिम दोनों दिशाओं में चला गया है, इसलिए दिशा दक्षिण-पश्चिम है।"
  },
  {
    question_id: 50005,
    text: "यदि DRIVER = 12, PEDESTRIAN = 20, ACCIDENT = 16 है, तो CAR = ?",
    options: [
      { option_id: 500051, option_text: "3" },
      { option_id: 500052, option_text: "6" },
      { option_id: 500053, option_text: "8" },
      { option_id: 500054, option_text: "10" }
    ],
    correct_option_id: 500052,
    subject: "olympiad_math",
    class_level: 10,
    difficulty: "easy",
    explanation: "तर्क: शब्दों में अक्षरों की संख्या × 2। DRIVER (6) × 2 = 12। CAR (3) × 2 = 6।"
  },
  {
    question_id: 50006,
    text: "एक पिता की आयु उसके पुत्र की आयु की तीन गुनी है। 5 वर्ष पहले, पिता की आयु पुत्र की आयु की चार गुनी थी। पुत्र की वर्तमान आयु क्या है?",
    options: [
      { option_id: 500061, option_text: "12 वर्ष" },
      { option_id: 500062, option_text: "15 वर्ष" },
      { option_id: 500063, option_text: "18 वर्ष" },
      { option_id: 500064, option_text: "20 वर्ष" }
    ],
    correct_option_id: 500062,
    subject: "olympiad_math",
    class_level: 10,
    difficulty: "medium",
    explanation: "माना पुत्र = x, पिता = 3x। 5 साल पहले: (3x - 5) = 4(x - 5) => 3x - 5 = 4x - 20 => x = 15।"
  },
  {
    question_id: 50007,
    text: "यदि x + 1/x = 5 है, तो x³ + 1/x³ का मान क्या है?",
    options: [
      { option_id: 500071, option_text: "110" },
      { option_id: 500072, option_text: "125" },
      { option_id: 500073, option_text: "140" },
      { option_id: 500074, option_text: "115" }
    ],
    correct_option_id: 500071,
    subject: "olympiad_math",
    class_level: 10,
    difficulty: "hard",
    explanation: "सूत्र: a³ + b³ = (a+b)³ - 3ab(a+b)। यहाँ, 5³ - 3(1)(5) = 125 - 15 = 110।"
  },
  {
    question_id: 50008,
    text: "एक तस्वीर की ओर इशारा करते हुए, अंजलि ने कहा, 'वह मेरे दादाजी के इकलौते बेटे का बेटा है।' तस्वीर में व्यक्ति अंजलि से कैसे संबंधित है?",
    options: [
      { option_id: 500081, option_text: "चाचा" },
      { option_id: 500082, option_text: "भाई" },
      { option_id: 500083, option_text: "कज़िन" },
      { option_id: 500084, option_text: "पिता" }
    ],
    correct_option_id: 500082,
    subject: "olympiad_math",
    class_level: 10,
    difficulty: "medium",
    explanation: "दादाजी का इकलौता बेटा = पिता। पिता का बेटा = भाई।"
  },
  {
    question_id: 50009,
    text: "7¹⁰⁵ का इकाई अंक (Unit digit) क्या है?",
    options: [
      { option_id: 500091, option_text: "1" },
      { option_id: 500092, option_text: "3" },
      { option_id: 500093, option_text: "7" },
      { option_id: 500094, option_text: "9" }
    ],
    correct_option_id: 500093,
    subject: "olympiad_math",
    class_level: 10,
    difficulty: "hard",
    explanation: "7 की घात का चक्र 4 होता है (7, 9, 3, 1)। 105 ÷ 4 करने पर शेषफल 1 आता है। अतः 7¹ = 7।"
  },
  {
    question_id: 50010,
    text: "एक घन (Cube) के सभी फलकों को नीले रंग से रंगा गया है और फिर इसे 64 छोटे समान घनों में काटा गया है। ऐसे कितने छोटे घन होंगे जिनका कोई भी फलक रंगा हुआ नहीं है?",
    options: [
      { option_id: 500101, option_text: "4" },
      { option_id: 500102, option_text: "8" },
      { option_id: 500103, option_text: "16" },
      { option_id: 500104, option_text: "24" }
    ],
    correct_option_id: 500102,
    subject: "olympiad_math",
    class_level: 10,
    difficulty: "hard",
    explanation: "सूत्र: (n-2)³ जहाँ n = ³√64 = 4। तो, (4-2)³ = 2³ = 8।"
  },
  {
    question_id: 50011,
    text: "यदि A और B किसी काम को 15 दिनों में कर सकते हैं और B अकेले उसे 20 दिनों में कर सकता है, तो A अकेले उस काम को कितने दिनों में करेगा?",
    options: [
      { option_id: 500111, option_text: "30 दिन" },
      { option_id: 500112, option_text: "45 दिन" },
      { option_id: 500113, option_text: "60 दिन" },
      { option_id: 500114, option_text: "40 दिन" }
    ],
    correct_option_id: 500113,
    subject: "olympiad_math",
    class_level: 10,
    difficulty: "medium",
    explanation: "1/A = 1/15 - 1/20 = (4-3)/60 = 1/60। अतः A को 60 दिन लगेंगे।"
  },
  {
    question_id: 50012,
    text: "दो संख्याओं का अनुपात 3:4 है और उनका म.स. (HCF) 4 है। उनका ल.स. (LCM) क्या होगा?",
    options: [
      { option_id: 500121, option_text: "12" },
      { option_id: 500122, option_text: "16" },
      { option_id: 500123, option_text: "24" },
      { option_id: 500124, option_text: "48" }
    ],
    correct_option_id: 500124,
    subject: "olympiad_math",
    class_level: 10,
    difficulty: "easy",
    explanation: "संख्याएँ 3x और 4x हैं। HCF x=4 है, तो संख्याएँ 12 और 16 हैं। LCM(12, 16) = 48।"
  },
  {
    question_id: 50013,
    text: "एक थैले में 2 लाल, 3 हरी और 2 नीली गेंदें हैं। यादृच्छिक रूप से 2 गेंदें निकाली जाती हैं। इस बात की क्या प्रायिकता है कि कोई भी गेंद नीली नहीं है?",
    options: [
      { option_id: 500131, option_text: "10/21" },
      { option_id: 500132, option_text: "11/21" },
      { option_id: 500133, option_text: "2/7" },
      { option_id: 500134, option_text: "5/7" }
    ],
    correct_option_id: 500131,
    subject: "olympiad_math",
    class_level: 10,
    difficulty: "hard",
    explanation: "कुल गेंदें = 7। बिना नीली गेंदें (लाल+हरी) = 5। प्रायिकता = 5C2 / 7C2 = 10 / 21।"
  },
  {
    question_id: 50014,
    text: "कौन सा आरेख 'डॉक्टर', 'आदमी' और 'अभिनेता' के बीच संबंध को सबसे अच्छा दर्शाता है?",
    options: [
      { option_id: 500141, option_text: "तीनों अलग-अलग वृत्त" },
      { option_id: 500142, option_text: "एक वृत्त के अंदर दो अलग वृत्त" },
      { option_id: 500143, option_text: "तीनों एक-दूसरे को काटते हुए (Intersecting)" },
      { option_id: 500144, option_text: "एक के अंदर एक वृत्त" }
    ],
    correct_option_id: 500143,
    subject: "olympiad_math",
    class_level: 10,
    difficulty: "medium",
    explanation: "कुछ डॉक्टर आदमी हो सकते हैं, कुछ आदमी अभिनेता हो सकते हैं, और कुछ डॉक्टर अभिनेता भी हो सकते हैं। तीनों एक-दूसरे को आंशिक रूप से काटेंगे।"
  },
  {
    question_id: 50015,
    text: "लुप्त वर्ण (Letter) ज्ञात करें: B, E, H, K, N, ?",
    options: [
      { option_id: 500151, option_text: "P" },
      { option_id: 500152, option_text: "Q" },
      { option_id: 500153, option_text: "R" },
      { option_id: 500154, option_text: "O" }
    ],
    correct_option_id: 500152,
    subject: "olympiad_math",
    class_level: 10,
    difficulty: "easy",
    explanation: "पैटर्न +3 का है। B(+3)E, E(+3)H... N(14) + 3 = 17 (Q)।"
  },
  {
    question_id: 50016,
    text: "यदि 'सफेद' को 'नीला', 'नीला' को 'लाल', 'लाल' को 'पीला' और 'पीला' को 'हरा' कहा जाता है, तो मानव रक्त का रंग क्या होगा?",
    options: [
      { option_id: 500161, option_text: "लाल" },
      { option_id: 500162, option_text: "नीला" },
      { option_id: 500163, option_text: "पीला" },
      { option_id: 500164, option_text: "हरा" }
    ],
    correct_option_id: 500163,
    subject: "olympiad_math",
    class_level: 10,
    difficulty: "easy",
    explanation: "मानव रक्त 'लाल' होता है, और यहाँ 'लाल' को 'पीला' कहा गया है। अतः उत्तर पीला होगा।"
  },
  {
    question_id: 50017,
    text: "एक आयत की लंबाई 20% बढ़ाई जाती है और चौड़ाई 10% घटाई जाती है। क्षेत्रफल में प्रतिशत परिवर्तन क्या होगा?",
    options: [
      { option_id: 500171, option_text: "10% वृद्धि" },
      { option_id: 500172, option_text: "8% वृद्धि" },
      { option_id: 500173, option_text: "8% कमी" },
      { option_id: 500174, option_text: "10% कमी" }
    ],
    correct_option_id: 500172,
    subject: "olympiad_math",
    class_level: 10,
    difficulty: "hard",
    explanation: "सूत्र: x + y + (xy/100)। यहाँ x=20, y=-10। 20 - 10 + (20*-10)/100 = 10 - 2 = 8% वृद्धि।"
  },
  {
    question_id: 50018,
    text: "अभाज्य संख्याओं (Prime numbers) के सेट में एकमात्र सम संख्या (Even number) कौन सी है?",
    options: [
      { option_id: 500181, option_text: "0" },
      { option_id: 500182, option_text: "2" },
      { option_id: 500183, option_text: "4" },
      { option_id: 500184, option_text: "कोई नहीं" }
    ],
    correct_option_id: 500182,
    subject: "olympiad_math",
    class_level: 10,
    difficulty: "easy",
    explanation: "2 एकमात्र सम अभाज्य संख्या है।"
  },
  {
    question_id: 50019,
    text: "एक अर्धवृत्त (semicircle) का परिमाप क्या होगा जिसकी त्रिज्या 7 सेमी है? (π = 22/7 लें)",
    options: [
      { option_id: 500191, option_text: "22 सेमी" },
      { option_id: 500192, option_text: "36 सेमी" },
      { option_id: 500193, option_text: "44 सेमी" },
      { option_id: 500194, option_text: "14 सेमी" }
    ],
    correct_option_id: 500192,
    subject: "olympiad_math",
    class_level: 10,
    difficulty: "medium",
    explanation: "अर्धवृत्त का परिमाप = πr + 2r। (22/7 * 7) + (2 * 7) = 22 + 14 = 36 सेमी।"
  },
  {
    question_id: 50020,
    text: "कथन: सभी पेन पेंसिल हैं। कुछ पेंसिल रबड़ हैं। निष्कर्ष: 1. कुछ पेन रबड़ हैं। 2. कुछ रबड़ पेंसिल हैं।",
    options: [
      { option_id: 500201, option_text: "केवल निष्कर्ष 1 अनुसरण करता है" },
      { option_id: 500202, option_text: "केवल निष्कर्ष 2 अनुसरण करता है" },
      { option_id: 500203, option_text: "दोनों 1 और 2 अनुसरण करते हैं" },
      { option_id: 500204, option_text: "कोई भी अनुसरण नहीं करता है" }
    ],
    correct_option_id: 500202,
    subject: "olympiad_math",
    class_level: 10,
    difficulty: "hard",
    explanation: "निष्कर्ष 1 निश्चित नहीं है क्योंकि पेन और रबड़ के बीच कोई सीधा संबंध नहीं दिया गया है। निष्कर्ष 2 सही है क्योंकि 'कुछ पेंसिल रबड़ हैं' का अर्थ है 'कुछ रबड़ पेंसिल हैं'।"
  }
];

      

import { QuizQuestion } from "../quizData";

export const scienceQuestions: QuizQuestion[] = [
  // ========== EASY LEVEL - Class 10 ==========
  {
    question_id: 1001,
    text: "विद्युत धारा का SI मात्रक क्या है?",
    options: [
      { option_id: 10011, option_text: "वोल्ट" },
      { option_id: 10012, option_text: "एम्पीयर" },
      { option_id: 10013, option_text: "ओम" },
      { option_id: 10014, option_text: "वॉट" }
    ],
    correct_option_id: 10012,
    class_level: 10,
    difficulty: "easy"
  },
  {
    question_id: 1002,
    text: "प्रकाश का वेग अधिकतम किस माध्यम में होता है?",
    options: [
      { option_id: 10021, option_text: "पानी" },
      { option_id: 10022, option_text: "काँच" },
      { option_id: 10023, option_text: "वायु" },
      { option_id: 10024, option_text: "निर्वात" }
    ],
    correct_option_id: 10024,
    class_level: 10,
    difficulty: "easy"
  },
  {
    question_id: 1003,
    text: "किस रंग के प्रकाश का विचलन (deviation) सबसे कम होता है?",
    options: [
      { option_id: 10031, option_text: "लाल" },
      { option_id: 10032, option_text: "नीला" },
      { option_id: 10033, option_text: "हरा" },
      { option_id: 10034, option_text: "पीला" }
    ],
    correct_option_id: 10031,
    class_level: 10,
    difficulty: "easy"
  },
  {
    question_id: 1004,
    text: "मानव नेत्र में प्रतिबिम्ब कहाँ बनता है?",
    options: [
      { option_id: 10041, option_text: "आईरिस" },
      { option_id: 10042, option_text: "कॉर्निया" },
      { option_id: 10043, option_text: "पुतली" },
      { option_id: 10044, option_text: "रेटिना" }
    ],
    correct_option_id: 10044,
    class_level: 10,
    difficulty: "easy"
  },
  {
    question_id: 1005,
    text: "प्रतिरोध (Resistance) का सूत्र क्या है?",
    options: [
      { option_id: 10051, option_text: "R = V × I" },
      { option_id: 10052, option_text: "R = V / I" },
      { option_id: 10053, option_text: "R = I / V" },
      { option_id: 10054, option_text: "R = V + I" }
    ],
    correct_option_id: 10052,
    class_level: 10,
    difficulty: "easy"
  },
  {
    question_id: 1006,
    text: "सामान्य नेत्र के लिए स्पष्ट दृष्टि की न्यूनतम दूरी कितनी होती है?",
    options: [
      { option_id: 10061, option_text: "25 मीटर" },
      { option_id: 10062, option_text: "2.5 cm" },
      { option_id: 10063, option_text: "25 cm" },
      { option_id: 10064, option_text: "अनन्त" }
    ],
    correct_option_id: 10063,
    class_level: 10,
    difficulty: "easy"
  },
  {
    question_id: 1007,
    text: "विद्युत ऊर्जा का व्यावसायिक (commercial) मात्रक क्या है?",
    options: [
      { option_id: 10071, option_text: "जूल" },
      { option_id: 10072, option_text: "किलोवॉट" },
      { option_id: 10073, option_text: "किलोवॉट-घंटा" },
      { option_id: 10074, option_text: "एम्पीयर" }
    ],
    correct_option_id: 10073,
    class_level: 10,
    difficulty: "easy"
  },
  {
    question_id: 1008,
    text: "उत्तल दर्पण द्वारा बना प्रतिबिम्ब हमेशा कैसा होता है?",
    options: [
      { option_id: 10081, option_text: "वास्तविक और उलटा" },
      { option_id: 10082, option_text: "वास्तविक और सीधा" },
      { option_id: 10083, option_text: "आभासी और उलटा" },
      { option_id: 10084, option_text: "आभासी और सीधा" }
    ],
    correct_option_id: 10084,
    class_level: 10,
    difficulty: "easy"
  },
  {
    question_id: 1009,
    text: "अम्ल (Acid) का pH मान कितना होता है?",
    options: [
      { option_id: 10091, option_text: "7 से अधिक" },
      { option_id: 10092, option_text: "7 के बराबर" },
      { option_id: 10093, option_text: "7 से कम" },
      { option_id: 10094, option_text: "14" }
    ],
    correct_option_id: 10093,
    class_level: 10,
    difficulty: "easy"
  },
  {
    question_id: 1010,
    text: "सोडा-वॉटर में कौन सा अम्ल मौजूद होता है?",
    options: [
      { option_id: 10101, option_text: "हाइड्रोक्लोरिक एसिड" },
      { option_id: 10102, option_text: "नाइट्रिक एसिड" },
      { option_id: 10103, option_text: "कार्बोनिक एसिड" },
      { option_id: 10104, option_text: "सल्फ्यूरिक एसिड" }
    ],
    correct_option_id: 10103,
    class_level: 10,
    difficulty: "easy"
  },
  {
    question_id: 1011,
    text: "सोने (Gold) का रासायनिक प्रतीक क्या है?",
    options: [
      { option_id: 10111, option_text: "Ag" },
      { option_id: 10112, option_text: "Au" },
      { option_id: 10113, option_text: "Fe" },
      { option_id: 10114, option_text: "Na" }
    ],
    correct_option_id: 10112,
    class_level: 10,
    difficulty: "easy"
  },
  {
    question_id: 1012,
    text: "बेकिंग सोडा का रासायनिक नाम क्या है?",
    options: [
      { option_id: 10121, option_text: "सोडियम कार्बोनेट" },
      { option_id: 10122, option_text: "कैल्शियम कार्बोनेट" },
      { option_id: 10123, option_text: "सोडियम बाईकार्बोनेट" },
      { option_id: 10124, option_text: "कैल्शियम हाइड्रॉक्साइड" }
    ],
    correct_option_id: 10123,
    class_level: 10,
    difficulty: "easy"
  },
  {
    question_id: 1013,
    text: "वह प्रक्रिया जिसमें ऑक्सीजन जुड़ती है, क्या कहलाती है?",
    options: [
      { option_id: 10131, option_text: "अपचयन" },
      { option_id: 10132, option_text: "उपचयन (ऑक्सीकरण)" },
      { option_id: 10133, option_text: "उदासीनीकरण" },
      { option_id: 10134, option_text: "विस्थापन" }
    ],
    correct_option_id: 10132,
    class_level: 10,
    difficulty: "easy"
  },
  {
    question_id: 1014,
    text: "सबसे अधिक अभिक्रियाशील धातु कौन सी है?",
    options: [
      { option_id: 10141, option_text: "सोना" },
      { option_id: 10142, option_text: "लोहा" },
      { option_id: 10143, option_text: "पोटेशियम" },
      { option_id: 10144, option_text: "तांबा" }
    ],
    correct_option_id: 10143,
    class_level: 10,
    difficulty: "easy"
  },
  {
    question_id: 1015,
    text: "हवा में किस गैस की मात्रा सबसे अधिक होती है?",
    options: [
      { option_id: 10151, option_text: "ऑक्सीजन" },
      { option_id: 10152, option_text: "कार्बन डाइऑक्साइड" },
      { option_id: 10153, option_text: "नाइट्रोजन" },
      { option_id: 10154, option_text: "आर्गन" }
    ],
    correct_option_id: 10153,
    class_level: 10,
    difficulty: "easy"
  },
  {
    question_id: 1016,
    text: "चूने के पानी को दूधिया करने वाली गैस कौन सी है?",
    options: [
      { option_id: 10161, option_text: "O₂" },
      { option_id: 10162, option_text: "H₂" },
      { option_id: 10163, option_text: "N₂" },
      { option_id: 10164, option_text: "CO₂" }
    ],
    correct_option_id: 10164,
    class_level: 10,
    difficulty: "easy"
  },
  {
    question_id: 1017,
    text: "कौन सी अधातु कमरे के तापमान पर तरल अवस्था में होती है?",
    options: [
      { option_id: 10171, option_text: "सल्फर" },
      { option_id: 10172, option_text: "क्लोरीन" },
      { option_id: 10173, option_text: "ब्रोमीन" },
      { option_id: 10174, option_text: "आयोडीन" }
    ],
    correct_option_id: 10173,
    class_level: 10,
    difficulty: "easy"
  },
  {
    question_id: 1018,
    text: "प्रकृति में ऑक्सीजन का संतुलन कौन बनाए रखता है?",
    options: [
      { option_id: 10181, option_text: "श्वसन" },
      { option_id: 10182, option_text: "प्रकाश-संश्लेषण" },
      { option_id: 10183, option_text: "वाष्पोत्सर्जन" },
      { option_id: 10184, option_text: "पाचन" }
    ],
    correct_option_id: 10182,
    class_level: 10,
    difficulty: "easy"
  },
  {
    question_id: 1019,
    text: "मानव शरीर में रक्त को पंप करने वाला अंग कौन सा है?",
    options: [
      { option_id: 10191, option_text: "गुर्दा" },
      { option_id: 10192, option_text: "यकृत" },
      { option_id: 10193, option_text: "हृदय" },
      { option_id: 10194, option_text: "फेफड़े" }
    ],
    correct_option_id: 10193,
    class_level: 10,
    difficulty: "easy"
  },
  {
    question_id: 1020,
    text: "पत्तियों में छोटे छिद्र को क्या कहते हैं?",
    options: [
      { option_id: 10201, option_text: "शिराएँ" },
      { option_id: 10202, option_text: "स्टोमेटा (रंध्र)" },
      { option_id: 10203, option_text: "पर्णवृंत" },
      { option_id: 10204, option_text: "मध्यशिरा" }
    ],
    correct_option_id: 10202,
    class_level: 10,
    difficulty: "easy"
  },
  {
    question_id: 1021,
    text: "मानव में मुख्य उत्सर्जन उत्पाद क्या है?",
    options: [
      { option_id: 10211, option_text: "कार्बन डाइऑक्साइड" },
      { option_id: 10212, option_text: "यूरिया" },
      { option_id: 10213, option_text: "अमोनिया" },
      { option_id: 10214, option_text: "ऑक्सीजन" }
    ],
    correct_option_id: 10212,
    class_level: 10,
    difficulty: "easy"
  },
  {
    question_id: 1022,
    text: "वृक्क (Kidney) का मुख्य कार्य क्या है?",
    options: [
      { option_id: 10221, option_text: "रक्त का शुद्धिकरण" },
      { option_id: 10222, option_text: "रक्त को पंप करना" },
      { option_id: 10223, option_text: "पाचन में मदद करना" },
      { option_id: 10224, option_text: "श्वसन में मदद करना" }
    ],
    correct_option_id: 10221,
    class_level: 10,
    difficulty: "easy"
  },
  {
    question_id: 1023,
    text: "वह प्रक्रिया जिसके द्वारा जीव अपनी संख्या बढ़ाते हैं, क्या कहलाती है?",
    options: [
      { option_id: 10231, option_text: "पाचन" },
      { option_id: 10232, option_text: "श्वसन" },
      { option_id: 10233, option_text: "प्रजनन" },
      { option_id: 10234, option_text: "परिवहन" }
    ],
    correct_option_id: 10233,
    class_level: 10,
    difficulty: "easy"
  },
  {
    question_id: 1024,
    text: "एकलिंगी पुष्प का उदाहरण कौन सा है?",
    options: [
      { option_id: 10241, option_text: "गुलाब" },
      { option_id: 10242, option_text: "सरसों" },
      { option_id: 10243, option_text: "पपीता" },
      { option_id: 10244, option_text: "गुड़हल" }
    ],
    correct_option_id: 10243,
    class_level: 10,
    difficulty: "easy"
  },
  {
    question_id: 1025,
    text: "मानव मस्तिष्क का कौन सा भाग संतुलन बनाए रखता है?",
    options: [
      { option_id: 10251, option_text: "प्रमस्तिष्क (Cerebrum)" },
      { option_id: 10252, option_text: "अनुमस्तिष्क (Cerebellum)" },
      { option_id: 10253, option_text: "मेडुला" },
      { option_id: 10254, option_text: "पोंस" }
    ],
    correct_option_id: 10252,
    class_level: 10,
    difficulty: "easy"
  },
  {
    question_id: 1026,
    text: "ओजोन परत किस चीज से सुरक्षा करती है?",
    options: [
      { option_id: 10261, option_text: "अवरक्त किरणें" },
      { option_id: 10262, option_text: "एक्स-रे" },
      { option_id: 10263, option_text: "पराबैंगनी किरणें" },
      { option_id: 10264, option_text: "माइक्रो-वेव" }
    ],
    correct_option_id: 10263,
    class_level: 10,
    difficulty: "easy"
  },
  {
    question_id: 1027,
    text: "एक पोषी स्तर से दूसरे पोषी स्तर तक ऊर्जा का कितना प्रतिशत स्थानान्तरित होता है?",
    options: [
      { option_id: 10271, option_text: "1%" },
      { option_id: 10272, option_text: "5%" },
      { option_id: 10273, option_text: "10%" },
      { option_id: 10274, option_text: "20%" }
    ],
    correct_option_id: 10273,
    class_level: 10,
    difficulty: "easy"
  },
  {
    question_id: 1028,
    text: "कौन सा प्राकृतिक संसाधन नहीं है?",
    options: [
      { option_id: 10281, option_text: "वायु" },
      { option_id: 10282, option_text: "जल" },
      { option_id: 10283, option_text: "मिट्टी" },
      { option_id: 10284, option_text: "प्लास्टिक" }
    ],
    correct_option_id: 10284,
    class_level: 10,
    difficulty: "easy"
  },
  {
    question_id: 1029,
    text: "जीवाणु (Bacteria) और कवक (Fungi) किस श्रेणी में आते हैं?",
    options: [
      { option_id: 10291, option_text: "उत्पादक" },
      { option_id: 10292, option_text: "उपभोक्ता" },
      { option_id: 10293, option_text: "अपघटक" },
      { option_id: 10294, option_text: "प्राथमिक उपभोक्ता" }
    ],
    correct_option_id: 10293,
    class_level: 10,
    difficulty: "easy"
  },
  {
    question_id: 1030,
    text: "'चिपको आन्दोलन' किससे संबंधित है?",
    options: [
      { option_id: 10301, option_text: "जल संरक्षण" },
      { option_id: 10302, option_text: "वृक्ष संरक्षण" },
      { option_id: 10303, option_text: "विद्युत संरक्षण" },
      { option_id: 10304, option_text: "वन्य जीव संरक्षण" }
    ],
    correct_option_id: 10302,
    class_level: 10,
    difficulty: "easy"
  },
  {
    question_id: 1031,
    text: "जैव-निम्नीकरणीय कचरे का एक उदाहरण है:",
    options: [
      { option_id: 10311, option_text: "प्लास्टिक की बोतलें" },
      { option_id: 10312, option_text: "सब्जी के छिलके" },
      { option_id: 10313, option_text: "पॉलीथीन बैग" },
      { option_id: 10314, option_text: "टूटे कांच" }
    ],
    correct_option_id: 10312,
    class_level: 10,
    difficulty: "easy"
  },
  {
    question_id: 1032,
    text: "विद्युत धारा मापने वाले यंत्र को क्या कहते हैं?",
    options: [
      { option_id: 10321, option_text: "वोल्टमीटर" },
      { option_id: 10322, option_text: "गैल्वेनोमीटर" },
      { option_id: 10323, option_text: "एमीटर" },
      { option_id: 10324, option_text: "वोल्टामीटर" }
    ],
    correct_option_id: 10323,
    class_level: 10,
    difficulty: "easy"
  },
  {
    question_id: 1033,
    text: "खाना पकाने के लिए किस गैस का उपयोग किया जाता है?",
    options: [
      { option_id: 10331, option_text: "CH₄ (मीथेन)" },
      { option_id: 10332, option_text: "O₂" },
      { option_id: 10333, option_text: "N₂" },
      { option_id: 10334, option_text: "LPG" }
    ],
    correct_option_id: 10334,
    class_level: 10,
    difficulty: "easy"
  },
  {
    question_id: 1034,
    text: "पौधे अपना भोजन किस रूप में जमा करते हैं?",
    options: [
      { option_id: 10341, option_text: "प्रोटीन" },
      { option_id: 10342, option_text: "वसा" },
      { option_id: 10343, option_text: "स्टार्च" },
      { option_id: 10344, option_text: "शर्करा (ग्लूकोज)" }
    ],
    correct_option_id: 10343,
    class_level: 10,
    difficulty: "easy"
  },
  {
    question_id: 1035,
    text: "परमाणु संख्या (Atomic number) किसके बराबर होती है?",
    options: [
      { option_id: 10351, option_text: "न्यूट्रॉन की संख्या" },
      { option_id: 10352, option_text: "प्रोटॉन और न्यूट्रॉन की संख्या" },
      { option_id: 10353, option_text: "प्रोटॉन की संख्या" },
      { option_id: 10354, option_text: "इलेक्ट्रॉन की संख्या" }
    ],
    correct_option_id: 10353,
    class_level: 10,
    difficulty: "easy"
  },

  // ========== MEDIUM LEVEL - Class 10 ==========
  {
    question_id: 2001,
    text: "विद्युत शक्ति (Power) का सूत्र कौन सा है जहाँ R = प्रतिरोध (Resistance) है?",
    options: [
      { option_id: 20011, option_text: "P = I R²" },
      { option_id: 20012, option_text: "P = I² R" },
      { option_id: 20013, option_text: "P = V / I" },
      { option_id: 20014, option_text: "P = V / R" }
    ],
    correct_option_id: 20012,
    class_level: 10,
    difficulty: "medium"
  },
  {
    question_id: 2002,
    text: "एक वास्तविक और उलटा प्रतिबिम्ब प्राप्त करने के लिए, वस्तु को अवतल दर्पण के सामने कहाँ रखा जाना चाहिए?",
    options: [
      { option_id: 20021, option_text: "फोकस (F) पर" },
      { option_id: 20022, option_text: "फोकस और ध्रुव के बीच" },
      { option_id: 20023, option_text: "वक्रता केंद्र (C) पर" },
      { option_id: 20024, option_text: "अनन्त पर" }
    ],
    correct_option_id: 20023,
    class_level: 10,
    difficulty: "medium"
  },
  {
    question_id: 2003,
    text: "जब प्रकाश की किरण घने (denser) माध्यम से हल्के (rarer) माध्यम में जाती है, तो वह क्या होती है?",
    options: [
      { option_id: 20031, option_text: "अभिलम्ब की ओर झुकती है" },
      { option_id: 20032, option_text: "अभिलम्ब से दूर हट जाती है" },
      { option_id: 20033, option_text: "बिना विचलित हुए सीधी चली जाती है" },
      { option_id: 20034, option_text: "वापस लौट जाती है" }
    ],
    correct_option_id: 20032,
    class_level: 10,
    difficulty: "medium"
  },
  {
    question_id: 2004,
    text: "प्रतिरोधकों के श्रेणी क्रम (series combination) में कौन सी राशि (quantity) समान रहती है?",
    options: [
      { option_id: 20041, option_text: "विभवान्तर" },
      { option_id: 20042, option_text: "विद्युत धारा" },
      { option_id: 20043, option_text: "शक्ति" },
      { option_id: 20044, option_text: "ऊर्जा" }
    ],
    correct_option_id: 20042,
    class_level: 10,
    difficulty: "medium"
  },
  {
    question_id: 2005,
    text: "विद्युत चुम्बकीय प्रेरण (Electromagnetic Induction) की घटना क्या है?",
    options: [
      { option_id: 20051, option_text: "किसी चुम्बक को मोटर में घुमाना।" },
      { option_id: 20052, option_text: "एक कॉइल और चुम्बक के बीच सापेक्ष गति के कारण कॉइल में प्रेरित धारा उत्पन्न होना।" },
      { option_id: 20053, option_text: "विद्युत धारा के कारण चुम्बकीय क्षेत्र उत्पन्न होना।" },
      { option_id: 20054, option_text: "ट्रांसफार्मर द्वारा AC वोल्टेज को बढ़ाना।" }
    ],
    correct_option_id: 20052,
    class_level: 10,
    difficulty: "medium"
  },
  {
    question_id: 2006,
    text: "इंद्रधनुष के निर्माण में प्रकाश की कौन-कौन सी घटनाएँ शामिल हैं?",
    options: [
      { option_id: 20061, option_text: "केवल अपवर्तन" },
      { option_id: 20062, option_text: "केवल पूर्ण आन्तरिक परावर्तन" },
      { option_id: 20063, option_text: "अपवर्तन, विक्षेपण और आन्तरिक परावर्तन" },
      { option_id: 20064, option_text: "विक्षेपण और परावर्तन" }
    ],
    correct_option_id: 20063,
    class_level: 10,
    difficulty: "medium"
  },
  {
    question_id: 2007,
    text: "एक अवतल लेंस की शक्ति (power) -2.5 D है। इसकी फोकस दूरी क्या होगी?",
    options: [
      { option_id: 20071, option_text: "+40 cm" },
      { option_id: 20072, option_text: "-40 cm" },
      { option_id: 20073, option_text: "+4 cm" },
      { option_id: 20074, option_text: "-4 cm" }
    ],
    correct_option_id: 20072,
    class_level: 10,
    difficulty: "medium"
  },
  {
    question_id: 2008,
    text: "डायोप्टर (Dioptre) किसका मात्रक है?",
    options: [
      { option_id: 20081, option_text: "फोकस दूरी" },
      { option_id: 20082, option_text: "लेंस की शक्ति" },
      { option_id: 20083, option_text: "प्रतिबिम्ब की ऊँचाई" },
      { option_id: 20084, option_text: "आवर्धन" }
    ],
    correct_option_id: 20082,
    class_level: 10,
    difficulty: "medium"
  },
  {
    question_id: 2009,
    text: "विद्युत धारा की दिशा क्या मानी जाती है?",
    options: [
      { option_id: 20091, option_text: "न्यूट्रॉन के प्रवाह की दिशा" },
      { option_id: 20092, option_text: "इलेक्ट्रॉन के प्रवाह की दिशा" },
      { option_id: 20093, option_text: "धनात्मक आवेश के प्रवाह की दिशा" },
      { option_id: 20094, option_text: "इनमें से कोई नहीं" }
    ],
    correct_option_id: 20093,
    class_level: 10,
    difficulty: "medium"
  },
  {
    question_id: 2010,
    text: "एक उत्तल लेंस के लिए, आवर्धन (magnification) का मान धनात्मक कब होता है?",
    options: [
      { option_id: 20101, option_text: "जब प्रतिबिम्ब वास्तविक हो" },
      { option_id: 20102, option_text: "जब प्रतिबिम्ब उलटा हो" },
      { option_id: 20103, option_text: "जब प्रतिबिम्ब आभासी हो" },
      { option_id: 20104, option_text: "जब वस्तु अनन्त पर हो" }
    ],
    correct_option_id: 20103,
    class_level: 10,
    difficulty: "medium"
  },
  {
    question_id: 2011,
    text: "जब Zn धातु CuSO₄ घोल में डाली जाती है, तो घोल का रंग गायब हो जाता है। यह कौन सी अभिक्रिया है?",
    options: [
      { option_id: 20111, option_text: "संयोजन" },
      { option_id: 20112, option_text: "वियोजन" },
      { option_id: 20113, option_text: "द्विविस्थापन" },
      { option_id: 20114, option_text: "विस्थापन" }
    ],
    correct_option_id: 20114,
    class_level: 10,
    difficulty: "medium"
  },
  {
    question_id: 2012,
    text: "ताज़ा दूध का pH 6 होता है। जब वह दही में बदल जाता है, तो उसका pH क्या होगा?",
    options: [
      { option_id: 20121, option_text: "6 से अधिक" },
      { option_id: 20122, option_text: "7" },
      { option_id: 20123, option_text: "6 से कम" },
      { option_id: 20124, option_text: "8 से अधिक" }
    ],
    correct_option_id: 20123,
    class_level: 10,
    difficulty: "medium"
  },
  {
    question_id: 2013,
    text: "एक अम्ल और क्षार के बीच की अभिक्रिया से क्या बनता है?",
    options: [
      { option_id: 20131, option_text: "केवल लवण" },
      { option_id: 20132, option_text: "केवल पानी" },
      { option_id: 20133, option_text: "लवण और हाइड्रोजन गैस" },
      { option_id: 20134, option_text: "लवण और पानी" }
    ],
    correct_option_id: 20134,
    class_level: 10,
    difficulty: "medium"
  },
  {
    question_id: 2014,
    text: "आधुनिक आवर्त सारणी किस पर आधारित है?",
    options: [
      { option_id: 20141, option_text: "परमाणु द्रव्यमान" },
      { option_id: 20142, option_text: "परमाणु संख्या" },
      { option_id: 20143, option_text: "घनत्व" },
      { option_id: 20144, option_text: "संयोजी इलेक्ट्रॉन" }
    ],
    correct_option_id: 20142,
    class_level: 10,
    difficulty: "medium"
  },
  {
    question_id: 2015,
    text: "कार्बन का कौन सा अपरूप (allotrope) सबसे कठोर प्राकृतिक पदार्थ है?",
    options: [
      { option_id: 20151, option_text: "ग्रेफाइट" },
      { option_id: 20152, option_text: "फुलेरीन" },
      { option_id: 20153, option_text: "हीरा" },
      { option_id: 20154, option_text: "कोक" }
    ],
    correct_option_id: 20153,
    class_level: 10,
    difficulty: "medium"
  },
  {
    question_id: 2016,
    text: "CH₃CH₂OH का नामकरण (nomenclature) क्या है?",
    options: [
      { option_id: 20161, option_text: "मेथेनॉल" },
      { option_id: 20162, option_text: "एथेनॉल" },
      { option_id: 20163, option_text: "प्रोपेनॉल" },
      { option_id: 20164, option_text: "एथेनोइक एसिड" }
    ],
    correct_option_id: 20162,
    class_level: 10,
    difficulty: "medium"
  },
  {
    question_id: 2017,
    text: "जब धातुएँ तनु अम्लों के साथ अभिक्रिया करती हैं, तो कौन सी गैस उत्पन्न होती है?",
    options: [
      { option_id: 20171, option_text: "O₂" },
      { option_id: 20172, option_text: "CO₂" },
      { option_id: 20173, option_text: "H₂" },
      { option_id: 20174, option_text: "Cl₂" }
    ],
    correct_option_id: 20173,
    class_level: 10,
    difficulty: "medium"
  },
  {
    question_id: 2018,
    text: "एल्कीन्स का सामान्य सूत्र क्या है?",
    options: [
      { option_id: 20181, option_text: "CₙH₂ₙ₊₂" },
      { option_id: 20182, option_text: "CₙH₂ₙ" },
      { option_id: 20183, option_text: "CₙH₂ₙ₋₂" },
      { option_id: 20184, option_text: "CₙHₙ" }
    ],
    correct_option_id: 20182,
    class_level: 10,
    difficulty: "medium"
  },
  {
    question_id: 2019,
    text: "तृतीया आवर्त में तत्वों की संख्या कितनी है?",
    options: [
      { option_id: 20191, option_text: "2" },
      { option_id: 20192, option_text: "8" },
      { option_id: 20193, option_text: "18" },
      { option_id: 20194, option_text: "32" }
    ],
    correct_option_id: 20192,
    class_level: 10,
    difficulty: "medium"
  },
  {
    question_id: 2020,
    text: "पानी को रोगाणु मुक्त करने के लिए किसका उपयोग किया जाता है?",
    options: [
      { option_id: 20201, option_text: "बेकिंग सोडा" },
      { option_id: 20202, option_text: "कास्टिक सोडा" },
      { option_id: 20203, option_text: "विरंजक चूर्ण (ब्लीचिंग पाउडर)" },
      { option_id: 20204, option_text: "जिप्सम" }
    ],
    correct_option_id: 20203,
    class_level: 10,
    difficulty: "medium"
  },
  {
    question_id: 2021,
    text: "किस अभिक्रिया में अवक्षेप (precipitate) बनता है?",
    options: [
      { option_id: 20211, option_text: "संयोजन" },
      { option_id: 20212, option_text: "वियोजन" },
      { option_id: 20213, option_text: "अपचयन" },
      { option_id: 20214, option_text: "अवक्षेपण" }
    ],
    correct_option_id: 20214,
    class_level: 10,
    difficulty: "medium"
  },
  {
    question_id: 2022,
    text: "समजातीय श्रेणी (Homologous series) का लक्षण क्या है?",
    options: [
      { option_id: 20221, option_text: "क्रियात्मक समूह अलग होना" },
      { option_id: 20222, option_text: "रासायनिक गुण अलग होना" },
      { option_id: 20223, option_text: "CH₂ इकाई का अंतर" },
      { option_id: 20224, option_text: "द्रव्यमान समान होना" }
    ],
    correct_option_id: 20223,
    class_level: 10,
    difficulty: "medium"
  },
  {
    question_id: 2023,
    text: "आधुनिक आवर्त सारणी में कितने समूह (groups) हैं?",
    options: [
      { option_id: 20231, option_text: "7" },
      { option_id: 20232, option_text: "9" },
      { option_id: 20233, option_text: "16" },
      { option_id: 20234, option_text: "18" }
    ],
    correct_option_id: 20234,
    class_level: 10,
    difficulty: "medium"
  },
  {
    question_id: 2024,
    text: "निम्नलिखित में से कौन सा उभयधर्मी ऑक्साइड (amphoteric oxide) है?",
    options: [
      { option_id: 20241, option_text: "Na₂O" },
      { option_id: 20242, option_text: "MgO" },
      { option_id: 20243, option_text: "CuO" },
      { option_id: 20244, option_text: "Al₂O₃" }
    ],
    correct_option_id: 20244,
    class_level: 10,
    difficulty: "medium"
  },
  {
    question_id: 2025,
    text: "शाकाहारी किस पोषी स्तर पर आते हैं?",
    options: [
      { option_id: 20251, option_text: "T₁ (उत्पादक)" },
      { option_id: 20252, option_text: "T₂ (प्राथमिक उपभोक्ता)" },
      { option_id: 20253, option_text: "T₃ (द्वितीय उपभोक्ता)" },
      { option_id: 20254, option_text: "T₄ (तृतीय उपभोक्ता)" }
    ],
    correct_option_id: 20252,
    class_level: 10,
    difficulty: "medium"
  },
  {
    question_id: 2026,
    text: "मानव शरीर में 'मास्टर ग्रंथि' किसे कहते हैं?",
    options: [
      { option_id: 20261, option_text: "थायरॉइड ग्रंथि" },
      { option_id: 20262, option_text: "अधिवृक्क ग्रंथि" },
      { option_id: 20263, option_text: "अग्न्याशय" },
      { option_id: 20264, option_text: "पीयूष ग्रंथि (Pituitary)" }
    ],
    correct_option_id: 20264,
    class_level: 10,
    difficulty: "medium"
  },
  {
    question_id: 2027,
    text: "रक्त दाब (Blood pressure) किस यंत्र से मापा जाता है?",
    options: [
      { option_id: 20271, option_text: "स्टेथोस्कोप" },
      { option_id: 20272, option_text: "स्फिग्मोमैनोमीटर" },
      { option_id: 20273, option_text: "थर्मामीटर" },
      { option_id: 20274, option_text: "बैरोमीटर" }
    ],
    correct_option_id: 20272,
    class_level: 10,
    difficulty: "medium"
  },
  {
    question_id: 2028,
    text: "पानी का परिवहन पौधों में कौन करता है?",
    options: [
      { option_id: 20281, option_text: "फ्लोएम" },
      { option_id: 20282, option_text: "जाइलम" },
      { option_id: 20283, option_text: "कॉर्टेक्स" },
      { option_id: 20284, option_text: "पिथ" }
    ],
    correct_option_id: 20282,
    class_level: 10,
    difficulty: "medium"
  },
  {
    question_id: 2029,
    text: "पाचन के दौरान प्रोटीन को अमीनो एसिड में कौन सा एंजाइम बदलता है?",
    options: [
      { option_id: 20291, option_text: "एमाइलेज" },
      { option_id: 20292, option_text: "लाइपेज" },
      { option_id: 20293, option_text: "ट्रिप्सिन" },
      { option_id: 20294, option_text: "टायलिन" }
    ],
    correct_option_id: 20293,
    class_level: 10,
    difficulty: "medium"
  },
  {
    question_id: 2030,
    text: "कौन सा हार्मोन शर्करा के स्तर को नियंत्रित करता है?",
    options: [
      { option_id: 20301, option_text: "थायरॉक्सिन" },
      { option_id: 20302, option_text: "एड्रेनालाईन" },
      { option_id: 20303, option_text: "इंसुलिन" },
      { option_id: 20304, option_text: "वृद्धि हार्मोन" }
    ],
    correct_option_id: 20303,
    class_level: 10,
    difficulty: "medium"
  },
  {
    question_id: 2031,
    text: "DNA अनुकृति बनना किस प्रक्रिया के लिए जरूरी है?",
    options: [
      { option_id: 20311, option_text: "श्वसन" },
      { option_id: 20312, option_text: "परिवहन" },
      { option_id: 20313, option_text: "प्रजनन" },
      { option_id: 20314, option_text: "आनुवंशिकता" }
    ],
    correct_option_id: 20313,
    class_level: 10,
    difficulty: "medium"
  },
  {
    question_id: 2032,
    text: "मेंडल के प्रयोगों में, F₂ पीढ़ी में लम्बे और बौने पौधों का लक्षण-रूपी अनुपात क्या था?",
    options: [
      { option_id: 20321, option_text: "1:2:1" },
      { option_id: 20322, option_text: "3:1" },
      { option_id: 20323, option_text: "2:1" },
      { option_id: 20324, option_text: "1:3" }
    ],
    correct_option_id: 20322,
    class_level: 10,
    difficulty: "medium"
  },
  {
    question_id: 2033,
    text: "एक जीव जो विखंडन (fragmentation) से प्रजनन करता है, वह कौन सा है?",
    options: [
      { option_id: 20331, option_text: "यीस्ट" },
      { option_id: 20332, option_text: "प्लाज्मोडियम" },
      { option_id: 20333, option_text: "अमीबा" },
      { option_id: 20334, option_text: "स्पाइरोगाइरा" }
    ],
    correct_option_id: 20334,
    class_level: 10,
    difficulty: "medium"
  },
  {
    question_id: 2034,
    text: "मानव में लिंग निर्धारण किस पर निर्भर करता है?",
    options: [
      { option_id: 20341, option_text: "माता के 'X' गुणसूत्र" },
      { option_id: 20342, option_text: "पिता के 'X' गुणसूत्र" },
      { option_id: 20343, option_text: "पिता के 'Y' गुणसूत्र" },
      { option_id: 20344, option_text: "माता और पिता दोनों के 'X' गुणसूत्र" }
    ],
    correct_option_id: 20343,
    class_level: 10,
    difficulty: "medium"
  },
  {
    question_id: 2035,
    text: "प्रकाश-संश्लेषण के लिए आवश्यक कच्चा माल क्या है?",
    options: [
      { option_id: 20351, option_text: "ऑक्सीजन और पानी" },
      { option_id: 20352, option_text: "कार्बन डाइऑक्साइड और पानी" },
      { option_id: 20353, option_text: "नाइट्रोजन और ऑक्सीजन" },
      { option_id: 20354, option_text: "क्लोरोफिल और O₂" }
    ],
    correct_option_id: 20352,
    class_level: 10,
    difficulty: "medium"
  },
  {
    question_id: 2036,
    text: "पादप हार्मोन का एक उदाहरण है:",
    options: [
      { option_id: 20361, option_text: "इंसुलिन" },
      { option_id: 20362, option_text: "एस्ट्रोजन" },
      { option_id: 20363, option_text: "थायरॉक्सिन" },
      { option_id: 20364, option_text: "साइटोकाइनिन" }
    ],
    correct_option_id: 20364,
    class_level: 10,
    difficulty: "medium"
  },
  {
    question_id: 2037,
    text: "अमीबा में भोजन का पाचन कहाँ होता है?",
    options: [
      { option_id: 20371, option_text: "कोशिका भित्ति" },
      { option_id: 20372, option_text: "केंद्रक" },
      { option_id: 20373, option_text: "खाद्य धानी (Food Vacuole)" },
      { option_id: 20374, option_text: "पादप (Pseudopodia)" }
    ],
    correct_option_id: 20373,
    class_level: 10,
    difficulty: "medium"
  },
  {
    question_id: 2038,
    text: "तंत्रिका कोशिका की सबसे लम्बी शाखा को क्या कहते हैं?",
    options: [
      { option_id: 20381, option_text: "डेंड्राइट" },
      { option_id: 20382, option_text: "एक्सॉन" },
      { option_id: 20383, option_text: "सिनेप्स" },
      { option_id: 20384, option_text: "न्यूरॉन" }
    ],
    correct_option_id: 20382,
    class_level: 10,
    difficulty: "medium"
  },
  {
    question_id: 2039,
    text: "एक ऐसे प्रदूषण का उदाहरण जो जैव-अनिम्नीकरणीय (non-biodegradable) नहीं है?",
    options: [
      { option_id: 20391, option_text: "प्लास्टिक" },
      { option_id: 20392, option_text: "सब्जी के छिलके" },
      { option_id: 20393, option_text: "कागज" },
      { option_id: 20394, option_text: "सूखे पत्ते" }
    ],
    correct_option_id: 20391,
    class_level: 10,
    difficulty: "medium"
  },
  {
    question_id: 2040,
    text: "गंगा एक्शन प्लान कब शुरू किया गया था?",
    options: [
      { option_id: 20401, option_text: "1975" },
      { option_id: 20402, option_text: "1980" },
      { option_id: 20403, option_text: "1985" },
      { option_id: 20404, option_text: "1990" }
    ],
    correct_option_id: 20403,
    class_level: 10,
    difficulty: "medium"
  },

  // ========== HARD LEVEL - Class 10 ==========
  {
    question_id: 3001,
    text: "एक लेंस की शक्ति +2.5 D है। लेंस की प्रकृति और फोकस दूरी क्या है?",
    options: [
      { option_id: 30011, option_text: "अवतल, 40 cm" },
      { option_id: 30012, option_text: "उत्तल, 40 cm" },
      { option_id: 30013, option_text: "अवतल, -40 cm" },
      { option_id: 30014, option_text: "उत्तल, -40 cm" }
    ],
    correct_option_id: 30012,
    class_level: 10,
    difficulty: "hard"
  },
  {
    question_id: 3002,
    text: "एक विद्युत बल्ब पर 220V, 100W अंकित है। जब इसे 110V पर चलाया जाता है, तो खर्च हुई शक्ति (power consumed) क्या होगी?",
    options: [
      { option_id: 30021, option_text: "100W" },
      { option_id: 30022, option_text: "50W" },
      { option_id: 30023, option_text: "25W" },
      { option_id: 30024, option_text: "400W" }
    ],
    correct_option_id: 30023,
    class_level: 10,
    difficulty: "hard"
  },
  {
    question_id: 3003,
    text: "एक निश्चित पदार्थ का अपवर्तनांक √2 है। अगर प्रकाश 45° के कोण पर पड़ता है, तो अपवर्तन कोण क्या होगा?",
    options: [
      { option_id: 30031, option_text: "30°" },
      { option_id: 30032, option_text: "45°" },
      { option_id: 30033, option_text: "60°" },
      { option_id: 30034, option_text: "90°" }
    ],
    correct_option_id: 30031,
    class_level: 10,
    difficulty: "hard"
  },
  {
    question_id: 3004,
    text: "DC की तुलना में AC का मुख्य फायदा क्या है?",
    options: [
      { option_id: 30041, option_text: "AC को आसानी से स्टोर किया जा सकता है।" },
      { option_id: 30042, option_text: "AC को लंबी दूरियों तक कम ऊर्जा हानि के साथ भेजा जा सकता है।" },
      { option_id: 30043, option_text: "AC की आवृत्ति स्थिर रहती है।" },
      { option_id: 30044, option_text: "AC DC से सस्ता है।" }
    ],
    correct_option_id: 30042,
    class_level: 10,
    difficulty: "hard"
  },
  {
    question_id: 3005,
    text: "विद्युत चुम्बक की शक्ति बढ़ाने के लिए क्या करना चाहिए?",
    options: [
      { option_id: 30051, option_text: "कॉइल में फेरों की संख्या कम करना।" },
      { option_id: 30052, option_text: "विद्युत धारा कम करना।" },
      { option_id: 30053, option_text: "नर्म लोहा कोर का उपयोग करना।" },
      { option_id: 30054, option_text: "तार की मोटाई कम करना।" }
    ],
    correct_option_id: 30053,
    class_level: 10,
    difficulty: "hard"
  },
  {
    question_id: 3006,
    text: "तारे क्यों टिमटिमाते हैं?",
    options: [
      { option_id: 30061, option_text: "प्रकाश के परावर्तन के कारण" },
      { option_id: 30062, option_text: "प्रकाश के प्रकीर्णन के कारण" },
      { option_id: 30063, option_text: "वायुमंडलीय अपवर्तन के कारण" },
      { option_id: 30064, option_text: "पूर्ण आंतरिक परावर्तन के कारण" }
    ],
    correct_option_id: 30063,
    class_level: 10,
    difficulty: "hard"
  },
  {
    question_id: 3007,
    text: "समांतर क्रम (Parallel combination) में जोड़ने पर कुल प्रतिरोध पर क्या प्रभाव पड़ता है?",
    options: [
      { option_id: 30071, option_text: "प्रतिरोध बढ़ जाता है" },
      { option_id: 30072, option_text: "प्रतिरोध अपरिवर्तित रहता है" },
      { option_id: 30073, option_text: "प्रतिरोध घट जाता है" },
      { option_id: 30074, option_text: "प्रतिरोध शून्य हो जाता है" }
    ],
    correct_option_id: 30073,
    class_level: 10,
    difficulty: "hard"
  },
  {
    question_id: 3008,
    text: "जब FeSO₄ को गरम किया जाता है, तो निकलने वाली गैसों का रंग क्या होता है?",
    options: [
      { option_id: 30081, option_text: "रंगहीन" },
      { option_id: 30082, option_text: "सफेद" },
      { option_id: 30083, option_text: "लाल-भूरा" },
      { option_id: 30084, option_text: "हरा" }
    ],
    correct_option_id: 30083,
    class_level: 10,
    difficulty: "hard"
  },
  {
    question_id: 3009,
    text: "एक तत्व X के क्लोराइड का सूत्र XCl₂ है। वह X किस समूह से संबंधित है?",
    options: [
      { option_id: 30091, option_text: "Group 1" },
      { option_id: 30092, option_text: "Group 2" },
      { option_id: 30093, option_text: "Group 13" },
      { option_id: 30094, option_text: "Group 14" }
    ],
    correct_option_id: 30092,
    class_level: 10,
    difficulty: "hard"
  },
  {
    question_id: 3010,
    text: "पानी के विद्युत अपघटन में, कैथोड और एनोड पर उत्पन्न H₂ और O₂ गैस के आयतन का अनुपात क्या है?",
    options: [
      { option_id: 30101, option_text: "1:1" },
      { option_id: 30102, option_text: "2:1" },
      { option_id: 30103, option_text: "1:2" },
      { option_id: 30104, option_text: "3:1" }
    ],
    correct_option_id: 30102,
    class_level: 10,
    difficulty: "hard"
  },
  {
    question_id: 3011,
    text: "आधुनिक आवर्त सारणी में सबसे बड़ा आकार किस तत्व का होगा?",
    options: [
      { option_id: 30111, option_text: "Na (सोडियम)" },
      { option_id: 30112, option_text: "Mg (मैग्नीशियम)" },
      { option_id: 30113, option_text: "Cl (क्लोरिन)" },
      { option_id: 30114, option_text: "K (पोटेशियम)" }
    ],
    correct_option_id: 30114,
    class_level: 10,
    difficulty: "hard"
  },
  {
    question_id: 3012,
    text: "कौन सा कार्बनिक यौगिक 443K (170°C) पर सांद्रित H₂SO₄ के साथ गर्म करने पर C₂H₄ (एथीन) देता है?",
    options: [
      { option_id: 30121, option_text: "CH₄" },
      { option_id: 30122, option_text: "C₂H₆" },
      { option_id: 30123, option_text: "C₂H₅OH" },
      { option_id: 30124, option_text: "CH₃COOH" }
    ],
    correct_option_id: 30123,
    class_level: 10,
    difficulty: "hard"
  },
  {
    question_id: 3013,
    text: "जब अम्ल धातु कार्बोनेट के साथ अभिक्रिया करता है, तो कौन सी गैस निकलती है?",
    options: [
      { option_id: 30131, option_text: "हाइड्रोजन" },
      { option_id: 30132, option_text: "ऑक्सीजन" },
      { option_id: 30133, option_text: "कार्बन डाइऑक्साइड" },
      { option_id: 30134, option_text: "नाइट्रोजन" }
    ],
    correct_option_id: 30133,
    class_level: 10,
    difficulty: "hard"
  },
  {
    question_id: 3014,
    text: "रासायनिक अभिक्रिया 2H₂ + O₂ → 2H₂O कौन सी अभिक्रिया है?",
    options: [
      { option_id: 30141, option_text: "वियोजन" },
      { option_id: 30142, option_text: "विस्थापन" },
      { option_id: 30143, option_text: "संयोजन" },
      { option_id: 30144, option_text: "द्विविस्थापन" }
    ],
    correct_option_id: 30143,
    class_level: 10,
    difficulty: "hard"
  },
  {
    question_id: 3015,
    text: "साबुन के अणु के सिरे कैसे होते हैं?",
    options: [
      { option_id: 30151, option_text: "दोनों जल-स्नेही" },
      { option_id: 30152, option_text: "दोनों जल-विरोधी" },
      { option_id: 30153, option_text: "एक जल-स्नेही और दूसरा जल-विरोधी" },
      { option_id: 30154, option_text: "इनमें से कोई नहीं" }
    ],
    correct_option_id: 30153,
    class_level: 10,
    difficulty: "hard"
  },
  {
    question_id: 3016,
    text: "प्लास्टर ऑफ पेरिस (POP) का सही रासायनिक सूत्र क्या है?",
    options: [
      { option_id: 30161, option_text: "CaSO₄·2H₂O" },
      { option_id: 30162, option_text: "CaSO₄" },
      { option_id: 30163, option_text: "CaSO₄·½H₂O" },
      { option_id: 30164, option_text: "CaCO₃" }
    ],
    correct_option_id: 30163,
    class_level: 10,
    difficulty: "hard"
  },
  {
    question_id: 3017,
    text: "पाचन के बाद वसा (Fats) को किस रूप में अवशोषित किया जाता है?",
    options: [
      { option_id: 30171, option_text: "ग्लूकोज" },
      { option_id: 30172, option_text: "अमीनो एसिड" },
      { option_id: 30173, option_text: "फैटी एसिड और ग्लिसरॉल" },
      { option_id: 30174, option_text: "फ्रक्टोज" }
    ],
    correct_option_id: 30173,
    class_level: 10,
    difficulty: "hard"
  },
  {
    question_id: 3018,
    text: "संकीर्ण श्वसन (Anaerobic Respiration) में ग्लूकोज के पूर्ण अपघटन से अंतिम उत्पाद क्या बनते हैं (पेशियों में)?",
    options: [
      { option_id: 30181, option_text: "CO₂, पानी और ऊर्जा" },
      { option_id: 30182, option_text: "एथेनॉल, CO₂ और ऊर्जा" },
      { option_id: 30183, option_text: "लैक्टिक एसिड और ऊर्जा" },
      { option_id: 30184, option_text: "पाइरुवेट और ऊर्जा" }
    ],
    correct_option_id: 30183,
    class_level: 10,
    difficulty: "hard"
  },
  {
    question_id: 3019,
    text: "वह हार्मोन जो पौधे में कोशिका विभाजन को बढ़ाता है और बीज के सुसुप्ति को तोड़ता है?",
    options: [
      { option_id: 30191, option_text: "ऑक्सिन" },
      { option_id: 30192, option_text: "जिबरेलिन" },
      { option_id: 30193, option_text: "साइटोकाइनिन" },
      { option_id: 30194, option_text: "एब्सिसिक एसिड" }
    ],
    correct_option_id: 30193,
    class_level: 10,
    difficulty: "hard"
  },
  {
    question_id: 3020,
    text: "मानव में आहार नली का सबसे लम्बा भाग कौन सा है?",
    options: [
      { option_id: 30201, option_text: "आमाशय" },
      { option_id: 30202, option_text: "बड़ी आंत" },
      { option_id: 30203, option_text: "छोटी आंत" },
      { option_id: 30204, option_text: "ग्रसिका" }
    ],
    correct_option_id: 30203,
    class_level: 10,
    difficulty: "hard"
  },
  {
    question_id: 3021,
    text: "'जीवाश्म ईंधन' का मुख्य घटक क्या है?",
    options: [
      { option_id: 30211, option_text: "हाइड्रोजन" },
      { option_id: 30212, option_text: "ऑक्सीजन" },
      { option_id: 30213, option_text: "कार्बन" },
      { option_id: 30214, option_text: "सल्फर" }
    ],
    correct_option_id: 30213,
    class_level: 10,
    difficulty: "hard"
  },
  {
    question_id: 3022,
    text: "पराबैंगनी किरणों के कारण मनुष्यों में कौन सी बीमारी हो सकती है?",
    options: [
      { option_id: 30221, option_text: "एड्स" },
      { option_id: 30222, option_text: "निमोनिया" },
      { option_id: 30223, option_text: "त्वचा कैंसर" },
      { option_id: 30224, option_text: "मलेरिया" }
    ],
    correct_option_id: 30223,
    class_level: 10,
    difficulty: "hard"
  },
  {
    question_id: 3023,
    text: "ओजोन परत में छिद्र (hole) का मुख्य कारण कौन सा केमिकल है?",
    options: [
      { option_id: 30231, option_text: "CO₂" },
      { option_id: 30232, option_text: "SO₂" },
      { option_id: 30233, option_text: "CFC (क्लोरोफ्लोरोकार्बन)" },
      { option_id: 30234, option_text: "NO₂" }
    ],
    correct_option_id: 30233,
    class_level: 10,
    difficulty: "hard"
  },
  {
    question_id: 3024,
    text: "जल संचयन (Water harvesting) की एक पारंपरिक विधि है:",
    options: [
      { option_id: 30241, option_text: "बांध बनाना" },
      { option_id: 30242, option_text: "बिजली पैदा करना" },
      { option_id: 30243, option_text: "खादिन (Khadin)" },
      { option_id: 30244, option_text: "नहरें बनाना" }
    ],
    correct_option_id: 30243,
    class_level: 10,
    difficulty: "hard"
  },
  {
    question_id: 3025,
    text: "एक पारिस्थितिकी तंत्र (Ecosystem) में ऊर्जा का प्रवाह कैसा होता है?",
    options: [
      { option_id: 30251, option_text: "द्विदिशीय (Bidirectional)" },
      { option_id: 30252, option_text: "चक्रीय (Cyclic)" },
      { option_id: 30253, option_text: "एकदिशीय (Unidirectional)" },
      { option_id: 30254, option_text: "बहुदिशीय (Multidirectional)" }
    ],
    correct_option_id: 30253,
    class_level: 10,
    difficulty: "hard"
  },
  
  // CSV Questions - Class 9
  {
    question_id: 9101,
    text: "पृथ्वी पर सबसे अधिक प्रचालित गैस कौन सी है?",
    options: [
      { option_id: 91011, option_text: "नाइट्रोजन" },
      { option_id: 91012, option_text: "ऑक्सीजन" },
      { option_id: 91013, option_text: "कार्बन डायऑक्साइड" },
      { option_id: 91014, option_text: "हीलियम" }
    ],
    correct_option_id: 91011,
    class_level: 9,
    difficulty: "easy",
    explanation: "सही उत्तर नाइट्रोजन है क्योंकि वायुमंडल में लगभग 78% नाइट्रोजन है।"
  },
  {
    question_id: 9102,
    text: "जल का रासायनिक सूत्र क्या है?",
    options: [
      { option_id: 91021, option_text: "H2O" },
      { option_id: 91022, option_text: "CO2" },
      { option_id: 91023, option_text: "O2" },
      { option_id: 91024, option_text: "N2" }
    ],
    correct_option_id: 91021,
    class_level: 9,
    difficulty: "easy",
    explanation: "सही उत्तर H2O है क्योंकि जल में 2 हाइड्रोजन और 1 ऑक्सीजन परमाणु होते हैं।"
  },
  {
    question_id: 9103,
    text: "गति की इकाई SI में क्या है?",
    options: [
      { option_id: 91031, option_text: "m/s" },
      { option_id: 91032, option_text: "m/s^2" },
      { option_id: 91033, option_text: "kg" },
      { option_id: 91034, option_text: "N" }
    ],
    correct_option_id: 91031,
    class_level: 9,
    difficulty: "easy",
    explanation: "सही उत्तर m/s है क्योंकि गति = दूरी/समय होती है।"
  },
  {
    question_id: 9104,
    text: "ऊर्जा के संरक्षण का नियम किसे दर्शाता है?",
    options: [
      { option_id: 91041, option_text: "ऊर्जा नष्ट नहीं होती" },
      { option_id: 91042, option_text: "ऊर्जा पैदा होती है" },
      { option_id: 91043, option_text: "ऊर्जा घटती है" },
      { option_id: 91044, option_text: "ऊर्जा बदलती नहीं" }
    ],
    correct_option_id: 91041,
    class_level: 9,
    difficulty: "medium",
    explanation: "सही उत्तर है कि ऊर्जा नष्ट नहीं होती क्योंकि ऊर्जा संरक्षण के नियम के अनुसार ऊर्जा केवल एक रूप से दूसरे रूप में बदलती है।"
  },
  {
    question_id: 9105,
    text: "मनुष्यों में रक्त का लाल रंग किस कारण से होता है?",
    options: [
      { option_id: 91051, option_text: "हिमोग्लोबिन" },
      { option_id: 91052, option_text: "पिगमेंट" },
      { option_id: 91053, option_text: "अमीनो एसिड" },
      { option_id: 91054, option_text: "आयरन नहीं" }
    ],
    correct_option_id: 91051,
    class_level: 9,
    difficulty: "medium",
    explanation: "सही उत्तर हिमोग्लोबिन है क्योंकि यह एक लौह युक्त प्रोटीन है जो रक्त को लाल रंग देता है।"
  },
  {
    question_id: 9106,
    text: "फोटोसिन्थेसिस कहाँ होता है?",
    options: [
      { option_id: 91061, option_text: "पत्तियों में" },
      { option_id: 91062, option_text: "जड़ों में" },
      { option_id: 91063, option_text: "बीज में" },
      { option_id: 91064, option_text: "फल में" }
    ],
    correct_option_id: 91061,
    class_level: 9,
    difficulty: "medium",
    explanation: "सही उत्तर पत्तियों में है क्योंकि पत्तियों में क्लोरोफिल होता है जो प्रकाश संश्लेषण के लिए आवश्यक है।"
  },
  
  // CSV Questions - Class 10
  {
    question_id: 10101,
    text: "पृथ्वी पर सबसे अधिक प्रचालित गैस कौन सी है?",
    options: [
      { option_id: 101011, option_text: "नाइट्रोजन" },
      { option_id: 101012, option_text: "ऑक्सीजन" },
      { option_id: 101013, option_text: "कार्बन डायऑक्साइड" },
      { option_id: 101014, option_text: "हीलियम" }
    ],
    correct_option_id: 101011,
    class_level: 10,
    difficulty: "easy",
    explanation: "सही उत्तर नाइट्रोजन है क्योंकि यह वायुमंडल का 78% भाग है।"
  },
  {
    question_id: 10102,
    text: "जल का रासायनिक सूत्र क्या है?",
    options: [
      { option_id: 101021, option_text: "H2O" },
      { option_id: 101022, option_text: "CO2" },
      { option_id: 101023, option_text: "O2" },
      { option_id: 101024, option_text: "N2" }
    ],
    correct_option_id: 101021,
    class_level: 10,
    difficulty: "easy",
    explanation: "सही उत्तर H2O है जो जल का रासायनिक सूत्र है।"
  },
  {
    question_id: 10103,
    text: "गति की इकाई SI में क्या है?",
    options: [
      { option_id: 101031, option_text: "m/s" },
      { option_id: 101032, option_text: "m/s^2" },
      { option_id: 101033, option_text: "kg" },
      { option_id: 101034, option_text: "N" }
    ],
    correct_option_id: 101031,
    class_level: 10,
    difficulty: "easy",
    explanation: "सही उत्तर m/s है जो वेग की SI इकाई है।"
  },
  {
    question_id: 10104,
    text: "ऊर्जा के संरक्षण का नियम किसे दर्शाता है?",
    options: [
      { option_id: 101041, option_text: "ऊर्जा नष्ट नहीं होती" },
      { option_id: 101042, option_text: "ऊर्जा पैदा होती है" },
      { option_id: 101043, option_text: "ऊर्जा घटती है" },
      { option_id: 101044, option_text: "ऊर्जा बदलती नहीं" }
    ],
    correct_option_id: 101041,
    class_level: 10,
    difficulty: "medium",
    explanation: "सही उत्तर है कि ऊर्जा नष्ट नहीं होती, केवल एक रूप से दूसरे रूप में परिवर्तित होती है।"
  },
  {
    question_id: 10105,
    text: "मनुष्यों में रक्त का लाल रंग किस कारण से होता है?",
    options: [
      { option_id: 101051, option_text: "हिमोग्लोबिन" },
      { option_id: 101052, option_text: "पिगमेंट" },
      { option_id: 101053, option_text: "अमीनो एसिड" },
      { option_id: 101054, option_text: "आयरन नहीं" }
    ],
    correct_option_id: 101051,
    class_level: 10,
    difficulty: "medium",
    explanation: "सही उत्तर हिमोग्लोबिन है जो लाल रक्त कोशिकाओं में पाया जाता है।"
  },
  {
    question_id: 10106,
    text: "फोटोसिन्थेसिस कहाँ होता है?",
    options: [
      { option_id: 101061, option_text: "पत्तियों में" },
      { option_id: 101062, option_text: "जड़ों में" },
      { option_id: 101063, option_text: "बीज में" },
      { option_id: 101064, option_text: "फल में" }
    ],
    correct_option_id: 101061,
    class_level: 10,
    difficulty: "medium",
    explanation: "सही उत्तर पत्तियों में है जहां क्लोरोप्लास्ट में प्रकाश संश्लेषण होता है।"
  },

  // ========== CLASS 9 - EASY LEVEL (45 Questions) ==========
  {
    question_id: 4001,
    text: "पदार्थ की तीन अवस्थाएं कौन सी हैं?",
    options: [
      { option_id: 40011, option_text: "ठोस, द्रव, गैस" },
      { option_id: 40012, option_text: "ठोस, द्रव, प्लाज्मा" },
      { option_id: 40013, option_text: "द्रव, गैस, वाष्प" },
      { option_id: 40014, option_text: "ठोस, वायु, जल" }
    ],
    correct_option_id: 40011,
    class_level: 9,
    difficulty: "easy"
  },
  {
    question_id: 4002,
    text: "कोशिका की खोज किसने की थी?",
    options: [
      { option_id: 40021, option_text: "रॉबर्ट हुक" },
      { option_id: 40022, option_text: "रॉबर्ट ब्राउन" },
      { option_id: 40023, option_text: "श्लाइडेन" },
      { option_id: 40024, option_text: "श्वान" }
    ],
    correct_option_id: 40021,
    class_level: 9,
    difficulty: "easy"
  },
  {
    question_id: 4003,
    text: "त्वरण का SI मात्रक क्या है?",
    options: [
      { option_id: 40031, option_text: "m/s" },
      { option_id: 40032, option_text: "m/s²" },
      { option_id: 40033, option_text: "m²/s" },
      { option_id: 40034, option_text: "m/s³" }
    ],
    correct_option_id: 40032,
    class_level: 9,
    difficulty: "easy"
  },
  {
    question_id: 4004,
    text: "कोशिका का 'पावर हाउस' किसे कहते हैं?",
    options: [
      { option_id: 40041, option_text: "राइबोसोम" },
      { option_id: 40042, option_text: "माइटोकॉन्ड्रिया" },
      { option_id: 40043, option_text: "केन्द्रक" },
      { option_id: 40044, option_text: "गॉल्जी बॉडी" }
    ],
    correct_option_id: 40042,
    class_level: 9,
    difficulty: "easy"
  },
  {
    question_id: 4005,
    text: "प्रकाश संश्लेषण में पौधे क्या मुक्त करते हैं?",
    options: [
      { option_id: 40051, option_text: "कार्बन डाइऑक्साइड" },
      { option_id: 40052, option_text: "ऑक्सीजन" },
      { option_id: 40053, option_text: "नाइट्रोजन" },
      { option_id: 40054, option_text: "हाइड्रोजन" }
    ],
    correct_option_id: 40052,
    class_level: 9,
    difficulty: "easy"
  },
  {
    question_id: 4006,
    text: "न्यूटन का पहला नियम किस नाम से जाना जाता है?",
    options: [
      { option_id: 40061, option_text: "जड़त्व का नियम" },
      { option_id: 40062, option_text: "संवेग का नियम" },
      { option_id: 40063, option_text: "क्रिया-प्रतिक्रिया का नियम" },
      { option_id: 40064, option_text: "गुरुत्वाकर्षण का नियम" }
    ],
    correct_option_id: 40061,
    class_level: 9,
    difficulty: "easy"
  },
  {
    question_id: 4007,
    text: "परमाणु का केंद्र क्या कहलाता है?",
    options: [
      { option_id: 40071, option_text: "इलेक्ट्रॉन" },
      { option_id: 40072, option_text: "प्रोटॉन" },
      { option_id: 40073, option_text: "केन्द्रक (न्यूक्लियस)" },
      { option_id: 40074, option_text: "न्यूट्रॉन" }
    ],
    correct_option_id: 40073,
    class_level: 9,
    difficulty: "easy"
  },
  {
    question_id: 4008,
    text: "जल का रासायनिक सूत्र क्या है?",
    options: [
      { option_id: 40081, option_text: "H₂O" },
      { option_id: 40082, option_text: "H₂O₂" },
      { option_id: 40083, option_text: "HO₂" },
      { option_id: 40084, option_text: "H₃O" }
    ],
    correct_option_id: 40081,
    class_level: 9,
    difficulty: "easy"
  },
  {
    question_id: 4009,
    text: "पादप कोशिका में कोशिका भित्ति किसकी बनी होती है?",
    options: [
      { option_id: 40091, option_text: "प्रोटीन" },
      { option_id: 40092, option_text: "सेल्युलोज" },
      { option_id: 40093, option_text: "वसा" },
      { option_id: 40094, option_text: "लिपिड" }
    ],
    correct_option_id: 40092,
    class_level: 9,
    difficulty: "easy"
  },
  {
    question_id: 4010,
    text: "ध्वनि किस माध्यम में सबसे तेज चलती है?",
    options: [
      { option_id: 40101, option_text: "ठोस" },
      { option_id: 40102, option_text: "द्रव" },
      { option_id: 40103, option_text: "गैस" },
      { option_id: 40104, option_text: "निर्वात" }
    ],
    correct_option_id: 40101,
    class_level: 9,
    difficulty: "easy"
  },
  {
    question_id: 4011,
    text: "पृथ्वी पर गुरुत्वीय त्वरण का मान कितना है?",
    options: [
      { option_id: 40111, option_text: "9.8 m/s²" },
      { option_id: 40112, option_text: "10 m/s²" },
      { option_id: 40113, option_text: "8.9 m/s²" },
      { option_id: 40114, option_text: "9 m/s²" }
    ],
    correct_option_id: 40111,
    class_level: 9,
    difficulty: "easy"
  },
  {
    question_id: 4012,
    text: "DNA का पूर्ण रूप क्या है?",
    options: [
      { option_id: 40121, option_text: "Deoxyribonucleic Acid" },
      { option_id: 40122, option_text: "Dinitrogen Acid" },
      { option_id: 40123, option_text: "Deoxynitric Acid" },
      { option_id: 40124, option_text: "Diribonucleic Acid" }
    ],
    correct_option_id: 40121,
    class_level: 9,
    difficulty: "easy"
  },
  {
    question_id: 4013,
    text: "द्रव्यमान का SI मात्रक क्या है?",
    options: [
      { option_id: 40131, option_text: "किलोग्राम (kg)" },
      { option_id: 40132, option_text: "ग्राम (g)" },
      { option_id: 40133, option_text: "मीटर (m)" },
      { option_id: 40134, option_text: "न्यूटन (N)" }
    ],
    correct_option_id: 40131,
    class_level: 9,
    difficulty: "easy"
  },
  {
    question_id: 4014,
    text: "वायुमंडल में सबसे अधिक मात्रा में कौन सी गैस है?",
    options: [
      { option_id: 40141, option_text: "नाइट्रोजन" },
      { option_id: 40142, option_text: "ऑक्सीजन" },
      { option_id: 40143, option_text: "कार्बन डाइऑक्साइड" },
      { option_id: 40144, option_text: "हाइड्रोजन" }
    ],
    correct_option_id: 40141,
    class_level: 9,
    difficulty: "easy"
  },
  {
    question_id: 4015,
    text: "कोशिका झिल्ली किस प्रकार की होती है?",
    options: [
      { option_id: 40151, option_text: "चयनात्मक पारगम्य" },
      { option_id: 40152, option_text: "पूर्णतः पारगम्य" },
      { option_id: 40153, option_text: "अपारगम्य" },
      { option_id: 40154, option_text: "अर्ध-पारगम्य" }
    ],
    correct_option_id: 40151,
    class_level: 9,
    difficulty: "easy"
  },
  {
    question_id: 4016,
    text: "बल का SI मात्रक क्या है?",
    options: [
      { option_id: 40161, option_text: "न्यूटन (N)" },
      { option_id: 40162, option_text: "जूल (J)" },
      { option_id: 40163, option_text: "वाट (W)" },
      { option_id: 40164, option_text: "पास्कल (Pa)" }
    ],
    correct_option_id: 40161,
    class_level: 9,
    difficulty: "easy"
  },
  {
    question_id: 4017,
    text: "एक परमाणु में इलेक्ट्रॉन कहाँ होते हैं?",
    options: [
      { option_id: 40171, option_text: "केन्द्रक के चारों ओर कक्षा में" },
      { option_id: 40172, option_text: "केन्द्रक के अंदर" },
      { option_id: 40173, option_text: "परमाणु के बाहर" },
      { option_id: 40174, option_text: "परमाणु के केंद्र में" }
    ],
    correct_option_id: 40171,
    class_level: 9,
    difficulty: "easy"
  },
  {
    question_id: 4018,
    text: "पौधों में जल का परिवहन किसके द्वारा होता है?",
    options: [
      { option_id: 40181, option_text: "जाइलम" },
      { option_id: 40182, option_text: "फ्लोएम" },
      { option_id: 40183, option_text: "पैरेन्काइमा" },
      { option_id: 40184, option_text: "कॉलेन्काइमा" }
    ],
    correct_option_id: 40181,
    class_level: 9,
    difficulty: "easy"
  },
  {
    question_id: 4019,
    text: "ऊर्जा का SI मात्रक क्या है?",
    options: [
      { option_id: 40191, option_text: "जूल (J)" },
      { option_id: 40192, option_text: "वाट (W)" },
      { option_id: 40193, option_text: "न्यूटन (N)" },
      { option_id: 40194, option_text: "कैलोरी (Cal)" }
    ],
    correct_option_id: 40191,
    class_level: 9,
    difficulty: "easy"
  },
  {
    question_id: 4020,
    text: "कार्बन डाइऑक्साइड का रासायनिक सूत्र क्या है?",
    options: [
      { option_id: 40201, option_text: "CO₂" },
      { option_id: 40202, option_text: "CO" },
      { option_id: 40203, option_text: "C₂O" },
      { option_id: 40204, option_text: "C₂O₂" }
    ],
    correct_option_id: 40201,
    class_level: 9,
    difficulty: "easy"
  },
  {
    question_id: 4021,
    text: "कोशिका विभाजन की सामान्य विधि क्या है?",
    options: [
      { option_id: 40211, option_text: "माइटोसिस" },
      { option_id: 40212, option_text: "मिओसिस" },
      { option_id: 40213, option_text: "एमिटोसिस" },
      { option_id: 40214, option_text: "बाइनरी विखंडन" }
    ],
    correct_option_id: 40211,
    class_level: 9,
    difficulty: "easy"
  },
  {
    question_id: 4022,
    text: "वेग किसका सदिश राशि है?",
    options: [
      { option_id: 40221, option_text: "हाँ, वेग सदिश राशि है" },
      { option_id: 40222, option_text: "नहीं, वेग अदिश राशि है" },
      { option_id: 40223, option_text: "कभी सदिश, कभी अदिश" },
      { option_id: 40224, option_text: "न तो सदिश न अदिश" }
    ],
    correct_option_id: 40221,
    class_level: 9,
    difficulty: "easy"
  },
  {
    question_id: 4023,
    text: "हरे पौधे किसे कहा जाता है?",
    options: [
      { option_id: 40231, option_text: "स्वपोषी" },
      { option_id: 40232, option_text: "विषमपोषी" },
      { option_id: 40233, option_text: "मृतजीवी" },
      { option_id: 40234, option_text: "परजीवी" }
    ],
    correct_option_id: 40231,
    class_level: 9,
    difficulty: "easy"
  },
  {
    question_id: 4024,
    text: "शुद्ध पदार्थ का उदाहरण कौन सा है?",
    options: [
      { option_id: 40241, option_text: "शुद्ध जल" },
      { option_id: 40242, option_text: "वायु" },
      { option_id: 40243, option_text: "मिट्टी" },
      { option_id: 40244, option_text: "समुद्री जल" }
    ],
    correct_option_id: 40241,
    class_level: 9,
    difficulty: "easy"
  },
  {
    question_id: 4025,
    text: "प्रोटॉन पर किस प्रकार का आवेश होता है?",
    options: [
      { option_id: 40251, option_text: "धनात्मक" },
      { option_id: 40252, option_text: "ऋणात्मक" },
      { option_id: 40253, option_text: "उदासीन" },
      { option_id: 40254, option_text: "कोई आवेश नहीं" }
    ],
    correct_option_id: 40251,
    class_level: 9,
    difficulty: "easy"
  },
  {
    question_id: 4026,
    text: "रक्त में कौन सी कोशिकाएं ऑक्सीजन का परिवहन करती हैं?",
    options: [
      { option_id: 40261, option_text: "लाल रक्त कोशिकाएं (RBC)" },
      { option_id: 40262, option_text: "सफेद रक्त कोशिकाएं (WBC)" },
      { option_id: 40263, option_text: "प्लेटलेट्स" },
      { option_id: 40264, option_text: "प्लाज्मा" }
    ],
    correct_option_id: 40261,
    class_level: 9,
    difficulty: "easy"
  },
  {
    question_id: 4027,
    text: "गति का पहला समीकरण कौन सा है?",
    options: [
      { option_id: 40271, option_text: "v = u + at" },
      { option_id: 40272, option_text: "s = ut + ½at²" },
      { option_id: 40273, option_text: "v² = u² + 2as" },
      { option_id: 40274, option_text: "s = vt" }
    ],
    correct_option_id: 40271,
    class_level: 9,
    difficulty: "easy"
  },
  {
    question_id: 4028,
    text: "हीरा और ग्रेफाइट किसके अपररूप हैं?",
    options: [
      { option_id: 40281, option_text: "कार्बन" },
      { option_id: 40282, option_text: "सल्फर" },
      { option_id: 40283, option_text: "फॉस्फोरस" },
      { option_id: 40284, option_text: "ऑक्सीजन" }
    ],
    correct_option_id: 40281,
    class_level: 9,
    difficulty: "easy"
  },
  {
    question_id: 4029,
    text: "एंडोप्लाज्मिक रेटिकुलम का मुख्य कार्य क्या है?",
    options: [
      { option_id: 40291, option_text: "प्रोटीन और वसा का संश्लेषण" },
      { option_id: 40292, option_text: "ऊर्जा उत्पादन" },
      { option_id: 40293, option_text: "कोशिका विभाजन" },
      { option_id: 40294, option_text: "प्रकाश संश्लेषण" }
    ],
    correct_option_id: 40291,
    class_level: 9,
    difficulty: "easy"
  },
  {
    question_id: 4030,
    text: "संवेग का मात्रक क्या है?",
    options: [
      { option_id: 40301, option_text: "kg·m/s" },
      { option_id: 40302, option_text: "N" },
      { option_id: 40303, option_text: "J" },
      { option_id: 40304, option_text: "W" }
    ],
    correct_option_id: 40301,
    class_level: 9,
    difficulty: "easy"
  },
  {
    question_id: 4031,
    text: "जीवों का वैज्ञानिक नामकरण किस पद्धति से होता है?",
    options: [
      { option_id: 40311, option_text: "द्विनाम पद्धति" },
      { option_id: 40312, option_text: "त्रिनाम पद्धति" },
      { option_id: 40313, option_text: "एकनाम पद्धति" },
      { option_id: 40314, option_text: "बहुनाम पद्धति" }
    ],
    correct_option_id: 40311,
    class_level: 9,
    difficulty: "easy"
  },
  {
    question_id: 4032,
    text: "मिश्रण का उदाहरण कौन सा है?",
    options: [
      { option_id: 40321, option_text: "वायु" },
      { option_id: 40322, option_text: "शुद्ध जल" },
      { option_id: 40323, option_text: "ऑक्सीजन" },
      { option_id: 40324, option_text: "सोडियम क्लोराइड" }
    ],
    correct_option_id: 40321,
    class_level: 9,
    difficulty: "easy"
  },
  {
    question_id: 4033,
    text: "न्यूट्रॉन पर किस प्रकार का आवेश होता है?",
    options: [
      { option_id: 40331, option_text: "उदासीन (कोई आवेश नहीं)" },
      { option_id: 40332, option_text: "धनात्मक" },
      { option_id: 40333, option_text: "ऋणात्मक" },
      { option_id: 40334, option_text: "दोनों धनात्मक और ऋणात्मक" }
    ],
    correct_option_id: 40331,
    class_level: 9,
    difficulty: "easy"
  },
  {
    question_id: 4034,
    text: "गॉल्जी बॉडी का मुख्य कार्य क्या है?",
    options: [
      { option_id: 40341, option_text: "पदार्थों का संग्रहण और स्रावण" },
      { option_id: 40342, option_text: "ऊर्जा उत्पादन" },
      { option_id: 40343, option_text: "प्रोटीन संश्लेषण" },
      { option_id: 40344, option_text: "कोशिका विभाजन" }
    ],
    correct_option_id: 40341,
    class_level: 9,
    difficulty: "easy"
  },
  {
    question_id: 4035,
    text: "शक्ति का SI मात्रक क्या है?",
    options: [
      { option_id: 40351, option_text: "वाट (W)" },
      { option_id: 40352, option_text: "जूल (J)" },
      { option_id: 40353, option_text: "न्यूटन (N)" },
      { option_id: 40354, option_text: "पास्कल (Pa)" }
    ],
    correct_option_id: 40351,
    class_level: 9,
    difficulty: "easy"
  },

  // ========== CLASS 9 - MEDIUM LEVEL (40 Questions) ==========
  {
    question_id: 4036,
    text: "समान द्रव्यमान की दो वस्तुएं A और B क्रमशः 3 m/s और 5 m/s के वेग से चल रही हैं। इनके संवेग का अनुपात क्या होगा?",
    options: [
      { option_id: 40361, option_text: "3:5" },
      { option_id: 40362, option_text: "5:3" },
      { option_id: 40363, option_text: "1:1" },
      { option_id: 40364, option_text: "9:25" }
    ],
    correct_option_id: 40361,
    class_level: 9,
    difficulty: "medium",
    explanation: "संवेग = द्रव्यमान × वेग। चूंकि द्रव्यमान समान है, संवेग का अनुपात = वेग का अनुपात = 3:5"
  },
  {
    question_id: 4037,
    text: "यदि किसी वस्तु का वेग दोगुना कर दिया जाए, तो उसकी गतिज ऊर्जा कितनी हो जाएगी?",
    options: [
      { option_id: 40371, option_text: "चार गुना" },
      { option_id: 40372, option_text: "दोगुनी" },
      { option_id: 40373, option_text: "आठ गुना" },
      { option_id: 40374, option_text: "समान" }
    ],
    correct_option_id: 40371,
    class_level: 9,
    difficulty: "medium",
    explanation: "गतिज ऊर्जा = ½mv²। वेग दोगुना करने पर KE = ½m(2v)² = 4 × ½mv²"
  },
  {
    question_id: 4038,
    text: "परासरण और विसरण में मुख्य अंतर क्या है?",
    options: [
      { option_id: 40381, option_text: "परासरण में केवल जल अणुओं की गति होती है" },
      { option_id: 40382, option_text: "विसरण में केवल जल अणुओं की गति होती है" },
      { option_id: 40383, option_text: "दोनों में कोई अंतर नहीं" },
      { option_id: 40384, option_text: "परासरण तेज होता है" }
    ],
    correct_option_id: 40381,
    class_level: 9,
    difficulty: "medium"
  },
  {
    question_id: 4039,
    text: "रसधानी (वैक्यूओल) पादप कोशिका में क्या कार्य करती है?",
    options: [
      { option_id: 40391, option_text: "जल, खनिज और अपशिष्ट का संग्रहण" },
      { option_id: 40392, option_text: "प्रोटीन संश्लेषण" },
      { option_id: 40393, option_text: "ऊर्जा उत्पादन" },
      { option_id: 40394, option_text: "कोशिका विभाजन" }
    ],
    correct_option_id: 40391,
    class_level: 9,
    difficulty: "medium"
  },
  {
    question_id: 4040,
    text: "किसी तत्व की परमाणु संख्या क्या दर्शाती है?",
    options: [
      { option_id: 40401, option_text: "प्रोटॉनों की संख्या" },
      { option_id: 40402, option_text: "न्यूट्रॉनों की संख्या" },
      { option_id: 40403, option_text: "इलेक्ट्रॉनों की संख्या" },
      { option_id: 40404, option_text: "प्रोटॉन और न्यूट्रॉन का योग" }
    ],
    correct_option_id: 40401,
    class_level: 9,
    difficulty: "medium"
  },
  {
    question_id: 4041,
    text: "समस्थानिक (Isotopes) में क्या समान होता है?",
    options: [
      { option_id: 40411, option_text: "प्रोटॉन संख्या" },
      { option_id: 40412, option_text: "न्यूट्रॉन संख्या" },
      { option_id: 40413, option_text: "द्रव्यमान संख्या" },
      { option_id: 40414, option_text: "इलेक्ट्रॉन संख्या और न्यूट्रॉन संख्या" }
    ],
    correct_option_id: 40411,
    class_level: 9,
    difficulty: "medium",
    explanation: "समस्थानिकों में प्रोटॉन संख्या समान होती है लेकिन न्यूट्रॉन संख्या भिन्न होती है।"
  },
  {
    question_id: 4042,
    text: "वाष्पीकरण की दर किस कारक पर निर्भर नहीं करती?",
    options: [
      { option_id: 40421, option_text: "द्रव का रंग" },
      { option_id: 40422, option_text: "तापमान" },
      { option_id: 40423, option_text: "सतह का क्षेत्रफल" },
      { option_id: 40424, option_text: "वायु की आर्द्रता" }
    ],
    correct_option_id: 40421,
    class_level: 9,
    difficulty: "medium"
  },
  {
    question_id: 4043,
    text: "संतृप्त विलयन किसे कहते हैं?",
    options: [
      { option_id: 40431, option_text: "जिसमें अधिक विलेय नहीं घुल सकता" },
      { option_id: 40432, option_text: "जिसमें बहुत कम विलेय हो" },
      { option_id: 40433, option_text: "जिसमें केवल जल हो" },
      { option_id: 40434, option_text: "जिसमें अधिक विलायक हो" }
    ],
    correct_option_id: 40431,
    class_level: 9,
    difficulty: "medium"
  },
  {
    question_id: 4044,
    text: "क्लोरोप्लास्ट में कौन सा वर्णक पाया जाता है?",
    options: [
      { option_id: 40441, option_text: "क्लोरोफिल" },
      { option_id: 40442, option_text: "हीमोग्लोबिन" },
      { option_id: 40443, option_text: "कैरोटीन" },
      { option_id: 40444, option_text: "मेलेनिन" }
    ],
    correct_option_id: 40441,
    class_level: 9,
    difficulty: "medium"
  },
  {
    question_id: 4045,
    text: "जाइलम ऊतक का मुख्य कार्य क्या है?",
    options: [
      { option_id: 40451, option_text: "जल और खनिज लवण का ऊपर की ओर परिवहन" },
      { option_id: 40452, option_text: "भोजन का परिवहन" },
      { option_id: 40453, option_text: "ऑक्सीजन का परिवहन" },
      { option_id: 40454, option_text: "कोशिका विभाजन" }
    ],
    correct_option_id: 40451,
    class_level: 9,
    difficulty: "medium"
  },
  {
    question_id: 4046,
    text: "न्यूटन के तीसरे नियम के अनुसार क्रिया और प्रतिक्रिया कैसे होते हैं?",
    options: [
      { option_id: 40461, option_text: "समान और विपरीत दिशा में" },
      { option_id: 40462, option_text: "समान और एक ही दिशा में" },
      { option_id: 40463, option_text: "असमान और विपरीत दिशा में" },
      { option_id: 40464, option_text: "असमान और एक ही दिशा में" }
    ],
    correct_option_id: 40461,
    class_level: 9,
    difficulty: "medium"
  },
  {
    question_id: 4047,
    text: "पदार्थ की चौथी अवस्था किसे कहा जाता है?",
    options: [
      { option_id: 40471, option_text: "प्लाज्मा" },
      { option_id: 40472, option_text: "गैस" },
      { option_id: 40473, option_text: "वाष्प" },
      { option_id: 40474, option_text: "क्रिस्टल" }
    ],
    correct_option_id: 40471,
    class_level: 9,
    difficulty: "medium"
  },
  {
    question_id: 4048,
    text: "यदि किसी वस्तु पर लगने वाला परिणामी बल शून्य हो, तो वस्तु:",
    options: [
      { option_id: 40481, option_text: "विराम में रहेगी या एकसमान वेग से चलती रहेगी" },
      { option_id: 40482, option_text: "त्वरित होगी" },
      { option_id: 40483, option_text: "मंदित होगी" },
      { option_id: 40484, option_text: "तुरंत रुक जाएगी" }
    ],
    correct_option_id: 40481,
    class_level: 9,
    difficulty: "medium"
  },
  {
    question_id: 4049,
    text: "पौधे में भोजन का संचालन किसके द्वारा होता है?",
    options: [
      { option_id: 40491, option_text: "फ्लोएम" },
      { option_id: 40492, option_text: "जाइलम" },
      { option_id: 40493, option_text: "पैरेन्काइमा" },
      { option_id: 40494, option_text: "स्क्लेरेन्काइमा" }
    ],
    correct_option_id: 40491,
    class_level: 9,
    difficulty: "medium"
  },
  {
    question_id: 4050,
    text: "कार्य की परिभाषा क्या है?",
    options: [
      { option_id: 40501, option_text: "बल × विस्थापन" },
      { option_id: 40502, option_text: "बल × समय" },
      { option_id: 40503, option_text: "द्रव्यमान × त्वरण" },
      { option_id: 40504, option_text: "शक्ति × समय" }
    ],
    correct_option_id: 40501,
    class_level: 9,
    difficulty: "medium"
  },
  {
    question_id: 4051,
    text: "सोडियम क्लोराइड (NaCl) किस प्रकार का यौगिक है?",
    options: [
      { option_id: 40511, option_text: "आयनिक यौगिक" },
      { option_id: 40512, option_text: "सहसंयोजक यौगिक" },
      { option_id: 40513, option_text: "धात्विक यौगिक" },
      { option_id: 40514, option_text: "कार्बनिक यौगिक" }
    ],
    correct_option_id: 40511,
    class_level: 9,
    difficulty: "medium"
  },
  {
    question_id: 4052,
    text: "कोशिका का 'आत्मघाती थैला' किसे कहा जाता है?",
    options: [
      { option_id: 40521, option_text: "लाइसोसोम" },
      { option_id: 40522, option_text: "माइटोकॉन्ड्रिया" },
      { option_id: 40523, option_text: "राइबोसोम" },
      { option_id: 40524, option_text: "गॉल्जी बॉडी" }
    ],
    correct_option_id: 40521,
    class_level: 9,
    difficulty: "medium"
  },
  {
    question_id: 4053,
    text: "ध्वनि की चाल किस माध्यम में न्यूनतम होती है?",
    options: [
      { option_id: 40531, option_text: "गैस" },
      { option_id: 40532, option_text: "द्रव" },
      { option_id: 40533, option_text: "ठोस" },
      { option_id: 40534, option_text: "सभी में समान" }
    ],
    correct_option_id: 40531,
    class_level: 9,
    difficulty: "medium"
  },
  {
    question_id: 4054,
    text: "जीवाणु कोशिका में केन्द्रक झिल्ली नहीं होती। ऐसी कोशिका को क्या कहते हैं?",
    options: [
      { option_id: 40541, option_text: "प्रोकैरियोटिक" },
      { option_id: 40542, option_text: "यूकैरियोटिक" },
      { option_id: 40543, option_text: "पादप कोशिका" },
      { option_id: 40544, option_text: "जंतु कोशिका" }
    ],
    correct_option_id: 40541,
    class_level: 9,
    difficulty: "medium"
  },
  {
    question_id: 4055,
    text: "पृथ्वी पर किसी वस्तु का भार चंद्रमा की तुलना में कैसा होगा?",
    options: [
      { option_id: 40551, option_text: "6 गुना अधिक" },
      { option_id: 40552, option_text: "6 गुना कम" },
      { option_id: 40553, option_text: "समान" },
      { option_id: 40554, option_text: "दोगुना" }
    ],
    correct_option_id: 40551,
    class_level: 9,
    difficulty: "medium",
    explanation: "पृथ्वी का गुरुत्वाकर्षण चंद्रमा से लगभग 6 गुना अधिक है।"
  },
  {
    question_id: 4056,
    text: "किसी तत्व की द्रव्यमान संख्या क्या होती है?",
    options: [
      { option_id: 40561, option_text: "प्रोटॉन + न्यूट्रॉन" },
      { option_id: 40562, option_text: "केवल प्रोटॉन" },
      { option_id: 40563, option_text: "केवल न्यूट्रॉन" },
      { option_id: 40564, option_text: "प्रोटॉन + इलेक्ट्रॉन" }
    ],
    correct_option_id: 40561,
    class_level: 9,
    difficulty: "medium"
  },
  {
    question_id: 4057,
    text: "ओजोन परत किस वायुमंडलीय परत में पाई जाती है?",
    options: [
      { option_id: 40571, option_text: "समताप मंडल" },
      { option_id: 40572, option_text: "क्षोभ मंडल" },
      { option_id: 40573, option_text: "मध्य मंडल" },
      { option_id: 40574, option_text: "आयन मंडल" }
    ],
    correct_option_id: 40571,
    class_level: 9,
    difficulty: "medium"
  },
  {
    question_id: 4058,
    text: "मेण्डल ने अपने प्रयोग किस पौधे पर किए?",
    options: [
      { option_id: 40581, option_text: "मटर (Pea)" },
      { option_id: 40582, option_text: "गेहूँ" },
      { option_id: 40583, option_text: "चावल" },
      { option_id: 40584, option_text: "मक्का" }
    ],
    correct_option_id: 40581,
    class_level: 9,
    difficulty: "medium"
  },
  {
    question_id: 4059,
    text: "कोलाइडी विलयन का उदाहरण कौन सा है?",
    options: [
      { option_id: 40591, option_text: "दूध" },
      { option_id: 40592, option_text: "नमक का घोल" },
      { option_id: 40593, option_text: "शुद्ध जल" },
      { option_id: 40594, option_text: "हवा" }
    ],
    correct_option_id: 40591,
    class_level: 9,
    difficulty: "medium"
  },
  {
    question_id: 4060,
    text: "पौधों में वाष्पोत्सर्जन का मुख्य कार्य क्या है?",
    options: [
      { option_id: 40601, option_text: "जल और खनिजों के अवशोषण में सहायता" },
      { option_id: 40602, option_text: "भोजन बनाना" },
      { option_id: 40603, option_text: "ऑक्सीजन उत्पादन" },
      { option_id: 40604, option_text: "कोशिका विभाजन" }
    ],
    correct_option_id: 40601,
    class_level: 9,
    difficulty: "medium"
  },
  {
    question_id: 4061,
    text: "एवोगाद्रो संख्या का मान क्या है?",
    options: [
      { option_id: 40611, option_text: "6.022 × 10²³" },
      { option_id: 40612, option_text: "6.022 × 10²²" },
      { option_id: 40613, option_text: "6.022 × 10²⁴" },
      { option_id: 40614, option_text: "6.022 × 10²¹" }
    ],
    correct_option_id: 40611,
    class_level: 9,
    difficulty: "medium"
  },
  {
    question_id: 4062,
    text: "राइबोसोम का मुख्य कार्य क्या है?",
    options: [
      { option_id: 40621, option_text: "प्रोटीन संश्लेषण" },
      { option_id: 40622, option_text: "ऊर्जा उत्पादन" },
      { option_id: 40623, option_text: "कोशिका विभाजन" },
      { option_id: 40624, option_text: "प्रकाश संश्लेषण" }
    ],
    correct_option_id: 40621,
    class_level: 9,
    difficulty: "medium"
  },
  {
    question_id: 4063,
    text: "जल का क्वथनांक कितना होता है?",
    options: [
      { option_id: 40631, option_text: "100°C" },
      { option_id: 40632, option_text: "0°C" },
      { option_id: 40633, option_text: "50°C" },
      { option_id: 40634, option_text: "212°C" }
    ],
    correct_option_id: 40631,
    class_level: 9,
    difficulty: "medium"
  },
  {
    question_id: 4064,
    text: "स्क्लेरेन्काइमा ऊतक किस प्रकार की कोशिकाओं से बना होता है?",
    options: [
      { option_id: 40641, option_text: "मृत कोशिकाओं से" },
      { option_id: 40642, option_text: "जीवित कोशिकाओं से" },
      { option_id: 40643, option_text: "आधी मृत, आधी जीवित" },
      { option_id: 40644, option_text: "विभाजित कोशिकाओं से" }
    ],
    correct_option_id: 40641,
    class_level: 9,
    difficulty: "medium"
  },
  {
    question_id: 4065,
    text: "किसी वस्तु का द्रव्यमान पृथ्वी पर 60 kg है। चंद्रमा पर इसका द्रव्यमान क्या होगा?",
    options: [
      { option_id: 40651, option_text: "60 kg" },
      { option_id: 40652, option_text: "10 kg" },
      { option_id: 40653, option_text: "360 kg" },
      { option_id: 40654, option_text: "30 kg" }
    ],
    correct_option_id: 40651,
    class_level: 9,
    difficulty: "medium",
    explanation: "द्रव्यमान स्थान से स्वतंत्र होता है, केवल भार बदलता है।"
  },
  {
    question_id: 4066,
    text: "यौगिक और मिश्रण में मुख्य अंतर क्या है?",
    options: [
      { option_id: 40661, option_text: "यौगिक में तत्व रासायनिक रूप से संयुक्त होते हैं" },
      { option_id: 40662, option_text: "मिश्रण में तत्व रासायनिक रूप से संयुक्त होते हैं" },
      { option_id: 40663, option_text: "दोनों में कोई अंतर नहीं" },
      { option_id: 40664, option_text: "यौगिक को आसानी से अलग किया जा सकता है" }
    ],
    correct_option_id: 40661,
    class_level: 9,
    difficulty: "medium"
  },
  {
    question_id: 4067,
    text: "आवृत्ति का SI मात्रक क्या है?",
    options: [
      { option_id: 40671, option_text: "हर्ट्ज (Hz)" },
      { option_id: 40672, option_text: "डेसिबल (dB)" },
      { option_id: 40673, option_text: "सेकंड (s)" },
      { option_id: 40674, option_text: "मीटर (m)" }
    ],
    correct_option_id: 40671,
    class_level: 9,
    difficulty: "medium"
  },
  {
    question_id: 4068,
    text: "प्रकाश संश्लेषण के दौरान ऊर्जा का रूपांतरण कैसे होता है?",
    options: [
      { option_id: 40681, option_text: "प्रकाश ऊर्जा से रासायनिक ऊर्जा में" },
      { option_id: 40682, option_text: "रासायनिक ऊर्जा से प्रकाश ऊर्जा में" },
      { option_id: 40683, option_text: "ऊष्मा ऊर्जा से प्रकाश ऊर्जा में" },
      { option_id: 40684, option_text: "यांत्रिक ऊर्जा से रासायनिक ऊर्जा में" }
    ],
    correct_option_id: 40681,
    class_level: 9,
    difficulty: "medium"
  },
  {
    question_id: 4069,
    text: "मनुष्य में कितनी जोड़ी पसलियाँ होती हैं?",
    options: [
      { option_id: 40691, option_text: "12 जोड़ी" },
      { option_id: 40692, option_text: "10 जोड़ी" },
      { option_id: 40693, option_text: "14 जोड़ी" },
      { option_id: 40694, option_text: "11 जोड़ी" }
    ],
    correct_option_id: 40691,
    class_level: 9,
    difficulty: "medium"
  },
  {
    question_id: 4070,
    text: "पेड़-पौधों में नाइट्रोजन किस रूप में अवशोषित होती है?",
    options: [
      { option_id: 40701, option_text: "नाइट्रेट और अमोनियम आयनों के रूप में" },
      { option_id: 40702, option_text: "गैसीय रूप में" },
      { option_id: 40703, option_text: "ठोस रूप में" },
      { option_id: 40704, option_text: "प्रोटीन के रूप में" }
    ],
    correct_option_id: 40701,
    class_level: 9,
    difficulty: "medium"
  },
  {
    question_id: 4071,
    text: "शुक्राणु और अंडाणु के संलयन को क्या कहते हैं?",
    options: [
      { option_id: 40711, option_text: "निषेचन (Fertilization)" },
      { option_id: 40712, option_text: "परागण" },
      { option_id: 40713, option_text: "अंकुरण" },
      { option_id: 40714, option_text: "विभाजन" }
    ],
    correct_option_id: 40711,
    class_level: 9,
    difficulty: "medium"
  },
  {
    question_id: 4072,
    text: "रासायनिक अभिक्रिया में द्रव्यमान संरक्षण के नियम का क्या अर्थ है?",
    options: [
      { option_id: 40721, option_text: "अभिकारकों का कुल द्रव्यमान = उत्पादों का कुल द्रव्यमान" },
      { option_id: 40722, option_text: "अभिकारकों का द्रव्यमान बढ़ता है" },
      { option_id: 40723, option_text: "उत्पादों का द्रव्यमान कम होता है" },
      { option_id: 40724, option_text: "द्रव्यमान नष्ट हो जाता है" }
    ],
    correct_option_id: 40721,
    class_level: 9,
    difficulty: "medium"
  },
  {
    question_id: 4073,
    text: "मानव हृदय में कितने कक्ष होते हैं?",
    options: [
      { option_id: 40731, option_text: "4 कक्ष" },
      { option_id: 40732, option_text: "2 कक्ष" },
      { option_id: 40733, option_text: "3 कक्ष" },
      { option_id: 40734, option_text: "5 कक्ष" }
    ],
    correct_option_id: 40731,
    class_level: 9,
    difficulty: "medium"
  },
  {
    question_id: 4074,
    text: "ध्वनि तरंगें किस प्रकार की तरंगें हैं?",
    options: [
      { option_id: 40741, option_text: "अनुदैर्ध्य तरंगें" },
      { option_id: 40742, option_text: "अनुप्रस्थ तरंगें" },
      { option_id: 40743, option_text: "विद्युत चुम्बकीय तरंगें" },
      { option_id: 40744, option_text: "प्रकाश तरंगें" }
    ],
    correct_option_id: 40741,
    class_level: 9,
    difficulty: "medium"
  },
  {
    question_id: 4075,
    text: "मीथेन (CH₄) का आणविक द्रव्यमान क्या है? (C=12, H=1)",
    options: [
      { option_id: 40751, option_text: "16" },
      { option_id: 40752, option_text: "12" },
      { option_id: 40753, option_text: "18" },
      { option_id: 40754, option_text: "14" }
    ],
    correct_option_id: 40751,
    class_level: 9,
    difficulty: "medium",
    explanation: "CH₄ = 12 + (4×1) = 16"
  },

  // ========== CLASS 9 - HARD LEVEL (20 Questions) ==========
  {
    question_id: 4076,
    text: "यदि किसी वस्तु का प्रारंभिक वेग 10 m/s है और यह 5 m/s² के एकसमान त्वरण से चल रही है, तो 4 सेकंड बाद इसका वेग क्या होगा?",
    options: [
      { option_id: 40761, option_text: "30 m/s" },
      { option_id: 40762, option_text: "20 m/s" },
      { option_id: 40763, option_text: "25 m/s" },
      { option_id: 40764, option_text: "15 m/s" }
    ],
    correct_option_id: 40761,
    class_level: 9,
    difficulty: "hard",
    explanation: "v = u + at = 10 + (5×4) = 10 + 20 = 30 m/s"
  },
  {
    question_id: 4077,
    text: "पादप कोशिका और जंतु कोशिका में सबसे महत्वपूर्ण अंतर क्या है?",
    options: [
      { option_id: 40771, option_text: "पादप कोशिका में कोशिका भित्ति और क्लोरोप्लास्ट होते हैं" },
      { option_id: 40772, option_text: "जंतु कोशिका में केन्द्रक नहीं होता" },
      { option_id: 40773, option_text: "पादप कोशिका में माइटोकॉन्ड्रिया नहीं होता" },
      { option_id: 40774, option_text: "जंतु कोशिका में कोशिका झिल्ली नहीं होती" }
    ],
    correct_option_id: 40771,
    class_level: 9,
    difficulty: "hard"
  },
  {
    question_id: 4078,
    text: "संवेग संरक्षण का नियम किस स्थिति में लागू होता है?",
    options: [
      { option_id: 40781, option_text: "जब बाहरी बल शून्य हो" },
      { option_id: 40782, option_text: "जब बाहरी बल अधिकतम हो" },
      { option_id: 40783, option_text: "केवल गुरुत्वाकर्षण बल के अंतर्गत" },
      { option_id: 40784, option_text: "हमेशा लागू होता है" }
    ],
    correct_option_id: 40781,
    class_level: 9,
    difficulty: "hard"
  },
  {
    question_id: 4079,
    text: "क्रोमैटिन, क्रोमोसोम और जीन में क्या संबंध है?",
    options: [
      { option_id: 40791, option_text: "क्रोमैटिन → क्रोमोसोम → जीन (DNA का भाग)" },
      { option_id: 40792, option_text: "जीन → क्रोमोसोम → क्रोमैटिन" },
      { option_id: 40793, option_text: "सभी अलग-अलग संरचनाएं हैं" },
      { option_id: 40794, option_text: "तीनों एक ही चीज हैं" }
    ],
    correct_option_id: 40791,
    class_level: 9,
    difficulty: "hard"
  },
  {
    question_id: 4080,
    text: "परमाणु के इलेक्ट्रॉन विन्यास में K, L, M कोशों में अधिकतम कितने इलेक्ट्रॉन हो सकते हैं?",
    options: [
      { option_id: 40801, option_text: "2, 8, 18" },
      { option_id: 40802, option_text: "2, 8, 8" },
      { option_id: 40803, option_text: "8, 8, 18" },
      { option_id: 40804, option_text: "2, 6, 10" }
    ],
    correct_option_id: 40801,
    class_level: 9,
    difficulty: "hard",
    explanation: "2n² सूत्र के अनुसार: K=2(1)²=2, L=2(2)²=8, M=2(3)²=18"
  },
  {
    question_id: 4081,
    text: "ऊर्जा संरक्षण के नियम का क्या अर्थ है?",
    options: [
      { option_id: 40811, option_text: "ऊर्जा न तो उत्पन्न की जा सकती है न नष्ट, केवल रूपांतरित होती है" },
      { option_id: 40812, option_text: "ऊर्जा हमेशा बढ़ती है" },
      { option_id: 40813, option_text: "ऊर्जा हमेशा कम होती है" },
      { option_id: 40814, option_text: "ऊर्जा स्थिर रहती है" }
    ],
    correct_option_id: 40811,
    class_level: 9,
    difficulty: "hard"
  },
  {
    question_id: 4082,
    text: "टिंडल प्रभाव किस प्रकार के मिश्रण में देखा जाता है?",
    options: [
      { option_id: 40821, option_text: "कोलाइडी विलयन में" },
      { option_id: 40822, option_text: "वास्तविक विलयन में" },
      { option_id: 40823, option_text: "निलंबन में" },
      { option_id: 40824, option_text: "केवल जल में" }
    ],
    correct_option_id: 40821,
    class_level: 9,
    difficulty: "hard"
  },
  {
    question_id: 4083,
    text: "विभिन्न प्रकार के ऊतक कैसे बनते हैं?",
    options: [
      { option_id: 40831, option_text: "कोशिका विभेदन द्वारा" },
      { option_id: 40832, option_text: "कोशिका संलयन द्वारा" },
      { option_id: 40833, option_text: "कोशिका मृत्यु द्वारा" },
      { option_id: 40834, option_text: "कोशिका प्रवसन द्वारा" }
    ],
    correct_option_id: 40831,
    class_level: 9,
    difficulty: "hard"
  },
  {
    question_id: 4084,
    text: "गुरुत्वाकर्षण का सार्वत्रिक नियम किसने दिया?",
    options: [
      { option_id: 40841, option_text: "न्यूटन" },
      { option_id: 40842, option_text: "गैलीलियो" },
      { option_id: 40843, option_text: "आइंस्टीन" },
      { option_id: 40844, option_text: "केप्लर" }
    ],
    correct_option_id: 40841,
    class_level: 9,
    difficulty: "hard"
  },
  {
    question_id: 4085,
    text: "एक मोल किसी पदार्थ में कितने कण होते हैं?",
    options: [
      { option_id: 40851, option_text: "6.022 × 10²³" },
      { option_id: 40852, option_text: "6.022 × 10²²" },
      { option_id: 40853, option_text: "6.022 × 10²⁴" },
      { option_id: 40854, option_text: "6.022 × 10²¹" }
    ],
    correct_option_id: 40851,
    class_level: 9,
    difficulty: "hard"
  },
  {
    question_id: 4086,
    text: "मीओसिस कोशिका विभाजन का मुख्य उद्देश्य क्या है?",
    options: [
      { option_id: 40861, option_text: "युग्मक (गैमीट) निर्माण" },
      { option_id: 40862, option_text: "वृद्धि" },
      { option_id: 40863, option_text: "मरम्मत" },
      { option_id: 40864, option_text: "पोषण" }
    ],
    correct_option_id: 40861,
    class_level: 9,
    difficulty: "hard"
  },
  {
    question_id: 4087,
    text: "प्रकाश की चाल ध्वनि की चाल से कितनी तेज है?",
    options: [
      { option_id: 40871, option_text: "लगभग 1 मिलियन गुना" },
      { option_id: 40872, option_text: "100 गुना" },
      { option_id: 40873, option_text: "1000 गुना" },
      { option_id: 40874, option_text: "10000 गुना" }
    ],
    correct_option_id: 40871,
    class_level: 9,
    difficulty: "hard",
    explanation: "प्रकाश ≈ 3×10⁸ m/s, ध्वनि ≈ 340 m/s"
  },
  {
    question_id: 4088,
    text: "नाइट्रोजन स्थिरीकरण में कौन सा जीवाणु मुख्य भूमिका निभाता है?",
    options: [
      { option_id: 40881, option_text: "राइजोबियम" },
      { option_id: 40882, option_text: "ई. कोलाई" },
      { option_id: 40883, option_text: "लैक्टोबैसिलस" },
      { option_id: 40884, option_text: "स्ट्रेप्टोकोकस" }
    ],
    correct_option_id: 40881,
    class_level: 9,
    difficulty: "hard"
  },
  {
    question_id: 4089,
    text: "यदि किसी पिंड की ऊंचाई बढ़ाई जाए तो उसकी स्थितिज ऊर्जा पर क्या प्रभाव पड़ता है?",
    options: [
      { option_id: 40891, option_text: "स्थितिज ऊर्जा बढ़ती है" },
      { option_id: 40892, option_text: "स्थितिज ऊर्जा घटती है" },
      { option_id: 40893, option_text: "स्थितिज ऊर्जा समान रहती है" },
      { option_id: 40894, option_text: "स्थितिज ऊर्जा शून्य हो जाती है" }
    ],
    correct_option_id: 40891,
    class_level: 9,
    difficulty: "hard",
    explanation: "PE = mgh, ऊंचाई (h) बढ़ने से PE बढ़ती है।"
  },
  {
    question_id: 4090,
    text: "रसायन विज्ञान में 'सूत्र इकाई द्रव्यमान' किस प्रकार के यौगिकों के लिए प्रयोग होता है?",
    options: [
      { option_id: 40901, option_text: "आयनिक यौगिकों के लिए" },
      { option_id: 40902, option_text: "सहसंयोजक यौगिकों के लिए" },
      { option_id: 40903, option_text: "कार्बनिक यौगिकों के लिए" },
      { option_id: 40904, option_text: "धातुओं के लिए" }
    ],
    correct_option_id: 40901,
    class_level: 9,
    difficulty: "hard"
  },
  {
    question_id: 4091,
    text: "जीवों के पांच जगत वर्गीकरण में कवक (Fungi) की मुख्य विशेषता क्या है?",
    options: [
      { option_id: 40911, option_text: "विषमपोषी, कोशिका भित्ति काइटिन की बनी" },
      { option_id: 40912, option_text: "स्वपोषी, क्लोरोफिल युक्त" },
      { option_id: 40913, option_text: "एककोशिकीय, केन्द्रक रहित" },
      { option_id: 40914, option_text: "बहुकोशिकीय, चलायमान" }
    ],
    correct_option_id: 40911,
    class_level: 9,
    difficulty: "hard"
  },
  {
    question_id: 4092,
    text: "ऑक्सीजन परमाणु की संयोजकता क्या है?",
    options: [
      { option_id: 40921, option_text: "2" },
      { option_id: 40922, option_text: "1" },
      { option_id: 40923, option_text: "3" },
      { option_id: 40924, option_text: "4" }
    ],
    correct_option_id: 40921,
    class_level: 9,
    difficulty: "hard",
    explanation: "ऑक्सीजन का इलेक्ट्रॉन विन्यास 2,6 है। इसे स्थायी होने के लिए 2 इलेक्ट्रॉन चाहिए, अतः संयोजकता = 2"
  },
  {
    question_id: 4093,
    text: "स्टोमेटा (रंध्र) का खुलना और बंद होना किस कोशिका द्वारा नियंत्रित होता है?",
    options: [
      { option_id: 40931, option_text: "द्वार कोशिका (Guard cells)" },
      { option_id: 40932, option_text: "पैरेन्काइमा कोशिका" },
      { option_id: 40933, option_text: "स्क्लेरेन्काइमा कोशिका" },
      { option_id: 40934, option_text: "कॉलेन्काइमा कोशिका" }
    ],
    correct_option_id: 40931,
    class_level: 9,
    difficulty: "hard"
  },
  {
    question_id: 4094,
    text: "न्यूटन के गति के दूसरे नियम का गणितीय रूप क्या है?",
    options: [
      { option_id: 40941, option_text: "F = ma" },
      { option_id: 40942, option_text: "F = mv" },
      { option_id: 40943, option_text: "F = m/a" },
      { option_id: 40944, option_text: "F = ma²" }
    ],
    correct_option_id: 40941,
    class_level: 9,
    difficulty: "hard"
  },
  {
    question_id: 4095,
    text: "प्रतिध्वनि सुनने के लिए श्रोता और परावर्तक सतह के बीच न्यूनतम दूरी कितनी होनी चाहिए?",
    options: [
      { option_id: 40951, option_text: "17 मीटर" },
      { option_id: 40952, option_text: "34 मीटर" },
      { option_id: 40953, option_text: "10 मीटर" },
      { option_id: 40954, option_text: "50 मीटर" }
    ],
    correct_option_id: 40951,
    class_level: 9,
    difficulty: "hard",
    explanation: "ध्वनि की चाल 340 m/s और कान द्वारा ध्वनि को पहचानने का समय 0.1s होने से दूरी = (340×0.1)/2 = 17m"
  }
];

export default scienceQuestions;

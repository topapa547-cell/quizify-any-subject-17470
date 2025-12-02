export interface TrueFalseQuestion {
  id: string;
  statement: string;
  statement_english?: string;
  answer: boolean;
  subject: string;
  class_level: number;
  chapter?: string;
  explanation?: string;
}

export const trueFalseData: TrueFalseQuestion[] = [
  // Geography - राष्ट्रीय अर्थव्यवस्था की जीवन रेखाएं
  {
    id: "tf-geo-1",
    statement: "भारत में सड़क परिवहन रेल परिवहन से पहले आरंभ हुआ।",
    statement_english: "Road transport started before rail transport in India.",
    answer: true,
    subject: "social",
    class_level: 10,
    chapter: "राष्ट्रीय अर्थव्यवस्था की जीवन रेखाएं",
    explanation: "सड़क परिवहन भारत में प्राचीन काल से है, जबकि रेल परिवहन 1853 में शुरू हुआ।"
  },
  {
    id: "tf-geo-2",
    statement: "परिवहन, संचार और व्यापार एक दूसरे के पूरक हैं।",
    statement_english: "Transport, communication and trade are complementary to each other.",
    answer: true,
    subject: "social",
    class_level: 10,
    chapter: "राष्ट्रीय अर्थव्यवस्था की जीवन रेखाएं"
  },
  {
    id: "tf-geo-3",
    statement: "भारत पेट्रोलियम का निर्यातक देश है।",
    statement_english: "India is an exporter of petroleum.",
    answer: false,
    subject: "social",
    class_level: 10,
    chapter: "राष्ट्रीय अर्थव्यवस्था की जीवन रेखाएं",
    explanation: "भारत पेट्रोलियम का आयातक देश है, निर्यातक नहीं।"
  },
  {
    id: "tf-geo-4",
    statement: "पवनहंस एक हेलीकॉप्टर सेवा है।",
    statement_english: "Pawan Hans is a helicopter service.",
    answer: true,
    subject: "social",
    class_level: 10,
    chapter: "राष्ट्रीय अर्थव्यवस्था की जीवन रेखाएं"
  },
  {
    id: "tf-geo-5",
    statement: "कोलकाता एक समुद्री पत्तन है।",
    statement_english: "Kolkata is a sea port.",
    answer: false,
    subject: "social",
    class_level: 10,
    chapter: "राष्ट्रीय अर्थव्यवस्था की जीवन रेखाएं",
    explanation: "कोलकाता एक अंतःस्थलीय नदी पत्तन है, समुद्री पत्तन नहीं।"
  },
  // History - यूरोप में राष्ट्रवाद
  {
    id: "tf-his-1",
    statement: "1789 में फ्रांसीसी क्रांति हुई थी।",
    statement_english: "The French Revolution occurred in 1789.",
    answer: true,
    subject: "social",
    class_level: 10,
    chapter: "यूरोप में राष्ट्रवाद का उदय"
  },
  {
    id: "tf-his-2",
    statement: "नेपोलियन इटली का नागरिक था।",
    statement_english: "Napoleon was a citizen of Italy.",
    answer: false,
    subject: "social",
    class_level: 10,
    chapter: "यूरोप में राष्ट्रवाद का उदय",
    explanation: "नेपोलियन फ्रांस का नागरिक था।"
  },
  {
    id: "tf-his-3",
    statement: "जर्मनी का एकीकरण बिस्मार्क ने किया।",
    statement_english: "Germany was unified by Bismarck.",
    answer: true,
    subject: "social",
    class_level: 10,
    chapter: "यूरोप में राष्ट्रवाद का उदय"
  },
  {
    id: "tf-his-4",
    statement: "वियना कांग्रेस 1848 में हुई थी।",
    statement_english: "The Vienna Congress was held in 1848.",
    answer: false,
    subject: "social",
    class_level: 10,
    chapter: "यूरोप में राष्ट्रवाद का उदय",
    explanation: "वियना कांग्रेस 1815 में हुई थी।"
  },
  // Political Science - सत्ता की साझेदारी
  {
    id: "tf-pol-1",
    statement: "बेल्जियम में सामुदायिक सरकार होती है।",
    statement_english: "Belgium has a community government.",
    answer: true,
    subject: "social",
    class_level: 10,
    chapter: "सत्ता की साझेदारी"
  },
  {
    id: "tf-pol-2",
    statement: "भारत एकात्मक राज्य है।",
    statement_english: "India is a unitary state.",
    answer: false,
    subject: "social",
    class_level: 10,
    chapter: "संघवाद",
    explanation: "भारत एक संघीय राज्य है।"
  },
  {
    id: "tf-pol-3",
    statement: "श्रीलंका में बहुसंख्यकवाद अपनाया गया।",
    statement_english: "Sri Lanka adopted majoritarianism.",
    answer: true,
    subject: "social",
    class_level: 10,
    chapter: "सत्ता की साझेदारी"
  },
  {
    id: "tf-pol-4",
    statement: "पंचायती राज का सबसे ऊपरी स्तर ग्राम पंचायत है।",
    statement_english: "Gram Panchayat is the topmost level of Panchayati Raj.",
    answer: false,
    subject: "social",
    class_level: 10,
    chapter: "संघवाद",
    explanation: "जिला परिषद पंचायती राज का सबसे ऊपरी स्तर है।"
  },
  // Economics - विकास
  {
    id: "tf-eco-1",
    statement: "GDP में केवल अंतिम वस्तुओं को शामिल किया जाता है।",
    statement_english: "Only final goods are included in GDP.",
    answer: true,
    subject: "social",
    class_level: 10,
    chapter: "विकास"
  },
  {
    id: "tf-eco-2",
    statement: "प्राथमिक क्षेत्रक में विनिर्माण शामिल है।",
    statement_english: "Primary sector includes manufacturing.",
    answer: false,
    subject: "social",
    class_level: 10,
    chapter: "विकास",
    explanation: "विनिर्माण द्वितीयक क्षेत्रक में शामिल है।"
  },
  {
    id: "tf-eco-3",
    statement: "MGNREGA में 100 दिन के रोजगार की गारंटी है।",
    statement_english: "MGNREGA guarantees 100 days of employment.",
    answer: true,
    subject: "social",
    class_level: 10,
    chapter: "विकास"
  },
  // Math True/False
  {
    id: "tf-math-1",
    statement: "sin 90° = 1",
    answer: true,
    subject: "math",
    class_level: 10,
    chapter: "त्रिकोणमिति"
  },
  {
    id: "tf-math-2",
    statement: "cos 0° = 0",
    answer: false,
    subject: "math",
    class_level: 10,
    chapter: "त्रिकोणमिति",
    explanation: "cos 0° = 1"
  },
  {
    id: "tf-math-3",
    statement: "tan 45° = 1",
    answer: true,
    subject: "math",
    class_level: 10,
    chapter: "त्रिकोणमिति"
  },
  {
    id: "tf-math-4",
    statement: "द्विघात समीकरण के तीन मूल हो सकते हैं।",
    statement_english: "A quadratic equation can have three roots.",
    answer: false,
    subject: "math",
    class_level: 10,
    chapter: "द्विघात समीकरण",
    explanation: "द्विघात समीकरण के अधिकतम दो मूल होते हैं।"
  },
  {
    id: "tf-math-5",
    statement: "(a+b)² = a² + 2ab + b²",
    answer: true,
    subject: "math",
    class_level: 10,
    chapter: "बीजगणित"
  },
  // Science True/False
  {
    id: "tf-sci-1",
    statement: "विद्युत धारा का SI मात्रक वोल्ट है।",
    statement_english: "The SI unit of electric current is Volt.",
    answer: false,
    subject: "science",
    class_level: 10,
    chapter: "विद्युत",
    explanation: "विद्युत धारा का SI मात्रक एम्पियर है।"
  },
  {
    id: "tf-sci-2",
    statement: "pH = 7 उदासीन विलयन दर्शाता है।",
    statement_english: "pH = 7 indicates neutral solution.",
    answer: true,
    subject: "science",
    class_level: 10,
    chapter: "अम्ल, क्षार और लवण"
  },
  {
    id: "tf-sci-3",
    statement: "प्रकाश संश्लेषण में ऑक्सीजन मुक्त होती है।",
    statement_english: "Oxygen is released during photosynthesis.",
    answer: true,
    subject: "science",
    class_level: 10,
    chapter: "जैव प्रक्रम"
  },
  {
    id: "tf-sci-4",
    statement: "उत्तल दर्पण सदैव आभासी प्रतिबिंब बनाता है।",
    statement_english: "Convex mirror always forms virtual image.",
    answer: true,
    subject: "science",
    class_level: 10,
    chapter: "प्रकाश"
  },
  {
    id: "tf-sci-5",
    statement: "जंग लगना एक भौतिक परिवर्तन है।",
    statement_english: "Rusting is a physical change.",
    answer: false,
    subject: "science",
    class_level: 10,
    chapter: "रासायनिक अभिक्रियाएं",
    explanation: "जंग लगना एक रासायनिक परिवर्तन है।"
  },
  // Hindi True/False
  {
    id: "tf-hin-1",
    statement: "'अग्नि' का पर्यायवाची 'जल' है।",
    answer: false,
    subject: "hindi",
    class_level: 10,
    explanation: "'अग्नि' का पर्यायवाची 'आग' है।"
  },
  {
    id: "tf-hin-2",
    statement: "'सुख' का विलोम 'दुख' है।",
    answer: true,
    subject: "hindi",
    class_level: 10
  },
  {
    id: "tf-hin-3",
    statement: "संज्ञा किसी व्यक्ति, वस्तु या स्थान का नाम है।",
    answer: true,
    subject: "hindi",
    class_level: 10
  },
  // English True/False
  {
    id: "tf-eng-1",
    statement: "'Happy' is an antonym of 'Joyful'.",
    answer: false,
    subject: "english",
    class_level: 10,
    explanation: "'Happy' and 'Joyful' are synonyms, not antonyms."
  },
  {
    id: "tf-eng-2",
    statement: "A noun is a naming word.",
    answer: true,
    subject: "english",
    class_level: 10
  },
  {
    id: "tf-eng-3",
    statement: "The past tense of 'go' is 'goed'.",
    answer: false,
    subject: "english",
    class_level: 10,
    explanation: "The past tense of 'go' is 'went'."
  }
];

export const getTrueFalseBySubject = (subject: string, classLevel: number) => {
  return trueFalseData.filter(
    q => q.subject === subject && q.class_level === classLevel
  );
};

export const getRandomTrueFalse = (count: number = 10, subject?: string) => {
  let filtered = trueFalseData;
  if (subject) {
    filtered = filtered.filter(q => q.subject === subject);
  }
  return filtered.sort(() => Math.random() - 0.5).slice(0, count);
};

export interface FillBlankQuestion {
  id: string;
  sentence: string;
  sentence_english?: string;
  answer: string;
  options: string[];
  subject: string;
  class_level: number;
  chapter?: string;
}

export const fillBlanksData: FillBlankQuestion[] = [
  // Geography - Chapter 7: राष्ट्रीय अर्थव्यवस्था की जीवन रेखाएं
  {
    id: "fb-geo-1",
    sentence: "जल परिवहन देश का सबसे _______ परिवहन का साधन है।",
    sentence_english: "Water transport is the _______ mode of transport in the country.",
    answer: "सस्ता",
    options: ["महंगा", "सस्ता", "तेज", "धीमा"],
    subject: "social",
    class_level: 10,
    chapter: "राष्ट्रीय अर्थव्यवस्था की जीवन रेखाएं"
  },
  {
    id: "fb-geo-2",
    sentence: "भारत विश्व के सर्वाधिक _______ जाल वाले देशों में से एक है।",
    sentence_english: "India is one of the countries with the largest _______ network in the world.",
    answer: "सड़क",
    options: ["रेल", "सड़क", "वायु", "जल"],
    subject: "social",
    class_level: 10,
    chapter: "राष्ट्रीय अर्थव्यवस्था की जीवन रेखाएं"
  },
  {
    id: "fb-geo-3",
    sentence: "राष्ट्रीय राजमार्गों का निर्माण एवं रखरखाव _______ की जिम्मेदारी है।",
    sentence_english: "Construction and maintenance of National Highways is the responsibility of _______.",
    answer: "केंद्रीय लोक निर्माण विभाग",
    options: ["राज्य सरकार", "केंद्रीय लोक निर्माण विभाग", "नगर निगम", "ग्राम पंचायत"],
    subject: "social",
    class_level: 10,
    chapter: "राष्ट्रीय अर्थव्यवस्था की जीवन रेखाएं"
  },
  {
    id: "fb-geo-4",
    sentence: "भारत में पहली रेलगाड़ी _______ में मुंबई से थाणे के बीच चली।",
    sentence_english: "The first train in India ran between Mumbai and Thane in _______.",
    answer: "1853",
    options: ["1847", "1853", "1857", "1869"],
    subject: "social",
    class_level: 10,
    chapter: "राष्ट्रीय अर्थव्यवस्था की जीवन रेखाएं"
  },
  {
    id: "fb-geo-5",
    sentence: "_______ हेलीकॉप्टर सेवा उत्तर-पूर्वी राज्यों में कार्यरत है।",
    sentence_english: "_______ helicopter service operates in North-Eastern states.",
    answer: "पवनहंस",
    options: ["एयर इंडिया", "पवनहंस", "इंडिगो", "स्पाइसजेट"],
    subject: "social",
    class_level: 10,
    chapter: "राष्ट्रीय अर्थव्यवस्था की जीवन रेखाएं"
  },
  {
    id: "fb-geo-6",
    sentence: "कोलकाता एक _______ नदी पत्तन है।",
    sentence_english: "Kolkata is an _______ river port.",
    answer: "अंतःस्थलीय",
    options: ["समुद्री", "अंतःस्थलीय", "कृत्रिम", "प्राकृतिक"],
    subject: "social",
    class_level: 10,
    chapter: "राष्ट्रीय अर्थव्यवस्था की जीवन रेखाएं"
  },
  // History - यूरोप में राष्ट्रवाद का उदय
  {
    id: "fb-his-1",
    sentence: "फ्रांसीसी क्रांति _______ में हुई थी।",
    sentence_english: "The French Revolution occurred in _______.",
    answer: "1789",
    options: ["1776", "1789", "1815", "1848"],
    subject: "social",
    class_level: 10,
    chapter: "यूरोप में राष्ट्रवाद का उदय"
  },
  {
    id: "fb-his-2",
    sentence: "वियना कांग्रेस _______ में आयोजित हुई।",
    sentence_english: "The Vienna Congress was held in _______.",
    answer: "1815",
    options: ["1789", "1815", "1848", "1871"],
    subject: "social",
    class_level: 10,
    chapter: "यूरोप में राष्ट्रवाद का उदय"
  },
  {
    id: "fb-his-3",
    sentence: "जर्मनी का एकीकरण _______ में पूरा हुआ।",
    sentence_english: "The unification of Germany was completed in _______.",
    answer: "1871",
    options: ["1848", "1861", "1871", "1880"],
    subject: "social",
    class_level: 10,
    chapter: "यूरोप में राष्ट्रवाद का उदय"
  },
  {
    id: "fb-his-4",
    sentence: "इटली के एकीकरण में _______ की महत्वपूर्ण भूमिका थी।",
    sentence_english: "_______ played an important role in the unification of Italy.",
    answer: "मेजिनी",
    options: ["नेपोलियन", "मेजिनी", "बिस्मार्क", "गैरीबाल्डी"],
    subject: "social",
    class_level: 10,
    chapter: "यूरोप में राष्ट्रवाद का उदय"
  },
  // Political Science - सत्ता की साझेदारी
  {
    id: "fb-pol-1",
    sentence: "बेल्जियम में _______ भाषा बोलने वाले बहुसंख्यक हैं।",
    sentence_english: "In Belgium, _______ speaking people are in majority.",
    answer: "डच",
    options: ["फ्रेंच", "डच", "जर्मन", "अंग्रेजी"],
    subject: "social",
    class_level: 10,
    chapter: "सत्ता की साझेदारी"
  },
  {
    id: "fb-pol-2",
    sentence: "श्रीलंका में _______ बहुसंख्यक समुदाय है।",
    sentence_english: "In Sri Lanka, _______ is the majority community.",
    answer: "सिंहली",
    options: ["तमिल", "सिंहली", "मुस्लिम", "बौद्ध"],
    subject: "social",
    class_level: 10,
    chapter: "सत्ता की साझेदारी"
  },
  {
    id: "fb-pol-3",
    sentence: "भारत एक _______ राज्य है।",
    sentence_english: "India is a _______ state.",
    answer: "संघीय",
    options: ["एकात्मक", "संघीय", "राजतंत्र", "तानाशाही"],
    subject: "social",
    class_level: 10,
    chapter: "संघवाद"
  },
  {
    id: "fb-pol-4",
    sentence: "पंचायती राज व्यवस्था में सबसे निचला स्तर _______ है।",
    sentence_english: "The lowest level in Panchayati Raj system is _______.",
    answer: "ग्राम पंचायत",
    options: ["जिला परिषद", "ग्राम पंचायत", "पंचायत समिति", "नगर पालिका"],
    subject: "social",
    class_level: 10,
    chapter: "संघवाद"
  },
  // Economics - विकास
  {
    id: "fb-eco-1",
    sentence: "प्राथमिक क्षेत्रक को _______ क्षेत्रक भी कहते हैं।",
    sentence_english: "Primary sector is also called _______ sector.",
    answer: "कृषि",
    options: ["सेवा", "कृषि", "विनिर्माण", "औद्योगिक"],
    subject: "social",
    class_level: 10,
    chapter: "विकास"
  },
  {
    id: "fb-eco-2",
    sentence: "भारत की राष्ट्रीय आय की गणना _______ करता है।",
    sentence_english: "India's national income is calculated by _______.",
    answer: "केंद्रीय सांख्यिकी कार्यालय",
    options: ["RBI", "केंद्रीय सांख्यिकी कार्यालय", "NITI आयोग", "वित्त मंत्रालय"],
    subject: "social",
    class_level: 10,
    chapter: "विकास"
  },
  {
    id: "fb-eco-3",
    sentence: "HDI का पूर्ण रूप _______ है।",
    sentence_english: "The full form of HDI is _______.",
    answer: "मानव विकास सूचकांक",
    options: ["मानव विकास सूचकांक", "उच्च विकास सूचकांक", "स्वास्थ्य विकास सूचकांक", "आर्थिक विकास सूचकांक"],
    subject: "social",
    class_level: 10,
    chapter: "विकास"
  },
  {
    id: "fb-eco-4",
    sentence: "MGNREGA में _______ दिन के रोजगार की गारंटी है।",
    sentence_english: "MGNREGA guarantees _______ days of employment.",
    answer: "100",
    options: ["50", "75", "100", "150"],
    subject: "social",
    class_level: 10,
    chapter: "विकास"
  },
  // Math Fill Blanks
  {
    id: "fb-math-1",
    sentence: "sin²θ + cos²θ = _______",
    answer: "1",
    options: ["0", "1", "2", "θ"],
    subject: "math",
    class_level: 10,
    chapter: "त्रिकोणमिति"
  },
  {
    id: "fb-math-2",
    sentence: "tan θ = sin θ / _______",
    answer: "cos θ",
    options: ["sin θ", "cos θ", "tan θ", "cot θ"],
    subject: "math",
    class_level: 10,
    chapter: "त्रिकोणमिति"
  },
  {
    id: "fb-math-3",
    sentence: "द्विघात समीकरण के अधिकतम _______ मूल होते हैं।",
    sentence_english: "A quadratic equation has at most _______ roots.",
    answer: "दो",
    options: ["एक", "दो", "तीन", "चार"],
    subject: "math",
    class_level: 10,
    chapter: "द्विघात समीकरण"
  },
  {
    id: "fb-math-4",
    sentence: "समांतर श्रेढ़ी का सामान्य पद a + (n-1)_______ होता है।",
    answer: "d",
    options: ["a", "n", "d", "r"],
    subject: "math",
    class_level: 10,
    chapter: "समांतर श्रेढ़ी"
  },
  // Science Fill Blanks
  {
    id: "fb-sci-1",
    sentence: "विद्युत धारा का SI मात्रक _______ है।",
    sentence_english: "The SI unit of electric current is _______.",
    answer: "एम्पियर",
    options: ["वोल्ट", "एम्पियर", "ओम", "वाट"],
    subject: "science",
    class_level: 10,
    chapter: "विद्युत"
  },
  {
    id: "fb-sci-2",
    sentence: "pH मान 7 से कम होने पर विलयन _______ होता है।",
    sentence_english: "When pH value is less than 7, the solution is _______.",
    answer: "अम्लीय",
    options: ["अम्लीय", "क्षारीय", "उदासीन", "लवणीय"],
    subject: "science",
    class_level: 10,
    chapter: "अम्ल, क्षार और लवण"
  },
  {
    id: "fb-sci-3",
    sentence: "प्रकाश संश्लेषण की क्रिया _______ में होती है।",
    sentence_english: "Photosynthesis takes place in _______.",
    answer: "पत्तियों",
    options: ["जड़ों", "तनों", "पत्तियों", "फूलों"],
    subject: "science",
    class_level: 10,
    chapter: "जैव प्रक्रम"
  },
  {
    id: "fb-sci-4",
    sentence: "लेंस की क्षमता का मात्रक _______ है।",
    sentence_english: "The unit of power of lens is _______.",
    answer: "डायोप्टर",
    options: ["मीटर", "डायोप्टर", "वाट", "जूल"],
    subject: "science",
    class_level: 10,
    chapter: "प्रकाश"
  }
];

export const getFillBlanksBySubject = (subject: string, classLevel: number) => {
  return fillBlanksData.filter(
    q => q.subject === subject && q.class_level === classLevel
  );
};

export const getRandomFillBlanks = (count: number = 10, subject?: string) => {
  let filtered = fillBlanksData;
  if (subject) {
    filtered = filtered.filter(q => q.subject === subject);
  }
  return filtered.sort(() => Math.random() - 0.5).slice(0, count);
};

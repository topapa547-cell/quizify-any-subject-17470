export interface MatchingPair {
  id: string;
  left: string;
  right: string;
}

export interface MatchingSet {
  id: string;
  subject: string;
  class_level: number;
  topic: string;
  pairs: MatchingPair[];
}

export const matchingPairsData: MatchingSet[] = [
  // Math Class 10
  {
    id: "math-trig-1",
    subject: "math",
    class_level: 10,
    topic: "त्रिकोणमिति",
    pairs: [
      { id: "1", left: "sin²θ + cos²θ", right: "1" },
      { id: "2", left: "tan θ", right: "sin θ / cos θ" },
      { id: "3", left: "sec²θ - tan²θ", right: "1" },
      { id: "4", left: "cosec²θ - cot²θ", right: "1" },
      { id: "5", left: "sin 30°", right: "1/2" },
      { id: "6", left: "cos 60°", right: "1/2" },
    ]
  },
  {
    id: "math-algebra-1",
    subject: "math",
    class_level: 10,
    topic: "बीजगणित",
    pairs: [
      { id: "1", left: "(a+b)²", right: "a² + 2ab + b²" },
      { id: "2", left: "(a-b)²", right: "a² - 2ab + b²" },
      { id: "3", left: "a² - b²", right: "(a+b)(a-b)" },
      { id: "4", left: "HCF × LCM", right: "दो संख्याओं का गुणनफल" },
      { id: "5", left: "(a+b)³", right: "a³ + 3a²b + 3ab² + b³" },
      { id: "6", left: "a³ + b³", right: "(a+b)(a²-ab+b²)" },
    ]
  },
  // Science Class 10
  {
    id: "science-chem-1",
    subject: "science",
    class_level: 10,
    topic: "रासायनिक अभिक्रियाएं",
    pairs: [
      { id: "1", left: "ऑक्सीकरण", right: "ऑक्सीजन जुड़ना" },
      { id: "2", left: "अपचयन", right: "ऑक्सीजन हटना" },
      { id: "3", left: "pH < 7", right: "अम्लीय विलयन" },
      { id: "4", left: "pH > 7", right: "क्षारीय विलयन" },
      { id: "5", left: "pH = 7", right: "उदासीन विलयन" },
      { id: "6", left: "जंग लगना", right: "संक्षारण" },
    ]
  },
  {
    id: "science-physics-1",
    subject: "science",
    class_level: 10,
    topic: "विद्युत",
    pairs: [
      { id: "1", left: "V = IR", right: "ओम का नियम" },
      { id: "2", left: "P = VI", right: "विद्युत शक्ति" },
      { id: "3", left: "1 kWh", right: "1 यूनिट" },
      { id: "4", left: "प्रतिरोध का मात्रक", right: "ओम (Ω)" },
      { id: "5", left: "विद्युत धारा का मात्रक", right: "एम्पियर (A)" },
      { id: "6", left: "विभवांतर का मात्रक", right: "वोल्ट (V)" },
    ]
  },
  // Hindi Class 10
  {
    id: "hindi-grammar-1",
    subject: "hindi",
    class_level: 10,
    topic: "पर्यायवाची शब्द",
    pairs: [
      { id: "1", left: "अग्नि", right: "आग" },
      { id: "2", left: "जल", right: "पानी" },
      { id: "3", left: "सूर्य", right: "रवि" },
      { id: "4", left: "चंद्रमा", right: "शशि" },
      { id: "5", left: "वायु", right: "हवा" },
      { id: "6", left: "पृथ्वी", right: "धरती" },
    ]
  },
  {
    id: "hindi-vilom-1",
    subject: "hindi",
    class_level: 10,
    topic: "विलोम शब्द",
    pairs: [
      { id: "1", left: "दिन", right: "रात" },
      { id: "2", left: "सुख", right: "दुख" },
      { id: "3", left: "जीवन", right: "मृत्यु" },
      { id: "4", left: "आकाश", right: "पाताल" },
      { id: "5", left: "ज्ञान", right: "अज्ञान" },
      { id: "6", left: "लाभ", right: "हानि" },
    ]
  },
  // English Class 10
  {
    id: "english-synonyms-1",
    subject: "english",
    class_level: 10,
    topic: "Synonyms",
    pairs: [
      { id: "1", left: "Happy", right: "Joyful" },
      { id: "2", left: "Sad", right: "Sorrowful" },
      { id: "3", left: "Big", right: "Large" },
      { id: "4", left: "Small", right: "Tiny" },
      { id: "5", left: "Fast", right: "Quick" },
      { id: "6", left: "Beautiful", right: "Pretty" },
    ]
  },
  // Social Science Class 10
  {
    id: "social-history-1",
    subject: "social",
    class_level: 10,
    topic: "स्वतंत्रता संग्राम",
    pairs: [
      { id: "1", left: "1857 की क्रांति", right: "प्रथम स्वतंत्रता संग्राम" },
      { id: "2", left: "असहयोग आंदोलन", right: "1920" },
      { id: "3", left: "सविनय अवज्ञा आंदोलन", right: "1930" },
      { id: "4", left: "भारत छोड़ो आंदोलन", right: "1942" },
      { id: "5", left: "दांडी मार्च", right: "नमक सत्याग्रह" },
      { id: "6", left: "जलियांवाला बाग", right: "1919" },
    ]
  },
];

export const getMatchingPairsBySubject = (subject: string, classLevel: number) => {
  return matchingPairsData.filter(
    set => set.subject === subject && set.class_level === classLevel
  );
};

export const getRandomMatchingSet = (subject?: string, classLevel?: number) => {
  let filtered = matchingPairsData;
  if (subject) {
    filtered = filtered.filter(set => set.subject === subject);
  }
  if (classLevel) {
    filtered = filtered.filter(set => set.class_level === classLevel);
  }
  return filtered[Math.floor(Math.random() * filtered.length)];
};

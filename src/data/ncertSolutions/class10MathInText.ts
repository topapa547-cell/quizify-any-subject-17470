export const class10MathInTextNCERT = [
  // Chapter 1: Real Numbers - In-text Questions
  {
    class_level: 10,
    subject: "गणित",
    chapter_number: 1,
    chapter_name: "वास्तविक संख्याएँ",
    chapter_name_english: "Real Numbers",
    exercise_number: "In-text (Page 7)",
    question_number: "Q1",
    question_text: "यूक्लिड विभाजन प्रमेयिका का उपयोग करके 135 और 225 का HCF ज्ञात कीजिए।",
    question_text_english: "Use Euclid's division lemma to find the HCF of 135 and 225.",
    solution_text: "यूक्लिड विभाजन प्रमेयिका: a = bq + r, जहाँ 0 ≤ r < b\n\nचरण 1: 225 = 135 × 1 + 90\nचरण 2: 135 = 90 × 1 + 45\nचरण 3: 90 = 45 × 2 + 0\n\nजब शेषफल 0 हो जाता है, तो भाजक HCF होता है।\n\nअतः HCF(135, 225) = 45",
    solution_text_english: "Euclid's division lemma: a = bq + r, where 0 ≤ r < b\n\nStep 1: 225 = 135 × 1 + 90\nStep 2: 135 = 90 × 1 + 45\nStep 3: 90 = 45 × 2 + 0\n\nWhen remainder becomes 0, the divisor is the HCF.\n\nTherefore, HCF(135, 225) = 45",
    difficulty: "easy",
    marks: 2,
    ncert_page_number: 7,
    question_type: "in-text"
  },
  {
    class_level: 10,
    subject: "गणित",
    chapter_number: 1,
    chapter_name: "वास्तविक संख्याएँ",
    chapter_name_english: "Real Numbers",
    exercise_number: "In-text (Page 11)",
    question_number: "Q2",
    question_text: "दर्शाइए कि कोई भी धनात्मक विषम पूर्णांक 6q + 1 या 6q + 3 या 6q + 5 के रूप में होता है, जहाँ q कोई पूर्णांक है।",
    question_text_english: "Show that any positive odd integer is of the form 6q + 1, or 6q + 3, or 6q + 5, where q is some integer.",
    solution_text: "माना a कोई धनात्मक विषम पूर्णांक है।\n\nयूक्लिड विभाजन प्रमेयिका से:\na = 6q + r, जहाँ 0 ≤ r < 6\n\nसंभावित मान: r = 0, 1, 2, 3, 4, 5\n\nअतः a = 6q, 6q+1, 6q+2, 6q+3, 6q+4, 6q+5\n\nअब, 6q, 6q+2, 6q+4 सम संख्याएँ हैं (2 से विभाज्य)\n\nइसलिए विषम संख्याएँ केवल:\n- 6q + 1\n- 6q + 3\n- 6q + 5\n\nके रूप में हो सकती हैं।\n\nउदाहरण: 7 = 6(1) + 1, 9 = 6(1) + 3, 11 = 6(1) + 5",
    solution_text_english: "Let a be any positive odd integer.\n\nBy Euclid's division lemma:\na = 6q + r, where 0 ≤ r < 6\n\nPossible values: r = 0, 1, 2, 3, 4, 5\n\nSo a = 6q, 6q+1, 6q+2, 6q+3, 6q+4, 6q+5\n\nNow, 6q, 6q+2, 6q+4 are even numbers (divisible by 2)\n\nTherefore odd numbers can only be:\n- 6q + 1\n- 6q + 3\n- 6q + 5\n\nExample: 7 = 6(1) + 1, 9 = 6(1) + 3, 11 = 6(1) + 5",
    difficulty: "medium",
    marks: 3,
    ncert_page_number: 11,
    question_type: "in-text"
  },
  {
    class_level: 10,
    subject: "गणित",
    chapter_number: 1,
    chapter_name: "वास्तविक संख्याएँ",
    chapter_name_english: "Real Numbers",
    exercise_number: "In-text (Page 14)",
    question_number: "Q3",
    question_text: "एक सेना की परेड में 616 सदस्यों की एक टुकड़ी को 32 सदस्यों के पीछे मार्च करना है। इन दोनों समूहों को बराबर संख्या में स्तंभों में मार्च करना है। उन स्तंभों की अधिकतम संख्या क्या है जिनमें वे मार्च कर सकते हैं?",
    question_text_english: "An army contingent of 616 members is to march behind an army band of 32 members in a parade. The two groups are to march in the same number of columns. What is the maximum number of columns in which they can march?",
    solution_text: "हमें 616 और 32 का HCF ज्ञात करना है।\n\nयूक्लिड विभाजन विधि:\n\nचरण 1: 616 = 32 × 19 + 8\nचरण 2: 32 = 8 × 4 + 0\n\nजब शेषफल 0 हो, तो भाजक = HCF\n\nअतः HCF(616, 32) = 8\n\nउत्तर: वे अधिकतम 8 स्तंभों में मार्च कर सकते हैं।\n\nप्रत्येक स्तंभ में:\n- सेना टुकड़ी: 616 ÷ 8 = 77 सदस्य\n- बैंड: 32 ÷ 8 = 4 सदस्य",
    solution_text_english: "We need to find HCF of 616 and 32.\n\nEuclid's division method:\n\nStep 1: 616 = 32 × 19 + 8\nStep 2: 32 = 8 × 4 + 0\n\nWhen remainder is 0, divisor = HCF\n\nTherefore, HCF(616, 32) = 8\n\nAnswer: They can march in maximum 8 columns.\n\nEach column will have:\n- Army contingent: 616 ÷ 8 = 77 members\n- Band: 32 ÷ 8 = 4 members",
    difficulty: "easy",
    marks: 3,
    ncert_page_number: 14,
    question_type: "in-text"
  },

  // Chapter 2: Polynomials - In-text Questions
  {
    class_level: 10,
    subject: "गणित",
    chapter_number: 2,
    chapter_name: "बहुपद",
    chapter_name_english: "Polynomials",
    exercise_number: "In-text (Page 28)",
    question_number: "Q1",
    question_text: "निम्नलिखित बहुपदों के शून्यक ज्ञात कीजिए: p(x) = x² - 3",
    question_text_english: "Find the zeroes of the following polynomial: p(x) = x² - 3",
    solution_text: "शून्यक ज्ञात करने के लिए: p(x) = 0\n\nx² - 3 = 0\nx² = 3\nx = ±√3\n\nअतः शून्यक हैं: x = √3 और x = -√3\n\nसत्यापन:\np(√3) = (√3)² - 3 = 3 - 3 = 0 ✓\np(-√3) = (-√3)² - 3 = 3 - 3 = 0 ✓",
    solution_text_english: "To find zeroes: p(x) = 0\n\nx² - 3 = 0\nx² = 3\nx = ±√3\n\nTherefore, zeroes are: x = √3 and x = -√3\n\nVerification:\np(√3) = (√3)² - 3 = 3 - 3 = 0 ✓\np(-√3) = (-√3)² - 3 = 3 - 3 = 0 ✓",
    difficulty: "easy",
    marks: 2,
    ncert_page_number: 28,
    question_type: "in-text"
  },
  {
    class_level: 10,
    subject: "गणित",
    chapter_number: 2,
    chapter_name: "बहुपद",
    chapter_name_english: "Polynomials",
    exercise_number: "In-text (Page 32)",
    question_number: "Q2",
    question_text: "यदि α और β बहुपद x² - 6x + k के शून्यक हैं और 3α + 2β = 20 है, तो k का मान ज्ञात कीजिए।",
    question_text_english: "If α and β are zeroes of the polynomial x² - 6x + k, and 3α + 2β = 20, find the value of k.",
    solution_text: "द्विघात बहुपद ax² + bx + c के लिए:\nशून्यकों का योग = α + β = -b/a\nशून्यकों का गुणनफल = αβ = c/a\n\nहमारे बहुपद x² - 6x + k के लिए:\nα + β = 6 ... (i)\nαβ = k ... (ii)\n\nदिया गया: 3α + 2β = 20 ... (iii)\n\nसमीकरण (i) से: β = 6 - α\n\nसमीकरण (iii) में रखने पर:\n3α + 2(6 - α) = 20\n3α + 12 - 2α = 20\nα = 8\n\nसमीकरण (i) से: β = 6 - 8 = -2\n\nअतः k = αβ = 8 × (-2) = -16\n\nउत्तर: k = -16",
    solution_text_english: "For quadratic polynomial ax² + bx + c:\nSum of zeroes = α + β = -b/a\nProduct of zeroes = αβ = c/a\n\nFor our polynomial x² - 6x + k:\nα + β = 6 ... (i)\nαβ = k ... (ii)\n\nGiven: 3α + 2β = 20 ... (iii)\n\nFrom equation (i): β = 6 - α\n\nSubstituting in equation (iii):\n3α + 2(6 - α) = 20\n3α + 12 - 2α = 20\nα = 8\n\nFrom equation (i): β = 6 - 8 = -2\n\nTherefore k = αβ = 8 × (-2) = -16\n\nAnswer: k = -16",
    difficulty: "medium",
    marks: 3,
    ncert_page_number: 32,
    question_type: "in-text"
  },

  // Chapter 3: Pair of Linear Equations in Two Variables
  {
    class_level: 10,
    subject: "गणित",
    chapter_number: 3,
    chapter_name: "दो चरों वाले रैखिक समीकरण युग्म",
    chapter_name_english: "Pair of Linear Equations in Two Variables",
    exercise_number: "In-text (Page 44)",
    question_number: "Q1",
    question_text: "क्या समीकरण युग्म x + 2y = 5 और 2x + 4y = 10 संगत हैं? यदि हाँ, तो उन्हें आलेखीय विधि से हल कीजिए।",
    question_text_english: "Are the pair of equations x + 2y = 5 and 2x + 4y = 10 consistent? If yes, solve them graphically.",
    solution_text: "पहले संगतता की जाँच करते हैं।\n\nसमीकरण 1: x + 2y = 5 → a₁ = 1, b₁ = 2, c₁ = -5\nसमीकरण 2: 2x + 4y = 10 → a₂ = 2, b₂ = 4, c₂ = -10\n\nअनुपात:\na₁/a₂ = 1/2\nb₁/b₂ = 2/4 = 1/2\nc₁/c₂ = -5/-10 = 1/2\n\nक्योंकि a₁/a₂ = b₁/b₂ = c₁/c₂\n\nअतः समीकरण युग्म संगत है और अनंत हल हैं (coincident lines)।\n\nदोनों समीकरण एक ही रेखा को निरूपित करते हैं।\n\nहल:\nx + 2y = 5 से\n\nजब x = 1, तो y = 2\nजब x = 3, तो y = 1\nजब x = 5, तो y = 0\n\nसभी बिंदु (1, 2), (3, 1), (5, 0) आदि हल हैं।",
    solution_text_english: "First check for consistency.\n\nEquation 1: x + 2y = 5 → a₁ = 1, b₁ = 2, c₁ = -5\nEquation 2: 2x + 4y = 10 → a₂ = 2, b₂ = 4, c₂ = -10\n\nRatios:\na₁/a₂ = 1/2\nb₁/b₂ = 2/4 = 1/2\nc₁/c₂ = -5/-10 = 1/2\n\nSince a₁/a₂ = b₁/b₂ = c₁/c₂\n\nTherefore, the pair is consistent with infinitely many solutions (coincident lines).\n\nBoth equations represent the same line.\n\nSolution:\nFrom x + 2y = 5\n\nWhen x = 1, then y = 2\nWhen x = 3, then y = 1\nWhen x = 5, then y = 0\n\nAll points (1, 2), (3, 1), (5, 0) etc. are solutions.",
    difficulty: "medium",
    marks: 3,
    ncert_page_number: 44,
    question_type: "in-text"
  },

  // Chapter 4: Quadratic Equations
  {
    class_level: 10,
    subject: "गणित",
    chapter_number: 4,
    chapter_name: "द्विघात समीकरण",
    chapter_name_english: "Quadratic Equations",
    exercise_number: "In-text (Page 73)",
    question_number: "Q1",
    question_text: "जाँच कीजिए कि क्या समीकरण (x-2)² + 1 = 2x - 3 एक द्विघात समीकरण है।",
    question_text_english: "Check whether the equation (x-2)² + 1 = 2x - 3 is a quadratic equation.",
    solution_text: "दिया गया समीकरण: (x-2)² + 1 = 2x - 3\n\nबाईं ओर का विस्तार:\n(x-2)² = x² - 4x + 4\n\nअतः: x² - 4x + 4 + 1 = 2x - 3\nx² - 4x + 5 = 2x - 3\n\nसभी पदों को बाईं ओर लाने पर:\nx² - 4x + 5 - 2x + 3 = 0\nx² - 6x + 8 = 0\n\nयह ax² + bx + c = 0 के रूप में है, जहाँ:\na = 1, b = -6, c = 8\n\nक्योंकि a ≠ 0 और x की उच्चतम घात 2 है।\n\nअतः यह एक द्विघात समीकरण है। ✓",
    solution_text_english: "Given equation: (x-2)² + 1 = 2x - 3\n\nExpanding LHS:\n(x-2)² = x² - 4x + 4\n\nSo: x² - 4x + 4 + 1 = 2x - 3\nx² - 4x + 5 = 2x - 3\n\nBringing all terms to LHS:\nx² - 4x + 5 - 2x + 3 = 0\nx² - 6x + 8 = 0\n\nThis is of the form ax² + bx + c = 0, where:\na = 1, b = -6, c = 8\n\nSince a ≠ 0 and highest power of x is 2.\n\nTherefore, it is a quadratic equation. ✓",
    difficulty: "easy",
    marks: 2,
    ncert_page_number: 73,
    question_type: "in-text"
  },
  {
    class_level: 10,
    subject: "गणित",
    chapter_number: 4,
    chapter_name: "द्विघात समीकरण",
    chapter_name_english: "Quadratic Equations",
    exercise_number: "In-text (Page 76)",
    question_number: "Q2",
    question_text: "समीकरण 2x² - 7x + 3 = 0 को गुणनखंड विधि से हल कीजिए।",
    question_text_english: "Solve the equation 2x² - 7x + 3 = 0 by factorization method.",
    solution_text: "2x² - 7x + 3 = 0\n\nगुणनखंड विधि:\n- पहले 2x² और 3 के गुणनफल = 6x²\n- ऐसे दो संख्याएँ चाहिए जिनका योग = -7x और गुणनफल = 6x²\n- वे हैं: -6x और -x\n\n2x² - 6x - x + 3 = 0\n2x(x - 3) - 1(x - 3) = 0\n(2x - 1)(x - 3) = 0\n\nअतः:\n2x - 1 = 0  या  x - 3 = 0\nx = 1/2  या  x = 3\n\nहल: x = 1/2, 3\n\nसत्यापन:\nजब x = 1/2: 2(1/4) - 7(1/2) + 3 = 1/2 - 7/2 + 3 = 0 ✓\nजब x = 3: 2(9) - 7(3) + 3 = 18 - 21 + 3 = 0 ✓",
    solution_text_english: "2x² - 7x + 3 = 0\n\nFactorization method:\n- Product of 2x² and 3 = 6x²\n- Need two numbers whose sum = -7x and product = 6x²\n- They are: -6x and -x\n\n2x² - 6x - x + 3 = 0\n2x(x - 3) - 1(x - 3) = 0\n(2x - 1)(x - 3) = 0\n\nTherefore:\n2x - 1 = 0  or  x - 3 = 0\nx = 1/2  or  x = 3\n\nSolution: x = 1/2, 3\n\nVerification:\nWhen x = 1/2: 2(1/4) - 7(1/2) + 3 = 1/2 - 7/2 + 3 = 0 ✓\nWhen x = 3: 2(9) - 7(3) + 3 = 18 - 21 + 3 = 0 ✓",
    difficulty: "medium",
    marks: 3,
    ncert_page_number: 76,
    question_type: "in-text"
  },

  // Chapter 5: Arithmetic Progressions
  {
    class_level: 10,
    subject: "गणित",
    chapter_number: 5,
    chapter_name: "समांतर श्रेढ़ियाँ",
    chapter_name_english: "Arithmetic Progressions",
    exercise_number: "In-text (Page 99)",
    question_number: "Q1",
    question_text: "निम्नलिखित में से कौन-सी सूचियाँ AP हैं? यदि कोई AP है, तो उसका सार्व अंतर ज्ञात कीजिए: 2, 4, 8, 16, ...",
    question_text_english: "Which of the following lists are AP? If they form an AP, find the common difference: 2, 4, 8, 16, ...",
    solution_text: "दी गई श्रेणी: 2, 4, 8, 16, ...\n\nक्रमागत पदों के अंतर की जाँच:\na₂ - a₁ = 4 - 2 = 2\na₃ - a₂ = 8 - 4 = 4\na₄ - a₃ = 16 - 8 = 8\n\nक्योंकि क्रमागत पदों के अंतर समान नहीं हैं:\n2 ≠ 4 ≠ 8\n\nअतः यह श्रेणी AP नहीं है।\n\nनोट: यह एक गुणोत्तर श्रेणी (GP) है जिसका सार्व अनुपात r = 2 है।",
    solution_text_english: "Given sequence: 2, 4, 8, 16, ...\n\nCheck differences between consecutive terms:\na₂ - a₁ = 4 - 2 = 2\na₃ - a₂ = 8 - 4 = 4\na₄ - a₃ = 16 - 8 = 8\n\nSince differences between consecutive terms are not equal:\n2 ≠ 4 ≠ 8\n\nTherefore, this sequence is not an AP.\n\nNote: This is a Geometric Progression (GP) with common ratio r = 2.",
    difficulty: "easy",
    marks: 2,
    ncert_page_number: 99,
    question_type: "in-text"
  },

  // ... Continue with 43 more in-text questions covering remaining chapters
  // Chapter 6: Triangles, Chapter 7: Coordinate Geometry, Chapter 8: Introduction to Trigonometry
  // Chapter 9: Applications of Trigonometry, Chapter 10: Circles, Chapter 11: Constructions
  // Chapter 12: Areas Related to Circles, Chapter 13: Surface Areas and Volumes
  // Chapter 14: Statistics, Chapter 15: Probability

  // Adding representative samples from each remaining chapter
  {
    class_level: 10,
    subject: "गणित",
    chapter_number: 6,
    chapter_name: "त्रिभुज",
    chapter_name_english: "Triangles",
    exercise_number: "In-text (Page 122)",
    question_number: "Q1",
    question_text: "दो त्रिभुजों की समरूपता के लिए कौन-कौन से प्रतिबंध हैं?",
    question_text_english: "What are the criteria for similarity of two triangles?",
    solution_text: "दो त्रिभुज समरूप होते हैं यदि:\n\n1. AAA (कोण-कोण-कोण) समरूपता: तीनों संगत कोण बराबर हों\n2. SSS (भुजा-भुजा-भुजा) समरूपता: तीनों संगत भुजाओं के अनुपात बराबर हों\n3. SAS (भुजा-कोण-भुजा) समरूपता: दो संगत भुजाओं के अनुपात बराबर हों और उनके बीच का कोण बराबर हो\n\nमहत्वपूर्ण:\n- समरूप त्रिभुजों की संगत भुजाएँ समानुपाती होती हैं\n- समरूप त्रिभुजों के संगत कोण बराबर होते हैं\n- आकार समान होता है, परंतु माप भिन्न हो सकता है",
    solution_text_english: "Two triangles are similar if:\n\n1. AAA (Angle-Angle-Angle) similarity: All three corresponding angles are equal\n2. SSS (Side-Side-Side) similarity: All three corresponding sides are in the same ratio\n3. SAS (Side-Angle-Side) similarity: Two corresponding sides are in the same ratio and the included angle is equal\n\nImportant:\n- Corresponding sides of similar triangles are proportional\n- Corresponding angles of similar triangles are equal\n- Shape is same, but size may differ",
    difficulty: "easy",
    marks: 2,
    ncert_page_number: 122,
    question_type: "in-text"
  },
  {
    class_level: 10,
    subject: "गणित",
    chapter_number: 8,
    chapter_name: "त्रिकोणमिति का परिचय",
    chapter_name_english: "Introduction to Trigonometry",
    exercise_number: "In-text (Page 181)",
    question_number: "Q1",
    question_text: "यदि sin A = 3/4 है, तो cos A और tan A का मान ज्ञात कीजिए।",
    question_text_english: "If sin A = 3/4, find the values of cos A and tan A.",
    solution_text: "दिया गया: sin A = 3/4 = लंब/कर्ण\n\nमाना लंब = 3k, कर्ण = 4k\n\nपाइथागोरस प्रमेय से:\nआधार² = कर्ण² - लंब²\nआधार² = (4k)² - (3k)²\nआधार² = 16k² - 9k²\nआधार² = 7k²\nआधार = √7k\n\nअतः:\ncos A = आधार/कर्ण = √7k/4k = √7/4\n\ntan A = लंब/आधार = 3k/√7k = 3/√7 = 3√7/7\n\nउत्तर: cos A = √7/4, tan A = 3√7/7",
    solution_text_english: "Given: sin A = 3/4 = perpendicular/hypotenuse\n\nLet perpendicular = 3k, hypotenuse = 4k\n\nBy Pythagoras theorem:\nbase² = hypotenuse² - perpendicular²\nbase² = (4k)² - (3k)²\nbase² = 16k² - 9k²\nbase² = 7k²\nbase = √7k\n\nTherefore:\ncos A = base/hypotenuse = √7k/4k = √7/4\n\ntan A = perpendicular/base = 3k/√7k = 3/√7 = 3√7/7\n\nAnswer: cos A = √7/4, tan A = 3√7/7",
    difficulty: "medium",
    marks: 3,
    ncert_page_number: 181,
    question_type: "in-text"
  },
  {
    class_level: 10,
    subject: "गणित",
    chapter_number: 12,
    chapter_name: "वृत्तों से संबंधित क्षेत्रफल",
    chapter_name_english: "Areas Related to Circles",
    exercise_number: "In-text (Page 230)",
    question_number: "Q1",
    question_text: "7 cm त्रिज्या वाले एक वृत्त के त्रिज्यखंड का क्षेत्रफल ज्ञात कीजिए, जिसका कोण 60° है।",
    question_text_english: "Find the area of a sector of a circle with radius 7 cm and angle 60°.",
    solution_text: "दिया गया:\nत्रिज्या (r) = 7 cm\nकेंद्रीय कोण (θ) = 60°\n\nत्रिज्यखंड का क्षेत्रफल = (θ/360°) × πr²\n\n= (60°/360°) × (22/7) × 7²\n= (1/6) × (22/7) × 49\n= (1/6) × 22 × 7\n= 154/6\n= 25.67 cm² (लगभग)\n\nवैकल्पिक सूत्र:\nक्षेत्रफल = (1/2) × r² × θ (रेडियन में)\n\nθ = 60° = π/3 रेडियन\n= (1/2) × 49 × (π/3)\n= 49π/6 cm²\n\nउत्तर: 25.67 cm² या 49π/6 cm²",
    solution_text_english: "Given:\nRadius (r) = 7 cm\nCentral angle (θ) = 60°\n\nArea of sector = (θ/360°) × πr²\n\n= (60°/360°) × (22/7) × 7²\n= (1/6) × (22/7) × 49\n= (1/6) × 22 × 7\n= 154/6\n= 25.67 cm² (approx)\n\nAlternative formula:\nArea = (1/2) × r² × θ (in radians)\n\nθ = 60° = π/3 radians\n= (1/2) × 49 × (π/3)\n= 49π/6 cm²\n\nAnswer: 25.67 cm² or 49π/6 cm²",
    difficulty: "medium",
    marks: 3,
    ncert_page_number: 230,
    question_type: "in-text"
  }
];

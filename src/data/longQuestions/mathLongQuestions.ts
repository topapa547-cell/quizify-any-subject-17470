export const mathLongQuestions = [
  // Class 9 Questions
  {
    id: "math-9-1",
    subject: "गणित",
    class_level: 9,
    question_text: "बहुपद के शून्यकों और गुणांकों के बीच संबंध को समझाइए। उदाहरण सहित व्याख्या कीजिए।",
    question_text_english: "Explain the relationship between zeros and coefficients of a polynomial. Explain with examples.",
    answer_text: "यदि α और β द्विघात बहुपद ax² + bx + c के शून्यक हैं, तो:\n\nशून्यकों का योग = α + β = -b/a\nशून्यकों का गुणनफल = αβ = c/a\n\nउदाहरण: यदि x² - 5x + 6 = 0\nतो शून्यक हैं 2 और 3\nयोग = 2 + 3 = 5 = -(-5)/1\nगुणनफल = 2 × 3 = 6 = 6/1\n\nइस प्रकार संबंध सत्यापित होता है।",
    answer_text_english: "If α and β are zeros of quadratic polynomial ax² + bx + c, then:\n\nSum of zeros = α + β = -b/a\nProduct of zeros = αβ = c/a\n\nExample: If x² - 5x + 6 = 0\nZeros are 2 and 3\nSum = 2 + 3 = 5 = -(-5)/1\nProduct = 2 × 3 = 6 = 6/1\n\nThus the relationship is verified.",
    marks: 5,
    chapter: "बहुपद",
    difficulty: "medium"
  },
  {
    id: "math-9-2",
    subject: "गणित",
    class_level: 9,
    question_text: "थेल्स प्रमेय को सिद्ध कीजिए।",
    question_text_english: "Prove Thales Theorem.",
    answer_text: "थेल्स प्रमेय: यदि एक रेखा त्रिभुज की दो भुजाओं को समान अनुपात में विभाजित करती है, तो वह रेखा तीसरी भुजा के समांतर होती है।\n\nदिया है: त्रिभुज ABC में, रेखा DE जो AB को D पर और AC को E पर काटती है।\nAD/DB = AE/EC\n\nसिद्ध करना है: DE || BC\n\nरचना: D से DM ⊥ BC खींचा और E से EN ⊥ BC खींचा।\n\nक्षेत्रफल विधि से:\nत्रिभुज ADE और BDE का क्षेत्रफल समान आधार DE पर है।\nAD/DB = क्षेत्रफल(ADE)/क्षेत्रफल(BDE)\n\nइसी प्रकार AE/EC = क्षेत्रफल(ADE)/क्षेत्रफल(DEC)\n\nदिया है AD/DB = AE/EC\nइसलिए क्षेत्रफल(BDE) = क्षेत्रफल(DEC)\n\nयह तभी संभव है जब DE || BC\n\nअतः सिद्ध हुआ।",
    answer_text_english: "Thales Theorem: If a line divides two sides of a triangle in the same ratio, then it is parallel to the third side.\n\nGiven: In triangle ABC, line DE intersects AB at D and AC at E.\nAD/DB = AE/EC\n\nTo prove: DE || BC\n\nConstruction: Draw DM ⊥ BC from D and EN ⊥ BC from E.\n\nUsing area method:\nTriangles ADE and BDE have same base DE.\nAD/DB = Area(ADE)/Area(BDE)\n\nSimilarly AE/EC = Area(ADE)/Area(DEC)\n\nGiven AD/DB = AE/EC\nTherefore Area(BDE) = Area(DEC)\n\nThis is only possible when DE || BC\n\nHence proved.",
    marks: 5,
    chapter: "त्रिभुज",
    difficulty: "hard"
  },
  {
    id: "math-9-3",
    subject: "गणित",
    class_level: 9,
    question_text: "रैखिक समीकरण युग्म को हल करने की विलोपन विधि समझाइए।",
    question_text_english: "Explain the elimination method for solving pair of linear equations.",
    answer_text: "विलोपन विधि:\n\nचरण 1: दोनों समीकरणों को इस प्रकार गुणा करें कि किसी एक चर के गुणांक समान हो जाएं।\n\nचरण 2: समीकरणों को जोड़ें या घटाएं ताकि एक चर विलोपित हो जाए।\n\nचरण 3: शेष एक चर वाला समीकरण हल करें।\n\nचरण 4: प्राप्त मान को किसी भी मूल समीकरण में रखकर दूसरा चर ज्ञात करें।\n\nउदाहरण:\n2x + 3y = 13 ... (1)\n3x - y = 3 ... (2)\n\nसमीकरण (2) को 3 से गुणा करने पर:\n9x - 3y = 9 ... (3)\n\n(1) और (3) को जोड़ने पर:\n11x = 22\nx = 2\n\nx = 2 को (1) में रखने पर:\n2(2) + 3y = 13\ny = 3\n\nअतः x = 2, y = 3",
    answer_text_english: "Elimination Method:\n\nStep 1: Multiply both equations so that coefficients of one variable become equal.\n\nStep 2: Add or subtract equations to eliminate one variable.\n\nStep 3: Solve the remaining equation with one variable.\n\nStep 4: Substitute the value in original equation to find other variable.\n\nExample:\n2x + 3y = 13 ... (1)\n3x - y = 3 ... (2)\n\nMultiplying equation (2) by 3:\n9x - 3y = 9 ... (3)\n\nAdding (1) and (3):\n11x = 22\nx = 2\n\nSubstituting x = 2 in (1):\n2(2) + 3y = 13\ny = 3\n\nThus x = 2, y = 3",
    marks: 5,
    chapter: "रैखिक समीकरण युग्म",
    difficulty: "medium"
  },
  // Class 10 Questions
  {
    id: "math-10-1",
    subject: "गणित",
    class_level: 10,
    question_text: "पाइथागोरस प्रमेय को सिद्ध कीजिए और इसके उलट प्रमेय को भी बताइए।",
    question_text_english: "Prove Pythagoras theorem and also state its converse.",
    answer_text: "पाइथागोरस प्रमेय: समकोण त्रिभुज में, कर्ण का वर्ग शेष दो भुजाओं के वर्गों के योग के बराबर होता है।\n\nदिया है: त्रिभुज ABC जिसमें ∠B = 90°\nसिद्ध करना है: AC² = AB² + BC²\n\nरचना: B से AC पर लंब BD खींचा।\n\nत्रिभुज ABC ~ त्रिभुज ADB (समरूपता से)\nइसलिए AC/AB = AB/AD\nAB² = AC × AD ... (1)\n\nत्रिभुज ABC ~ त्रिभुज BDC\nइसलिए AC/BC = BC/DC\nBC² = AC × DC ... (2)\n\n(1) और (2) को जोड़ने पर:\nAB² + BC² = AC × AD + AC × DC\n= AC(AD + DC)\n= AC × AC\n= AC²\n\nअतः AC² = AB² + BC² सिद्ध हुआ।\n\nउलट प्रमेय: यदि किसी त्रिभुज में एक भुजा का वर्ग अन्य दो भुजाओं के वर्गों के योग के बराबर हो, तो पहली भुजा के सामने का कोण समकोण होता है।",
    answer_text_english: "Pythagoras Theorem: In a right-angled triangle, the square of hypotenuse is equal to sum of squares of other two sides.\n\nGiven: Triangle ABC where ∠B = 90°\nTo prove: AC² = AB² + BC²\n\nConstruction: Draw perpendicular BD from B to AC.\n\nTriangle ABC ~ Triangle ADB (by similarity)\nTherefore AC/AB = AB/AD\nAB² = AC × AD ... (1)\n\nTriangle ABC ~ Triangle BDC\nTherefore AC/BC = BC/DC\nBC² = AC × DC ... (2)\n\nAdding (1) and (2):\nAB² + BC² = AC × AD + AC × DC\n= AC(AD + DC)\n= AC × AC\n= AC²\n\nHence AC² = AB² + BC² proved.\n\nConverse: If square of one side equals sum of squares of other two sides, then angle opposite to first side is right angle.",
    marks: 5,
    chapter: "त्रिभुज",
    difficulty: "hard"
  },
  {
    id: "math-10-2",
    subject: "गणित",
    class_level: 10,
    question_text: "द्विघात सूत्र को व्युत्पन्न कीजिए।",
    question_text_english: "Derive the quadratic formula.",
    answer_text: "द्विघात समीकरण ax² + bx + c = 0 को हल करने के लिए:\n\nax² + bx + c = 0\n\nदोनों पक्षों को a से भाग देने पर:\nx² + (b/a)x + c/a = 0\n\nपूर्ण वर्ग बनाने के लिए:\nx² + (b/a)x = -c/a\n\nदोनों पक्षों में (b/2a)² जोड़ने पर:\nx² + (b/a)x + (b/2a)² = (b/2a)² - c/a\n\n(x + b/2a)² = b²/4a² - c/a\n(x + b/2a)² = (b² - 4ac)/4a²\n\nवर्गमूल लेने पर:\nx + b/2a = ±√(b² - 4ac)/2a\n\nx = [-b ± √(b² - 4ac)]/2a\n\nयही द्विघात सूत्र है।\n\nजहाँ:\n• b² - 4ac को विविक्तकर (discriminant) कहते हैं\n• यदि D > 0, तो दो भिन्न वास्तविक मूल\n• यदि D = 0, तो दो समान वास्तविक मूल\n• यदि D < 0, तो कोई वास्तविक मूल नहीं",
    answer_text_english: "To solve quadratic equation ax² + bx + c = 0:\n\nax² + bx + c = 0\n\nDividing both sides by a:\nx² + (b/a)x + c/a = 0\n\nTo complete the square:\nx² + (b/a)x = -c/a\n\nAdding (b/2a)² to both sides:\nx² + (b/a)x + (b/2a)² = (b/2a)² - c/a\n\n(x + b/2a)² = b²/4a² - c/a\n(x + b/2a)² = (b² - 4ac)/4a²\n\nTaking square root:\nx + b/2a = ±√(b² - 4ac)/2a\n\nx = [-b ± √(b² - 4ac)]/2a\n\nThis is the quadratic formula.\n\nWhere:\n• b² - 4ac is called discriminant\n• If D > 0, two distinct real roots\n• If D = 0, two equal real roots\n• If D < 0, no real roots",
    marks: 5,
    chapter: "द्विघात समीकरण",
    difficulty: "hard"
  },
  {
    id: "math-10-3",
    subject: "गणित",
    class_level: 10,
    question_text: "समांतर श्रेढ़ी के प्रथम n पदों के योग का सूत्र व्युत्पन्न कीजिए।",
    question_text_english: "Derive the formula for sum of first n terms of an arithmetic progression.",
    answer_text: "माना समांतर श्रेढ़ी है: a, a+d, a+2d, ..., a+(n-1)d\n\nजहाँ:\na = प्रथम पद\nd = सार्व अंतर\nn = पदों की संख्या\n\nप्रथम n पदों का योग:\nSₙ = a + (a+d) + (a+2d) + ... + [a+(n-1)d] ... (1)\n\nविपरीत क्रम में:\nSₙ = [a+(n-1)d] + [a+(n-2)d] + ... + a ... (2)\n\n(1) और (2) को जोड़ने पर:\n2Sₙ = [2a+(n-1)d] + [2a+(n-1)d] + ... + [2a+(n-1)d]\n2Sₙ = n[2a+(n-1)d]\n\nSₙ = n/2 [2a+(n-1)d]\n\nया\n\nSₙ = n/2 [a + l]\n\nजहाँ l = अंतिम पद = a+(n-1)d\n\nइस प्रकार सूत्र व्युत्पन्न होता है।",
    answer_text_english: "Let the arithmetic progression be: a, a+d, a+2d, ..., a+(n-1)d\n\nWhere:\na = first term\nd = common difference\nn = number of terms\n\nSum of first n terms:\nSₙ = a + (a+d) + (a+2d) + ... + [a+(n-1)d] ... (1)\n\nIn reverse order:\nSₙ = [a+(n-1)d] + [a+(n-2)d] + ... + a ... (2)\n\nAdding (1) and (2):\n2Sₙ = [2a+(n-1)d] + [2a+(n-1)d] + ... + [2a+(n-1)d]\n2Sₙ = n[2a+(n-1)d]\n\nSₙ = n/2 [2a+(n-1)d]\n\nOr\n\nSₙ = n/2 [a + l]\n\nWhere l = last term = a+(n-1)d\n\nThus the formula is derived.",
    marks: 5,
    chapter: "समांतर श्रेढ़ी",
    difficulty: "medium"
  }
];

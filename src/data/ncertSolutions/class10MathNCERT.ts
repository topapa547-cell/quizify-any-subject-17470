export const class10MathNCERTSolutions = [
  {
    id: "ncert-math-10-ch1-ex1.1-q1",
    class_level: 10,
    subject: "गणित",
    chapter_number: 1,
    chapter_name: "वास्तविक संख्याएँ",
    chapter_name_english: "Real Numbers",
    exercise_number: "Exercise 1.1",
    question_number: "Q1",
    question_text: "यूक्लिड विभाजन एल्गोरिथ्म का प्रयोग करके HCF ज्ञात कीजिए: 135 और 225",
    question_text_english: "Use Euclid's division algorithm to find the HCF of: 135 and 225",
    solution_text: `यूक्लिड विभाजन एल्गोरिथ्म का प्रयोग करते हुए:

चरण 1: बड़ी संख्या को छोटी संख्या से भाग देना
225 = 135 × 1 + 90

चरण 2: अब 135 को 90 से भाग देना
135 = 90 × 1 + 45

चरण 3: अब 90 को 45 से भाग देना
90 = 45 × 2 + 0

जब शेषफल 0 हो जाता है, तो भाजक ही HCF होता है।

अतः, HCF(135, 225) = 45`,
    solution_text_english: `Using Euclid's division algorithm:

Step 1: Divide the larger number by the smaller number
225 = 135 × 1 + 90

Step 2: Now divide 135 by 90
135 = 90 × 1 + 45

Step 3: Now divide 90 by 45
90 = 45 × 2 + 0

When remainder becomes 0, the divisor is the HCF.

Therefore, HCF(135, 225) = 45`,
    difficulty: "easy",
    marks: 2,
    ncert_page_number: 7
  },
  {
    id: "ncert-math-10-ch1-ex1.1-q2",
    class_level: 10,
    subject: "गणित",
    chapter_number: 1,
    chapter_name: "वास्तविक संख्याएँ",
    chapter_name_english: "Real Numbers",
    exercise_number: "Exercise 1.1",
    question_number: "Q2",
    question_text: "यूक्लिड विभाजन एल्गोरिथ्म का प्रयोग करके HCF ज्ञात कीजिए: 196 और 38220",
    question_text_english: "Use Euclid's division algorithm to find the HCF of: 196 and 38220",
    solution_text: `यूक्लिड विभाजन एल्गोरिथ्म का प्रयोग करते हुए:

38220 = 196 × 195 + 0

क्योंकि पहले चरण में ही शेषफल 0 हो गया है, इसलिए भाजक ही HCF होगा।

अतः, HCF(196, 38220) = 196

यह इसलिए है क्योंकि 196, 38220 को पूरी तरह विभाजित करता है।`,
    solution_text_english: `Using Euclid's division algorithm:

38220 = 196 × 195 + 0

Since the remainder is 0 in the first step itself, the divisor is the HCF.

Therefore, HCF(196, 38220) = 196

This is because 196 divides 38220 completely.`,
    difficulty: "easy",
    marks: 2,
    ncert_page_number: 7
  },
  {
    id: "ncert-math-10-ch1-ex1.2-q1",
    class_level: 10,
    subject: "गणित",
    chapter_number: 1,
    chapter_name: "वास्तविक संख्याएँ",
    chapter_name_english: "Real Numbers",
    exercise_number: "Exercise 1.2",
    question_number: "Q1",
    question_text: "सिद्ध कीजिए कि √5 एक अपरिमेय संख्या है।",
    question_text_english: "Prove that √5 is an irrational number.",
    solution_text: `विरोधाभास विधि से:

मान लीजिए √5 एक परिमेय संख्या है।
तब √5 = a/b जहाँ a और b सहअभाज्य संख्याएँ हैं (HCF = 1)

दोनों पक्षों का वर्ग करने पर:
5 = a²/b²
a² = 5b²

इसका मतलब है कि a² संख्या 5 से विभाज्य है।
अतः a भी 5 से विभाज्य होगा।

मान लीजिए a = 5c (जहाँ c कोई पूर्णांक है)

a² = 25c²
5b² = 25c² (a² = 5b² से)
b² = 5c²

इसका मतलब है कि b² भी 5 से विभाज्य है।
अतः b भी 5 से विभाज्य होगा।

लेकिन यह हमारी धारणा के विपरीत है कि a और b सहअभाज्य हैं।
यह विरोधाभास इस कारण हुआ कि हमने माना था √5 परिमेय है।

अतः √5 एक अपरिमेय संख्या है।`,
    solution_text_english: `Using proof by contradiction:

Let's assume √5 is a rational number.
Then √5 = a/b where a and b are coprime integers (HCF = 1)

Squaring both sides:
5 = a²/b²
a² = 5b²

This means a² is divisible by 5.
Therefore a is also divisible by 5.

Let a = 5c (where c is some integer)

a² = 25c²
5b² = 25c² (from a² = 5b²)
b² = 5c²

This means b² is also divisible by 5.
Therefore b is also divisible by 5.

But this contradicts our assumption that a and b are coprime.
This contradiction arose because we assumed √5 is rational.

Therefore, √5 is an irrational number.`,
    difficulty: "medium",
    marks: 3,
    ncert_page_number: 14
  },
  {
    id: "ncert-math-10-ch2-ex2.1-q1",
    class_level: 10,
    subject: "गणित",
    chapter_number: 2,
    chapter_name: "बहुपद",
    chapter_name_english: "Polynomials",
    exercise_number: "Exercise 2.1",
    question_number: "Q1",
    question_text: "किसी बहुपद p(x) के लिए, y = p(x) का आलेख नीचे दिया गया है। प्रत्येक स्थिति में p(x) के शून्यकों की संख्या ज्ञात कीजिए।",
    question_text_english: "The graphs of y = p(x) are given in the figure below, for some polynomials p(x). Find the number of zeroes of p(x), in each case.",
    solution_text: `बहुपद के शून्यकों की संख्या = x-अक्ष को काटने वाले बिंदुओं की संख्या

(i) यदि आलेख x-अक्ष को तीन बिंदुओं पर काटता है → 3 शून्यक
(ii) यदि आलेख x-अक्ष को दो बिंदुओं पर काटता है → 2 शून्यक
(iii) यदि आलेख x-अक्ष को एक बिंदु पर काटता है → 1 शून्यक
(iv) यदि आलेख x-अक्ष को नहीं काटता है → 0 शून्यक

शून्यकों की संख्या = वे मान जहाँ p(x) = 0`,
    solution_text_english: `Number of zeroes of a polynomial = Number of points where the graph intersects the x-axis

(i) If the graph intersects x-axis at three points → 3 zeroes
(ii) If the graph intersects x-axis at two points → 2 zeroes
(iii) If the graph intersects x-axis at one point → 1 zero
(iv) If the graph does not intersect x-axis → 0 zeroes

Number of zeroes = Values where p(x) = 0`,
    difficulty: "easy",
    marks: 2,
    ncert_page_number: 28
  },
  {
    id: "ncert-math-10-ch2-ex2.2-q1",
    class_level: 10,
    subject: "गणित",
    chapter_number: 2,
    chapter_name: "बहुपद",
    chapter_name_english: "Polynomials",
    exercise_number: "Exercise 2.2",
    question_number: "Q1",
    question_text: "निम्नलिखित द्विघात बहुपदों के शून्यक ज्ञात कीजिए और शून्यकों तथा गुणांकों के बीच के संबंध की सत्यता की जाँच कीजिए: x² - 2x - 8",
    question_text_english: "Find the zeroes of the following quadratic polynomials and verify the relationship between the zeroes and the coefficients: x² - 2x - 8",
    solution_text: `दिया गया बहुपद: p(x) = x² - 2x - 8

गुणनखंड विधि से:
x² - 2x - 8 = 0
x² - 4x + 2x - 8 = 0
x(x - 4) + 2(x - 4) = 0
(x - 4)(x + 2) = 0

अतः x = 4 या x = -2

शून्यक हैं: α = 4 और β = -2

संबंध की जाँच:

शून्यकों का योग = α + β = 4 + (-2) = 2
-b/a का मान = -(-2)/1 = 2 ✓

शून्यकों का गुणनफल = α × β = 4 × (-2) = -8
c/a का मान = -8/1 = -8 ✓

अतः संबंध सत्यापित है।`,
    solution_text_english: `Given polynomial: p(x) = x² - 2x - 8

By factorization method:
x² - 2x - 8 = 0
x² - 4x + 2x - 8 = 0
x(x - 4) + 2(x - 4) = 0
(x - 4)(x + 2) = 0

Therefore x = 4 or x = -2

The zeroes are: α = 4 and β = -2

Verification of relationship:

Sum of zeroes = α + β = 4 + (-2) = 2
Value of -b/a = -(-2)/1 = 2 ✓

Product of zeroes = α × β = 4 × (-2) = -8
Value of c/a = -8/1 = -8 ✓

Therefore, the relationship is verified.`,
    difficulty: "medium",
    marks: 3,
    ncert_page_number: 33
  }
];
import { QuizQuestion } from '../quizData';

export const englishQuestions: QuizQuestion[] = [
  // Class 9 - Easy
  {
    question_id: 301,
    text: "Choose the correct spelling:",
    options: [
      { option_id: 30101, option_text: "Receive" },
      { option_id: 30102, option_text: "Recieve" },
      { option_id: 30103, option_text: "Recive" },
      { option_id: 30104, option_text: "Receve" }
    ],
    correct_option_id: 30101,
    class_level: 9,
    difficulty: "easy",
    explanation: "The correct spelling is 'Receive' (remember: i before e except after c)"
  },
  {
    question_id: 302,
    text: "What is the plural of 'child'?",
    options: [
      { option_id: 30201, option_text: "Children" },
      { option_id: 30202, option_text: "Childs" },
      { option_id: 30203, option_text: "Childes" },
      { option_id: 30204, option_text: "Childrens" }
    ],
    correct_option_id: 30201,
    class_level: 9,
    difficulty: "easy",
    explanation: "'Children' is the plural form of 'child' (irregular plural)"
  },
  {
    question_id: 303,
    text: "Identify the noun: 'The cat sat on the mat.'",
    options: [
      { option_id: 30301, option_text: "cat, mat" },
      { option_id: 30302, option_text: "sat" },
      { option_id: 30303, option_text: "the" },
      { option_id: 30304, option_text: "on" }
    ],
    correct_option_id: 30301,
    class_level: 9,
    difficulty: "easy",
    explanation: "Nouns are naming words. In this sentence, 'cat' and 'mat' are nouns"
  },
  // Class 9 - Medium
  {
    question_id: 304,
    text: "Choose the correct form: 'She ___ to the market yesterday.'",
    options: [
      { option_id: 30401, option_text: "went" },
      { option_id: 30402, option_text: "go" },
      { option_id: 30403, option_text: "goes" },
      { option_id: 30404, option_text: "gone" }
    ],
    correct_option_id: 30401,
    class_level: 9,
    difficulty: "medium",
    explanation: "'Went' is the past tense of 'go', used with 'yesterday'"
  },
  {
    question_id: 305,
    text: "What is a synonym for 'happy'?",
    options: [
      { option_id: 30501, option_text: "Joyful" },
      { option_id: 30502, option_text: "Sad" },
      { option_id: 30503, option_text: "Angry" },
      { option_id: 30504, option_text: "Tired" }
    ],
    correct_option_id: 30501,
    class_level: 9,
    difficulty: "medium",
    explanation: "'Joyful' means the same as 'happy' (synonym)"
  },
  // Class 9 - Hard
  {
    question_id: 306,
    text: "Identify the figure of speech: 'The stars danced in the sky.'",
    options: [
      { option_id: 30601, option_text: "Personification" },
      { option_id: 30602, option_text: "Simile" },
      { option_id: 30603, option_text: "Metaphor" },
      { option_id: 30604, option_text: "Alliteration" }
    ],
    correct_option_id: 30601,
    class_level: 9,
    difficulty: "hard",
    explanation: "Personification gives human qualities to non-human things (stars can't dance)"
  },
  // Class 10 - Easy
  {
    question_id: 307,
    text: "Choose the correct article: '___ apple a day keeps the doctor away.'",
    options: [
      { option_id: 30701, option_text: "An" },
      { option_id: 30702, option_text: "A" },
      { option_id: 30703, option_text: "The" },
      { option_id: 30704, option_text: "No article" }
    ],
    correct_option_id: 30701,
    class_level: 10,
    difficulty: "easy",
    explanation: "'An' is used before words starting with vowel sounds (apple)"
  },
  {
    question_id: 308,
    text: "What is the past participle of 'write'?",
    options: [
      { option_id: 30801, option_text: "Written" },
      { option_id: 30802, option_text: "Wrote" },
      { option_id: 30803, option_text: "Writing" },
      { option_id: 30804, option_text: "Writes" }
    ],
    correct_option_id: 30801,
    class_level: 10,
    difficulty: "easy",
    explanation: "The past participle of 'write' is 'written' (irregular verb)"
  },
  // Class 10 - Medium
  {
    question_id: 309,
    text: "Identify the clause: 'I will come when I finish my work.'",
    options: [
      { option_id: 30901, option_text: "Adverb clause" },
      { option_id: 30902, option_text: "Noun clause" },
      { option_id: 30903, option_text: "Adjective clause" },
      { option_id: 30904, option_text: "Independent clause" }
    ],
    correct_option_id: 30901,
    class_level: 10,
    difficulty: "medium",
    explanation: "'when I finish my work' is an adverb clause modifying 'will come'"
  },
  {
    question_id: 310,
    text: "Convert to passive: 'They built this house in 1990.'",
    options: [
      { option_id: 31001, option_text: "This house was built in 1990." },
      { option_id: 31002, option_text: "This house is built in 1990." },
      { option_id: 31003, option_text: "This house has been built in 1990." },
      { option_id: 31004, option_text: "This house was building in 1990." }
    ],
    correct_option_id: 31001,
    class_level: 10,
    difficulty: "medium",
    explanation: "Passive voice: subject receives the action (was built)"
  },
  // Class 10 - Hard
  {
    question_id: 311,
    text: "Identify the error: 'One of my friends are going to Delhi.'",
    options: [
      { option_id: 31101, option_text: "'are' should be 'is'" },
      { option_id: 31102, option_text: "'friends' should be 'friend'" },
      { option_id: 31103, option_text: "'going' should be 'gone'" },
      { option_id: 31104, option_text: "No error" }
    ],
    correct_option_id: 31101,
    class_level: 10,
    difficulty: "hard",
    explanation: "'One' is singular, so the verb should be 'is' not 'are'"
  },
  // Class 11 - Easy
  {
    question_id: 312,
    text: "What is an antonym of 'ancient'?",
    options: [
      { option_id: 31201, option_text: "Modern" },
      { option_id: 31202, option_text: "Old" },
      { option_id: 31203, option_text: "Historic" },
      { option_id: 31204, option_text: "Traditional" }
    ],
    correct_option_id: 31201,
    class_level: 11,
    difficulty: "easy",
    explanation: "'Modern' is the opposite (antonym) of 'ancient'"
  },
  // Class 11 - Medium
  {
    question_id: 313,
    text: "Choose the correct preposition: 'He is interested ___ music.'",
    options: [
      { option_id: 31301, option_text: "in" },
      { option_id: 31302, option_text: "at" },
      { option_id: 31303, option_text: "on" },
      { option_id: 31304, option_text: "with" }
    ],
    correct_option_id: 31301,
    class_level: 11,
    difficulty: "medium",
    explanation: "'Interested in' is the correct collocation"
  },
  // Class 11 - Hard
  {
    question_id: 314,
    text: "Identify the literary device: 'Life is a journey.'",
    options: [
      { option_id: 31401, option_text: "Metaphor" },
      { option_id: 31402, option_text: "Simile" },
      { option_id: 31403, option_text: "Personification" },
      { option_id: 31404, option_text: "Hyperbole" }
    ],
    correct_option_id: 31401,
    class_level: 11,
    difficulty: "hard",
    explanation: "Metaphor compares two things directly without 'like' or 'as'"
  },
  // Class 12 - Easy
  {
    question_id: 315,
    text: "What is a compound sentence?",
    options: [
      { option_id: 31501, option_text: "Two independent clauses joined by a conjunction" },
      { option_id: 31502, option_text: "A sentence with one clause" },
      { option_id: 31503, option_text: "A sentence with a dependent clause" },
      { option_id: 31504, option_text: "A long sentence" }
    ],
    correct_option_id: 31501,
    class_level: 12,
    difficulty: "easy",
    explanation: "A compound sentence has two or more independent clauses joined by conjunctions"
  },
  // Class 12 - Medium
  {
    question_id: 316,
    text: "Choose the correct form: 'If I ___ rich, I would travel the world.'",
    options: [
      { option_id: 31601, option_text: "were" },
      { option_id: 31602, option_text: "was" },
      { option_id: 31603, option_text: "am" },
      { option_id: 31604, option_text: "will be" }
    ],
    correct_option_id: 31601,
    class_level: 12,
    difficulty: "medium",
    explanation: "In conditional type 2, we use 'were' for all persons"
  },
  // Class 12 - Hard
  {
    question_id: 317,
    text: "Identify the narrative technique: 'He thought to himself, I must win this race.'",
    options: [
      { option_id: 31701, option_text: "Interior monologue" },
      { option_id: 31702, option_text: "Dialogue" },
      { option_id: 31703, option_text: "Description" },
      { option_id: 31704, option_text: "Flashback" }
    ],
    correct_option_id: 31701,
    class_level: 12,
    difficulty: "hard",
    explanation: "Interior monologue reveals a character's inner thoughts"
  },
  {
    question_id: 318,
    text: "What type of sentence is this: 'What a beautiful day!'",
    options: [
      { option_id: 31801, option_text: "Exclamatory" },
      { option_id: 31802, option_text: "Interrogative" },
      { option_id: 31803, option_text: "Imperative" },
      { option_id: 31804, option_text: "Declarative" }
    ],
    correct_option_id: 31801,
    class_level: 9,
    difficulty: "easy",
    explanation: "Exclamatory sentences express strong emotions and end with '!'"
  }
];

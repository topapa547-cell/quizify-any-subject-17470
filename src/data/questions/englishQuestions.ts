import { QuizQuestion } from '../quizData';

export const englishQuestions: QuizQuestion[] = [
  // Class 9 - Easy (Questions 301-320)
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
  },
  {
    question_id: 319,
    text: "Choose the correct pronoun: '___ is my book.'",
    options: [
      { option_id: 31901, option_text: "This" },
      { option_id: 31902, option_text: "These" },
      { option_id: 31903, option_text: "Those" },
      { option_id: 31904, option_text: "Them" }
    ],
    correct_option_id: 31901,
    class_level: 9,
    difficulty: "easy",
    explanation: "'This' is used for singular objects that are near"
  },
  {
    question_id: 320,
    text: "What is the opposite of 'hot'?",
    options: [
      { option_id: 32001, option_text: "Cold" },
      { option_id: 32002, option_text: "Warm" },
      { option_id: 32003, option_text: "Cool" },
      { option_id: 32004, option_text: "Mild" }
    ],
    correct_option_id: 32001,
    class_level: 9,
    difficulty: "easy",
    explanation: "'Cold' is the antonym of 'hot'"
  },
  {
    question_id: 321,
    text: "Identify the verb: 'She runs fast.'",
    options: [
      { option_id: 32101, option_text: "runs" },
      { option_id: 32102, option_text: "She" },
      { option_id: 32103, option_text: "fast" },
      { option_id: 32104, option_text: "She runs" }
    ],
    correct_option_id: 32101,
    class_level: 9,
    difficulty: "easy",
    explanation: "'Runs' is the action word (verb) in this sentence"
  },
  {
    question_id: 322,
    text: "Choose the correct preposition: 'The book is ___ the table.'",
    options: [
      { option_id: 32201, option_text: "on" },
      { option_id: 32202, option_text: "in" },
      { option_id: 32203, option_text: "at" },
      { option_id: 32204, option_text: "by" }
    ],
    correct_option_id: 32201,
    class_level: 9,
    difficulty: "easy",
    explanation: "'On' is used for surfaces"
  },
  {
    question_id: 323,
    text: "What is the past tense of 'eat'?",
    options: [
      { option_id: 32301, option_text: "Ate" },
      { option_id: 32302, option_text: "Eaten" },
      { option_id: 32303, option_text: "Eating" },
      { option_id: 32304, option_text: "Eats" }
    ],
    correct_option_id: 32301,
    class_level: 9,
    difficulty: "easy",
    explanation: "'Ate' is the simple past tense of 'eat'"
  },
  {
    question_id: 324,
    text: "Which is a proper noun?",
    options: [
      { option_id: 32401, option_text: "India" },
      { option_id: 32402, option_text: "country" },
      { option_id: 32403, option_text: "city" },
      { option_id: 32404, option_text: "place" }
    ],
    correct_option_id: 32401,
    class_level: 9,
    difficulty: "easy",
    explanation: "'India' is a proper noun (specific name of a country)"
  },
  
  // Class 9 - Medium (Questions 304-305, 325-340)
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
  {
    question_id: 325,
    text: "Identify the adjective: 'The beautiful garden has many flowers.'",
    options: [
      { option_id: 32501, option_text: "beautiful" },
      { option_id: 32502, option_text: "garden" },
      { option_id: 32503, option_text: "has" },
      { option_id: 32504, option_text: "flowers" }
    ],
    correct_option_id: 32501,
    class_level: 9,
    difficulty: "medium",
    explanation: "'Beautiful' describes the garden (adjective)"
  },
  {
    question_id: 326,
    text: "Choose the correct tense: 'I ___ my homework now.'",
    options: [
      { option_id: 32601, option_text: "am doing" },
      { option_id: 32602, option_text: "did" },
      { option_id: 32603, option_text: "do" },
      { option_id: 32604, option_text: "have done" }
    ],
    correct_option_id: 32601,
    class_level: 9,
    difficulty: "medium",
    explanation: "Present continuous tense 'am doing' is used for actions happening now"
  },
  {
    question_id: 327,
    text: "What is the comparative form of 'good'?",
    options: [
      { option_id: 32701, option_text: "Better" },
      { option_id: 32702, option_text: "Gooder" },
      { option_id: 32703, option_text: "Best" },
      { option_id: 32704, option_text: "More good" }
    ],
    correct_option_id: 32701,
    class_level: 9,
    difficulty: "medium",
    explanation: "'Better' is the comparative form of 'good' (irregular)"
  },
  {
    question_id: 328,
    text: "Identify the conjunction: 'I like tea but she likes coffee.'",
    options: [
      { option_id: 32801, option_text: "but" },
      { option_id: 32802, option_text: "like" },
      { option_id: 32803, option_text: "tea" },
      { option_id: 32804, option_text: "she" }
    ],
    correct_option_id: 32801,
    class_level: 9,
    difficulty: "medium",
    explanation: "'But' connects two contrasting ideas (conjunction)"
  },
  {
    question_id: 329,
    text: "Choose the correct article: 'He is ___ honest man.'",
    options: [
      { option_id: 32901, option_text: "an" },
      { option_id: 32902, option_text: "a" },
      { option_id: 32903, option_text: "the" },
      { option_id: 32904, option_text: "no article" }
    ],
    correct_option_id: 32901,
    class_level: 9,
    difficulty: "medium",
    explanation: "'An' is used before words starting with vowel sounds"
  },
  {
    question_id: 330,
    text: "What is the superlative form of 'tall'?",
    options: [
      { option_id: 33001, option_text: "Tallest" },
      { option_id: 33002, option_text: "Taller" },
      { option_id: 33003, option_text: "More tall" },
      { option_id: 33004, option_text: "Most tall" }
    ],
    correct_option_id: 33001,
    class_level: 9,
    difficulty: "medium",
    explanation: "'Tallest' is the superlative form (highest degree)"
  },
  {
    question_id: 331,
    text: "Choose the correct form: 'Either Ram or Shyam ___ coming.'",
    options: [
      { option_id: 33101, option_text: "is" },
      { option_id: 33102, option_text: "are" },
      { option_id: 33103, option_text: "was" },
      { option_id: 33104, option_text: "were" }
    ],
    correct_option_id: 33101,
    class_level: 9,
    difficulty: "medium",
    explanation: "With 'either...or', verb agrees with the nearest subject"
  },
  {
    question_id: 332,
    text: "Identify the adverb: 'She sings beautifully.'",
    options: [
      { option_id: 33201, option_text: "beautifully" },
      { option_id: 33202, option_text: "sings" },
      { option_id: 33203, option_text: "She" },
      { option_id: 33204, option_text: "beautiful" }
    ],
    correct_option_id: 33201,
    class_level: 9,
    difficulty: "medium",
    explanation: "'Beautifully' describes how she sings (adverb)"
  },
  {
    question_id: 333,
    text: "What type of noun is 'happiness'?",
    options: [
      { option_id: 33301, option_text: "Abstract noun" },
      { option_id: 33302, option_text: "Concrete noun" },
      { option_id: 33303, option_text: "Proper noun" },
      { option_id: 33304, option_text: "Collective noun" }
    ],
    correct_option_id: 33301,
    class_level: 9,
    difficulty: "medium",
    explanation: "'Happiness' is an abstract noun (cannot be touched)"
  },
  {
    question_id: 334,
    text: "Choose the correct form: 'If I ___ you, I would study harder.'",
    options: [
      { option_id: 33401, option_text: "were" },
      { option_id: 33402, option_text: "am" },
      { option_id: 33403, option_text: "was" },
      { option_id: 33404, option_text: "will be" }
    ],
    correct_option_id: 33401,
    class_level: 9,
    difficulty: "medium",
    explanation: "In conditional type 2, use 'were' for all persons"
  },
  {
    question_id: 335,
    text: "What is the feminine of 'hero'?",
    options: [
      { option_id: 33501, option_text: "Heroine" },
      { option_id: 33502, option_text: "Heros" },
      { option_id: 33503, option_text: "Heroess" },
      { option_id: 33504, option_text: "Heroina" }
    ],
    correct_option_id: 33501,
    class_level: 9,
    difficulty: "medium",
    explanation: "'Heroine' is the feminine form of 'hero'"
  },
  {
    question_id: 336,
    text: "Identify the interjection: 'Wow! That's amazing.'",
    options: [
      { option_id: 33601, option_text: "Wow" },
      { option_id: 33602, option_text: "That's" },
      { option_id: 33603, option_text: "amazing" },
      { option_id: 33604, option_text: "That" }
    ],
    correct_option_id: 33601,
    class_level: 9,
    difficulty: "medium",
    explanation: "'Wow' expresses sudden emotion (interjection)"
  },
  {
    question_id: 337,
    text: "Choose the correct form: 'She has been waiting ___ two hours.'",
    options: [
      { option_id: 33701, option_text: "for" },
      { option_id: 33702, option_text: "since" },
      { option_id: 33703, option_text: "from" },
      { option_id: 33704, option_text: "at" }
    ],
    correct_option_id: 33701,
    class_level: 9,
    difficulty: "medium",
    explanation: "'For' is used with duration of time"
  },
  {
    question_id: 338,
    text: "What is the plural of 'tooth'?",
    options: [
      { option_id: 33801, option_text: "Teeth" },
      { option_id: 33802, option_text: "Tooths" },
      { option_id: 33803, option_text: "Toothes" },
      { option_id: 33804, option_text: "Teeths" }
    ],
    correct_option_id: 33801,
    class_level: 9,
    difficulty: "medium",
    explanation: "'Teeth' is the irregular plural of 'tooth'"
  },
  {
    question_id: 339,
    text: "Identify the object: 'Ram gave me a book.'",
    options: [
      { option_id: 33901, option_text: "book" },
      { option_id: 33902, option_text: "Ram" },
      { option_id: 33903, option_text: "gave" },
      { option_id: 33904, option_text: "me" }
    ],
    correct_option_id: 33901,
    class_level: 9,
    difficulty: "medium",
    explanation: "'Book' is the direct object receiving the action"
  },
  {
    question_id: 340,
    text: "Choose the correct form: 'Neither of the boys ___ present.'",
    options: [
      { option_id: 34001, option_text: "is" },
      { option_id: 34002, option_text: "are" },
      { option_id: 34003, option_text: "were" },
      { option_id: 34004, option_text: "be" }
    ],
    correct_option_id: 34001,
    class_level: 9,
    difficulty: "medium",
    explanation: "'Neither' takes a singular verb"
  },

  // Class 9 - Hard (Questions 306, 341-350)
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
    explanation: "Personification gives human qualities to non-human things"
  },
  {
    question_id: 341,
    text: "Convert to indirect speech: She said, 'I am going to Delhi.'",
    options: [
      { option_id: 34101, option_text: "She said that she was going to Delhi." },
      { option_id: 34102, option_text: "She said that I am going to Delhi." },
      { option_id: 34103, option_text: "She said she is going to Delhi." },
      { option_id: 34104, option_text: "She told I am going to Delhi." }
    ],
    correct_option_id: 34101,
    class_level: 9,
    difficulty: "hard",
    explanation: "In indirect speech, pronouns and tenses change"
  },
  {
    question_id: 342,
    text: "Identify the clause type: 'I know that he is honest.'",
    options: [
      { option_id: 34201, option_text: "Noun clause" },
      { option_id: 34202, option_text: "Adjective clause" },
      { option_id: 34203, option_text: "Adverb clause" },
      { option_id: 34204, option_text: "Independent clause" }
    ],
    correct_option_id: 34201,
    class_level: 9,
    difficulty: "hard",
    explanation: "'that he is honest' acts as object (noun clause)"
  },
  {
    question_id: 343,
    text: "Choose the correct form: 'Scarcely had he arrived ___ it started raining.'",
    options: [
      { option_id: 34301, option_text: "when" },
      { option_id: 34302, option_text: "than" },
      { option_id: 34303, option_text: "then" },
      { option_id: 34304, option_text: "that" }
    ],
    correct_option_id: 34301,
    class_level: 9,
    difficulty: "hard",
    explanation: "'Scarcely...when' is the correct correlation"
  },
  {
    question_id: 344,
    text: "Identify the figure of speech: 'He is as brave as a lion.'",
    options: [
      { option_id: 34401, option_text: "Simile" },
      { option_id: 34402, option_text: "Metaphor" },
      { option_id: 34403, option_text: "Personification" },
      { option_id: 34404, option_text: "Hyperbole" }
    ],
    correct_option_id: 34401,
    class_level: 9,
    difficulty: "hard",
    explanation: "Simile compares using 'as' or 'like'"
  },
  {
    question_id: 345,
    text: "Convert to active voice: 'A letter was written by him.'",
    options: [
      { option_id: 34501, option_text: "He wrote a letter." },
      { option_id: 34502, option_text: "He writes a letter." },
      { option_id: 34503, option_text: "He has written a letter." },
      { option_id: 34504, option_text: "He is writing a letter." }
    ],
    correct_option_id: 34501,
    class_level: 9,
    difficulty: "hard",
    explanation: "Active voice: subject performs the action"
  },
  {
    question_id: 346,
    text: "Choose the correct form: 'I wish I ___ a bird.'",
    options: [
      { option_id: 34601, option_text: "were" },
      { option_id: 34602, option_text: "am" },
      { option_id: 34603, option_text: "was" },
      { option_id: 34604, option_text: "will be" }
    ],
    correct_option_id: 34601,
    class_level: 9,
    difficulty: "hard",
    explanation: "After 'wish', use 'were' for unreal situations"
  },
  {
    question_id: 347,
    text: "Identify the error: 'Each of the students have submitted their work.'",
    options: [
      { option_id: 34701, option_text: "'have' should be 'has'" },
      { option_id: 34702, option_text: "'their' should be 'his'" },
      { option_id: 34703, option_text: "'students' should be 'student'" },
      { option_id: 34704, option_text: "No error" }
    ],
    correct_option_id: 34701,
    class_level: 9,
    difficulty: "hard",
    explanation: "'Each' is singular, so verb should be 'has'"
  },
  {
    question_id: 348,
    text: "What is the mood of the verb: 'If I were you, I would go.'",
    options: [
      { option_id: 34801, option_text: "Subjunctive" },
      { option_id: 34802, option_text: "Indicative" },
      { option_id: 34803, option_text: "Imperative" },
      { option_id: 34804, option_text: "Interrogative" }
    ],
    correct_option_id: 34801,
    class_level: 9,
    difficulty: "hard",
    explanation: "Subjunctive mood expresses hypothetical situations"
  },
  {
    question_id: 349,
    text: "Identify the figure of speech: 'I've told you a million times.'",
    options: [
      { option_id: 34901, option_text: "Hyperbole" },
      { option_id: 34902, option_text: "Simile" },
      { option_id: 34903, option_text: "Metaphor" },
      { option_id: 34904, option_text: "Personification" }
    ],
    correct_option_id: 34901,
    class_level: 9,
    difficulty: "hard",
    explanation: "Hyperbole is exaggeration for effect"
  },
  {
    question_id: 350,
    text: "Choose the correct form: 'No sooner did he see me ___ he ran away.'",
    options: [
      { option_id: 35001, option_text: "than" },
      { option_id: 35002, option_text: "when" },
      { option_id: 35003, option_text: "then" },
      { option_id: 35004, option_text: "that" }
    ],
    correct_option_id: 35001,
    class_level: 9,
    difficulty: "hard",
    explanation: "'No sooner...than' is the correct correlation"
  },

  // Class 10 - Easy (Questions 307-308, 351-365)
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
    explanation: "'An' is used before words starting with vowel sounds"
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
    explanation: "The past participle of 'write' is 'written'"
  },
  {
    question_id: 351,
    text: "Choose the correct conjunction: 'Study hard ___ you will fail.'",
    options: [
      { option_id: 35101, option_text: "or" },
      { option_id: 35102, option_text: "and" },
      { option_id: 35103, option_text: "but" },
      { option_id: 35104, option_text: "so" }
    ],
    correct_option_id: 35101,
    class_level: 10,
    difficulty: "easy",
    explanation: "'Or' shows alternative consequences"
  },
  {
    question_id: 352,
    text: "What is the present participle of 'run'?",
    options: [
      { option_id: 35201, option_text: "Running" },
      { option_id: 35202, option_text: "Ran" },
      { option_id: 35203, option_text: "Runs" },
      { option_id: 35204, option_text: "Runned" }
    ],
    correct_option_id: 35201,
    class_level: 10,
    difficulty: "easy",
    explanation: "Present participle: base verb + -ing"
  },
  {
    question_id: 353,
    text: "Identify the possessive pronoun: 'This book is mine.'",
    options: [
      { option_id: 35301, option_text: "mine" },
      { option_id: 35302, option_text: "This" },
      { option_id: 35303, option_text: "book" },
      { option_id: 35304, option_text: "is" }
    ],
    correct_option_id: 35301,
    class_level: 10,
    difficulty: "easy",
    explanation: "'Mine' shows ownership"
  },
  {
    question_id: 354,
    text: "Choose the correct form: 'I ___ English every day.'",
    options: [
      { option_id: 35401, option_text: "speak" },
      { option_id: 35402, option_text: "speaks" },
      { option_id: 35403, option_text: "speaking" },
      { option_id: 35404, option_text: "spoke" }
    ],
    correct_option_id: 35401,
    class_level: 10,
    difficulty: "easy",
    explanation: "Present simple for habitual actions"
  },
  {
    question_id: 355,
    text: "What is the comparative of 'bad'?",
    options: [
      { option_id: 35501, option_text: "Worse" },
      { option_id: 35502, option_text: "Badder" },
      { option_id: 35503, option_text: "More bad" },
      { option_id: 35504, option_text: "Worst" }
    ],
    correct_option_id: 35501,
    class_level: 10,
    difficulty: "easy",
    explanation: "'Worse' is the irregular comparative of 'bad'"
  },
  {
    question_id: 356,
    text: "Identify the reflexive pronoun: 'He hurt himself.'",
    options: [
      { option_id: 35601, option_text: "himself" },
      { option_id: 35602, option_text: "He" },
      { option_id: 35603, option_text: "hurt" },
      { option_id: 35604, option_text: "him" }
    ],
    correct_option_id: 35601,
    class_level: 10,
    difficulty: "easy",
    explanation: "'Himself' refers back to the subject"
  },
  {
    question_id: 357,
    text: "Choose the correct form: 'She ___ sleeping now.'",
    options: [
      { option_id: 35701, option_text: "is" },
      { option_id: 35702, option_text: "are" },
      { option_id: 35703, option_text: "was" },
      { option_id: 35704, option_text: "were" }
    ],
    correct_option_id: 35701,
    class_level: 10,
    difficulty: "easy",
    explanation: "'Is' agrees with singular subject 'She'"
  },
  {
    question_id: 358,
    text: "What type of sentence is: 'Close the door.'",
    options: [
      { option_id: 35801, option_text: "Imperative" },
      { option_id: 35802, option_text: "Declarative" },
      { option_id: 35803, option_text: "Interrogative" },
      { option_id: 35804, option_text: "Exclamatory" }
    ],
    correct_option_id: 35801,
    class_level: 10,
    difficulty: "easy",
    explanation: "Imperative sentences give commands"
  },
  {
    question_id: 359,
    text: "Choose the correct preposition: 'She is good ___ mathematics.'",
    options: [
      { option_id: 35901, option_text: "at" },
      { option_id: 35902, option_text: "in" },
      { option_id: 35903, option_text: "on" },
      { option_id: 35904, option_text: "with" }
    ],
    correct_option_id: 35901,
    class_level: 10,
    difficulty: "easy",
    explanation: "'Good at' is the correct collocation"
  },
  {
    question_id: 360,
    text: "What is the plural of 'ox'?",
    options: [
      { option_id: 36001, option_text: "Oxen" },
      { option_id: 36002, option_text: "Oxes" },
      { option_id: 36003, option_text: "Ox" },
      { option_id: 36004, option_text: "Oxs" }
    ],
    correct_option_id: 36001,
    class_level: 10,
    difficulty: "easy",
    explanation: "'Oxen' is the irregular plural of 'ox'"
  },
  {
    question_id: 361,
    text: "Identify the determiner: 'Some students came late.'",
    options: [
      { option_id: 36101, option_text: "Some" },
      { option_id: 36102, option_text: "students" },
      { option_id: 36103, option_text: "came" },
      { option_id: 36104, option_text: "late" }
    ],
    correct_option_id: 36101,
    class_level: 10,
    difficulty: "easy",
    explanation: "'Some' determines the noun 'students'"
  },
  {
    question_id: 362,
    text: "Choose the correct form: 'They ___ playing cricket.'",
    options: [
      { option_id: 36201, option_text: "are" },
      { option_id: 36202, option_text: "is" },
      { option_id: 36203, option_text: "was" },
      { option_id: 36204, option_text: "were" }
    ],
    correct_option_id: 36201,
    class_level: 10,
    difficulty: "easy",
    explanation: "'Are' agrees with plural subject 'They'"
  },
  {
    question_id: 363,
    text: "What is the past tense of 'bring'?",
    options: [
      { option_id: 36301, option_text: "Brought" },
      { option_id: 36302, option_text: "Bringed" },
      { option_id: 36303, option_text: "Brings" },
      { option_id: 36304, option_text: "Bringing" }
    ],
    correct_option_id: 36301,
    class_level: 10,
    difficulty: "easy",
    explanation: "'Brought' is the past tense of 'bring'"
  },
  {
    question_id: 364,
    text: "Identify the modal verb: 'You should study hard.'",
    options: [
      { option_id: 36401, option_text: "should" },
      { option_id: 36402, option_text: "You" },
      { option_id: 36403, option_text: "study" },
      { option_id: 36404, option_text: "hard" }
    ],
    correct_option_id: 36401,
    class_level: 10,
    difficulty: "easy",
    explanation: "'Should' is a modal verb expressing advice"
  },
  {
    question_id: 365,
    text: "Choose the correct form: 'He ___ to school every day.'",
    options: [
      { option_id: 36501, option_text: "goes" },
      { option_id: 36502, option_text: "go" },
      { option_id: 36503, option_text: "going" },
      { option_id: 36504, option_text: "gone" }
    ],
    correct_option_id: 36501,
    class_level: 10,
    difficulty: "easy",
    explanation: "Third person singular takes 's' in present simple"
  },

  // Class 10 - Medium (Questions 309-310, 366-385)
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
    explanation: "'when I finish my work' modifies 'will come' (adverb clause)"
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
    explanation: "Passive voice: subject receives the action"
  },
  {
    question_id: 366,
    text: "Choose the correct form: 'I have been living here ___ 2010.'",
    options: [
      { option_id: 36601, option_text: "since" },
      { option_id: 36602, option_text: "for" },
      { option_id: 36603, option_text: "from" },
      { option_id: 36604, option_text: "at" }
    ],
    correct_option_id: 36601,
    class_level: 10,
    difficulty: "medium",
    explanation: "'Since' is used with specific point in time"
  },
  {
    question_id: 367,
    text: "Identify the type of pronoun: 'Who wrote this letter?'",
    options: [
      { option_id: 36701, option_text: "Interrogative" },
      { option_id: 36702, option_text: "Relative" },
      { option_id: 36703, option_text: "Personal" },
      { option_id: 36704, option_text: "Demonstrative" }
    ],
    correct_option_id: 36701,
    class_level: 10,
    difficulty: "medium",
    explanation: "'Who' asks a question (interrogative pronoun)"
  },
  {
    question_id: 368,
    text: "Choose the correct form: 'He is one of the boys who ___ always late.'",
    options: [
      { option_id: 36801, option_text: "are" },
      { option_id: 36802, option_text: "is" },
      { option_id: 36803, option_text: "was" },
      { option_id: 36804, option_text: "were" }
    ],
    correct_option_id: 36801,
    class_level: 10,
    difficulty: "medium",
    explanation: "Verb agrees with 'boys' (plural antecedent)"
  },
  {
    question_id: 369,
    text: "What is the noun form of 'decide'?",
    options: [
      { option_id: 36901, option_text: "Decision" },
      { option_id: 36902, option_text: "Deciding" },
      { option_id: 36903, option_text: "Decided" },
      { option_id: 36904, option_text: "Decides" }
    ],
    correct_option_id: 36901,
    class_level: 10,
    difficulty: "medium",
    explanation: "'Decision' is the noun form of verb 'decide'"
  },
  {
    question_id: 370,
    text: "Choose the correct form: 'The number of students ___ increasing.'",
    options: [
      { option_id: 37001, option_text: "is" },
      { option_id: 37002, option_text: "are" },
      { option_id: 37003, option_text: "were" },
      { option_id: 37004, option_text: "be" }
    ],
    correct_option_id: 37001,
    class_level: 10,
    difficulty: "medium",
    explanation: "'The number' is singular, takes 'is'"
  },
  {
    question_id: 371,
    text: "Identify the type: 'He is reading a book which is very interesting.'",
    options: [
      { option_id: 37101, option_text: "Adjective clause" },
      { option_id: 37102, option_text: "Noun clause" },
      { option_id: 37103, option_text: "Adverb clause" },
      { option_id: 37104, option_text: "Independent clause" }
    ],
    correct_option_id: 37101,
    class_level: 10,
    difficulty: "medium",
    explanation: "'which is very interesting' modifies 'book' (adjective clause)"
  },
  {
    question_id: 372,
    text: "Choose the correct form: 'She prefers tea ___ coffee.'",
    options: [
      { option_id: 37201, option_text: "to" },
      { option_id: 37202, option_text: "than" },
      { option_id: 37203, option_text: "from" },
      { option_id: 37204, option_text: "over" }
    ],
    correct_option_id: 37201,
    class_level: 10,
    difficulty: "medium",
    explanation: "'Prefer...to' is the correct usage"
  },
  {
    question_id: 373,
    text: "What is the adjective form of 'beauty'?",
    options: [
      { option_id: 37301, option_text: "Beautiful" },
      { option_id: 37302, option_text: "Beautifully" },
      { option_id: 37303, option_text: "Beautify" },
      { option_id: 37304, option_text: "Beauteous" }
    ],
    correct_option_id: 37301,
    class_level: 10,
    difficulty: "medium",
    explanation: "'Beautiful' is the adjective form of 'beauty'"
  },
  {
    question_id: 374,
    text: "Choose the correct form: 'Let's go, ___?'",
    options: [
      { option_id: 37401, option_text: "shall we" },
      { option_id: 37402, option_text: "will we" },
      { option_id: 37403, option_text: "don't we" },
      { option_id: 37404, option_text: "won't we" }
    ],
    correct_option_id: 37401,
    class_level: 10,
    difficulty: "medium",
    explanation: "Question tag for 'Let's' is 'shall we'"
  },
  {
    question_id: 375,
    text: "Identify the infinitive: 'I want to learn English.'",
    options: [
      { option_id: 37501, option_text: "to learn" },
      { option_id: 37502, option_text: "want" },
      { option_id: 37503, option_text: "I" },
      { option_id: 37504, option_text: "English" }
    ],
    correct_option_id: 37501,
    class_level: 10,
    difficulty: "medium",
    explanation: "Infinitive is 'to' + base form of verb"
  },
  {
    question_id: 376,
    text: "Choose the correct form: 'She has ___ finished her work.'",
    options: [
      { option_id: 37601, option_text: "already" },
      { option_id: 37602, option_text: "yet" },
      { option_id: 37603, option_text: "still" },
      { option_id: 37604, option_text: "just now" }
    ],
    correct_option_id: 37601,
    class_level: 10,
    difficulty: "medium",
    explanation: "'Already' is used in affirmative sentences"
  },
  {
    question_id: 377,
    text: "What is the verb form: 'The meeting has been postponed.'",
    options: [
      { option_id: 37701, option_text: "Present perfect passive" },
      { option_id: 37702, option_text: "Past perfect passive" },
      { option_id: 37703, option_text: "Simple past passive" },
      { option_id: 37704, option_text: "Future passive" }
    ],
    correct_option_id: 37701,
    class_level: 10,
    difficulty: "medium",
    explanation: "'Has been postponed' is present perfect passive"
  },
  {
    question_id: 378,
    text: "Choose the correct form: 'I am looking forward ___ meeting you.'",
    options: [
      { option_id: 37801, option_text: "to" },
      { option_id: 37802, option_text: "for" },
      { option_id: 37803, option_text: "at" },
      { option_id: 37804, option_text: "in" }
    ],
    correct_option_id: 37801,
    class_level: 10,
    difficulty: "medium",
    explanation: "'Look forward to' is followed by gerund"
  },
  {
    question_id: 379,
    text: "Identify the gerund: 'Swimming is good exercise.'",
    options: [
      { option_id: 37901, option_text: "Swimming" },
      { option_id: 37902, option_text: "is" },
      { option_id: 37903, option_text: "good" },
      { option_id: 37904, option_text: "exercise" }
    ],
    correct_option_id: 37901,
    class_level: 10,
    difficulty: "medium",
    explanation: "Gerund is verb + -ing used as noun"
  },
  {
    question_id: 380,
    text: "Choose the correct form: 'He asked me ___ I was busy.'",
    options: [
      { option_id: 38001, option_text: "if" },
      { option_id: 38002, option_text: "that" },
      { option_id: 38003, option_text: "whether" },
      { option_id: 38004, option_text: "Both if and whether" }
    ],
    correct_option_id: 38004,
    class_level: 10,
    difficulty: "medium",
    explanation: "Both 'if' and 'whether' can be used here"
  },
  {
    question_id: 381,
    text: "What is the collective noun for 'bees'?",
    options: [
      { option_id: 38101, option_text: "Swarm" },
      { option_id: 38102, option_text: "Herd" },
      { option_id: 38103, option_text: "Flock" },
      { option_id: 38104, option_text: "Pack" }
    ],
    correct_option_id: 38101,
    class_level: 10,
    difficulty: "medium",
    explanation: "'Swarm' is the collective noun for bees"
  },
  {
    question_id: 382,
    text: "Choose the correct form: 'I would rather ___ tea than coffee.'",
    options: [
      { option_id: 38201, option_text: "have" },
      { option_id: 38202, option_text: "to have" },
      { option_id: 38203, option_text: "having" },
      { option_id: 38204, option_text: "had" }
    ],
    correct_option_id: 38201,
    class_level: 10,
    difficulty: "medium",
    explanation: "'Would rather' is followed by base verb"
  },
  {
    question_id: 383,
    text: "Identify the demonstrative pronoun: 'That is my house.'",
    options: [
      { option_id: 38301, option_text: "That" },
      { option_id: 38302, option_text: "is" },
      { option_id: 38303, option_text: "my" },
      { option_id: 38304, option_text: "house" }
    ],
    correct_option_id: 38301,
    class_level: 10,
    difficulty: "medium",
    explanation: "'That' points to something (demonstrative)"
  },
  {
    question_id: 384,
    text: "Choose the correct form: 'Hardly had he reached ___ the train left.'",
    options: [
      { option_id: 38401, option_text: "when" },
      { option_id: 38402, option_text: "than" },
      { option_id: 38403, option_text: "then" },
      { option_id: 38404, option_text: "that" }
    ],
    correct_option_id: 38401,
    class_level: 10,
    difficulty: "medium",
    explanation: "'Hardly...when' is the correct correlation"
  },
  {
    question_id: 385,
    text: "What is the adverb form of 'quick'?",
    options: [
      { option_id: 38501, option_text: "Quickly" },
      { option_id: 38502, option_text: "Quicker" },
      { option_id: 38503, option_text: "Quickest" },
      { option_id: 38504, option_text: "Quickness" }
    ],
    correct_option_id: 38501,
    class_level: 10,
    difficulty: "medium",
    explanation: "'Quickly' is the adverb form of 'quick'"
  },

  // Class 10 - Hard (Questions 311, 386-400)
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
    explanation: "'One' is singular, verb should be 'is'"
  },
  {
    question_id: 386,
    text: "Convert to indirect: He said to me, 'Where are you going?'",
    options: [
      { option_id: 38601, option_text: "He asked me where I was going." },
      { option_id: 38602, option_text: "He said to me where was I going." },
      { option_id: 38603, option_text: "He asked me where you were going." },
      { option_id: 38604, option_text: "He told me where I am going." }
    ],
    correct_option_id: 38601,
    class_level: 10,
    difficulty: "hard",
    explanation: "In indirect questions, change pronouns and tense"
  },
  {
    question_id: 387,
    text: "Identify the split infinitive: 'He decided to quickly run.'",
    options: [
      { option_id: 38701, option_text: "'to quickly run' - adverb between 'to' and verb" },
      { option_id: 38702, option_text: "No split infinitive" },
      { option_id: 38703, option_text: "'decided to' is split" },
      { option_id: 38704, option_text: "'quickly run' is split" }
    ],
    correct_option_id: 38701,
    class_level: 10,
    difficulty: "hard",
    explanation: "Split infinitive has word between 'to' and verb"
  },
  {
    question_id: 388,
    text: "Choose the correct form: 'The cattle ___ grazing in the field.'",
    options: [
      { option_id: 38801, option_text: "are" },
      { option_id: 38802, option_text: "is" },
      { option_id: 38803, option_text: "was" },
      { option_id: 38804, option_text: "has" }
    ],
    correct_option_id: 38801,
    class_level: 10,
    difficulty: "hard",
    explanation: "'Cattle' is always plural, takes 'are'"
  },
  {
    question_id: 389,
    text: "Identify the figure of speech: 'The pen is mightier than the sword.'",
    options: [
      { option_id: 38901, option_text: "Metonymy" },
      { option_id: 38902, option_text: "Simile" },
      { option_id: 38903, option_text: "Metaphor" },
      { option_id: 38904, option_text: "Personification" }
    ],
    correct_option_id: 38901,
    class_level: 10,
    difficulty: "hard",
    explanation: "Metonymy substitutes name of attribute/associated thing"
  },
  {
    question_id: 390,
    text: "Choose correct: 'He is senior ___ me by two years.'",
    options: [
      { option_id: 39001, option_text: "to" },
      { option_id: 39002, option_text: "than" },
      { option_id: 39003, option_text: "from" },
      { option_id: 39004, option_text: "by" }
    ],
    correct_option_id: 39001,
    class_level: 10,
    difficulty: "hard",
    explanation: "'Senior/Junior' take 'to', not 'than'"
  },
  {
    question_id: 391,
    text: "Identify the dangling modifier: 'Walking in the park, the flowers looked beautiful.'",
    options: [
      { option_id: 39101, option_text: "'Walking in the park' - flowers can't walk" },
      { option_id: 39102, option_text: "No error" },
      { option_id: 39103, option_text: "'the flowers' is wrong" },
      { option_id: 39104, option_text: "'looked beautiful' is wrong" }
    ],
    correct_option_id: 39101,
    class_level: 10,
    difficulty: "hard",
    explanation: "Dangling modifier doesn't clearly modify intended word"
  },
  {
    question_id: 392,
    text: "Choose the correct: 'The jury ___ divided in their opinion.'",
    options: [
      { option_id: 39201, option_text: "were" },
      { option_id: 39202, option_text: "was" },
      { option_id: 39203, option_text: "is" },
      { option_id: 39204, option_text: "are" }
    ],
    correct_option_id: 39201,
    class_level: 10,
    difficulty: "hard",
    explanation: "Collective noun takes plural when members act individually"
  },
  {
    question_id: 393,
    text: "Identify mood: 'Long live the king!'",
    options: [
      { option_id: 39301, option_text: "Subjunctive" },
      { option_id: 39302, option_text: "Indicative" },
      { option_id: 39303, option_text: "Imperative" },
      { option_id: 39304, option_text: "Interrogative" }
    ],
    correct_option_id: 39301,
    class_level: 10,
    difficulty: "hard",
    explanation: "Subjunctive mood expresses wish or prayer"
  },
  {
    question_id: 394,
    text: "Choose correct: 'He availed ___ the opportunity.'",
    options: [
      { option_id: 39401, option_text: "himself of" },
      { option_id: 39402, option_text: "of" },
      { option_id: 39403, option_text: "to" },
      { option_id: 39404, option_text: "with" }
    ],
    correct_option_id: 39401,
    class_level: 10,
    difficulty: "hard",
    explanation: "'Avail oneself of' is the correct usage"
  },
  {
    question_id: 395,
    text: "Identify the oxymoron:",
    options: [
      { option_id: 39501, option_text: "Bittersweet" },
      { option_id: 39502, option_text: "Big house" },
      { option_id: 39503, option_text: "Fast car" },
      { option_id: 39504, option_text: "Hot coffee" }
    ],
    correct_option_id: 39501,
    class_level: 10,
    difficulty: "hard",
    explanation: "Oxymoron combines contradictory terms"
  },
  {
    question_id: 396,
    text: "Choose correct: 'I wish I ___ the answer yesterday.'",
    options: [
      { option_id: 39601, option_text: "had known" },
      { option_id: 39602, option_text: "knew" },
      { option_id: 39603, option_text: "know" },
      { option_id: 39604, option_text: "have known" }
    ],
    correct_option_id: 39601,
    class_level: 10,
    difficulty: "hard",
    explanation: "Past wish about past requires past perfect"
  },
  {
    question_id: 397,
    text: "Identify the zeugma: 'She broke his car and his heart.'",
    options: [
      { option_id: 39701, option_text: "'broke' used literally and figuratively" },
      { option_id: 39702, option_text: "No zeugma" },
      { option_id: 39703, option_text: "Wrong grammar" },
      { option_id: 39704, option_text: "Personification" }
    ],
    correct_option_id: 39701,
    class_level: 10,
    difficulty: "hard",
    explanation: "Zeugma uses word in different senses with two objects"
  },
  {
    question_id: 398,
    text: "Choose correct: 'The police ___ investigating the case.'",
    options: [
      { option_id: 39801, option_text: "are" },
      { option_id: 39802, option_text: "is" },
      { option_id: 39803, option_text: "was" },
      { option_id: 39804, option_text: "has" }
    ],
    correct_option_id: 39801,
    class_level: 10,
    difficulty: "hard",
    explanation: "'Police' is always plural in British English"
  },
  {
    question_id: 399,
    text: "Identify the ellipsis: 'I can play piano; she, guitar.'",
    options: [
      { option_id: 39901, option_text: "Verb 'can play' omitted in second clause" },
      { option_id: 39902, option_text: "No ellipsis" },
      { option_id: 39903, option_text: "Wrong punctuation" },
      { option_id: 39904, option_text: "Missing subject" }
    ],
    correct_option_id: 39901,
    class_level: 10,
    difficulty: "hard",
    explanation: "Ellipsis omits words that are understood"
  },
  {
    question_id: 400,
    text: "Choose correct: 'She is tired of ___ the same work daily.'",
    options: [
      { option_id: 40001, option_text: "doing" },
      { option_id: 40002, option_text: "to do" },
      { option_id: 40003, option_text: "do" },
      { option_id: 40004, option_text: "done" }
    ],
    correct_option_id: 40001,
    class_level: 10,
    difficulty: "hard",
    explanation: "Prepositions are followed by gerunds"
  }
];

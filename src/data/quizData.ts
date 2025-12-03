export interface QuizOption {
  option_id: number;
  option_text: string;
}

export interface QuizQuestion {
  question_id: number;
  text: string;
  options: QuizOption[];
  correct_option_id: number;
  class_level?: number;
  difficulty?: string;
  explanation?: string;
}

export interface QuizData {
  quiz_title: string;
  total_questions: number;
  questions: QuizQuestion[];
  class_level?: number;
  subject?: string;
  difficulty?: string;
}

export interface Subject {
  id: string;
  nameHi: string;
  nameEn: string;
  icon: string;
}

export const subjects: Subject[] = [
  { id: "all", nameHi: "सभी विषय", nameEn: "All Subjects", icon: "📚" },
  { id: "math", nameHi: "गणित", nameEn: "Mathematics", icon: "🔢" },
  { id: "science", nameHi: "विज्ञान", nameEn: "Science", icon: "🔬" },
  { id: "social", nameHi: "सामाजिक विज्ञान", nameEn: "Social Science", icon: "🌍" },
  { id: "english", nameHi: "English", nameEn: "English", icon: "📖" },
  { id: "hindi", nameHi: "हिंदी", nameEn: "Hindi", icon: "📝" },
  { id: "it_ites", nameHi: "IT/ITes", nameEn: "IT/ITes", icon: "💻" }
];

// Helper function to get subject name based on language
export const getSubjectName = (subject: Subject, language: 'hindi' | 'english'): string => {
  return language === 'hindi' ? subject.nameHi : subject.nameEn;
};

export const classes = [9, 10, 11, 12];

import { mathQuestions } from './questions/mathQuestions';
import { scienceQuestions } from './questions/scienceQuestions';
import { socialScienceQuestions } from './questions/socialScienceQuestions';
import { englishQuestions } from './questions/englishQuestions';
import { hindiQuestions } from './questions/hindiQuestions';
import { itItesQuestions } from './questions/itItesQuestions';
import { itItesQuestionsPhase2 } from './questions/itItesQuestionsPhase2';
import { mathQuestionsGHS } from './questions/mathQuestionsGHS';
import { scienceQuestionsGHS } from './questions/scienceQuestionsGHS';

// Combine all IT/ITes questions
const allItItesQuestions = [...itItesQuestions, ...itItesQuestionsPhase2];

export const questionBank: QuizQuestion[] = [
  ...mathQuestions,
  ...scienceQuestions,
  ...socialScienceQuestions,
  ...englishQuestions,
  ...hindiQuestions,
  ...allItItesQuestions,
  ...mathQuestionsGHS,
  ...scienceQuestionsGHS
];

export const questionsBySubject: Record<string, QuizQuestion[]> = {
  all: questionBank,
  math: [...mathQuestions, ...mathQuestionsGHS],
  science: [...scienceQuestions, ...scienceQuestionsGHS],
  social: socialScienceQuestions,
  english: englishQuestions,
  hindi: hindiQuestions,
  it_ites: allItItesQuestions
};

// Fisher-Yates shuffle algorithm for true randomization
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const generateQuiz = (
  numQuestions: number,
  subjectId: string = "all",
  classLevel?: number,
  difficulty?: string
): QuizData => {
  let questions = questionsBySubject[subjectId] || questionBank;
  
  // Filter by class if specified (include questions without class_level)
  if (classLevel) {
    questions = questions.filter(q => !q.class_level || q.class_level === classLevel);
  }
  
  // Filter by difficulty if specified (include questions without difficulty)
  if (difficulty && difficulty !== "all") {
    questions = questions.filter(q => !q.difficulty || q.difficulty === difficulty);
  }
  
  // Use Fisher-Yates shuffle for true randomization
  const shuffled = shuffleArray(questions);
  const selected = shuffled.slice(0, Math.min(numQuestions, shuffled.length));
  
  const subject = subjects.find(s => s.id === subjectId);
  
  return {
    quiz_title: `${subject?.nameHi || "Quiz"} - अभ्यास प्रश्न`,
    total_questions: selected.length,
    questions: selected,
    class_level: classLevel,
    subject: subjectId,
    difficulty
  };
};

// Old question bank - keeping for backwards compatibility
const oldQuestionBank: QuizQuestion[] = [
  {
    question_id: 1,
    text: "द्विघात समीकरण ax² + bx + c = 0 के दो बराबर मूल होने की शर्त क्या है?",
    options: [
      { option_id: 101, option_text: "D > 0" },
      { option_id: 102, option_text: "D < 0" },
      { option_id: 103, option_text: "D = 0" },
      { option_id: 104, option_text: "D ≠ 0" }
    ],
    correct_option_id: 103
  },
  {
    question_id: 2,
    text: "बिंदु (3, 4) की मूल बिंदु से दूरी क्या है?",
    options: [
      { option_id: 201, option_text: "3 इकाई" },
      { option_id: 202, option_text: "4 इकाई" },
      { option_id: 203, option_text: "5 इकाई" },
      { option_id: 204, option_text: "7 इकाई" }
    ],
    correct_option_id: 203
  }
];

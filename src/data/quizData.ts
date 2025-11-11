export interface QuizOption {
  option_id: number;
  option_text: string;
}

export interface QuizQuestion {
  question_id: number;
  text: string;
  options: QuizOption[];
  correct_option_id: number;
}

export interface QuizData {
  quiz_title: string;
  total_questions: number;
  questions: QuizQuestion[];
}

export const quizData: QuizData = {
  quiz_title: "गणित अभ्यास प्रश्न",
  total_questions: 5,
  questions: [
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
    },
    {
      question_id: 3,
      text: "tan(90° - A) किसके बराबर है?",
      options: [
        { option_id: 301, option_text: "sin A" },
        { option_id: 302, option_text: "cot A" },
        { option_id: 303, option_text: "sec A" },
        { option_id: 304, option_text: "tan A" }
      ],
      correct_option_id: 302
    },
    {
      question_id: 4,
      text: "एक पासे को फेंकने पर विषम संख्या आने की प्रायिकता है:",
      options: [
        { option_id: 401, option_text: "1/6" },
        { option_id: 402, option_text: "1/3" },
        { option_id: 403, option_text: "1/2" },
        { option_id: 404, option_text: "2/3" }
      ],
      correct_option_id: 403
    },
    {
      question_id: 5,
      text: "A.P. 2, 7, 12, ... का सार्व अंतर क्या है?",
      options: [
        { option_id: 501, option_text: "2" },
        { option_id: 502, option_text: "5" },
        { option_id: 503, option_text: "7" },
        { option_id: 504, option_text: "10" }
      ],
      correct_option_id: 502
    }
  ]
};

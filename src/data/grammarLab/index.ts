import { class9GrammarTopics } from './class9Grammar';
import { class10GrammarTopics } from './class10Grammar';

export { type GrammarTopic, type PracticeQuestion, type GrammarExample, type CommonMistake } from './class9Grammar';

export const allGrammarTopics = [
  ...class9GrammarTopics,
  ...class10GrammarTopics
];

export { class9GrammarTopics, class10GrammarTopics };

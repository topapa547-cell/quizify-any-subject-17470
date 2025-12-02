export interface KeyPoint {
  id: string;
  subject: string;
  class_level: number;
  chapter: string;
  chapter_number: number;
  point_hindi: string;
  point_english: string;
  importance: "high" | "medium";
  category: "formula" | "definition" | "fact" | "rule" | "example";
  page_reference?: string;
}

import { class10MathKeyPoints } from './class10Math';
import { class10ScienceKeyPoints } from './class10Science';
import { class9MathKeyPoints } from './class9Math';
import { class9ScienceKeyPoints } from './class9Science';

export const allKeyPoints: KeyPoint[] = [
  ...class10MathKeyPoints,
  ...class10ScienceKeyPoints,
  ...class9MathKeyPoints,
  ...class9ScienceKeyPoints,
];

export const keyPointsBySubject: Record<string, KeyPoint[]> = {
  math: [...class10MathKeyPoints, ...class9MathKeyPoints],
  science: [...class10ScienceKeyPoints, ...class9ScienceKeyPoints],
};

export const keyPointsByClass: Record<number, KeyPoint[]> = {
  9: [...class9MathKeyPoints, ...class9ScienceKeyPoints],
  10: [...class10MathKeyPoints, ...class10ScienceKeyPoints],
};

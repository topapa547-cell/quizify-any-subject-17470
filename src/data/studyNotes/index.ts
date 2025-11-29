export interface StudyNote {
  id: string;
  subject: string;
  class_level: number;
  chapter: string;
  chapter_english: string;
  topic: string;
  topic_english: string;
  type: "definition" | "formula" | "concept" | "tip";
  content_hindi: string;
  content_english: string;
  keywords: string[];
  important: boolean;
}

export interface StudyMaterial {
  id: string;
  title: string;
  title_english: string;
  subject: string;
  class_level: number;
  type: "complete_guide" | "chapter_notes" | "formula_sheet" | "sample_paper";
  source: string;
  year: string;
  pages: number;
  file_url?: string;
  description: string;
  description_english: string;
}

// Import study notes from separate files
import { class10MathNotes } from './class10Math';
import { class10ScienceNotes } from './class10Science';

export const allStudyNotes: StudyNote[] = [
  ...class10MathNotes,
  ...class10ScienceNotes
];

export const studyNotesBySubject: Record<string, StudyNote[]> = {
  math: class10MathNotes,
  science: class10ScienceNotes
};

export const studyNotesByType: Record<string, StudyNote[]> = {
  definition: allStudyNotes.filter(n => n.type === 'definition'),
  formula: allStudyNotes.filter(n => n.type === 'formula'),
  concept: allStudyNotes.filter(n => n.type === 'concept'),
  tip: allStudyNotes.filter(n => n.type === 'tip')
};

// Study Materials Data
export const studyMaterials: StudyMaterial[] = [
  {
    id: "sm-class10-complete-2025",
    title: "कक्षा 10 संपूर्ण अध्ययन सामग्री 2025-26",
    title_english: "Class 10 Complete Study Material 2025-26",
    subject: "all",
    class_level: 10,
    type: "complete_guide",
    source: "G. H. S. BARODIYA",
    year: "2025-26",
    pages: 50,
    description: "गणित और विज्ञान के सभी अध्यायों के MCQ, परिभाषाएं, सूत्र और महत्वपूर्ण प्रश्न",
    description_english: "MCQs, definitions, formulas and important questions for all Math and Science chapters"
  }
];
